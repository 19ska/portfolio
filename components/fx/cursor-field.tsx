"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed dot-grid canvas, viewport-sized. At rest it reads as plain
 * grain (same look as the old static CSS dot-grid). Near the cursor,
 * dots swell and tint from ink to accent with distance-based falloff —
 * a soft "splash" that disperses as the pointer moves away.
 * Disabled for touch input and prefers-reduced-motion (falls back to
 * one static render so the grain texture still shows).
 */

const SPACING = 26;
const BASE_RADIUS = 1.1;
const MAX_SCALE = 2.8;
const EFFECT_RADIUS = 160;
const LERP = 0.15;
const BASE_COLOR = [10, 10, 10] as const; // --color-ink
const ACCENT_COLOR = [240, 197, 7] as const; // --color-accent

type Dot = { x: number; y: number; scale: number; targetScale: number; mix: number; targetMix: number };

export function CursorField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0;
    let H = 0;
    let dots: Dot[] = [];

    const build = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      for (let y = SPACING / 2; y < H; y += SPACING) {
        for (let x = SPACING / 2; x < W; x += SPACING) {
          dots.push({ x, y, scale: 1, targetScale: 1, mix: 0, targetMix: 0 });
        }
      }
    };
    build();
    window.addEventListener("resize", build);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const d of dots) {
        const r = BASE_RADIUS * d.scale;
        if (d.mix < 0.01) {
          ctx.beginPath();
          ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(10, 10, 10, 0.06)";
          ctx.fill();
          continue;
        }
        const [br, bgc, bb] = BASE_COLOR;
        const [ar, ag, ab] = ACCENT_COLOR;
        const cr = br + (ar - br) * d.mix;
        const cg = bgc + (ag - bgc) * d.mix;
        const cb = bb + (ab - bb) * d.mix;
        const alpha = 0.06 + d.mix * 0.7;

        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr | 0}, ${cg | 0}, ${cb | 0}, ${alpha})`;
        ctx.fill();
      }
    };

    if (reduce || !fine) {
      draw();
      return () => window.removeEventListener("resize", build);
    }

    let mouseX = -9999;
    let mouseY = -9999;
    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    let raf = 0;
    const frame = () => {
      for (const d of dots) {
        const dx = d.x - mouseX;
        const dy = d.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / EFFECT_RADIUS);
        d.targetScale = 1 + influence * (MAX_SCALE - 1);
        d.targetMix = influence;
        d.scale += (d.targetScale - d.scale) * LERP;
        d.mix += (d.targetMix - d.mix) * LERP;
      }
      draw();
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[-1]"
    />
  );
}
