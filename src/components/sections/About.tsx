import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { about } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="border-b border-line-soft py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll>
          <SectionHeading path="~/about" title="About" />
        </RevealOnScroll>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <RevealOnScroll delay={0.05}>
            <div className="space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-2xl text-base leading-relaxed text-ink-dim">
                  {paragraph}
                </p>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12}>
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-xs text-ink-faint">interests</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <Badge key={interest}>{interest}</Badge>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
