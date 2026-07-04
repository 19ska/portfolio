import { TiltCard } from "@/components/fx/tilt-card";
import { TechRow } from "@/components/ui/tech-badge";
import type { Education } from "@/lib/data";

export function EducationCard({ edu }: { edu: Education }) {
  const initial = edu.degree.startsWith("Master") ? "MS" : "BE";

  return (
    <TiltCard className="glass flex h-full flex-col rounded-2xl p-8 shadow-card">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 font-mono text-2xl font-bold text-accent-strong">
        {initial}
      </span>

      <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">{edu.degree}</h3>
      <p className="mt-1 text-[15px] font-medium text-accent-strong">{edu.school}</p>
      <p className="mt-2 font-mono text-xs text-faint">
        {edu.dates} · {edu.location} · GPA {edu.gpa}
      </p>

      <hr className="my-6 border-line" />

      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-strong">
        Coursework
      </span>
      <div className="mt-3">
        <TechRow tech={edu.coursework} />
      </div>
    </TiltCard>
  );
}
