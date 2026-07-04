import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A toolkit built across research and production."
      tone="blush"
    >
      <Reveal stagger className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <RevealItem key={group.category}>
            <h3 className="text-lg font-bold tracking-tight text-accent">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-accent/30 bg-surface px-3 py-1.5 text-[13px] leading-none text-ink/80 transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-white"
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
