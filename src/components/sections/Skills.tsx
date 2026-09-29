import type { ComponentType } from "react";
import { Code2, Globe, BrainCircuit, Database, ShieldCheck, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { skillGroups } from "@/data/profile";

const CATEGORY_ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "Programming & Development": Code2,
  "Web Development": Globe,
  "AI & Machine Learning": BrainCircuit,
  Databases: Database,
  Cybersecurity: ShieldCheck,
  Tools: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="border-b border-line-soft py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll>
          <SectionHeading
            path="~/skills"
            title="Skills"
            description="Grouped by the kind of problem they help me solve, not ranked by percentage."
          />
        </RevealOnScroll>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = CATEGORY_ICONS[group.category] ?? Code2;
            return (
              <RevealOnScroll key={group.category} delay={i * 0.05}>
                <GlassCard className="h-full p-6 transition-colors hover:border-cyan/20">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-ink/[0.03] text-cyan">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-medium text-ink">{group.category}</h3>
                  </div>
                  <p className="mt-3 text-sm text-ink-dim">{group.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </GlassCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
