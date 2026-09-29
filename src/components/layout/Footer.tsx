import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/profile";
import { isPlaceholderValue, mailtoHref } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: siteConfig.social.github, icon: Github },
    { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
    { label: "Email", href: mailtoHref(siteConfig.email), icon: Mail },
  ];

  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm text-ink">{siteConfig.initials} / {siteConfig.shortName}</p>
          <p className="mt-1 text-xs text-ink-faint">
            &copy; {year} {siteConfig.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {links.map(({ label, href, icon: Icon }) => {
            const disabled = isPlaceholderValue(href) || href === "#";
            return disabled ? (
              <span
                key={label}
                className="text-ink-faint"
                aria-hidden="true"
                title={`${label} link not yet added`}
              >
                <Icon size={18} />
              </span>
            ) : (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer noopener"}
                className="text-ink-dim transition-colors hover:text-cyan"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
