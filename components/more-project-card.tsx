import { TiltCard } from "@/components/fx/tilt-card";
import { GithubIcon } from "@/components/ui/brand-icons";
import { TechBadge } from "@/components/ui/tech-badge";
import type { MoreProject } from "@/lib/data";

export function MoreProjectCard({ project }: { project: MoreProject }) {
  return (
    <TiltCard lift={-3} className="h-full">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} on GitHub`}
        className="group glass flex h-full flex-col rounded-xl p-6 transition-colors hover:border-accent/50"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-bold tracking-tight text-ink">{project.name}</h3>
          <GithubIcon className="mt-0.5 h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-accent-strong" />
        </div>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      </a>
    </TiltCard>
  );
}
