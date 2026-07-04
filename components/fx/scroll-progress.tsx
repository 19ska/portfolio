"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Scroll-driven progress beam pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent via-accent-strong to-pop"
      style={{ scaleX }}
    />
  );
}
