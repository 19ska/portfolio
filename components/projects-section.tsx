"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { PROJECT_CATEGORIES, projects, type Project, type ProjectCategory } from "@/lib/data";

type Filter = "All" | ProjectCategory;
const FILTERS: Filter[] = ["All", ...PROJECT_CATEGORIES];
const TECH_PREVIEW_COUNT = 4;
const EASE = [0.22, 1, 0.36, 1] as const;

/** Tabbed filter + a grid of collapsed cards — scan the summary and metric, open only what you want. */
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

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {visible.length === 0 ? <p className="py-16 text-center text-sm text-faint">Nothing here yet.</p> : null}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const hiddenTechCount = Math.max(0, project.tech.length - TECH_PREVIEW_COUNT);
  const visibleTech = open ? project.tech : project.tech.slice(0, TECH_PREVIEW_COUNT);

  return (
    <motion.article layout="position" className="flex flex-col gap-4 rounded-2xl border border-line p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="kicker text-accent">{project.category}</p>
          <h3 className="display mt-2 text-xl text-ink">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex shrink-0 items-center gap-1 pt-1 text-xs font-medium text-ink"
        >
          GitHub
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </div>

      {project.badge ? (
        <p className="inline-flex w-fit items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {project.badge}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-2">
        {visibleTech.map((t) => (
          <span key={t} className="rounded-md border border-line px-2.5 py-1 text-xs text-ink">
            {t}
          </span>
        ))}
        {!open && hiddenTechCount > 0 ? (
          <span className="rounded-md px-2.5 py-1 text-xs text-faint">+{hiddenTechCount}</span>
        ) : null}
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <ul className="space-y-2.5 pb-1">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="bullet text-sm leading-relaxed text-muted">
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex items-center justify-between gap-4 border-t border-hairline pt-4"
      >
        <span className="font-mono text-xs font-medium text-accent">{project.metric}</span>
        <span className="kicker flex items-center gap-1.5 text-faint transition-colors group-hover:text-ink">
          {open ? "Hide details" : "Show details"}
          <Plus
            className="h-3 w-3 transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "none" }}
            strokeWidth={2}
          />
        </span>
      </button>
    </motion.article>
  );
}
