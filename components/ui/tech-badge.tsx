export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent bg-white px-2.5 py-1 font-mono text-[11px] leading-none text-accent">
      {label}
    </span>
  );
}

export function TechRow({ tech }: { tech: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <TechBadge key={t} label={t} />
      ))}
    </div>
  );
}
