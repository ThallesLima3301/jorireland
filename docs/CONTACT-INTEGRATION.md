# Contact and enquiry integration

The old site collected enquiries through HubSpot forms, CTAs and a chat pop-up. These are tied to the HubSpot portal and **will not work after migration**. The new site does not depend on them.

## How the enquiry form works today

`/contact` (`src/components/contact/ContactForm.tsx`) collects:

- name, email and trip type (required);
- phone, organisation, country, tour of interest, group size and preferred dates (optional);
- a message and a consent tick-box (required).

It validates in the browser, with inline English error messages, `aria-invalid`, and focus moved to the first invalid field. Each trip type is routed to the office that handles it:

| Trip type | Routed to |
| --- | --- |
| Group Tours, Golf, Active Retired Tours | sales@jorireland.com (Cork) |
| M.I.C.E, Luxury F.I.T, Rugby, Equestrian, Special Interest | mice@jorireland.com (Dublin) |

Links such as **Request this tour** (`/contact?tour=8-day-best-of-ireland`) and service CTAs (`/contact?service=golf`) pre-select the relevant options.

The form has two delivery modes:

| Mode | When | Behaviour |
| --- | --- | --- |
| **Email-app fallback** (current default) | `NEXT_PUBLIC_FORM_ENDPOINT` is not set | Opens the visitor's email app with the enquiry pre-filled and addressed to the right office. The page tells the visitor to press send. It never claims the message has been sent. |
| **Form endpoint** | `NEXT_PUBLIC_FORM_ENDPOINT` is set | Sends the enquiry as JSON with `POST`. Success appears only after a 2xx response. On failure, the visitor sees an error and the direct email address. |

The JSON payload contains `name, email, phone, organisation, country, tripType, tour, groupSize, travelDates, message, consent`, plus `routeTo` (the office inbox) and `_subject`.

A hidden honeypot field (`company_website`) discards simple bot submissions.

## Recommended next step

Pick one of the following and set `NEXT_PUBLIC_FORM_ENDPOINT`. No code changes are needed for options A and B.

### A. Formspree, Basin or Getform (simplest, about 15 minutes)

1. Create a form and set its notification email to sales@jorireland.com. You can add a rule on `routeTo` to forward M.I.C.E enquiries to mice@jorireland.com.
2. Copy the endpoint URL, e.g. `https://formspree.io/f/abcd1234`.
3. Set `NEXT_PUBLIC_FORM_ENDPOINT` in the hosting provider's environment variables and redeploy.
4. Send a test enquiry and confirm it arrives.

### B. HubSpot Forms API (keep leads flowing into the existing CRM)

If the company still uses HubSpot as its CRM, submissions can be posted to HubSpot's public, unauthenticated form-submission endpoint:

`https://api.hsforms.com/submissions/v3/integration/submit/<portalId>/<formGuid>`

This needs the portal ID and a form GUID from someone with HubSpot access. HubSpot expects a `fields: [{ name, value }]` body, so add a small mapping step in `onSubmit` or put a server route in between. The public endpoint needs no secret API key.

### C. Server-side email (most control)

Add a Next.js Server Action or Route Handler (`src/app/api/enquiry/route.ts`) that validates the data with the existing `validateEnquiry` and sends it through Resend, Postmark or SMTP. Keep the API key in a server-only environment variable. This also allows sending an auto-reply to the visitor and adding a CAPTCHA (e.g. Cloudflare Turnstile).

## Other lead-generation features not rebuilt

- **Brochure downloads.** The old site gated PDF brochures behind HubSpot forms. The PDFs were not publicly linked and could not be recovered. Once the PDFs are supplied, add them to `public/brochures/` and link them from tour or service pages, either openly or behind the enquiry form.
- **Live chat ("Let's Chat").** This was HubSpot's chat widget. If wanted, add a chat provider's script in `src/app/layout.tsx` with `next/script` and `strategy="lazyOnload"`, and update the privacy policy.
- **Analytics and marketing tracking.** None is installed. Options include Vercel Analytics, Plausible (cookieless) or GA4 with a consent banner. Update the privacy policy accordingly.
