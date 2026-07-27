import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" title="Skills" index="04">
      <Reveal stagger as="ul">
        {skillGroups.map((group) => (
          <RevealItem
            key={group.category}
            as="li"
            className="grid grid-cols-1 gap-3 border-b border-line py-5 first:pt-0 last:border-b-0 sm:grid-cols-[180px_1fr] sm:gap-6"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-full border border-card-border bg-surface px-3 py-1 text-[13px] leading-none text-ink transition-colors duration-150 hover:border-accent hover:bg-accent"
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
