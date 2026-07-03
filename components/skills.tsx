import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A toolkit built across research and production.">
      <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <RevealItem
            key={group.category}
            className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-ink/15"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-bg px-2.5 py-1.5 text-[13px] leading-none text-ink/85"
                >
                  {skill}
                </span>
              ))}
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
