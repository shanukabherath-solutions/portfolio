import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { experience, graphicDesignNote } from "@/data/profile";

export function Experience() {
  return (
    <section id="experience" className="border-b border-line-soft py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll>
          <SectionHeading path="~/experience" title="Experience" />
        </RevealOnScroll>

        <ol className="mt-10 space-y-5">
          {experience.map((role, i) => (
            <RevealOnScroll key={role.role + role.organisation} delay={i * 0.05}>
              <li>
                <GlassCard className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-medium text-ink">{role.role}</h3>
                    <span className="font-mono text-xs text-ink-faint">{role.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-cyan/80">{role.organisation}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-dim">{role.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.highlights.map((highlight) => (
                      <Badge key={highlight}>{highlight}</Badge>
                    ))}
                  </div>
                </GlassCard>
              </li>
            </RevealOnScroll>
          ))}

          <RevealOnScroll delay={experience.length * 0.05}>
            <li className="rounded-2xl border border-dashed border-line px-6 py-6 text-center text-sm text-ink-faint sm:text-left">
              Further software-development or freelance experience will appear here as it&apos;s added.
            </li>
          </RevealOnScroll>
        </ol>

        <RevealOnScroll delay={0.1}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-dim">{graphicDesignNote}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
