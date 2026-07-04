"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * A subtle soft dot that trails slightly behind the real cursor
 * (which stays visible). Springs give it lag; it fades out when the
 * cursor stops. Mouse-only and disabled under reduced motion.
 *
 * Uses the palette accent (violet). Swap the color for #ff6b47 if a
 * warm coral trail is preferred.
 */
export function CursorTrail() {
  const reduce = useReducedMotion();

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.4 });
  const y = useSpring(my, { stiffness: 260, damping: 28, mass: 0.4 });
  const opacity = useSpring(0, { stiffness: 170, damping: 26 });

  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) return;

    let idle: ReturnType<typeof setTimeout>;
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX - 4); // center the 8px dot
      my.set(e.clientY - 4);
      opacity.set(0.4);
      clearTimeout(idle);
      idle = setTimeout(() => opacity.set(0), 140);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      clearTimeout(idle);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduce, mx, my, opacity]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full"
      style={{ x, y, opacity, backgroundColor: "#4f7cff", filter: "blur(1px)" }}
    />
  );
}
