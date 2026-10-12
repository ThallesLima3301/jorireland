import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { cn } from "@/lib/cn";

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail (last item is the current page) plus BreadcrumbList structured data. */
export function Breadcrumbs({ items, tone = "light", className }: { items: Crumb[]; tone?: "light" | "dark"; className?: string }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={className}>
        <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm", tone === "light" ? "text-white/75" : "text-ink-muted")}>
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={tone === "light" ? "text-white" : "text-forest-950"}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className="underline-offset-4 hover:underline">
                      {c.name}
                    </Link>
                    <ChevronRight aria-hidden className="size-3.5 opacity-60" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(all)} />
    </>
  );
}
