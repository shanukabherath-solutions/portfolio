import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { isPlaceholderValue, mailtoHref } from "@/lib/utils";

export function Contact() {
  const rows = [
    { label: "Email", value: siteConfig.email, href: mailtoHref(siteConfig.email), icon: Mail, external: false },
    { label: "LinkedIn", value: "LinkedIn profile", href: siteConfig.social.linkedin, icon: Linkedin, external: true },
    { label: "GitHub", value: "GitHub profile", href: siteConfig.social.github, icon: Github, external: true },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll>
          <SectionHeading
            path="~/contact"
            title="Let's Build Something"
            description="Looking for an internship, an entry-level role, or a small project built? Send a message and I'll get back to you."
          />
        </RevealOnScroll>

        <div className="mt-10 max-w-4xl">
          <RevealOnScroll>
            <ul className="grid gap-3 sm:grid-cols-3">
              {rows.map(({ label, value, href, icon: Icon, external }) => {
                const disabled = isPlaceholderValue(siteConfig.email) && label === "Email" ? true : isPlaceholderValue(href) || href === "#";
                const content = (
                  <>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-ink/[0.03] text-cyan">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-ink-faint">{label}</span>
                      <span className="block text-sm text-ink">
                        {disabled ? "Coming soon" : value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {disabled ? (
                      <div className="glass flex min-h-20 items-center gap-3 rounded-xl p-4 opacity-70">{content}</div>
                    ) : (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                        className="glass flex min-h-20 items-center gap-3 rounded-xl p-4 transition-colors hover:border-cyan/30"
                      >
                        {content}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
