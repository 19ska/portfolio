"use client";

import { motion } from "framer-motion";
import { TechRow } from "@/components/ui/tech-badge";
import { fadeUp } from "@/lib/motion";
import type { Experience } from "@/lib/data";

export function ExperienceCard({ job }: { job: Experience }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-shadow duration-300 hover:shadow-lift"
    >
      {/* Accent left stripe that glows on hover */}
      <span
        className="absolute inset-y-0 left-0 w-1.5 bg-accent transition-shadow duration-300 group-hover:shadow-[0_0_18px_3px_rgba(37,99,235,0.5)]"
        aria-hidden
      />

      <div className="p-7 pl-9 sm:p-9 sm:pl-12">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-ink">{job.role}</h3>
            <p className="mt-0.5 text-[15px] font-medium text-accent">{job.company}</p>
          </div>
          <div className="font-mono text-xs text-faint sm:text-right">
            <p className="text-muted">{job.dates}</p>
            {job.location ? <p className="mt-0.5">{job.location}</p> : null}
          </div>
        </div>

        <ul className="mt-5 space-y-2.5">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <TechRow tech={job.tech} />
        </div>
      </div>
    </motion.article>
  );
}
