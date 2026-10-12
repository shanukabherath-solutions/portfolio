import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FeaturedProject } from "./FeaturedProject";
import { AesaProjectCard } from "./AesaProjectCard";
import { ProjectsGrid } from "./ProjectsGrid";

export function Projects() {
  return (
    <section id="projects" className="border-b border-line-soft py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll>
          <SectionHeading
            path="~/projects"
            title="Projects"
            description="Two larger builds, an AI photo editor and an AI-assisted security agent, plus a few smaller cybersecurity exercises."
          />
        </RevealOnScroll>

        <div className="mt-10">
          <FeaturedProject />
        </div>

        <div className="mt-8">
          <AesaProjectCard />
        </div>

        <ProjectsGrid />
      </div>
    </section>
  );
}
