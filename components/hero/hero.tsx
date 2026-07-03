"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { CursorCompanion } from "@/components/hero/cursor-companion";
import { identity } from "@/lib/data";
import { EASE_OUT_SOFT } from "@/lib/motion";

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
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pt-28 pb-20 sm:pt-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <motion.div {...entrance(0.05)} className="mb-6 flex flex-wrap items-center gap-2.5">
            {/* Availability — live status */}
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 font-mono text-sm font-medium text-ink shadow-[0_1px_2px_rgba(23,20,15,0.04)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Available for new roles
            </span>
            {/* Location — secondary */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-3.5 py-2 font-mono text-sm text-muted">
              <MapPin className="h-3.5 w-3.5 text-faint" strokeWidth={2} />
              Bay Area, CA
            </span>
          </motion.div>

          <motion.p {...entrance(0.1)} className="mb-3 text-lg font-medium text-muted">
            {identity.name}
          </motion.p>

          <motion.h1
            {...entrance(0.12)}
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {identity.tagline.replace(" — from model to infrastructure.", "")}
            <span className="text-accent"> — from model to infrastructure.</span>
          </motion.h1>

          <motion.p {...entrance(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            <span className="font-semibold text-ink">MS Computer Science · San Jose State University</span>
            {" · Former Software Engineer at Vodafone"}
          </motion.p>

          {/* CTAs */}
          <motion.div {...entrance(0.36)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={2.25} />
            </a>
          </motion.div>
        </div>

        {/* Cursor-reactive companion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT_SOFT, delay: 0.15 }}
          className="order-1 mx-auto w-full max-w-sm lg:order-2"
        >
          <CursorCompanion />
        </motion.div>
      </div>
    </section>
  );
}
