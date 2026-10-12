# Outstanding items

## Could not be recovered without HubSpot access

| Item | Impact | What's needed |
| --- | --- | --- |
| Form submissions, contacts and CRM data | No historical leads in the new site | Export from HubSpot if required; not needed for the website itself |
| HubSpot form definitions, workflows and email notifications | Enquiries no longer reach HubSpot automatically | Choose a form option in `CONTACT-INTEGRATION.md` |
| Gated PDF brochures (group tours 2022–2023, golf, equestrian) | "Download brochure" CTAs removed; replaced with "Request a proposal" | Supply the PDFs |
| Live chat ("Let's Chat") configuration | Chat removed | Decide whether to add a chat provider |
| Analytics history and tracking codes | No analytics on the new site | Choose an analytics tool and consent approach |
| Unlisted pages: landing pages, blog posts, campaign URLs, unpublished pages | They may 404 after migration if they were linked externally | Export the full URL list from HubSpot (or from Search Console → Pages) and add redirects |
| Original high-resolution and RAW photography | Images were taken from the public site at web resolution (good, but not print quality) | Supply original files if available, and confirm usage rights for stock images |
| Hero videos (about 20 MB each) | Not used. A still hero gives faster loading. | Supply a short, compressed loop (≤ 3 MB, 720p, muted) if video is wanted |
| French-language content | The site is English-only, as specified; `/fr` URLs redirect to English pages | Provide translations if a French version is wanted later |

## Please confirm before launch

These appear on the current site but are inconsistent or may be out of date:

1. **Sean Reilly's phone number.** Most pages show +1 913 706 0784; the Golf page shows +1 913 401 58 24. The new site uses +1 913 706 0784.
2. **Ann Corcoran** is listed as Sales Director (acorcoran@jorireland.com) on the Golf page only. She is not shown on the new site. Should she be?
3. **Hotel standard on city breaks.** The listing says 4-star, the highlights say 3-star, and the inclusions say "3*/4*". The new site uses "3*/4*".
4. **Years in business.** The old site says "55+ years". The new copy says "since 1966" and "six decades". Confirm this wording.
5. **Partner logos (USTOA, NTA).** Shown as "Our Partners" on the old site. Confirm the memberships are current.
6. **Testimonials.** Reproduced verbatim. The Dubai testimonial has no name and the German one has a first name only. Confirm you are happy to keep publishing them.
7. **"Highest credit rating available to any DMC in Ireland"** and **"longest-established independent, family-run DMC"** are the company's own claims, carried over from the old site. Keep only if they are still accurate.
8. **Privacy policy.** The current text is a clearly marked draft that describes how the site works. Add the registered company name, company number, retention periods, the form provider (once chosen), and any analytics, then remove the draft notice in `src/app/privacy-policy/page.tsx`.
9. **Company legal details** for the footer (registered name, CRO number, VAT number, any tour-operator licence or bonding information). None were published on the old site, so none are shown.
10. **Founder obituary source.** The old site credits "Irish Trade Travel News". The new page says "Irish Travel Trade News", the publication's usual name. Please confirm.

## Optional enhancements

- Add a tour-request flow that pre-fills group size and dates from the tour page.
- Add more case studies and testimonials as they are approved.
- Move content to a headless CMS when non-developers need to edit it (see README).
- Add a compressed hero video loop, with the still image as poster and fallback.
