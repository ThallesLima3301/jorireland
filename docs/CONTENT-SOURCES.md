# Content sources

All content comes from public pages of `www.jorireland.com` and `connect.jorireland.com`, retrieved on 12 October 2026.

## How the content was extracted

1. The XML sitemap (76 URLs) and the five `connect.` service pages were downloaded.
2. Tour pages were parsed structurally from their HubSpot markup:
   - the highlights block;
   - each day card (title, photo, and each bold activity label with its continuation text);
   - the "Tour includes" table;
   - the tour's card on the listing page (category, thumbnail).
3. Photos were downloaded at original resolution, resized to a maximum of 1,100–2,400 px depending on use, and saved as WebP (quality 68–75). In total there are 381 files, about 22 MB.
4. The data was written to `src/content/generated/tours.data.ts` and `images.data.ts`.

## Editorial changes

- **Kept verbatim:** testimonials (lightly trimmed, with ellipses marking cuts mid-quote), the CEO letter, the founder obituary, and itinerary facts (places, hotels, inclusions).
- **Corrected:** spelling (e.g. Benedictine, Storehouse, Archaeological, exclusive), punctuation, and grammar in non-quoted copy.
- **Removed:** HubSpot template placeholder text, dead "Read More" boxes, COVID-19 notices, and stale "55+ years" figures.
- **Written new:**
  - one-sentence summaries for each tour, based strictly on that tour's own route and highlights;
  - section introductions and calls to action;
  - SEO titles and descriptions;
  - alt text, written after viewing each image.
- **Not invented:** company history, awards, partnerships, prices, testimonials or services. Where the old site's claims could not be verified independently, they are presented as the company's own statements (see `OUTSTANDING-ITEMS.md`).

## Images with captions baked in

Some original photos have text burned into the image, such as golf course names and M.I.C.E category labels. These are used only where the label adds meaning (the golf course gallery) or where the label is small.
