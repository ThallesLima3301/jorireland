import { toursData } from "./generated/tours.data";

/**
 * 301 redirects from the former HubSpot URLs to the new routes.
 * Query strings such as ?hsLang=en are ignored by Next.js path matching, so they are covered automatically.
 * See docs/SEO-MIGRATION.md for the full plan.
 */

export interface LegacyRedirect {
  source: string;
  destination: string;
  statusCode: 301;
  has?: { type: "host"; value: string }[];
}

const TOURS_BASE = "/en/group-tours-operator-ireland-dmc/";

const pageMap: Record<string, string> = {
  "/en": "/",
  "/en/home": "/",
  "/fr/home": "/",
  "/en/about-ireland-dmc": "/about",
  "/fr/en/about-ireland-dmc-0": "/about",
  "/en/about-ireland-dmc/history-of-irelands-dmc": "/about/history",
  "/fr/about-ireland-dmc/history-of-irelands-dmc-0": "/about/history",
  "/en/about-ireland-dmc/history-of-irelands-dmc/joe-oreilly-1932-2007": "/about/joe-oreilly",
  "/fr/about-ireland-dmc/history-of-irelands-dmc/joe-oreilly-1932-2007": "/about/joe-oreilly",
  "/en/group-tours-operator-ireland-dmc": "/tours",
  "/fr/group-tours-operator-ireland-dmc-0": "/tours",
  "/en/best-mice-dmc-in-ireland": "/services/mice",
  "/fr/best-mice-dmc-in-ireland": "/services/mice",
  "/en/golf-dmc-ireland": "/services/golf",
  "/fr/golf-dmc-ireland": "/services/golf",
  "/active-retired-tours-ireland": "/services/active-retirement",
  "/fr/covid-19-safety-protocol": "/contact",
  "/services/group-tours": "/tours",
};

const tourRedirects: [string, string][] = toursData.flatMap((tour) => {
  const legacySlug = tour.legacyPath.replace(TOURS_BASE, "");
  const destination = `/tours/${tour.slug}`;
  return [
    [tour.legacyPath, destination],
    // French-language duplicates of the English tour pages, e.g. /fr/en/group-tours-operator-ireland-dmc/<slug>-0
    [`/fr/en/group-tours-operator-ireland-dmc/${legacySlug}-0`, destination],
    [`/fr/group-tours-operator-ireland-dmc/${legacySlug}-0`, destination],
  ];
});

/** Service pages previously hosted on connect.jorireland.com (only active if that hostname points at this deployment). */
const connectMap: Record<string, string> = {
  "/en/active-retirement-tours-ireland": "/services/active-retirement",
  "/en/equestrian-tours-ireland-dmc": "/services/equestrian",
  "/en/luxury-fit-ireland-dmc": "/services/luxury-fit",
  "/en/rugby-trips-to-ireland-dmc": "/services/rugby",
  "/en/special-interest-tours": "/services/special-interest",
};

export function legacyRedirects(siteUrl: string): LegacyRedirect[] {
  return [
    ...Object.entries(pageMap).map(([source, destination]) => ({ source, destination, statusCode: 301 as const })),
    ...tourRedirects.map(([source, destination]) => ({ source, destination, statusCode: 301 as const })),
    ...Object.entries(connectMap).map(([source, destination]) => ({
      source,
      destination: `${siteUrl}${destination}`,
      statusCode: 301 as const,
      has: [{ type: "host" as const, value: "connect.jorireland.com" }],
    })),
    // Any other legacy /en/ or /fr/ URL falls back to the closest section rather than a 404.
    { source: "/en/group-tours-operator-ireland-dmc/:path*", destination: "/tours", statusCode: 301 },
    { source: "/fr/:path*", destination: "/", statusCode: 301 },
  ];
}

/** Exposed for documentation and link checks. */
export const redirectTable = { pageMap, connectMap, tourRedirects };
