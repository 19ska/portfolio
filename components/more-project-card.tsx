"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { TechRow } from "@/components/ui/tech-badge";
import { fadeUp } from "@/lib/motion";
import type { MoreProject } from "@/lib/data";

export function MoreProjectCard({ project }: { project: MoreProject }) {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-ink/20 hover:shadow-card"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight text-ink">{project.name}</h3>
        <span className="text-muted transition-colors group-hover:text-accent" aria-hidden>
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-5">
        <TechRow tech={project.tech} />
      </div>
      <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] text-faint">
        <GithubIcon className="h-3 w-3" />
        github.com/19ska
      </span>
    </motion.a>
  );
}
