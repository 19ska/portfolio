"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * "Daylight space" — the dark-mode starfield's motion, in light colors.
 * Two layers, fixed behind the whole page:
 *
 * 1. PARTICLES: ~160 indigo/lilac/amber motes in a 3D z-volume that
 *    continuously drift toward the viewer (perspective projection),
 *    respawning deep when they pass the camera — the fly-through
 *    motion of the space theme.
 * 2. ORBS: a few large soft pastel bokeh circles bobbing at depth for
 *    atmosphere.
 *
 * The cursor moves the camera, so near elements parallax harder.
 * Canvas + rAF, DPR-aware. Reduced motion: one static frame.
 */

const PARTICLE_COUNT = 160;
const DEPTH = 900;
const ORB_COUNT = 9;

// Saturated enough to read on a light background.
const PARTICLE_COLORS = [
  [37, 99, 235], // indigo
  [104, 134, 250], // periwinkle
  [151, 123, 255], // lilac
  [255, 176, 31], // amber
] as const;

const ORB_COLORS = [
  [143, 180, 255],
  [195, 177, 255],
  [255, 209, 138],
  [165, 216, 255],
] as const;

type Particle = { x: number; y: number; z: number; c: readonly [number, number, number]; tw: number };
type Orb = { x: number; y: number; z: number; r: number; c: readonly [number, number, number]; phase: number };

export function Orbfield() {
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

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: rand(-W, W),
      y: rand(-H, H),
      z: rand(1, DEPTH),
      c: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      tw: Math.random() * Math.PI * 2,
    }));

    const orbs: Orb[] = Array.from({ length: ORB_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: rand(0.2, 1), // 1 near, 0 far
      r: rand(0.5, 1),
      c: ORB_COLORS[Math.floor(Math.random() * ORB_COLORS.length)],
      phase: Math.random() * Math.PI * 2,
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

    let raf = 0;
    let t = 0;
    const frame = (drift: boolean) => {
      ctx.clearRect(0, 0, W, H);
      camX += (targetX - camX) * 0.04;
      camY += (targetY - camY) * 0.04;
      t += 0.016;

      // ---- Layer 1: soft bokeh orbs (far atmosphere) ----
      for (const o of orbs) {
        const bob = drift ? Math.sin(t * 0.5 + o.phase) * 14 * o.z : 0;
        const px = o.x * W - camX * 50 * o.z;
        const py = o.y * H + bob - camY * 34 * o.z;
        const radius = (40 + o.r * 150) * (0.4 + o.z * 0.8);
        const a = 0.03 + o.z * 0.05;
        const [r, g, b] = o.c;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, radius);
        grad.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // ---- Layer 2: particles flying toward the viewer ----
      for (const s of particles) {
        if (drift) {
          s.z -= 0.5; // continuous drift toward the camera
          if (s.z < 1) {
            s.z = DEPTH;
            s.x = rand(-W, W);
            s.y = rand(-H, H);
          }
        }
        const k = 320 / s.z; // perspective projection
        const near = 1 - s.z / DEPTH; // 0 far → 1 near
        const px = W / 2 + (s.x - camX * 140 * near * 3) * k * 0.5;
        const py = H / 2 + (s.y - camY * 90 * near * 3) * k * 0.5;
        if (px < -20 || px > W + 20 || py < -20 || py > H + 20) continue;

        const twinkle = drift ? 0.75 + 0.25 * Math.sin(t * 2 + s.tw) : 1;
        const radius = (0.6 + near * 2) * twinkle;
        const a = (0.04 + near * 0.11) * twinkle;
        const [r, g, b] = s.c;

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.fill();
        // Soft halo on the nearest motes.
        if (near > 0.72) {
          ctx.beginPath();
          ctx.arc(px, py, radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${a * 0.14})`;
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
