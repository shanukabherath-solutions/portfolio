import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { services, servicesNote } from "@/data/profile";

export function Services() {
  return (
    <section id="services" className="border-b border-line-soft py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll>
          <SectionHeading
            path="~/services"
            title="What I can build"
            description={servicesNote}
          />
        </RevealOnScroll>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <RevealOnScroll key={service.title} delay={i * 0.04}>
              <li className="h-full list-none">
                <GlassCard className="h-full p-5">
                  <h3 className="font-display text-base font-medium text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{service.description}</p>
                </GlassCard>
              </li>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
