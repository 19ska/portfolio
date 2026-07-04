/**
 * Infinite stat ticker — pure CSS animation, no JS. Items are the
 * real metrics from the resume/projects, nothing invented.
 */
const ITEMS = [
  "300+ QPS sustained",
  "p95 <650ms",
  "88% Micro-F1 · LEDGAR",
  "5M+ requests/day",
  "99.8% allocation success",
  "99.95% uptime",
  "<5ms parse time",
  "<2s transcription latency",
  "+51% nDCG@10",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS]; // duplicated for a seamless loop
  return (
    <div aria-hidden className="relative overflow-hidden border-y border-line/60 py-3.5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-xs text-faint">
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
