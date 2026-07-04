import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionProps = {
  id: string;
  /** Ghost index rendered huge behind the header, e.g. "01". */
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  intro?: string;
  className?: string;
};

/** Section shell: ghost index number, glowing eyebrow, bold header. */
export function Section({ id, index, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className="relative">
      {/* Ghost index — outlined, floating behind the header */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-10 select-none font-mono text-[110px] font-extrabold leading-none text-transparent sm:right-10 sm:text-[160px] [-webkit-text-stroke:1px_rgba(79,124,255,0.16)]"
      >
        {index}
      </span>

      <div className={`relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 ${className ?? ""}`}>
        <Reveal className="mb-14 max-w-3xl sm:mb-16">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-strong">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.04] tracking-tight text-ink sm:text-5xl">
            {title}
          </h2>
          {intro ? <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
