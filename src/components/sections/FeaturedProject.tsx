import { ExternalLink, PlayCircle } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import { featuredProject } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PhotosphereMockup } from "./PhotosphereMockup";
import { CaseStudy } from "./CaseStudy";

export function FeaturedProject() {
  return (
    <RevealOnScroll>
      <div className="glass overflow-hidden rounded-3xl border-cyan/10 p-6 sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="accent">Featured project</Badge>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <PhotosphereMockup />

          <div>
            <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {featuredProject.title}
            </h3>
            <p className="mt-2 text-sm text-cyan/80">{featuredProject.tagline}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-dim">
              {featuredProject.description}
            </p>

            <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {featuredProject.features.map((feature) => (
                <li
                  key={feature}
                  className="border-l-2 border-cyan/30 pl-3 text-sm leading-snug text-ink-dim"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.technologies.map((tech) => (
                <Badge key={tech} tone="muted">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={featuredProject.links.github.href}
                external
                variant="secondary"
                icon={<Github size={15} aria-hidden="true" />}
              >
                GitHub
              </Button>
              <Button
                href={featuredProject.links.liveDemo.href}
                external
                icon={<ExternalLink size={15} aria-hidden="true" />}
              >
                Live Demo
              </Button>
              <Button
                href={featuredProject.links.demoVideo.href}
                external
                variant="secondary"
                icon={<PlayCircle size={15} aria-hidden="true" />}
              >
                Demo Video
              </Button>
            </div>
          </div>
        </div>

        <CaseStudy sections={featuredProject.caseStudy} />
      </div>
    </RevealOnScroll>
  );
}
