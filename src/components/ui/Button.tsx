import type { ReactNode } from "react";
import Link from "next/link";
import { cn, isPlaceholderValue } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  className?: string;
};

type ButtonProps = BaseProps & {
  href: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-40 aria-disabled:cursor-not-allowed aria-disabled:opacity-45 aria-disabled:hover:translate-y-0 aria-disabled:hover:brightness-100";

const variants = {
  primary:
    "bg-gradient-to-r from-blue via-purple to-cyan text-bg shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:brightness-110 hover:-translate-y-0.5",
  secondary: "glass text-ink hover:border-cyan/30 hover:-translate-y-0.5",
  ghost: "text-ink-dim hover:text-ink",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  sm: "px-4 py-2 text-xs",
};

export function Button({
  href,
  children,
  icon,
  variant = "primary",
  size = "md",
  external,
  className,
}: ButtonProps) {
  const placeholder = isPlaceholderValue(href);
  const classes = cn(base, variants[variant], sizes[size], className);

  if (placeholder) {
    return (
      <span
        className={classes}
        aria-disabled="true"
        title="Link not yet added — update this in src/data/profile.ts"
      >
        {children}
        {icon}
      </span>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
