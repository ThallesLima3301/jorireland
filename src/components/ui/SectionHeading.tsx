import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** Eyebrow + display heading + intro, used to open most sections. */
export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "dark", as: Tag = "h2", className }: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-4 flex items-center gap-3", align === "center" && "justify-center", light ? "text-gold-400" : "text-emerald-700")}>
          <span aria-hidden className={cn("h-px w-8", light ? "bg-gold-400/70" : "bg-emerald-600/60")} />
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-display text-[2.1rem] leading-[1.08] font-medium tracking-[-0.01em] sm:text-5xl",
          light ? "text-cream-50" : "text-forest-950",
        )}
      >
        {title}
      </Tag>
      {intro && <div className={cn("mt-5 text-lg leading-relaxed", light ? "text-cream-100/80" : "text-ink-muted")}>{intro}</div>}
    </div>
  );
}
