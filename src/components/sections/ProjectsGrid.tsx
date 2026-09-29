import { Github } from "@/components/ui/BrandIcons";
import { smallProjects } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ProjectsGrid() {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {smallProjects.map((project, i) => (
        <RevealOnScroll key={project.slug} delay={i * 0.05}>
          <GlassCard className="flex h-full flex-col p-6 transition-colors hover:border-cyan/20">
            <div className="flex items-center justify-between gap-2">
              <Badge tone="muted">{project.category}</Badge>
              {project.status === "In Progress" ? <Badge tone="accent">In Progress</Badge> : null}
            </div>

            <h3 className="mt-4 font-display text-lg font-medium text-ink">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-dim">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <div className="mt-5">
              <Button
                href={project.githubUrl.href}
                external
                variant="ghost"
                size="sm"
                className="px-0"
                icon={<Github size={14} aria-hidden="true" />}
              >
                View on GitHub
              </Button>
            </div>
          </GlassCard>
        </RevealOnScroll>
      ))}
    </div>
  );
}
