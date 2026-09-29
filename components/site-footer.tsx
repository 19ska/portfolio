import { identity, navLinks } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline">
      <Container size="wide" className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-faint">
          {identity.name} · {identity.location}
        </p>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="text-sm text-muted transition-colors hover:text-ink">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-faint transition-colors hover:text-ink"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-faint transition-colors hover:text-ink"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </Container>

      <Container size="wide" className="flex flex-col gap-2 border-t border-hairline py-4 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} {identity.name}</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </Container>
    </footer>
  );
}
