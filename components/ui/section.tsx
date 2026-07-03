import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  /** Optional line under the title. */
  intro?: string;
  className?: string;
};

/** Consistent section shell: anchored, generous whitespace, revealed header. */
export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 ${className ?? ""}`}>
      <Reveal className="mb-14 max-w-2xl sm:mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {intro ? <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p> : null}
      </Reveal>
      {children}
    </section>
  );
}
