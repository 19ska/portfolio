"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { identity } from "@/lib/data";

const links = [
  { label: "Email", value: identity.email, href: `mailto:${identity.email}`, external: false },
  { label: "GitHub", value: "github.com/19ska", href: identity.github, external: true },
  { label: "LinkedIn", value: "linkedin.com/in/skandagn", href: identity.linkedin, external: true },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — no-op
    }
  }

  return (
    <Section id="contact" title="Contact" index="07" center>
      <Reveal stagger className="mx-auto max-w-2xl text-center">
        <RevealItem>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted">
            Actively seeking AI/ML and Software Engineering roles. Based in San Jose, CA — open to
            relocation anywhere in the US. On-site, hybrid, and remote welcome.
          </p>
        </RevealItem>

        <RevealItem className="mt-10 block" as="div">
          <ul>
          {links.map(({ label, value, href, external }) => {
            const isEmail = label === "Email";
            const isGithub = label === "GitHub";
            return (
              <li
                key={label}
                className="border-b border-line transition-colors first:border-t last:border-b-0 hover:bg-subtle/60"
              >
                {isEmail ? (
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="group flex w-full items-center justify-center gap-4 py-4 text-center"
                  >
                    <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-muted">
                      {label}
                    </span>
                    <span className="flex items-center gap-2 text-[15px] text-ink">
                      {value}
                      {copied ? (
                        <Check className="h-4 w-4 shrink-0 text-muted" />
                      ) : (
                        <Copy className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-ink" />
                      )}
                    </span>
                  </button>
                ) : (
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-center gap-4 py-4"
                  >
                    <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-muted">
                      {label}
                    </span>
                    <span className="flex items-center gap-2 text-[15px] text-ink underline-offset-4 group-hover:underline">
                      {value}
                      <ArrowUpRight
                        className={`h-4 w-4 shrink-0 transition-colors ${isGithub ? "text-accent" : "text-muted group-hover:text-ink"}`}
                      />
                    </span>
                  </a>
                )}
              </li>
            );
          })}
          </ul>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
