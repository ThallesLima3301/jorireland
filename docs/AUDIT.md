# Phase 1: audit of the existing website

Reviewed on 12 October 2026 from the public site only: `www.jorireland.com`, its XML sitemap, and the five service pages hosted on `connect.jorireland.com`. No backend access was used.

## 1. Structure and navigation

The XML sitemap lists **76 URLs**: 38 English pages and 38 duplicates under `/fr/` and `/fr/en/…-0`. Most of the French URLs actually serve English content.

| Section | Live URL(s) | Notes |
| --- | --- | --- |
| Home | `/` | Long single page: hero video, CEO message, testimonials, 8 service tiles, 8 service detail blocks, office contacts |
| Group Tours | `/en/group-tours-operator-ireland-dmc` | Lists 30 tours in three groups: City Breaks (4), 4 to 7 Day (9), 8 to 10 Day (17) |
| 30 tour pages | `/en/group-tours-operator-ireland-dmc/<slug>` | Highlights, day-by-day itinerary with photos, "What's included", brochure CTA |
| M.I.C.E | `/en/best-mice-dmc-in-ireland` | F.O.B.I.C. philosophy, venues, entertainment, conference-management capabilities |
| Golf | `/en/golf-dmc-ireland` | Ryder Cup 2006 / Arnold Palmer credential, courses, sample 6-day itinerary |
| About | `/en/about-ireland-dmc` | Company story, full CEO letter, service family, "Why choose us" (9 points) |
| History | `/en/about-ireland-dmc/history-of-irelands-dmc` | Timeline from 1966 to 2007 with archive images |
| Founder | `…/joe-oreilly-1932-2007` | Obituary reprinted from the trade press (February 2007) |
| Luxury F.I.T, Rugby, Equestrian, Special Interest, Active Retirement | `connect.jorireland.com/en/…` | Separate HubSpot landing-page domain; each page has a sample itinerary and a HubSpot form |

Main navigation: Group Tours · M.I.C.E · Golf · Luxury F.I.T · More DMC Services · About Us, plus an English/French switcher.

## 2. Services (verified)

Group Tours, M.I.C.E (meetings, incentives, conferences and events, including PCO services), Golf Trips, Luxury F.I.T, Rugby Group Trips, Equestrian Group Trips, Active Retired Tours Ireland (A.R.T.I) and Special Interest Trips.

## 3. Brand and visual identity

- **Logo:** "JOR" wordmark with a crown and an Ireland globe, plus "Joe O'Reilly Ireland DMC – Established 1966". Dark and light SVG versions exist.
- **Colours:** primary green `#008754`, bright green `#00C16E`, light grey `#F4F6FA`. The logo crown is gold `#C4A006`.
- **Media:** about 380 usable photographs (tour covers, a photo for every itinerary day, venues, golf courses, archive history images) and three hero videos of about 20 MB each.

## 4. Key messages and verified facts used in the rebuild

- Founded in 1966 in Cork by Joe O'Reilly (1932–2007). Led by his son Bernard O'Reilly since 1998.
- Described on the site as "the longest-established independent, family-run Destination Management Company in Ireland". This is the company's own positioning statement.
- Offices in Dublin and Cork. Sales directors for French-speaking markets and for North America.
- Ryder Cup 2006 at the K Club: managed the arrangements for Arnold Palmer and his entourage.
- 1975: launched Ireland's first International Horse Riding Academy.
- "Why choose us": same driver-guide throughout, one detailed invoice, multilingual staff, the highest credit rating available to any DMC in Ireland, 24/7 support.
- Testimonials from Odysseys Unlimited, Travel With Bradley, Good Story, a German tour operator and a Dubai tour operator.
- Partner logos shown: USTOA and NTA.

## 5. Contact information and lead generation

- Dublin: +353 181 20 200 · mice@jorireland.com · Block A, Santry Business Park, Airport Road, Dublin 9, D09 P5F8. Handles M.I.C.E, Rugby, Luxury F.I.T, Equestrian and Special Interest.
- Cork: +353 214 385 700 · sales@jorireland.com · River House, Blackpool Retail Park, Cork, T23 R5TF. Handles Group Tours, Golf and A.R.T.I.
- French office: Maude Breteau · +33 6 32 02 10 00 · mbreteau@jorireland.com
- North America: Sean Reilly · +1 913 706 0784 · sreilly@jorireland.com
- Lead capture on the old site relies on HubSpot CTAs (image buttons), brochure-download forms and a "Let's Chat" pop-up. None of these work outside HubSpot.

## 6. Weaknesses found

**UX and design**

- The homepage is very long and repeats each service twice: once as a tile and once as a full block.
- Calls to action are images (HubSpot CTA PNGs), so they are not accessible text, are not translatable and are not crawlable as links.
- The service catalogue is split across two domains (`www.` and `connect.`), with inconsistent navigation and headers.
- There is no single contact page. Offices are repeated at the bottom of every page.
- Several images have captions baked into the pixels.

**Content quality**

- Unedited template placeholder text appears on every tour page: "PROJECT … Name of the Client here www.clientsite.com … TIMELINE Start August 2019".
- Several "Read More" boxes on tour pages lead nowhere.
- Stale figures: the site says "55+ years", but the company was founded in 1966, so that is now 60 years.
- COVID-19 compliance blocks are still on the M.I.C.E and Golf pages.
- Typos: "Bendictine", "Storehoure", "exlusive", "Assitance", "Unparalled", "Archeological".
- Hotel ratings for city breaks conflict between the listing ("4-Star"), the highlights ("3 Star") and the inclusions ("3*/4*").
- Two phone numbers are listed for Sean Reilly: +1 913 706 0784 (all pages) and +1 913 401 58 24 (Golf page only).
- The "Best of Ireland" tour's Open Graph image is the Wild Atlantic Way tour's cover.

**SEO and technical**

- Most pages have no meta description, or a generic one ("Group Tours around Ireland with Ireland DMC").
- Several pages have multiple or empty `<h1>` elements. The homepage alone has 11, one of them empty.
- About and History share the same `<title>`.
- Slugs are long and keyword-stuffed (`…-joe-oreilly-ireland-dmc`).
- French URLs duplicate English content.
- There is no structured data.
- The pages are heavy: about 217 KB of HTML on the homepage, multiple 20 MB background videos, and third-party HubSpot scripts.

## 7. Opportunities implemented in the redesign

- One coherent site and navigation for all eight services, with clean URLs and 301 redirects from every old URL.
- Each homepage section has a clear job: hero, introduction and proof, services, the Irish experience, featured tours, why choose us, CEO, testimonials, call to action.
- Persistent calls to action: header button, mobile sticky bar, a closing CTA on every page, and "Request this tour" links that pre-fill the enquiry form.
- Every tour is a rich, indexable page with highlights, inclusions, a day-by-day itinerary, related tours and TouristTrip structured data.
- One accessible enquiry form routes each enquiry to the office that handles that trip type.
- Copy and typos were corrected, the template placeholders were removed and the year figures updated. Testimonials and the founder obituary are kept verbatim.
- Performance: WebP photography, responsive AVIF/WebP via `next/image`, self-hosted fonts, no third-party scripts, and static prerendering throughout.
