import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Tour } from "@/types/content";
import { cn } from "@/lib/cn";

export function TourCard({ tour, className, sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" }: { tour: Tour; className?: string; sizes?: string }) {
  const image = tour.card ?? tour.hero;
  return (
    <article className={cn("group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(15,42,33,0.06)] ring-1 ring-forest-900/8 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(10,28,22,0.45)]", className)}>
      <div className="relative aspect-4/3 overflow-hidden bg-cream-200">
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            quality={70}
            className="object-cover transition-transform duration-[1.2s] ease-(--ease-out-soft) group-hover:scale-105"
          />
        )}
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-forest-950/80 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur">
          <Clock aria-hidden className="size-3.5 text-gold-400" />
          {tour.durationDays} days
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-emerald-700">{tour.themes.slice(0, 2).join(" · ")}</p>
        <h3 className="mt-2 font-display text-2xl leading-snug font-medium text-forest-950">
          <Link href={`/tours/${tour.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {tour.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-ink-muted">{tour.summary}</p>
        <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-emerald-700 transition-colors group-hover:text-forest-900">
          View itinerary
          <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
      {/* Keyboard focus ring for the stretched link */}
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-gold-500 opacity-0 transition-opacity group-has-[a:focus-visible]:opacity-100" />
    </article>
  );
}
