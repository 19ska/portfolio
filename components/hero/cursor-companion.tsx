"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useAnimationControls,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { RobotTerminal, type RobotTerminalHandle } from "@/components/hero/robot-terminal";

/**
 * The "alive" element: a friendly robot that watches the cursor.
 * - Pupils track the pointer (each eye computes its own angle).
 * - Head tilts toward the pointer; the body gently floats.
 * - Hover: a quick happy wiggle + an antenna pulse.
 * - Click: eyes flash blue, a wider grin, and a mini terminal pops up
 *   above the robot that types out a random project fact.
 * - Idle (5s+): a slow, sleepy blink loop.
 * All movement is spring/keyframe-smoothed and disabled under
 * prefers-reduced-motion.
 */

const SMILE = "M104 140 q16 14 32 0";

export function CursorCompanion() {
  const reduce = useReducedMotion();

  const rootRef = useRef<HTMLDivElement>(null);
  const leftEyeRef = useRef<SVGCircleElement>(null);
  const rightEyeRef = useRef<SVGCircleElement>(null);
  const lastActivity = useRef(0);

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

  // Interaction controls.
  const wiggle = useAnimationControls();
  const antenna = useAnimationControls();
  const terminalRef = useRef<RobotTerminalHandle>(null);
  const [happy, setHappy] = useState(false);
  const [flash, setFlash] = useState(false);

  // Spotlight background follows the spring-smoothed pointer position.
  const spotlight = useMotionTemplate`radial-gradient(38% 38% at ${glowX}% ${glowY}%, rgba(37,99,235,0.20), transparent 70%)`;

  useEffect(() => {
    if (reduce) return;
    lastActivity.current = Date.now();

    let frame = 0;
    const track = (clientX: number, clientY: number) => {
      const root = rootRef.current;
      if (!root) return;
      const box = root.getBoundingClientRect();
      lastActivity.current = Date.now();

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

    // Sleepy blink when idle for 5s+.
    const sleepy = setInterval(() => {
      if (Date.now() - lastActivity.current > 5000) {
        animate(blink, [1, 0.32, 1], { duration: 1.6, ease: "easeInOut" });
      }
    }, 3600);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(sleepy);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduce, lx, ly, rx, ry, tilt, driftX, driftY, glowX, glowY, blink]);

  // Occasional quick friendly blink.
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

  const handleEnter = () => {
    if (reduce) return;
    lastActivity.current = Date.now();
    wiggle.start({ rotate: [0, -5, 4, -2, 0], transition: { duration: 0.3, ease: "easeInOut" } });
    antenna.start({ scale: [1, 1.8, 1], transition: { duration: 0.45, ease: "easeOut" } });
  };

  const handleClick = () => {
    if (reduce) return;
    lastActivity.current = Date.now();

    // Eyes flash blue for 300ms.
    setFlash(true);
    window.setTimeout(() => setFlash(false), 300);

    // Grin widens momentarily, then eases back.
    setHappy(true);
    window.setTimeout(() => setHappy(false), 800);

    // Mini terminal pops up and types a random fact.
    terminalRef.current?.open();
  };

  return (
    <div
      ref={rootRef}
      onPointerEnter={handleEnter}
      onClick={handleClick}
      className="relative flex aspect-square w-full cursor-pointer items-center justify-center"
    >
      {/* Soft violet halo behind the robot circle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{ background: "radial-gradient(circle at 50% 46%, #eaf1fe, transparent 70%)" }}
      />

      {/* Spotlight glow that trails the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: reduce
            ? "radial-gradient(38% 38% at 55% 40%, rgba(37,99,235,0.16), transparent 70%)"
            : spotlight,
        }}
      />

      {/* Lavender robot circle + violet orbit ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[8%] rounded-full border border-dashed border-accent/40 bg-blush"
      />

      {/* Terminal popup — types a random fact on click */}
      <RobotTerminal ref={terminalRef} />

      {/* Float wrapper (ambient) */}
      <motion.div
        className="w-[68%] max-w-[320px]"
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={reduce ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Wiggle wrapper (hover) */}
        <motion.div animate={wiggle}>
          <motion.svg
            viewBox="0 0 240 240"
            className="w-full drop-shadow-[0_20px_40px_rgba(37,99,235,0.20)]"
            style={reduce ? undefined : { rotate: tilt, x: driftX, y: driftY }}
            role="img"
            aria-label="A friendly robot that watches your cursor — click it"
          >
            {/* Antenna */}
            <line x1="120" y1="44" x2="120" y2="18" stroke="var(--color-ink)" strokeWidth="4" strokeLinecap="round" />
            <motion.circle
              cx="120"
              cy="12"
              r="9"
              fill="var(--color-amber)"
              animate={antenna}
              style={{ transformOrigin: "center", transformBox: "fill-box" }}
            />

            {/* Head */}
            <rect x="46" y="44" width="148" height="128" rx="34" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="3" />
            {/* Cheek blush — soft blue */}
            <circle cx="74" cy="132" r="9" fill="#bcd6ff" />
            <circle cx="166" cy="132" r="9" fill="#bcd6ff" />

            {/* Eyes */}
            <motion.g style={reduce ? undefined : { scaleY: blink, transformOrigin: "center", transformBox: "fill-box" }}>
              <circle ref={leftEyeRef} cx="95" cy="102" r="20" fill="#fff" stroke="var(--color-line)" strokeWidth="2" />
              <motion.circle cx="95" cy="102" r="9" fill={flash ? "#2563eb" : "var(--color-ink)"} style={reduce ? undefined : { x: lx, y: ly }} />
              <circle cx="99" cy="98" r="2.6" fill="#fff" />
            </motion.g>
            <motion.g style={reduce ? undefined : { scaleY: blink, transformOrigin: "center", transformBox: "fill-box" }}>
              <circle ref={rightEyeRef} cx="145" cy="102" r="20" fill="#fff" stroke="var(--color-line)" strokeWidth="2" />
              <motion.circle cx="145" cy="102" r="9" fill={flash ? "#2563eb" : "var(--color-ink)"} style={reduce ? undefined : { x: rx, y: ry }} />
              <circle cx="149" cy="98" r="2.6" fill="#fff" />
            </motion.g>

            {/* Smile — scales to 130% width on click for an obvious grin */}
            <motion.g
              style={reduce ? undefined : { transformOrigin: "center", transformBox: "fill-box" }}
              animate={reduce ? undefined : { scaleX: happy ? 1.3 : 1, scaleY: happy ? 1.15 : 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <path d={SMILE} fill="none" stroke="var(--color-ink)" strokeWidth="4" strokeLinecap="round" />
            </motion.g>
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
