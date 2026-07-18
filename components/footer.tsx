import { identity } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg py-8">
      <div className="flex items-center justify-center gap-2">
        <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {identity.name}
        </p>
      </div>
    </footer>
  );
}
