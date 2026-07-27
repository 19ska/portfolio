import { ExperienceCard } from "@/components/experience-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" title="Experience" index="01">
      <Reveal stagger className="flex flex-col gap-6">
        {experience.map((job, i) => (
          <ExperienceCard key={`${job.company}-${job.role}`} job={job} index={i} />
        ))}
      </Reveal>
    </Section>
  );
}
