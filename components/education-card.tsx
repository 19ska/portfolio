import { TechRow } from "@/components/ui/tech-badge";
import type { Education } from "@/lib/data";

export function EducationCard({ edu }: { edu: Education }) {
  return (
    <div className="group border-b border-line py-8 first:pt-0 md:border-b-0 md:border-l md:border-line md:py-0 md:pl-8 md:first:pl-0 md:first:border-l-0">
      <span className="block h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-200 group-hover:scale-150" aria-hidden />
      <h3 className="mt-3 text-xl font-extrabold tracking-tight text-ink">{edu.degree}</h3>
      <p className="mt-1 text-[13px] text-muted">{edu.school}</p>
      <p className="mt-2 font-mono text-[13px] text-muted">
        {edu.dates} · {edu.location} · GPA {edu.gpa}
      </p>

      <div className="mt-6 h-px w-full bg-line" aria-hidden />

      <span className="mt-6 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        Coursework
      </span>
      <div className="mt-3">
        <TechRow tech={edu.coursework} />
      </div>
    </div>
  );
}
