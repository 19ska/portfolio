import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealOnScroll } from "@/components/ui/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { ProjectsSection } from "@/components/projects-section";
import { about, education, identity, projects, publications, roles, skillGroups } from "@/lib/data";

const pill =
  "kicker rounded-full border border-ink px-5 py-2.5 text-ink transition-colors hover:bg-ink hover:text-paper";

export default function Home() {
  return (
    <>
      {/* Hero — name, tagline, contact pills, and three stat cards. Nothing else. */}
      <section id="top" className="border-b border-hairline">
        <Container size="wide" className="grid grid-cols-1 gap-16 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="kicker text-accent">{identity.role}</p>
            <h1 className="display mt-4 text-[clamp(48px,7vw,84px)] text-ink">
              {identity.shortName}
              <br />
              <span className="italic text-accent">{identity.lastName}</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">{identity.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${identity.email}`} className={pill}>
                Email
              </a>
              <a href={identity.github} target="_blank" rel="noopener noreferrer" className={pill}>
                GitHub
              </a>
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className={pill}>
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-line px-6 py-5">
              <span className="kicker text-faint">Projects built</span>
              <span className="display text-3xl text-ink">{projects.length}</span>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-line px-6 py-5">
              <span className="kicker text-faint">Years experience</span>
              <span className="display text-3xl text-ink">{identity.yearsExperience}</span>
            </div>
            <div className="rounded-2xl border border-line px-6 py-5">
              <span className="kicker text-faint">Open to roles</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {identity.openToRoles.map((r) => (
                  <span key={r} className="rounded-full bg-wash px-3 py-1 text-xs font-medium text-ink">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* About — two sentences, right under the fold. */}
      <section className="border-b border-hairline">
        <Container size="wide" className="py-16 sm:py-20">
          <RevealOnScroll className="max-w-2xl space-y-3 text-base leading-relaxed text-ink">
            {about.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </RevealOnScroll>
        </Container>
      </section>

      {/* Skills & Stack — category pill, tags flowing beside it. */}
      <section id="skills" className="border-b border-hairline scroll-mt-16">
        <Container size="wide" className="py-16 sm:py-20">
          <RevealOnScroll className="mb-10">
            <p className="kicker text-accent">What I work with</p>
            <h2 className="display mt-2 text-[clamp(28px,4vw,40px)] text-ink">Skills &amp; stack</h2>
          </RevealOnScroll>

          <div className="divide-y divide-hairline border-t border-hairline">
            {skillGroups.map((group, i) => (
              <RevealOnScroll
                key={group.category}
                delay={Math.min(i * 0.04, 0.2)}
                className="flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:gap-6"
              >
                <span className="kicker w-fit shrink-0 rounded-full border border-accent/30 px-3 py-1 text-accent sm:w-44">
                  {group.category}
                </span>
                <div className="flex flex-1 flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span key={s} className="rounded-md border border-line px-3 py-1.5 text-xs text-ink">
                      {s}
                    </span>
                  ))}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects — tabbed filter, full bullets and metrics inline, straight to GitHub. */}
      <section id="projects" className="border-b border-hairline scroll-mt-16">
        <Container size="wide" className="py-16 sm:py-20">
          <RevealOnScroll className="mb-10">
            <p className="kicker text-accent">What I&apos;ve built</p>
            <h2 className="display mt-2 text-[clamp(28px,4vw,40px)] text-ink">Projects</h2>
          </RevealOnScroll>

          <ProjectsSection />
        </Container>
      </section>

      {/* Experience — every role, in full. No accordion, nothing to open. */}
      <section id="experience" className="border-b border-hairline scroll-mt-16">
        <Container size="wide" className="py-16 sm:py-20">
          <RevealOnScroll className="mb-10">
            <p className="kicker text-accent">Where I&apos;ve worked</p>
            <h2 className="display mt-2 text-[clamp(28px,4vw,40px)] text-ink">Experience</h2>
          </RevealOnScroll>

          <div className="divide-y divide-hairline border-t border-hairline">
            {roles.map((role, i) => (
              <RevealOnScroll
                key={role.slug}
                delay={Math.min(i * 0.04, 0.2)}
                className="flex flex-col gap-2 py-8 sm:flex-row sm:gap-10"
              >
                <div className="w-full shrink-0 sm:w-44">
                  <p className="kicker text-faint">{role.dates}</p>
                  <p className="mt-1 text-xs text-faint">{role.location}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ink">{role.role}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{role.company}</p>
                  <ul className="mt-4 space-y-2.5">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="bullet text-sm leading-relaxed text-muted">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Education — degrees in full, coursework as tags. */}
      <section id="education" className="border-b border-hairline scroll-mt-16">
        <Container size="wide" className="py-16 sm:py-20">
          <RevealOnScroll className="mb-10">
            <p className="kicker text-accent">Academic background</p>
            <h2 className="display mt-2 text-[clamp(28px,4vw,40px)] text-ink">Education</h2>
          </RevealOnScroll>

          <div className="divide-y divide-hairline border-t border-hairline">
            {education.map((ed, i) => (
              <RevealOnScroll
                key={ed.degree}
                delay={Math.min(i * 0.05, 0.2)}
                className="flex flex-col gap-2 py-8 sm:flex-row sm:gap-10"
              >
                <div className="w-full shrink-0 sm:w-44">
                  <p className="kicker text-faint">{ed.dates}</p>
                  <p className="mt-1 text-xs text-faint">{ed.location}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ink">{ed.school}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{ed.degree}</p>
                  <p className="mt-1 text-xs text-faint">GPA {ed.gpa}</p>
                  <div className="mt-4">
                    <p className="kicker text-faint">Relevant coursework</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {ed.coursework.map((c) => (
                        <span key={c} className="rounded-md border border-line px-2.5 py-1 text-xs text-ink">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Publications — the research record, same timeline pattern. */}
      <section id="publications" className="border-b border-hairline scroll-mt-16">
        <Container size="wide" className="py-16 sm:py-20">
          <RevealOnScroll className="mb-10">
            <p className="kicker text-accent">Research</p>
            <h2 className="display mt-2 text-[clamp(28px,4vw,40px)] text-ink">Publications</h2>
          </RevealOnScroll>

          <div className="divide-y divide-hairline border-t border-hairline">
            {publications.map((pub, i) => (
              <RevealOnScroll
                key={pub.title}
                delay={Math.min(i * 0.05, 0.2)}
                className="flex flex-col gap-2 py-8 sm:flex-row sm:gap-10"
              >
                <div className="w-full shrink-0 sm:w-44">
                  <p className="kicker text-faint">{pub.date || (pub.upcoming ? "Upcoming" : "")}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-snug text-ink">{pub.title}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {[pub.journal, pub.issn].filter(Boolean).join(" · ")}
                  </p>
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline mt-3 inline-flex items-center gap-1 text-sm font-medium text-ink"
                    >
                      Read the publication
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </a>
                  ) : null}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact — centered close, same three pills as the hero. */}
      <section id="contact" className="scroll-mt-16">
        <Container size="page" className="flex flex-col items-center py-20 text-center sm:py-28">
          <RevealOnScroll className="flex flex-col items-center">
            <p className="kicker text-accent">Let&apos;s connect</p>
            <h2 className="display mt-3 text-[clamp(32px,5vw,52px)] text-ink">Open to opportunities.</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              {identity.availability}. Feel free to reach out.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${identity.email}`} className={pill}>
                Email me
              </a>
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className={pill}>
                LinkedIn
              </a>
              <a href={identity.github} target="_blank" rel="noopener noreferrer" className={pill}>
                GitHub
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-faint transition-colors hover:text-ink"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-faint transition-colors hover:text-ink"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
