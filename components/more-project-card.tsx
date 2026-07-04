"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/ui/brand-icons";
import { TechBadge } from "@/components/ui/tech-badge";
import { fadeUp } from "@/lib/motion";
import type { MoreProject } from "@/lib/data";

export function MoreProjectCard({ project }: { project: MoreProject }) {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.name} on GitHub`}
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent hover:bg-blush"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold tracking-tight text-ink">{project.name}</h3>
        <GithubIcon className="mt-0.5 h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-accent" />
      </div>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </motion.a>
  );
}
