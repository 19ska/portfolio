"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

/**
 * The "alive" element: a friendly robot that watches the cursor.
 * - Its pupils track the pointer (each eye computes its own angle).
 * - The head tilts slightly toward the pointer for a parallax feel.
 * - A soft accent spotlight follows the pointer across the hero.
 * All movement is spring-smoothed for 60fps and disabled under
 * prefers-reduced-motion.
 */
export function CursorCompanion() {
  const reduce = useReducedMotion();

  const rootRef = useRef<HTMLDivElement>(null);
  const leftEyeRef = useRef<SVGCircleElement>(null);
  const rightEyeRef = useRef<SVGCircleElement>(null);

  const spring = { stiffness: 220, damping: 26, mass: 0.6 };
  // Pupil offsets (per eye).
  const lx = useSpring(useMotionValue(0), spring);
  const ly = useSpring(useMotionValue(0), spring);
  const rx = useSpring(useMotionValue(0), spring);
  const ry = useSpring(useMotionValue(0), spring);
  // Head tilt + drift.
  const tilt = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const driftX = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const driftY = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  // Spotlight position (0–100% of hero box).
  const glowX = useSpring(useMotionValue(50), { stiffness: 90, damping: 24 });
  const glowY = useSpring(useMotionValue(45), { stiffness: 90, damping: 24 });
  // Blink.
  const blink = useMotionValue(1);

  // Spotlight background follows the spring-smoothed pointer position.
  const spotlight = useMotionTemplate`radial-gradient(38% 38% at ${glowX}% ${glowY}%, rgba(251,91,56,0.20), transparent 70%)`;

  useEffect(() => {
    if (reduce) return;

    let frame = 0;
    const track = (clientX: number, clientY: number) => {
      const root = rootRef.current;
      if (!root) return;
      const box = root.getBoundingClientRect();

      // Spotlight follows pointer within the hero box.
      glowX.set(((clientX - box.left) / box.width) * 100);
      glowY.set(((clientY - box.top) / box.height) * 100);

      const offset = (eye: SVGCircleElement | null, mx: typeof lx, my: typeof ly) => {
        if (!eye) return;
        const r = eye.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = clientX - cx;
        const dy = clientY - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const max = 5.5; // max pupil travel in SVG units
        const clamp = Math.min(dist, 140) / 140;
        mx.set((dx / dist) * max * clamp);
        my.set((dy / dist) * max * clamp);
      };
      offset(leftEyeRef.current, lx, ly);
      offset(rightEyeRef.current, rx, ry);

      // Head tilt from horizontal position relative to companion center.
      const hcx = box.left + box.width / 2;
      const t = Math.max(-1, Math.min(1, (clientX - hcx) / (box.width / 2)));
      tilt.set(t * 5);
      driftX.set(t * 6);
      driftY.set(Math.max(-1, Math.min(1, (clientY - (box.top + box.height / 2)) / (box.height / 2))) * 4);
    };

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => track(e.clientX, e.clientY));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduce, lx, ly, rx, ry, tilt, driftX, driftY, glowX, glowY]);

  // Occasional friendly blink.
  useEffect(() => {
    if (reduce) return;
    let timeout: ReturnType<typeof setTimeout>;
    const loop = () => {
      timeout = setTimeout(() => {
        blink.set(0.1);
        setTimeout(() => blink.set(1), 130);
        loop();
      }, 2800 + Math.random() * 2600);
    };
    loop();
    return () => clearTimeout(timeout);
  }, [reduce, blink]);

  return (
    <div ref={rootRef} className="relative flex aspect-square w-full items-center justify-center">
      {/* Spotlight glow that trails the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: reduce
            ? "radial-gradient(38% 38% at 55% 40%, rgba(251,91,56,0.16), transparent 70%)"
            : spotlight,
        }}
      />

      {/* Decorative orbit ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[8%] rounded-full border border-dashed border-line"
      />

      <motion.svg
        viewBox="0 0 240 240"
        className="w-[68%] max-w-[320px] drop-shadow-[0_20px_40px_rgba(224,67,31,0.15)]"
        style={reduce ? undefined : { rotate: tilt, x: driftX, y: driftY }}
        role="img"
        aria-label="A friendly robot that watches your cursor"
      >
        {/* Antenna */}
        <line x1="120" y1="44" x2="120" y2="18" stroke="var(--color-ink)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="120" cy="14" r="7" fill="var(--color-accent)" />

        {/* Head */}
        <rect x="46" y="44" width="148" height="128" rx="34" fill="var(--color-surface)" stroke="var(--color-ink)" strokeWidth="4" />
        {/* Cheek blush */}
        <circle cx="74" cy="132" r="9" fill="var(--color-accent)" opacity="0.18" />
        <circle cx="166" cy="132" r="9" fill="var(--color-accent)" opacity="0.18" />

        {/* Eyes */}
        <motion.g style={reduce ? undefined : { scaleY: blink, transformOrigin: "center", transformBox: "fill-box" }}>
          <circle ref={leftEyeRef} cx="95" cy="102" r="20" fill="#fff" stroke="var(--color-line)" strokeWidth="2" />
          <motion.circle cx="95" cy="102" r="9" fill="var(--color-ink)" style={reduce ? undefined : { x: lx, y: ly }} />
          <circle cx="99" cy="98" r="2.6" fill="#fff" />
        </motion.g>
        <motion.g style={reduce ? undefined : { scaleY: blink, transformOrigin: "center", transformBox: "fill-box" }}>
          <circle ref={rightEyeRef} cx="145" cy="102" r="20" fill="#fff" stroke="var(--color-line)" strokeWidth="2" />
          <motion.circle cx="145" cy="102" r="9" fill="var(--color-ink)" style={reduce ? undefined : { x: rx, y: ry }} />
          <circle cx="149" cy="98" r="2.6" fill="#fff" />
        </motion.g>

        {/* Smile */}
        <path d="M104 140 q16 14 32 0" fill="none" stroke="var(--color-ink)" strokeWidth="4" strokeLinecap="round" />
      </motion.svg>
    </div>
  );
}
