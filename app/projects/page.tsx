import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ProjectsSection } from "@/components/projects-section";
import { identity } from "@/lib/data";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s — {name}" template so this
  // renders exactly as "Projects | Skanda Gonur Nagaraj", not doubled up.
  title: { absolute: `Projects | ${identity.name}` },
  description: "All projects — filterable by domain.",
};

export default function ProjectsPage() {
  return (
    <Container size="wide">
      <Reveal className="pt-14 sm:pt-20">
        <Link href="/#projects" className="link-underline inline-flex items-center gap-1.5 text-sm text-muted">
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
          Back
        </Link>

        <p className="kicker mt-8 text-accent">What I&apos;ve built</p>
        <h1 className="display mt-2 text-[clamp(28px,4vw,40px)] text-ink">Projects</h1>
      </Reveal>

      <div className="py-16 sm:py-20">
        <ProjectsSection />
      </div>
    </Container>
  );
}
