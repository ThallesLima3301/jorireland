import type { ItineraryItem } from "@/types/content";

const CONTINUATIONS = new Set([
  "of", "to", "at", "in", "on", "for", "with", "from", "by", "into", "onto", "across", "along", "through",
  "and", "or", "en", "via", "near", "around", "towards", "toward", "before", "after", "during", "within", "over",
]);

/**
 * Returns the separator between an itinerary item's emphasised label and its detail:
 * "Welcome shot" + "of Irish whiskey" → " ", "Lunch" + "– enjoyed en route" → " ",
 * "Visit to Kylemore Abbey" + "the famous Benedictine Monastery" → ", ".
 */
export function itemSeparator({ label, detail }: ItineraryItem): string {
  if (!detail) return "";
  if (/^[–—-]/.test(detail)) return " ";
  const firstWord = detail.split(/\s+/)[0].toLowerCase();
  if (!label.includes(" ")) return " ";
  return CONTINUATIONS.has(firstWord) ? " " : ", ";
}
