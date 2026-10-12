import type { ComponentType } from "react";
import {
  FolderSearch,
  GitBranch,
  Container,
  ListChecks,
  ShieldCheck,
  UserCheck,
  BookOpen,
  Images,
} from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import { aesaProject } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const STAGE_ICONS: ComponentType<{ size?: number; className?: string }>[] = [
  FolderSearch,
  GitBranch,
  Container,
  ListChecks,
  ShieldCheck,
  UserCheck,
];

/** Illustrative workflow diagram built from the project's documented features. Not a screenshot. */
function PipelineVisual() {
  const stages = aesaProject.pipeline;

  return (
    <div
      className="glass w-full overflow-hidden rounded-2xl"
      role="img"
      aria-label={`Simplified AESA workflow: ${stages.map((s) => s.label).join(", then ")}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="ml-3 font-mono text-xs text-ink-faint">aesa — workflow</span>
      </div>

      <ol className="relative px-5 py-5" aria-hidden="true">
        {/* connecting line */}
        <span className="absolute bottom-9 left-[2.15rem] top-9 w-px bg-gradient-to-b from-blue/40 via-purple/40 to-cyan/40" />
        {stages.map((stage, i) => {
          const Icon = STAGE_ICONS[i] ?? ShieldCheck;
          return (
            <li key={stage.label} className="relative flex gap-4 pb-5 last:pb-0">
              <span className="relative z-10 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-bg-panel text-cyan">
                <Icon size={16} />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-sm font-medium text-ink">{stage.label}</p>
                <p className="mt-0.5 text-xs leading-snug text-ink-faint">{stage.detail}</p>
                {stage.tools?.length ? (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {stage.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded border border-line-soft px-1.5 py-0.5 font-mono text-[10px] text-ink-dim"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="border-t border-line px-5 py-3 font-mono text-xs text-ink-faint">
        <span className="text-cyan/80">$</span> security gate: block on failed checks
      </div>
    </div>
  );
}

export function AesaProjectCard() {
  const { links } = aesaProject;
  const hasScreenshots = Boolean(links.screenshots.href);

  return (
    <RevealOnScroll>
      <article
        aria-labelledby="aesa-title"
        className="glass overflow-hidden rounded-3xl p-6 sm:p-10"
      >
        <div className="flex flex-wrap items-center gap-2">
          {aesaProject.categories.map((category) => (
            <Badge key={category} tone="accent">
              {category}
            </Badge>
          ))}
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.06] text-cyan">
                <ShieldCheck size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 id="aesa-title" className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {aesaProject.title}
                </h3>
                <p className="text-sm text-cyan/80">{aesaProject.fullName}</p>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink">{aesaProject.summary}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-dim">
              {aesaProject.description}
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {aesaProject.featureGroups.map((group) => (
                <div key={group.group}>
                  <h4 className="font-mono text-xs text-cyan/70">{group.group}</h4>
                  <ul className="mt-2 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-cyan/30 pl-3 text-sm leading-snug text-ink-dim"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {aesaProject.technologies.map((tech) => (
                <Badge key={tech} tone="muted">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={links.github.href}
                external
                icon={<Github size={15} aria-hidden="true" />}
              >
                {links.github.label}
              </Button>
              <Button
                href={links.documentation.href}
                external
                variant="secondary"
                icon={<BookOpen size={15} aria-hidden="true" />}
              >
                {links.documentation.label}
              </Button>
              {hasScreenshots ? (
                <Button
                  href={links.screenshots.href}
                  external
                  variant="secondary"
                  icon={<Images size={15} aria-hidden="true" />}
                >
                  {links.screenshots.label}
                </Button>
              ) : null}
            </div>
          </div>

          <PipelineVisual />
        </div>
      </article>
    </RevealOnScroll>
  );
}
