import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { identity } from "@/lib/data";

const links = [
  { label: "Email", value: identity.email, href: `mailto:${identity.email}`, Icon: Mail, external: false },
  { label: "GitHub", value: "github.com/19ska", href: identity.github, Icon: GithubIcon, external: true },
  { label: "LinkedIn", value: "linkedin.com/in/skandagn", href: identity.linkedin, Icon: LinkedinIcon, external: true },
];

/** The one dark moment in a light site — a dusk finale. */
export function Contact() {
  return (
    <section id="contact" className="relative mt-12 overflow-hidden rounded-t-[3rem] bg-dusk text-white">
      {/* Dusk glow rising from the horizon */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[28rem] bg-[radial-gradient(60rem_26rem_at_50%_115%,rgba(37,99,235,0.35),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(40rem_10rem_at_50%_0%,rgba(255,176,31,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
        <Reveal stagger className="mx-auto max-w-3xl text-center">
          <RevealItem>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-[44px]">
              Contact
            </h2>
            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-accent" aria-hidden />
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Actively seeking AI/ML and Software Engineering roles. Based in Bay Area, CA — open to
              relocation anywhere in the US. On-site, hybrid, and remote welcome.
            </p>
          </RevealItem>

          <RevealItem className="mt-12">
            <ul className="grid gap-3 sm:grid-cols-3">
              {links.map(({ label, value, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-sm transition-colors hover:border-accent"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-colors group-hover:bg-accent">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-medium text-white">{value}</span>
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-pop" />
                  </a>
                </li>
              ))}
            </ul>
          </RevealItem>
        </Reveal>

        <footer className="mt-24 border-t border-white/10 pt-8">
          <p className="text-center font-mono text-xs text-white/50">
            © {new Date().getFullYear()} {identity.name}
          </p>
        </footer>
      </div>
    </section>
  );
}
