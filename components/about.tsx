import { Reveal, RevealItem } from "@/components/ui/reveal";
import { about } from "@/lib/data";

// Restructure the philosophy paragraph into a pull quote without
// dropping any of its content.
const philosophy = about[1];
const marker = "I'm not interested in building demos";
const idx = philosophy.indexOf(marker);
const lead = philosophy.slice(0, idx).trim();
const quote = `${marker}.`;
const rest = philosophy.slice(idx + marker.length).replace(/^\s*—\s*/, "").trim();

export function About() {
  return (
    <section id="about" className="bg-blush">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <Reveal stagger className="grid gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
          {/* Left — pull quote */}
          <RevealItem>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">About</span>
            <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-muted">{lead}</p>
            <blockquote className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
              {quote}
            </blockquote>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{rest}</p>
          </RevealItem>

          {/* Right — two accented blocks */}
          <RevealItem className="flex flex-col gap-8 lg:pt-2">
            <div className="border-l-[3px] border-accent pl-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">Background</span>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{about[0]}</p>
            </div>
            <div className="border-l-[3px] border-accent pl-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">Right now</span>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{about[2]}</p>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
