import { TechRow } from "@/components/ui/tech-badge";
import type { Experience } from "@/lib/data";

export function ExperienceCard({ job, index }: { job: Experience; index: number }) {
  return (
    <div className="group border-b border-line py-8 pl-4 -ml-4 border-l-2 border-l-transparent transition-colors duration-200 first:pt-0 last:border-b-0 hover:border-l-accent">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-faint">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="text-xl font-extrabold tracking-tight text-ink">{job.company}</h3>
        </div>
        <p className="font-mono text-[13px] text-muted">{job.dates}</p>
      </div>
      <p className="mt-1 pl-6 text-[13px] text-muted">
        {job.role}
        {job.location ? ` · ${job.location}` : ""}
      </p>

      <ul className="mt-5 space-y-2.5 pl-6">
        {job.bullets.map((b, i) => (
          <li key={i} className="bullet text-[14px] leading-relaxed text-[#4a4a4a]">
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-5 pl-6">
        <TechRow tech={job.tech} />
      </div>
    </div>
  );
}
