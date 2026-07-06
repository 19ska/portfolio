import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Publications } from "@/components/publications";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
    </>
  );
}
