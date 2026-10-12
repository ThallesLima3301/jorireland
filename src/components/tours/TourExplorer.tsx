"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import type { Tour, TourCategory } from "@/types/content";
import { TourCard } from "./TourCard";
import { cn } from "@/lib/cn";

interface TourExplorerProps {
  tours: Tour[];
  categories: { id: TourCategory; label: string; description: string }[];
  themes: string[];
}

/** Tours grouped by duration, with an optional theme filter. Every card is server-rendered; filtering only hides cards. */
export function TourExplorer({ tours, categories, themes }: TourExplorerProps) {
  const [theme, setTheme] = useState<string | null>(null);
  const visible = theme ? tours.filter((t) => t.themes.includes(theme)) : tours;

  return (
    <div>
      <div className="sticky top-20 z-30 -mx-5 border-b border-forest-900/10 bg-cream-50/95 px-5 py-4 backdrop-blur-md md:mx-0 md:rounded-2xl md:border md:px-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Tour durations" className="flex gap-2 overflow-x-auto">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="shrink-0 rounded-full border border-forest-900/15 px-4 py-2 text-sm font-semibold text-forest-900 transition-colors hover:border-forest-900 hover:bg-forest-900 hover:text-cream-50"
              >
                {c.label}
              </a>
            ))}
          </nav>
          <div role="group" aria-label="Filter tours by theme" className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
            <FilterChip active={theme === null} onClick={() => setTheme(null)}>
              All themes
            </FilterChip>
            {themes.map((th) => (
              <FilterChip key={th} active={theme === th} onClick={() => setTheme(theme === th ? null : th)}>
                {th}
              </FilterChip>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {theme ? `Showing ${visible.length} tours with the theme ${theme}.` : `Showing all ${tours.length} tours.`}
      </p>

      {categories.map((c) => {
        const list = visible.filter((t) => t.category === c.id);
        return (
          <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className="pt-16">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-forest-900/10 pb-5">
              <div>
                <h2 id={`${c.id}-title`} className="font-display text-3xl font-medium text-forest-950 md:text-4xl">
                  {c.label}
                </h2>
                <p className="mt-1 text-ink-muted">{c.description}</p>
              </div>
              <p className="text-sm font-semibold text-emerald-700">
                {list.length} {list.length === 1 ? "itinerary" : "itineraries"}
              </p>
            </div>
            {list.length ? (
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((t) => (
                  <li key={t.slug}>
                    <TourCard tour={t} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-8 rounded-2xl bg-cream-100 p-6 text-ink-muted">
                No {c.label.toLowerCase()} match this theme, but every itinerary can be tailored.{" "}
                <Link href="/contact" className="font-semibold text-emerald-700 underline-offset-4 hover:underline">
                  Ask us about a bespoke tour
                </Link>
                .
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
        active ? "bg-emerald-600 text-white" : "bg-cream-100 text-forest-800 hover:bg-cream-200",
      )}
    >
      {children}
    </button>
  );
}
