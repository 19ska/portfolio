"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Additive watercolor layer for the hero background.
 * Soft radial blobs bloom at the cursor (or touch) and expand + fade
 * like ink bleeding on paper. Canvas + rAF for 60fps; pointer-events
 * none so it never blocks the robot or text above it.
 *
 * Colors are drawn from the current blue + yellow palette.
 */
const COLORS = ["#2563eb", "#4f86ff", "#93b8ff", "#dbe6ff", "#facc15"];

type Blob = {
  x: number;
  y: number;
  r0: number;
  maxR: number;
  age: number;
  life: number;
  color: string;
  alpha: number;
};

function rgba(hex: string, a: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

export function HeroPaint() {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const blobs: Blob[] = [];
    let raf = 0;
    let lastSpawn = 0;
    let lastX = 0;
    let lastY = 0;

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const spawn = (x: number, y: number) => {
      if (blobs.length >= 8) blobs.shift(); // retire the oldest
      blobs.push({
        x,
        y,
        r0: 24 + Math.random() * 22,
        maxR: 150 + Math.random() * 150, // 150–300px
        age: 0,
        life: 90 + Math.random() * 55, // ~1.5–2.4s at 60fps
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: 0.15 + Math.random() * 0.1, // 15–25%
      });
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const inside = (x: number, y: number) => x >= 0 && y >= 0 && x <= W && y <= H;

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (!inside(x, y)) return;
      const now = performance.now();
      if (Math.hypot(x - lastX, y - lastY) > 34 || now - lastSpawn > 130) {
        spawn(x, y);
        lastX = x;
        lastY = y;
        lastSpawn = now;
      }
    };

    const onDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (inside(x, y)) spawn(x, y);
    };

    function loop() {
      ctx!.clearRect(0, 0, W, H);
      for (let i = blobs.length - 1; i >= 0; i--) {
        const b = blobs[i];
        b.age += 1;
        const p = b.age / b.life;
        if (p >= 1) {
          blobs.splice(i, 1);
          continue;
        }
        const r = b.r0 + (b.maxR - b.r0) * ease(p);
        const a = b.alpha * (1 - p) * (1 - p); // gentle fade-out
        const g = ctx!.createRadialGradient(b.x, b.y, 0, b.x, b.y, r);
        g.addColorStop(0, rgba(b.color, a));
        g.addColorStop(0.55, rgba(b.color, a * 0.45));
        g.addColorStop(1, rgba(b.color, 0));
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(b.x, b.y, r, 0, Math.PI * 2);
        ctx!.fill();
      }
      raf = blobs.length ? requestAnimationFrame(loop) : 0;
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[-30] h-full w-full"
    />
  );
}
