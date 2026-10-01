"use client";

import { useMemo, useState } from "react";
import { PROJECT_CATEGORIES, projects, type ProjectCategory } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

type Filter = "All" | ProjectCategory;
const FILTERS: Filter[] = ["All", ...PROJECT_CATEGORIES];

/** Tabbed filter + the full project grid — used on the /projects page. */
export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by domain">
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`kicker rounded-full border px-4 py-1.5 transition-colors ${
                active ? "border-ink bg-ink text-paper" : "border-line text-faint hover:border-ink hover:text-ink"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {visible.length === 0 ? <p className="py-16 text-center text-sm text-faint">Nothing here yet.</p> : null}
    </div>
  );
}
