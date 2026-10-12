import type { Metadata } from "next";
import { Suspense } from "react";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm, ContactFormWithPresets } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { EnquiryOption } from "@/lib/enquiry";
import { services } from "@/content/services";
import { tours } from "@/content/tours";
import { photo } from "@/content/media";
import { officeList, offices, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const hero = photo("heroHome", "The coastline of County Kerry with green islands and mountains");

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Request a Proposal",
  description:
    "Plan your group tour, event or trip to Ireland. Contact our Dublin and Cork offices, or our sales directors for France and North America.",
  path: "/contact",
  image: hero,
});

const types: EnquiryOption[] = services.map((s) => ({ value: s.slug, label: s.name, email: offices[s.office].email }));
const tourOptions: EnquiryOption[] = tours.map((t) => ({ value: t.slug, label: `${t.title} (${t.durationDays} days)` }));

export default function ContactPage() {
  const formProps = { types, tours: tourOptions, fallbackEmail: site.primaryEmail };
  return (
    <>
      <PageHero
        eyebrow="Contact our team"
        title="Let's plan your next experience"
        intro="Tell us about your group and what you have in mind. We'll listen, then draw up an itinerary that suits your needs, with no surprises."
        image={hero}
        size="compact"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-forest-900/8 sm:p-10">
              <SectionHeading as="h2" eyebrow="Request a proposal" title="Tell us about your trip" />
              <div className="mt-10">
                <Suspense fallback={<ContactForm {...formProps} />}>
                  <ContactFormWithPresets {...formProps} />
                </Suspense>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-5" aria-label="Office contact details">
            <p className="text-lg leading-relaxed text-ink-muted">
              Prefer to talk? Call or email the office that handles your type of trip. You&apos;ll work with the same person from start to finish.
            </p>
            {officeList.map((o) => (
              <address key={o.id} className="rounded-3xl bg-cream-100 p-7 not-italic">
                <h2 className="font-display text-2xl text-forest-950">{o.name}</h2>
                {o.handles && <p className="mt-1 text-sm font-medium text-emerald-700">For {o.handles}</p>}
                {o.contactPerson && <p className="mt-1 text-sm text-ink-muted">{o.contactPerson}</p>}
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <a href={o.phoneHref} className="flex items-center gap-3 font-semibold text-forest-900 hover:text-emerald-700">
                      <Phone aria-hidden className="size-4 text-emerald-600" /> {o.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${o.email}`} className="flex items-center gap-3 font-semibold text-forest-900 hover:text-emerald-700">
                      <Mail aria-hidden className="size-4 text-emerald-600" /> {o.email}
                    </a>
                  </li>
                  {o.address && (
                    <li>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address.join(", ") + ", Ireland")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-3 text-ink-muted hover:text-forest-900"
                      >
                        <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                        <span>
                          {o.address.join(", ")}
                          <ExternalLink aria-hidden className="ml-1.5 inline size-3.5" />
                          <span className="sr-only"> (opens Google Maps in a new tab)</span>
                        </span>
                      </a>
                    </li>
                  )}
                </ul>
              </address>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
