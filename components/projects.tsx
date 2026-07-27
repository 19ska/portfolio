import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { projectGroups } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" title="Projects" index="03">
      <div className="flex flex-col gap-16">
        {projectGroups.map((group) => (
          <div key={group.category}>
            {/* Category divider row */}
            <Reveal className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              <h3 className="whitespace-nowrap font-mono text-xs font-bold uppercase leading-none tracking-[0.14em] text-ink">
                {group.category}
              </h3>
              <span className="h-px flex-1 bg-line" aria-hidden />
            </Reveal>

            <Reveal stagger className="grid items-start gap-x-8 gap-y-8 sm:grid-cols-2">
              {group.projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
