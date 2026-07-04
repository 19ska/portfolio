"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowDown, ChevronDown, MapPin } from "lucide-react";
import { CursorCompanion } from "@/components/hero/cursor-companion";
import { identity } from "@/lib/data";
import { EASE_OUT_SOFT } from "@/lib/motion";

const stats = ["5M+ req/day", "88% Micro-F1", "300+ QPS"];

// Manual stagger so the hero animates on load (not on scroll).
const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE_OUT_SOFT, delay },
});

export function Hero() {
  const reduce = useReducedMotion();

  // The whole copy block leans in 3D toward the cursor.
  const rx = useSpring(useMotionValue(0), { stiffness: 90, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 90, damping: 20 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      ry.set(px * 4);
      rx.set(-py * 3);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, rx, ry]);

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pt-28 pb-24 sm:pt-24"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-6">
        {/* Left — copy, leaning in 3D toward the cursor */}
        <motion.div style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1400 }}>
          {/* Pills */}
          <motion.div {...entrance(0.05)} className="mb-7 flex flex-wrap items-center gap-2.5">
            <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 font-mono text-sm font-medium text-ink">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Available for new roles
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-2 font-mono text-sm text-accent-strong">
              <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
              Bay Area, CA
            </span>
          </motion.div>

          {/* Name with drawn-in underline */}
          <motion.p {...entrance(0.12)} className="mb-4 text-base font-medium text-muted">
            <span className="relative inline-block">
              {identity.name}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: EASE_OUT_SOFT, delay: 0.6 }}
              />
            </span>
          </motion.p>

          {/* Massive headline */}
          <motion.h1
            {...entrance(0.18)}
            className="text-[13vw] font-extrabold leading-[0.95] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[80px]"
          >
            I build production
            <br />
            AI systems —
            <br />
            <span className="text-glow text-accent-strong">from model to</span>
            <br />
            <span className="text-glow text-accent-strong">infrastructure.</span>
          </motion.h1>

          {/* Sub line */}
          <motion.p {...entrance(0.26)} className="mt-7 max-w-xl text-base leading-relaxed text-muted">
            MS Computer Science · San Jose State University · Former Software Engineer at Vodafone
          </motion.p>

          {/* Stats row */}
          <motion.div
            {...entrance(0.32)}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-accent-strong"
          >
            {stats.map((s, i) => (
              <span key={s} className="inline-flex items-center gap-3">
                {i > 0 ? <span className="text-faint">·</span> : null}
                {s}
              </span>
            ))}
          </motion.div>

          {/* Single CTA */}
          <motion.div {...entrance(0.4)} className="mt-9">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-bg shadow-glow transition-colors hover:bg-pop"
            >
              View Projects
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" strokeWidth={2.5} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right — the robot, orbited by floating depth chips */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT_SOFT, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <CursorCompanion />

          {/* Floating chips at different depths (real metrics) */}
          <motion.span
            aria-hidden
            className="glass absolute -left-2 top-8 rounded-full px-3 py-1.5 font-mono text-[11px] text-accent-strong"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            p95 &lt;300ms
          </motion.span>
          <motion.span
            aria-hidden
            className="glass absolute -right-3 top-20 rounded-full px-3 py-1.5 font-mono text-[11px] text-pop"
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            99.95% uptime
          </motion.span>
          <motion.span
            aria-hidden
            className="glass absolute bottom-10 left-2 rounded-full px-3 py-1.5 font-mono text-[11px] text-muted"
            animate={reduce ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          >
            +51% nDCG@10
          </motion.span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center gap-1.5 text-faint"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
