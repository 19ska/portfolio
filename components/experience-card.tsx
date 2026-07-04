import { TiltCard } from "@/components/fx/tilt-card";
import { TechRow } from "@/components/ui/tech-badge";
import type { Experience } from "@/lib/data";

export function ExperienceCard({ job }: { job: Experience }) {
  return (
    <TiltCard max={4} className="group glass relative overflow-hidden rounded-2xl shadow-card">
      {/* Accent left stripe that glows on hover */}
      <span
        className="absolute inset-y-0 left-0 w-1 bg-accent transition-shadow duration-300 group-hover:shadow-[0_0_20px_4px_rgba(79,124,255,0.6)]"
        aria-hidden
      />

      <div className="p-7 pl-9 sm:p-9 sm:pl-12">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-ink">{job.role}</h3>
            <p className="mt-0.5 text-[15px] font-medium text-accent-strong">{job.company}</p>
          </div>
          <div className="font-mono text-xs text-faint sm:text-right">
            <p className="text-muted">{job.dates}</p>
            {job.location ? <p className="mt-0.5">{job.location}</p> : null}
          </div>
        </div>

        <ul className="mt-5 space-y-2.5">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <TechRow tech={job.tech} />
        </div>
      </div>
    </TiltCard>
  );
}
