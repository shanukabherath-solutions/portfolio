import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { certifications } from "@/data/profile";

export function Certifications() {
  return (
    <section id="certifications" className="border-b border-line-soft py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll>
          <SectionHeading path="~/certifications" title="Certifications" />
        </RevealOnScroll>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <RevealOnScroll key={cert.name} delay={i * 0.04}>
              <GlassCard className="flex items-start gap-3 p-5">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-ink/[0.03] text-cyan">
                  <Award size={15} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-medium leading-snug text-ink">{cert.name}</h3>
                  <p className="mt-1 text-xs text-ink-faint">{cert.issuer}</p>
                  <Badge tone={cert.status === "Completed" ? "accent" : "default"} className="mt-2">
                    {cert.status}
                  </Badge>
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
