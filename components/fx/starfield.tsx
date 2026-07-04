"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * 3D-projected starfield, fixed behind the whole page.
 * Stars live in a z-depth volume and drift slowly toward the viewer;
 * the cursor shifts the camera so near stars parallax harder than far
 * ones — real depth, not a flat texture. Canvas + rAF, DPR-aware.
 * Reduced motion: renders one static frame, no animation.
 */

const STAR_COUNT = 170;
const DEPTH = 900;

type Star = { x: number; y: number; z: number; hue: "blue" | "white" | "gold"; tw: number };

export function Starfield() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: rand(-W, W),
      y: rand(-H, H),
      z: rand(1, DEPTH),
      hue: Math.random() < 0.12 ? "gold" : Math.random() < 0.5 ? "blue" : "white",
      tw: Math.random() * Math.PI * 2,
    }));

    // Camera offset eased toward the cursor.
    let camX = 0;
    let camY = 0;
    let targetX = 0;
    let targetY = 0;
    const onMove = (e: PointerEvent) => {
      targetX = (e.clientX / W - 0.5) * 2;
      targetY = (e.clientY / H - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const color = (s: Star, a: number) =>
      s.hue === "gold"
        ? `rgba(250,204,21,${a})`
        : s.hue === "blue"
          ? `rgba(133,166,255,${a})`
          : `rgba(234,240,255,${a})`;

    let raf = 0;
    let t = 0;
    const frame = (drift: boolean) => {
      ctx.clearRect(0, 0, W, H);
      camX += (targetX - camX) * 0.04;
      camY += (targetY - camY) * 0.04;
      t += 0.016;

      for (const s of stars) {
        if (drift) {
          s.z -= 0.35; // slow drift toward the viewer
          if (s.z < 1) {
            s.z = DEPTH;
            s.x = rand(-W, W);
            s.y = rand(-H, H);
          }
        }
        const k = 320 / s.z; // perspective projection
        const px = W / 2 + (s.x - camX * 140 * (1 - s.z / DEPTH) * 3) * k * 0.5;
        const py = H / 2 + (s.y - camY * 90 * (1 - s.z / DEPTH) * 3) * k * 0.5;
        if (px < -20 || px > W + 20 || py < -20 || py > H + 20) continue;

        const near = 1 - s.z / DEPTH; // 0 far → 1 near
        const twinkle = drift ? 0.75 + 0.25 * Math.sin(t * 2 + s.tw) : 1;
        const r = (0.4 + near * 1.6) * twinkle;
        const a = (0.25 + near * 0.65) * twinkle;

        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = color(s, a);
        ctx.fill();
        if (near > 0.75) {
          // soft glow halo on the nearest stars
          ctx.beginPath();
          ctx.arc(px, py, r * 3.2, 0, Math.PI * 2);
          ctx.fillStyle = color(s, a * 0.12);
          ctx.fill();
        }
      }
      if (drift) raf = requestAnimationFrame(() => frame(true));
    };

    if (reduce) {
      frame(false); // single static render
    } else {
      raf = requestAnimationFrame(() => frame(true));
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduce]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[-2] h-full w-full"
    />
  );
}
