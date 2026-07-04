import { ExperienceCard } from "@/components/experience-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" index="02" eyebrow="Experience" title="Where I've built things that matter.">
      <Reveal stagger className="flex flex-col gap-6">
        {experience.map((job) => (
          <ExperienceCard key={`${job.company}-${job.role}`} job={job} />
        ))}
      </Reveal>
    </Section>
  );
}
