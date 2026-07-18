import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { about } from "@/lib/data";

export function About() {
  return (
    <Section id="about" title="About" index="01">
      <Reveal stagger className="grid gap-12 lg:grid-cols-[58fr_42fr] lg:gap-16">
        {/* Left — pull quote + two paragraphs */}
        <RevealItem>
          <p className="border-l-2 border-accent pl-5 text-[28px] font-semibold leading-[1.25] tracking-tight text-ink">
            {about.quote}
          </p>
          <div className="mt-8 max-w-lg space-y-4 pl-5">
            {about.intro.map((paragraph, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </RevealItem>

        {/* Right — Background and Right Now, plain text */}
        <RevealItem className="flex flex-col gap-8 lg:pt-2">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              Background
            </span>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{about.background}</p>
          </div>
          <div className="h-px w-full bg-line" aria-hidden />
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              Right now
            </span>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{about.rightNow}</p>
          </div>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
