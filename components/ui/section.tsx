import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionProps = {
  id: string;
  /** Section name — set in a mono label + large weight-800 heading. */
  title: string;
  children: ReactNode;
  /** Two-digit index shown as a small red kicker above the title, e.g. "01". */
  index?: string;
  /** Optional subtitle below the title (used sparingly). */
  subtitle?: string;
  intro?: string;
  className?: string;
  /** Center the heading block and divider (used by Contact). */
  center?: boolean;
};

/** Section shell: numbered kicker + a heavy typographic title, red accent used sparingly. */
export function Section({ id, title, index, subtitle, intro, children, className, center }: SectionProps) {
  return (
    <section id={id} className="relative border-t border-line">
      <div className={`relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 ${className ?? ""}`}>
        <Reveal className={`mb-14 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
          {index ? (
            <div className={`mb-3 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span className="font-mono text-xs font-medium tracking-[0.2em] text-accent">{index}</span>
            </div>
          ) : null}
          <h2 className="text-[clamp(32px,4vw,44px)] font-extrabold leading-[1.05] tracking-tight text-ink">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-2xl font-semibold leading-[1.1] tracking-tight text-ink">
              {subtitle}
            </p>
          ) : null}
          {intro ? <p className="mt-3 text-base leading-relaxed text-muted">{intro}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
