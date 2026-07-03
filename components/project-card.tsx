"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { TechRow } from "@/components/ui/tech-badge";
import { fadeUp } from "@/lib/motion";
import type { Project } from "@/lib/data";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-card transition-shadow duration-300 hover:shadow-lift sm:p-9"
    >
      {/* Accent hairline that grows on hover */}
      <span
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
        aria-hidden
      />

      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-faint">{String(index + 1).padStart(2, "0")}</span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} on GitHub`}
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted transition-colors group-hover:border-ink group-hover:text-ink"
        >
          <GithubIcon className="h-3.5 w-3.5" />
          View on GitHub
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">{project.name}</h3>
      <p className="mt-1.5 text-sm font-medium text-accent">{project.subtitle}</p>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-6 grid gap-2.5">
        {project.impact.map((point, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/85">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-7 pt-6">
        <TechRow tech={project.tech} />
      </div>
    </motion.article>
  );
}
