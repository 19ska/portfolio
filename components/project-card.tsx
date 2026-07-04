"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { TechRow } from "@/components/ui/tech-badge";
import { fadeUp } from "@/lib/motion";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group flex h-full flex-col rounded-2xl border border-line border-t-[3px] border-t-accent bg-surface p-7 shadow-card transition-shadow duration-300 hover:shadow-lift sm:p-8"
    >
      <h3 className="text-2xl font-bold tracking-tight text-ink">{project.name}</h3>
      <p className="mt-1.5 text-sm italic text-accent">{project.subtitle}</p>

      <ul className="mt-5 grid flex-1 gap-2.5">
        {project.impact.slice(0, 2).map((point, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <TechRow tech={project.tech} />
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} on GitHub`}
        className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
      >
        <GithubIcon className="h-3.5 w-3.5" />
        View on GitHub
        <ArrowUpRight className="h-3 w-3" />
      </a>
    </motion.article>
  );
}
