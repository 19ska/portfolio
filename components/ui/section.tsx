import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionProps = {
  id: string;
  /** Ghost index rendered huge behind the header, e.g. "01". */
  index: string;
  /** Section name — the clean 28px title. */
  title: string;
  children: ReactNode;
  /** Optional 32px subtitle below the title (used sparingly). */
  subtitle?: string;
  intro?: string;
  className?: string;
};

/** Section shell: ghost index number + a clean 28px section title. */
export function Section({ id, index, title, subtitle, intro, children, className }: SectionProps) {
  return (
    <section id={id} className="relative">
      {/* Ghost index — outlined, floating behind the header */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-10 hidden select-none font-mono text-[130px] font-extrabold leading-none text-transparent sm:block sm:right-10 sm:text-[160px] [-webkit-text-stroke:1px_rgba(37,99,235,0.08)]"
      >
        {index}
      </span>

      <div className={`relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 ${className ?? ""}`}>
        <Reveal className="mb-5 max-w-3xl">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-[44px]">
            {title}
          </h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-accent" aria-hidden />
          {subtitle ? (
            <p className="mt-2 text-[32px] font-semibold leading-[1.1] tracking-tight text-ink">
              {subtitle}
            </p>
          ) : null}
          {intro ? <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
