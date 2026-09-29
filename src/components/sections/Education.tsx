import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { education } from "@/data/profile";

export function Education() {
  return (
    <section id="education" className="border-b border-line-soft py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll>
          <SectionHeading path="~/education" title="Education" />
        </RevealOnScroll>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {education.map((item, i) => (
            <RevealOnScroll key={item.qualification} delay={i * 0.06}>
              <GlassCard className="flex h-full gap-4 p-6">
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-ink/[0.03] text-cyan">
                  <GraduationCap size={17} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-medium text-ink">
                    {item.qualification}
                  </h3>
                  <p className="mt-1 text-sm text-ink-dim">{item.institution}</p>
                  <p className="mt-2 font-mono text-xs text-ink-faint">{item.status}</p>
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
