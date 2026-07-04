import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type Tone = "default" | "white" | "blush" | "dark";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  /** Optional line under the title. */
  intro?: string;
  className?: string;
  tone?: Tone;
};

const toneBg: Record<Tone, string> = {
  default: "",
  white: "bg-surface",
  blush: "bg-blush",
  dark: "bg-ink text-white",
};

/** Consistent section shell: anchored, generous whitespace, bold header. */
export function Section({ id, eyebrow, title, intro, children, className, tone = "default" }: SectionProps) {
  const dark = tone === "dark";
  return (
    <section id={id} className={toneBg[tone]}>
      <div className={`mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 ${className ?? ""}`}>
        <Reveal className="mb-14 max-w-3xl sm:mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            {eyebrow}
          </span>
          <h2
            className={`mt-4 text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-[52px] ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h2>
          {intro ? (
            <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>
              {intro}
            </p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
