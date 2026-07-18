export function TechRow({ tech }: { tech: readonly string[] }) {
  return (
    <p className="font-mono text-[11px] leading-relaxed text-muted">
      {tech.join(" · ")}
    </p>
  );
}
