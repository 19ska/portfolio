"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { identity } from "@/lib/data";
import { EASE_OUT_SOFT } from "@/lib/motion";

// Manual stagger so the hero animates on load (not on scroll).
const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE_OUT_SOFT, delay },
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center overflow-hidden px-6 py-24"
    >
      {/* Soft glow, barely-there — adds warmth behind the name */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, #f0c507, transparent 70%)" }}
      />

      {/* Eyebrow */}
      <motion.div {...entrance(0)} className="mb-6 flex items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
        <span className="font-mono text-xs font-medium tracking-[0.2em] text-accent">
          {identity.monogram}
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        {...entrance(0.05)}
        className="text-[clamp(56px,8vw,96px)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink"
      >
        Skanda
        <br />
        Gonur Nagaraj
      </motion.h1>

      {/* Rule */}
      <motion.div {...entrance(0.18)} className="mt-8 flex max-w-2xl items-center gap-3">
        <span className="h-px w-8 shrink-0 bg-accent" aria-hidden />
        <span className="h-px flex-1 bg-line" aria-hidden />
      </motion.div>

      {/* Two-column role / location row */}
      <motion.div
        {...entrance(0.24)}
        className="mt-4 flex max-w-2xl items-center justify-between gap-4 font-mono text-[13px] text-muted"
      >
        <span>
          Software Engineer <span className="text-accent">·</span> AI/ML Engineer
        </span>
        <span className="text-right">
          San Jose, CA <span className="text-accent">·</span> Open to relocation
        </span>
      </motion.div>

      {/* Tagline */}
      <motion.p {...entrance(0.32)} className="mt-10 max-w-xl text-xl font-normal leading-snug text-muted">
        I build production AI systems — from model to infrastructure.
      </motion.p>

      {/* CTA */}
      <motion.div {...entrance(0.4)} className="mt-9">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-ink shadow-[0_8px_20px_-8px_rgba(240,197,7,0.6)] transition-colors hover:bg-[#cca300]"
        >
          View Projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </motion.a>
      </motion.div>
    </section>
  );
}
