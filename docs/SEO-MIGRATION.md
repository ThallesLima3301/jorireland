# SEO migration and 301 redirect plan

The new site uses short, descriptive URLs. Every URL in the old XML sitemap, all 76 of them, returns a **301 Moved Permanently** to its closest equivalent. The redirects are defined in [`src/content/redirects.ts`](../src/content/redirects.ts) and were tested against a production build: all 76 return the expected target.

## New URL structure

| Page type | New URL |
| --- | --- |
| Home | `/` |
| Tours (all itineraries) | `/tours` |
| Tour detail | `/tours/<duration>-<name>`, e.g. `/tours/8-day-best-of-ireland` |
| Services hub | `/services` |
| Service detail | `/services/mice`, `/services/golf`, `/services/luxury-fit`, `/services/rugby`, `/services/equestrian`, `/services/active-retirement`, `/services/special-interest` |
| About | `/about`, `/about/history`, `/about/joe-oreilly` |
| Contact | `/contact` |
| Privacy | `/privacy-policy` |

## Redirect map: English pages on www.jorireland.com

Query strings such as `?hsLang=en` are preserved on the redirect and are harmless, because each page declares its own canonical URL.

| Old URL (www.jorireland.com) | New URL |
| --- | --- |
| `/en/group-tours-operator-ireland-dmc/4-day-tour-cork-and-the-ring-of-kerry-joe-oreilly-ireland-dmc` | `/tours/4-day-cork-and-the-ring-of-kerry` |
| `/en/group-tours-operator-ireland-dmc/8-day-self-drive-best-of-ireland-joe-oreilly-ireland-dmc` | `/tours/8-day-self-drive-best-of-ireland` |
| `/en/about-ireland-dmc/history-of-irelands-dmc/joe-oreilly-1932-2007` | `/about/joe-oreilly` |
| `/en/group-tours-operator-ireland-dmc/8-day-ireland-its-hidden-heartlands` | `/tours/8-day-ireland-its-hidden-heartlands` |
| `/en/group-tours-operator-ireland-dmc` | `/tours` |
| `/active-retired-tours-ireland` | `/services/active-retirement` |
| `/en/group-tours-operator-ireland-dmc/6-day-tour-ultimate-irish-golf-trip-joe-oreilly-ireland-dmc` | `/tours/6-day-ultimate-irish-golf-trip` |
| `/en/group-tours-operator-ireland-dmc/8-day-hiking-in-ireland-joe-oreilly-ireland-dmc` | `/tours/8-day-hiking-in-ireland` |
| `/en/group-tours-operator-ireland-dmc/4-day-tour-dublin-the-splendour-of-connemara-joe-oreilly-ireland-dmc` | `/tours/4-day-dublin-the-splendour-of-connemara` |
| `/en/group-tours-operator-ireland-dmc/5-day-tour-the-two-capitals-dublin-belfast-joe-oreilly-ireland-dmc` | `/tours/5-day-the-two-capitals-dublin-belfast` |
| `/en/group-tours-operator-ireland-dmc/3-day-dublin-and-irelands-ancient-east` | `/tours/3-day-dublin-and-irelands-ancient-east` |
| `/en/group-tours-operator-ireland-dmc/5-day-tour-dublin-the-wild-atlantic-way-joe-oreilly-ireland-dmc` | `/tours/5-day-dublin-the-wild-atlantic-way` |
| `/en/group-tours-operator-ireland-dmc/8-day-tours-of-famous-irish-film-locations` | `/tours/8-day-tours-of-famous-irish-film-locations` |
| `/en/group-tours-operator-ireland-dmc/10-day-grand-tour-of-ireland` | `/tours/10-day-grand-tour-of-ireland` |
| `/en/about-ireland-dmc` | `/about` |
| `/en/group-tours-operator-ireland-dmc/8-day-discover-the-splendour-of-ireland-joe-oreilly-ireland-dmc` | `/tours/8-day-discover-the-splendour-of-ireland` |
| `/en/group-tours-operator-ireland-dmc/8-day-best-of-ireland-joe-oreilly-ireland-dmc` | `/tours/8-day-best-of-ireland` |
| `/en/about-ireland-dmc/history-of-irelands-dmc` | `/about/history` |
| `/en/group-tours-operator-ireland-dmc/8-day-best-of-the-wild-atlantic-way` | `/tours/8-day-best-of-the-wild-atlantic-way` |
| `/en/group-tours-operator-ireland-dmc/3-day-city-break-dublin-joe-oreilly-ireland-dmc` | `/tours/3-day-city-break-dublin` |
| `/en/group-tours-operator-ireland-dmc/8-day-irelands-distilleries-breweries-pubs-joe-oreilly-ireland-dmc` | `/tours/8-day-irelands-distilleries-breweries-pubs` |
| `/en/group-tours-operator-ireland-dmc/3-day-city-break-belfast-joe-oreilly-ireland-dmc` | `/tours/3-day-city-break-belfast` |
| `/en/group-tours-operator-ireland-dmc/7-day-tour-discover-the-delights-of-ireland-joe-oreilly-ireland-dmc` | `/tours/7-day-discover-the-delights-of-ireland` |
| `/en/group-tours-operator-ireland-dmc/8-day-magic-of-ireland-joe-oreilly-ireland-dmc` | `/tours/8-day-magic-of-ireland` |
| `/en/group-tours-operator-ireland-dmc/4-day-tour-northern-ireland-joe-oreilly-ireland-dmc` | `/tours/4-day-northern-ireland` |
| `/en/group-tours-operator-ireland-dmc/4-day-tour-game-of-thrones-experience-joe-oreilly-ireland-dmc` | `/tours/4-day-game-of-thrones-experience` |
| `/en/best-mice-dmc-in-ireland` | `/services/mice` |
| `/en/group-tours-operator-ireland-dmc/8-day-ireland-north-south-joe-oreilly-ireland-dmc` | `/tours/8-day-ireland-north-south` |
| `/en/group-tours-operator-ireland-dmc/8-day-irelands-gardens-castles-manors-joe-oreilly-ireland-dmc` | `/tours/8-day-irelands-gardens-castles-manors` |
| `/en/golf-dmc-ireland` | `/services/golf` |
| `/en/group-tours-operator-ireland-dmc/8-day-archeological-heritage-tour-of-ireland` | `/tours/8-day-archaeological-heritage-tour` |
| `/en/group-tours-operator-ireland-dmc/3-day-city-break-cork` | `/tours/3-day-city-break-cork` |
| `/en/group-tours-operator-ireland-dmc/8-day-experience-irish-music-culture-dance` | `/tours/8-day-experience-irish-music-culture-dance` |
| `/en/group-tours-operator-ireland-dmc/8-day-ireland-and-our-culinary-delights` | `/tours/8-day-ireland-and-our-culinary-delights` |
| `/en/group-tours-operator-ireland-dmc/6-day-tour-viking-tour-of-ireland-joe-oreilly-ireland-dmc` | `/tours/6-day-viking-tour-of-ireland` |
| `/en/group-tours-operator-ireland-dmc/8-day-castle-tour-of-ireland-joe-oreilly-ireland-dmc` | `/tours/8-day-castle-tour-of-ireland` |
| `/en/group-tours-operator-ireland-dmc/8-day-in-the-footsteps-of-saint-patrick-joe-oreilly-ireland-dmc` | `/tours/8-day-in-the-footsteps-of-saint-patrick` |

## Redirect map: French duplicates

All 38 `/fr/…` and `/fr/en/…-0` URLs redirect to the matching English page. For example, `/fr/en/group-tours-operator-ireland-dmc/10-day-grand-tour-of-ireland-0` redirects to `/tours/10-day-grand-tour-of-ireland`. Any other `/fr/*` URL falls back to `/`, and any other `/en/group-tours-operator-ireland-dmc/*` URL falls back to `/tours`.

> The brief specifies an English-only site. Most of the old French URLs served English text anyway. If French-language pages are wanted later, the content model and routing can support an `/fr` locale, and these redirects would then be replaced.

## Redirect map: connect.jorireland.com

| Old URL | New URL |
| --- | --- |
| `connect.jorireland.com/en/luxury-fit-ireland-dmc` | `/services/luxury-fit` |
| `connect.jorireland.com/en/rugby-trips-to-ireland-dmc` | `/services/rugby` |
| `connect.jorireland.com/en/equestrian-tours-ireland-dmc` | `/services/equestrian` |
| `connect.jorireland.com/en/special-interest-tours` | `/services/special-interest` |
| `connect.jorireland.com/en/active-retirement-tours-ireland` | `/services/active-retirement` |

These host-based redirects only work if the `connect.jorireland.com` DNS record points at the new deployment and the hostname is added to the hosting project. If HubSpot must keep serving `connect.` for a while, set these redirects up inside HubSpot instead (Settings → Website → Domains & URLs → URL redirects).

## SEO features in the new build

- Unique `<title>`, meta description and canonical URL on every page, via the Next.js Metadata API (`src/lib/seo.ts`).
- Open Graph and Twitter card metadata, with page-specific images.
- `sitemap.xml` (45 URLs, including image entries) and `robots.txt`, generated from content.
- Structured data:
  - `TravelAgency` (organisation, both offices and social profiles) and `WebSite` on every page.
  - `BreadcrumbList` on inner pages.
  - `TouristTrip` with an itinerary on each tour page.
  - `Service` on each service page.
  - `ItemList` on `/tours`.
  - `Person` on the founder page.
- Exactly one `<h1>` per page and a logical heading hierarchy.
- Descriptive alt text on every content image.
- A real `404` status for unknown URLs (`src/proxy.ts`), with `noindex`.
- Internal linking: related tours on each tour page, "other services" on each service page, breadcrumbs, and footer links to every service.

## Go-live checklist

1. Deploy, set `NEXT_PUBLIC_SITE_URL=https://www.jorireland.com`, and test on the hosting provider's preview URL.
2. Point `www.jorireland.com` (and the apex `jorireland.com`) at the new host. Make the apex 301 to `www`.
3. Point `connect.jorireland.com` at the new host, or configure the five redirects in HubSpot.
4. Open the old URLs listed above and confirm each one returns a 301 to the right page.
5. In Google Search Console, verify the domain property and submit `https://www.jorireland.com/sitemap.xml`. Watch **Pages → Not indexed** and **Crawl stats** for two to four weeks.
6. Do the same in Bing Webmaster Tools.
7. Update the website URL on the Google Business Profile, Facebook, LinkedIn, USTOA and NTA listings, and in email signatures.
8. Keep the redirects in place for at least 12 months. Never remove them.
9. Before launch, add any marketing landing pages, campaign URLs or blog posts that existed in HubSpot but were not in the public sitemap to `pageMap` in `src/content/redirects.ts` (see OUTSTANDING-ITEMS.md).
