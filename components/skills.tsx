import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      index="05"
      eyebrow="Skills"
      title="A toolkit built across research and production."
    >
      <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <RevealItem key={group.category} className="glass rounded-2xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-strong">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-[13px] leading-none text-ink/85 transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-bg"
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
