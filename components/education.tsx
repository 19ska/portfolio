import { EducationCard } from "@/components/education-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Foundations across research and systems.">
      <Reveal stagger className="grid gap-6 md:grid-cols-2">
        {education.map((edu) => (
          <EducationCard key={`${edu.school}-${edu.degree}`} edu={edu} />
        ))}
      </Reveal>
    </Section>
  );
}
