import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "accent" | "muted";
  className?: string;
};

const tones = {
  default: "border-line bg-ink/[0.03] text-ink-dim",
  accent: "border-cyan/25 bg-cyan/[0.06] text-cyan",
  muted: "border-line-soft bg-transparent text-ink-faint",
};

export function Badge({ children, tone = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
