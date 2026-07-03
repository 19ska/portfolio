import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { about } from "@/lib/data";

const labels = ["Who I am", "How I work", "What I'm doing now"];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering at the boundary of research and shipping.">
      <Reveal stagger className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {about.map((paragraph, i) => (
          <RevealItem key={i} className="flex flex-col gap-4 bg-surface p-7 sm:p-8">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {String(i + 1).padStart(2, "0")} / {labels[i]}
            </span>
            <p className="text-[15px] leading-relaxed text-muted">{paragraph}</p>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
