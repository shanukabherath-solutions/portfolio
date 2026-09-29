import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  path: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ path, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="font-mono text-sm text-cyan/80">{path}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-dim">{description}</p>
      ) : null}
    </div>
  );
}
