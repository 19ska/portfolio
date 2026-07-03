import { Fragment } from "react";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { TechRow } from "@/components/ui/tech-badge";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've built things that matter.">
      <Reveal stagger className="relative">
        {/* Vertical timeline rail */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[9px]" aria-hidden />

        <ol className="space-y-12">
          {experience.map((job, i) => (
            <Fragment key={`${job.company}-${job.role}`}>
            <RevealItem as="li" className="relative pl-8 sm:pl-12">
              {/* Node */}
              <span
                className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-accent bg-bg sm:h-[19px] sm:w-[19px]"
                aria-hidden
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
              </span>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{job.role}</h3>
                  <p className="text-[15px] text-accent">{job.company}</p>
                </div>
                <p className="font-mono text-xs text-faint sm:text-right">
                  {job.dates}
                  {job.location ? <span className="block">{job.location}</span> : null}
                </p>
              </div>

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <TechRow tech={job.tech} />
              </div>
            </RevealItem>

            {/* Transition marker between Vodafone and Research Assistant */}
            {i === 0 ? (
              <RevealItem as="li" className="relative pl-8 sm:pl-12">
                <span
                  className="absolute left-[3px] top-1 h-2 w-2 rounded-full bg-faint sm:left-[5px]"
                  aria-hidden
                />
                <p className="font-mono text-xs leading-relaxed text-faint">
                  Relocated to San Jose, CA · Began MS CS at SJSU · Aug 2024
                </p>
              </RevealItem>
            ) : null}
            </Fragment>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
