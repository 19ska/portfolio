import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { TechRow } from "@/components/ui/tech-badge";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Foundations across research and systems.">
      <Reveal stagger className="relative">
        {/* Vertical timeline rail */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[9px]" aria-hidden />

        <ol className="space-y-12">
          {education.map((edu) => (
            <RevealItem as="li" key={`${edu.school}-${edu.degree}`} className="relative pl-8 sm:pl-12">
              {/* Node */}
              <span
                className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-accent bg-bg sm:h-[19px] sm:w-[19px]"
                aria-hidden
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
              </span>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{edu.degree}</h3>
                  <p className="text-[15px] text-accent">{edu.school}</p>
                </div>
                <p className="font-mono text-xs text-faint sm:text-right">
                  {edu.dates}
                  <span className="block">{edu.location}</span>
                </p>
              </div>

              <p className="mt-4 text-[15px] text-muted">
                GPA <span className="font-semibold text-ink">{edu.gpa}</span>
              </p>

              <div className="mt-5">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-faint">
                  Coursework
                </p>
                <TechRow tech={edu.coursework} />
              </div>
            </RevealItem>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
