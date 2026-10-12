# Joe O'Reilly Ireland DMC: website

A rebuild of [jorireland.com](https://www.jorireland.com/) as a fast, statically generated Next.js site. It replaces the HubSpot CMS front end. Content, photography and URLs were recovered from the public website only. No HubSpot backend, API or private data was used.

| | |
| --- | --- |
| Framework | Next.js 16.4 (App Router, Cache Components, Turbopack) |
| UI | React 19.3, TypeScript (strict), Tailwind CSS v4 |
| Motion | `motion` 14 (scroll reveals only, reduced-motion aware) |
| Icons | `lucide-react` |
| Content | Typed TypeScript modules in `src/content/` (no database, no CMS) |
| Pages | 45 public URLs, all prerendered at build time |

## Quick start

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev          # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start        # serves the production build on port 3000
```

Other scripts:

```bash
npm run lint         # ESLint
npm run typecheck    # generates route types, then runs tsc --noEmit
```

## Environment variables

Copy `.env.example` to `.env.local` and adjust as needed.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin used in metadata, sitemap and structured data. Defaults to `https://www.jorireland.com`. Set it to the staging URL on preview deployments. |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Optional | JSON endpoint that receives enquiry-form submissions (e.g. Formspree). Without it, the form opens the visitor's email app with the enquiry pre-filled. See [docs/CONTACT-INTEGRATION.md](docs/CONTACT-INTEGRATION.md). |

## Deployment

The site needs a Node.js-capable host, not a pure static export, because it relies on three server features:

1. **301 redirects** from every legacy HubSpot URL (`next.config.ts`, `src/content/redirects.ts`).
2. **Proxy** (`src/proxy.ts`), which returns a real 404 for unknown tour or service slugs.
3. **Image optimisation** (`next/image` serves AVIF/WebP at the right size per device).

All pages are still prerendered at build time, so runtime work is minimal.

**Recommended: Vercel.** Import the repository, set `NEXT_PUBLIC_SITE_URL`, and deploy. No other configuration is needed.

**Alternatives:** any Node.js host (`npm run build && npm run start`), a Docker container, or Netlify/Cloudflare via their Next.js adapters.

**Go-live checklist:** see [docs/SEO-MIGRATION.md](docs/SEO-MIGRATION.md). It covers DNS for `www` and `connect.jorireland.com`, Search Console, and sitemap submission.

## Project structure

```text
src/
├── app/                       Routes (App Router)
│   ├── page.tsx               Home
│   ├── tours/                 /tours and /tours/[slug] (30 itineraries)
│   ├── services/              /services and /services/[slug] (7 service pages)
│   ├── about/                 /about, /about/history, /about/joe-oreilly
│   ├── contact/               /contact (enquiry form + offices)
│   ├── privacy-policy/        Draft privacy policy (pending company review)
│   ├── sitemap.ts, robots.ts, manifest.ts, icon.png, apple-icon.png
│   └── layout.tsx, globals.css, not-found.tsx
├── components/
│   ├── layout/                Header, footer, mobile CTA bar
│   ├── sections/home/         Homepage sections
│   ├── tours/                 Tour card, itinerary timeline, tour filter
│   ├── contact/               Enquiry form
│   ├── shared/                Page hero, CTA banner, breadcrumbs, testimonials, JSON-LD…
│   └── ui/                    Button, section heading
├── content/                   All site copy and data (edit here)
│   ├── generated/             Tour data and image registry extracted from the old site
│   ├── tours.ts, services.ts, company.ts, navigation.ts, redirects.ts, media.ts
├── lib/                       Site config (contacts), SEO helpers, enquiry helpers
├── types/                     Content types
└── proxy.ts                   404 handling for unknown slugs
public/
├── images/                    381 optimised WebP photos from the original site
└── brand/                     JOR logos (SVG)
docs/                          Audit, SEO migration, contact integration, outstanding items
```

## Editing content

- **Contact details and offices:** `src/lib/site.ts`. Footer, contact page, forms and structured data all read from here.
- **Tours:** `src/content/generated/tours.data.ts` holds the itineraries, highlights, inclusions and photos. Treat it as normal source code from now on; the "generated" folder name records where the data came from. Summaries and themes are listed there too.
- **Services:** `src/content/services.ts`.
- **Company story, testimonials, timeline, value propositions:** `src/content/company.ts`.
- **Navigation:** `src/content/navigation.ts`.
- **Images:** add WebP/JPEG files under `public/images/`. Register curated photos in `src/content/generated/images.data.ts` with their width and height, then reference them with `photo(key, alt)`.

When you add a tour, also add its legacy URL (if any) so the redirect is generated automatically. New tours appear in the sitemap and on `/tours` with no further changes.

The data layer is deliberately framework-agnostic. To move to a headless CMS later (Sanity, Contentful, Storyblok or HubSpot CMS API), replace the exports in `src/content/*.ts` with CMS queries that return the same types from `src/types/content.ts`.

## Design system

Tokens live in `src/app/globals.css` (`@theme`):

- **Greens:** from the existing brand (`#008754`, `#00C16E`), extended into a deep forest palette for immersive sections.
- **Gold:** taken from the crown in the JOR logo (`#C4A006`), used for primary calls to action and accents.
- **Cream neutrals:** warm off-whites for backgrounds.
- **Typography:** Fraunces (display serif) and Manrope (text), self-hosted through `next/font`.

## Quality checks performed

- `npm run build`, `npm run lint`, `tsc --noEmit`: clean.
- Crawl of all 45 sitemap URLs: every page returns 200, with a unique title, meta description, canonical URL and exactly one `<h1>`. All 3,132 image URLs resolve.
- All 76 legacy URLs from the old XML sitemap return a 301 to the correct page. Unknown slugs return a real 404.
- Lighthouse (mobile, local production build): Accessibility 100, Best Practices 100, SEO 100; Performance 86–93; CLS 0.
- No horizontal overflow at 390 px or 1440 px, and no console errors.

## Further documentation

- [docs/AUDIT.md](docs/AUDIT.md): Phase 1 audit of the existing website
- [docs/SEO-MIGRATION.md](docs/SEO-MIGRATION.md): URL mapping, 301 plan and go-live checklist
- [docs/CONTACT-INTEGRATION.md](docs/CONTACT-INTEGRATION.md): enquiry form options
- [docs/OUTSTANDING-ITEMS.md](docs/OUTSTANDING-ITEMS.md): what could not be recovered without HubSpot access, and what to confirm before launch
- [docs/CONTENT-SOURCES.md](docs/CONTENT-SOURCES.md): how content and images were extracted
