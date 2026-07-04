"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { TechRow } from "@/components/ui/tech-badge";
import { fadeUp } from "@/lib/motion";
import type { Project } from "@/lib/data";

// Big stat callouts pulled from the hero project's own impact metrics.
const heroStats = [
  { value: "300+", unit: "QPS" },
  { value: "+51%", unit: "nDCG@10" },
  { value: "99.95%", unit: "uptime" },
];

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group relative overflow-hidden rounded-2xl border border-line border-t-[3px] border-t-accent bg-surface p-8 shadow-card transition-shadow duration-300 hover:shadow-lift sm:p-12"
    >
      {/* Editorial index number */}
      <span
        className="pointer-events-none absolute right-6 top-2 select-none font-extrabold leading-none text-accent/10 sm:text-[120px]"
        aria-hidden
      >
        01
      </span>

      <div className="relative">
        <h3 className="max-w-2xl text-4xl font-bold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
          {project.name}
        </h3>
        <p className="mt-3 text-lg italic text-accent">{project.subtitle}</p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Left — description + impact */}
          <div>
            <p className="text-[15px] leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-6 grid gap-2.5">
              {project.impact.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — huge stat callouts */}
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-6">
            {heroStats.map((s) => (
              <div key={s.unit} className="rounded-xl bg-blush px-4 py-4">
                <div className="font-mono text-2xl font-bold leading-none text-accent sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  {s.unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <TechRow tech={project.tech} />
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-amber"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            View on GitHub
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
