import { ArrowUpRight } from "lucide-react";
import { TechRow } from "@/components/ui/tech-badge";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group flex h-full flex-col rounded-lg border-2 border-card-border bg-bg p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_24px_-12px_rgba(0,0,0,0.14)]"
    >
      {project.badge ? (
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
          {project.badge}
        </span>
      ) : null}

      <h4 className="mt-1 text-lg font-bold leading-snug tracking-tight text-ink">
        {project.name}
      </h4>
      <p className="mt-1 font-mono text-[13px] italic text-muted">{project.subtitle}</p>

      <ul className="mt-4 space-y-2 pl-4">
        {project.bullets.map((point, i) => (
          <li key={i} className="bullet text-[13px] leading-relaxed text-[#4a4a4a]">
            {point}
          </li>
        ))}
      </ul>

      {/* Pinned footer keeps rhythm equal down the column */}
      <div className="mt-auto pt-6">
        <TechRow tech={project.tech} />
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} on GitHub`}
          className="mt-4 inline-flex w-fit items-center gap-1 text-[13px] text-ink underline-offset-4 hover:underline"
        >
          View on GitHub
          <ArrowUpRight className="h-3 w-3 text-accent" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
