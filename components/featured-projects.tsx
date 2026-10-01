import Link from "next/link";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

const featured = projects.filter((p) => p.featured);

/** The homepage's 4-up taste of the work — no filters, just a link to the rest. */
export function FeaturedProjects() {
  return (
    <div>
      <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <Link href="/projects" className="link-underline mt-8 inline-block text-sm font-medium text-ink">
        View all {projects.length} projects →
      </Link>
    </div>
  );
}
