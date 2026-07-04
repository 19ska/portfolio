import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { publications } from "@/lib/data";

export function Publications() {
  const papers = publications.filter((p) => !p.upcoming);
  const upcoming = publications.find((p) => p.upcoming);

  return (
    <Section id="publications" index="06" eyebrow="Publications" title="Peer-reviewed research & writing.">
      <Reveal stagger className="grid gap-4 lg:grid-cols-2">
        {/* Left column — published papers, stacked */}
        <div className="flex flex-col gap-4">
          {papers.map((pub) => (
            <RevealItem
              key={pub.title}
              className="glass flex flex-col rounded-2xl p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent-strong">
                  {pub.journal} · {pub.issn}
                </span>
                <span className="shrink-0 font-mono text-xs text-faint">{pub.date}</span>
              </div>

              <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-ink">
                {pub.title}
              </h3>

              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong transition-colors hover:text-pop"
              >
                Read Paper
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2.25}
                />
              </a>
            </RevealItem>
          ))}
        </div>

        {/* Right column — upcoming, visually distinct */}
        {upcoming ? (
          <RevealItem className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-8 backdrop-blur-sm">
            <span className="inline-flex w-fit items-center rounded-full bg-pop px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-bg">
              Upcoming
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">{upcoming.title}</h3>
            <p className="mt-2 font-mono text-sm text-muted">{upcoming.journal}</p>
          </RevealItem>
        ) : null}
      </Reveal>
    </Section>
  );
}
