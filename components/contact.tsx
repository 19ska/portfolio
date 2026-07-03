import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { identity } from "@/lib/data";

const links = [
  { label: "Email", value: identity.email, href: `mailto:${identity.email}`, Icon: Mail, external: false },
  { label: "GitHub", value: "github.com/19ska", href: identity.github, Icon: GithubIcon, external: true },
  { label: "LinkedIn", value: "linkedin.com/in/skandagn", href: identity.linkedin, Icon: LinkedinIcon, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <Reveal stagger className="mx-auto max-w-3xl text-center">
        <RevealItem>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</span>
        </RevealItem>
        <RevealItem>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Let&apos;s build something.
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Actively seeking AI/ML and Software Engineering roles. Based in Bay Area, CA — open to
            relocation anywhere within the US. On-site, hybrid, and remote welcome.
          </p>
        </RevealItem>

        <RevealItem className="mt-12">
          <ul className="grid gap-3 sm:grid-cols-3">
            {links.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-surface p-4 text-left transition-colors hover:border-ink/20 hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bg text-ink transition-colors group-hover:bg-accent group-hover:text-bg">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium text-ink">{value}</span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </RevealItem>
      </Reveal>

      <footer className="mt-24 border-t border-line pt-8">
        <p className="text-center font-mono text-xs text-faint">
          © {new Date().getFullYear()} {identity.name}
        </p>
      </footer>
    </section>
  );
}
