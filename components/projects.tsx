import { FeaturedProject } from "@/components/featured-project";
import { MoreProjectCard } from "@/components/more-project-card";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { featuredProjects, moreProjects } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Systems built to hold up under pressure."
      intro="A selection of production systems and research work — spanning LLM infrastructure, NLP, reinforcement learning, and language design."
    >
      {/* Hero project — full width */}
      <Reveal className="mb-6">
        <FeaturedProject project={featuredProjects[0]} />
      </Reveal>

      {/* Remaining featured — two per row */}
      <Reveal stagger className="grid gap-6 sm:grid-cols-2">
        {featuredProjects.slice(1).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Reveal>

      {/* More projects — compact grid */}
      <div className="mt-16">
        <Reveal className="mb-8 flex items-baseline gap-3">
          <h3 className="text-xl font-bold tracking-tight text-ink">More projects</h3>
          <span className="h-px flex-1 bg-line" aria-hidden />
        </Reveal>
        <Reveal stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((project) => (
            <MoreProjectCard key={project.name} project={project} />
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
