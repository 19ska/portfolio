import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { publications } from "@/lib/data";

export function Publications() {
  const papers = publications.filter((p) => !p.upcoming);
  const upcoming = publications.find((p) => p.upcoming);

  return (
    <Section id="publications" title="Publications" index="05">
      <Reveal stagger className="grid gap-10 lg:grid-cols-2">
        {/* Left column — published papers, stacked */}
        <div>
          {papers.map((pub) => (
            <RevealItem
              key={pub.title}
              className="group border-b border-line py-6 pl-4 -ml-4 border-l-2 border-l-transparent transition-colors duration-200 first:pt-0 last:border-b-0 hover:border-l-accent"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {pub.journal} · {pub.issn}
                </span>
                <span className="shrink-0 font-mono text-xs text-muted">{pub.date}</span>
              </div>

              <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-ink">
                {pub.title}
              </h3>

              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-4 inline-flex items-center gap-1.5 text-sm text-ink underline-offset-4 hover:underline"
              >
                Read Paper
                <ArrowUpRight
                  className="h-4 w-4 text-accent transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  strokeWidth={2}
                />
              </a>
            </RevealItem>
          ))}
        </div>

        {/* Right column — upcoming, visually distinct via type only */}
        {upcoming ? (
          <RevealItem className="flex h-full flex-col justify-center border-l border-line pl-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              Upcoming
            </span>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">{upcoming.title}</h3>
            <p className="mt-2 font-mono text-sm text-muted">{upcoming.journal}</p>
          </RevealItem>
        ) : null}
      </Reveal>
    </Section>
  );
}
