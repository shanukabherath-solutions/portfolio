import Image from "next/image";
import { Scissors, Palette, Sparkles, Waves, Maximize2, Undo2, Redo2, Mic } from "lucide-react";
import { featuredProject } from "@/data/profile";

const TOOLBAR = [
  { icon: Scissors, label: "Background removal" },
  { icon: Palette, label: "Colour enhancement" },
  { icon: Sparkles, label: "Sharpening" },
  { icon: Waves, label: "Noise reduction" },
  { icon: Maximize2, label: "Upscaling" },
];

export function PhotosphereMockup() {
  const prompt = featuredProject.promptExamples[0];
  const { before, after } = featuredProject.media;
  const hasRealImages = Boolean(before && after);

  return (
    <div
      className="glass w-full overflow-hidden rounded-2xl"
      role="img"
      aria-label={
        hasRealImages
          ? "Photosphere editor showing a before and after photo edit"
          : "Illustrative mockup of the Photosphere editing interface"
      }
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="ml-3 font-mono text-xs text-ink-faint">photosphere — editor</span>
      </div>

      {/* Before / after canvas */}
      <div className="relative mx-5 mt-5 h-48 overflow-hidden rounded-xl border border-line sm:h-56">
        {hasRealImages ? (
          <>
            <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
              <Image
                src={before}
                alt="Photo before editing in Photosphere"
                fill
                sizes="(min-width: 640px) 320px, 260px"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
              <Image
                src={after}
                alt="Same photo after editing in Photosphere"
                fill
                sizes="(min-width: 640px) 320px, 260px"
                className="object-cover"
              />
            </div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-bg-panel to-bg-soft" />
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-blue/25 via-purple/15 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-cyan/25 via-blue/10 to-transparent" />
          </>
        )}
        <span className="absolute left-3 top-3 rounded bg-bg/60 px-1.5 py-0.5 font-mono text-[10px] text-ink-dim backdrop-blur-sm">
          before
        </span>
        <span className="absolute right-3 top-3 rounded bg-bg/60 px-1.5 py-0.5 font-mono text-[10px] text-ink-dim backdrop-blur-sm">
          after
        </span>
        <div className="absolute inset-y-0 left-1/2 flex w-px -translate-x-1/2 items-center bg-line">
          <span className="flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-line bg-bg-panel text-ink-dim">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M4 2 1 6l3 4M8 2l3 4-3 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* Sinhala prompt bubble */}
      <div className="mx-5 mt-4 flex items-start gap-2 rounded-xl border border-line bg-ink/[0.03] px-4 py-3">
        <Mic size={14} className="mt-0.5 shrink-0 text-cyan" aria-hidden="true" />
        <div>
          <p className="text-sm text-ink" lang="si">
            {prompt.sinhala}
          </p>
          <p className="mt-0.5 text-xs text-ink-faint">&ldquo;{prompt.translation}&rdquo;</p>
        </div>
      </div>

      {/* Icon toolbar */}
      <div className="mx-5 mb-5 mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {TOOLBAR.map(({ icon: Icon, label }) => (
            <span
              key={label}
              title={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-dim"
            >
              <Icon size={15} aria-hidden="true" />
              <span className="sr-only">{label}</span>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-ink-faint">
          <Undo2 size={16} aria-hidden="true" />
          <Redo2 size={16} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
