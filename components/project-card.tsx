import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/fx/tilt-card";
import { GithubIcon } from "@/components/ui/brand-icons";
import { TechRow } from "@/components/ui/tech-badge";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl p-7 shadow-card sm:p-8">
      <span
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent to-pop transition-transform duration-500 ease-out group-hover:scale-x-100"
        aria-hidden
      />
      <h3 className="text-2xl font-bold tracking-tight text-ink">{project.name}</h3>
      <p className="mt-1.5 text-sm italic text-accent-strong">{project.subtitle}</p>

      <ul className="mt-5 grid flex-1 gap-2.5">
        {project.impact.slice(0, 2).map((point, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <TechRow tech={project.tech} />
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} on GitHub`}
        className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent-strong"
      >
        <GithubIcon className="h-3.5 w-3.5" />
        View on GitHub
        <ArrowUpRight className="h-3 w-3" />
      </a>
    </TiltCard>
  );
}
