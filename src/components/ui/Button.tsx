import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "emerald" | "outline" | "outline-light" | "link" | "link-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-all duration-300 ease-(--ease-out-soft) disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "rounded-full bg-gold-500 text-forest-950 hover:bg-gold-400 shadow-[0_8px_24px_-12px_rgba(196,160,6,0.7)]",
  emerald: "rounded-full bg-emerald-600 text-white hover:bg-emerald-700",
  outline: "rounded-full border border-forest-900/25 text-forest-900 hover:border-forest-900 hover:bg-forest-900 hover:text-cream-50",
  "outline-light": "rounded-full border border-white/40 text-white backdrop-blur-sm hover:bg-white hover:text-forest-950",
  link: "text-emerald-700 hover:text-forest-900 underline-offset-4 hover:underline",
  "link-light": "text-gold-400 hover:text-white underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

interface ButtonStyleProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

export function buttonClasses({ variant = "primary", size = "md", className }: Omit<ButtonStyleProps, "children" | "arrow">) {
  const isLink = variant === "link" || variant === "link-light";
  return cn(base, variants[variant], !isLink && sizes[size], className);
}

function Content({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />}
    </>
  );
}

export function ButtonLink({
  href,
  variant,
  size,
  arrow,
  className,
  children,
  ...rest
}: ButtonStyleProps & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  const external = typeof href === "string" && /^(https?:|mailto:|tel:)/.test(href);
  const classes = cn("group/btn", buttonClasses({ variant, size, className }));
  if (external) {
    return (
      <a href={href as string} className={classes} {...(href.toString().startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        <Content arrow={arrow}>{children}</Content>
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      <Content arrow={arrow}>{children}</Content>
    </Link>
  );
}
