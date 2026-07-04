"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronDown, MapPin } from "lucide-react";
import { CursorCompanion } from "@/components/hero/cursor-companion";
import { HeroPaint } from "@/components/hero/hero-paint";
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
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pt-28 pb-24 sm:pt-24"
    >
      {/* Watercolor cursor paint — backmost layer, non-interactive */}
      <HeroPaint />

      <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-6">
        {/* Left — copy */}
        <div>
          {/* Pills */}
          <motion.div {...entrance(0.05)} className="mb-7 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent bg-surface px-4 py-2 font-mono text-sm font-medium text-ink">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Available for new roles
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blush px-3.5 py-2 font-mono text-sm text-muted">
              <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
              Bay Area, CA
            </span>
          </motion.div>

          {/* Name with drawn-in coral underline */}
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
            <span className="text-accent">from model to</span>
            <br />
            <span className="text-accent">infrastructure.</span>
          </motion.h1>

          {/* Sub line */}
          <motion.p {...entrance(0.26)} className="mt-7 max-w-xl text-base leading-relaxed text-muted">
            MS Computer Science · San Jose State University · Former Software Engineer at Vodafone
          </motion.p>

          {/* Stats row */}
          <motion.div
            {...entrance(0.32)}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-accent"
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
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,99,235,0.7)] transition-colors hover:bg-amber"
            >
              View Projects
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" strokeWidth={2.5} />
            </motion.a>
          </motion.div>
        </div>

        {/* Right — cursor-reactive robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT_SOFT, delay: 0.2 }}
          className="mx-auto w-full max-w-sm"
        >
          <CursorCompanion />
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
