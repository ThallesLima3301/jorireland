import type { Tour, TourCategory } from "@/types/content";
import { toursData } from "./generated/tours.data";

export const tours: Tour[] = toursData;

export const tourCategories: { id: TourCategory; label: string; description: string }[] = [
  { id: "city-break", label: "City Breaks", description: "Three-day breaks in Dublin, Cork and Belfast." },
  { id: "short-tour", label: "4 to 7 Day Tours", description: "Focused journeys through one or two regions." },
  { id: "extended-tour", label: "8 to 10 Day Tours", description: "The full Irish experience, coast to coast." },
];

export const tourThemes: string[] = Array.from(new Set(tours.flatMap((t) => t.themes))).sort();

export function getTour(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getFeaturedTour(): Tour {
  return tours.find((t) => t.featured) ?? tours[0];
}

export function getRelatedTours(tour: Tour, count = 3): Tour[] {
  return tours
    .filter((t) => t.slug !== tour.slug)
    .map((t) => ({ t, score: t.themes.filter((th) => tour.themes.includes(th)).length + (t.category === tour.category ? 0.5 : 0) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(({ t }) => t);
}

export function durationLabel(days: number): string {
  return `${days} days`;
}
