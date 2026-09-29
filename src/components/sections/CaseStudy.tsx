import { ChevronDown } from "lucide-react";
import type { CaseStudySection } from "@/types";

export function CaseStudy({ sections }: { sections: CaseStudySection[] }) {
  return (
    <details className="group glass mt-8 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
        <span>
          <span className="font-display text-base font-medium text-ink">Read the full case study</span>
          <span className="mt-0.5 block text-sm text-ink-dim">
            Problem, architecture, AI integration, testing, and what&apos;s next.
          </span>
        </span>
        <ChevronDown
          size={18}
          className="shrink-0 text-ink-dim transition-transform duration-300 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>

      <div className="border-t border-line px-6 pb-8 pt-6">
        <ol className="space-y-8">
          {sections.map((section, index) => (
            <li key={section.heading} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6">
              <div className="flex items-baseline gap-2 sm:flex-col sm:items-start sm:gap-1">
                <span className="font-mono text-xs text-cyan/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display text-sm font-medium text-ink">{section.heading}</h4>
              </div>
              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-ink-dim">
                    {paragraph}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </details>
  );
}
