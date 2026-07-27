"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { about, identity } from "@/lib/data";
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

      {/* Right panel — badge + stats, stacked in the empty right side (desktop only) */}
      <motion.div
        {...entrance(0)}
        className="absolute right-6 top-28 hidden w-fit flex-col items-end gap-4 lg:flex"
      >
        <span className="inline-flex items-center gap-2.5 rounded-full border border-accent bg-accent/10 px-4 py-1.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs font-medium tracking-[0.02em] text-ink">
            Actively seeking Software Engineer &amp; AI/ML Engineer roles
          </span>
        </span>

        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-accent" strokeWidth={2} />
          <span className="font-mono text-xs text-muted">
            <span className="font-semibold text-ink">4+</span> Years Experience
          </span>
        </div>

        <a
          href="#publications"
          className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
        >
          <BookOpen className="h-4 w-4 text-accent" strokeWidth={2} />
          <span className="font-mono text-xs">
            <span className="font-semibold text-ink">2</span> Publications
          </span>
        </a>
      </motion.div>

      {/* Same badge + stats, inline for mobile/tablet where there's no spare right column */}
      <motion.div {...entrance(0)} className="mb-6 flex flex-col items-end gap-3 lg:hidden">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-accent bg-accent/10 px-4 py-1.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs font-medium tracking-[0.02em] text-ink">
            Actively seeking Software Engineer &amp; AI/ML Engineer roles
          </span>
        </span>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-accent" strokeWidth={2} />
            <span className="font-mono text-xs text-muted">
              <span className="font-semibold text-ink">4+</span> Years Experience
            </span>
          </div>
          <a
            href="#publications"
            className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            <BookOpen className="h-4 w-4 text-accent" strokeWidth={2} />
            <span className="font-mono text-xs">
              <span className="font-semibold text-ink">2</span> Publications
            </span>
          </a>
        </div>
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
      <motion.div {...entrance(0.16)} className="mt-8 flex max-w-2xl items-center gap-3">
        <span className="h-px w-8 shrink-0 bg-accent" aria-hidden />
        <span className="h-px flex-1 bg-line" aria-hidden />
      </motion.div>

      {/* Two-column role / location row */}
      <motion.div
        {...entrance(0.2)}
        className="mt-4 flex max-w-2xl items-center justify-between gap-4 font-mono text-[13px] text-muted"
      >
        <span>
          Software Engineer <span className="text-accent">·</span> AI/ML Engineer
        </span>
        <span className="text-right">
          San Jose, CA <span className="text-accent">·</span> Open to relocation
        </span>
      </motion.div>

      {/* Hook — the one-liner that captures the niche */}
      <motion.p
        {...entrance(0.28)}
        className="mt-10 max-w-xl border-l-2 border-accent pl-5 text-2xl font-semibold leading-[1.3] tracking-tight text-ink"
      >
        {about.hook}
      </motion.p>

      {/* Summary — who I am, what I've built, what I'm looking for */}
      <motion.p {...entrance(0.34)} className="mt-6 max-w-xl pl-5 text-[15px] leading-relaxed text-muted">
        {about.summary}
      </motion.p>

      {/* CTAs */}
      <motion.div {...entrance(0.42)} className="mt-9 flex flex-wrap items-center gap-5 pl-5">
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

        <span className="h-5 w-px bg-line" aria-hidden />

        <a
          href={`mailto:${identity.email}`}
          aria-label="Email"
          className="text-muted transition-colors hover:text-ink"
        >
          <Mail className="h-5 w-5" strokeWidth={1.75} />
        </a>
        <a
          href={identity.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted transition-colors hover:text-ink"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
        <a
          href={identity.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted transition-colors hover:text-ink"
        >
          <LinkedinIcon className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
}
