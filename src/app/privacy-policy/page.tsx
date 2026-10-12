import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { photo } from "@/content/media";
import { offices, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const hero = photo("header2", "The County Kerry coastline");

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Joe O'Reilly Ireland DMC handles personal information submitted through this website.",
  path: "/privacy-policy",
  image: hero,
});

/*
 * DRAFT: this policy describes how the website is built (no analytics, no tracking cookies,
 * enquiries handled by email or a configured form provider). It must be reviewed and completed
 * by the company before launch: registered company name and number, retention periods,
 * the form provider used, and any analytics added later. See docs/OUTSTANDING-ITEMS.md.
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" image={hero} size="compact" breadcrumbs={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <section className="py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <p className="rounded-2xl border border-gold-500/40 bg-gold-200/40 p-5 text-sm leading-relaxed text-forest-950">
            <strong>Draft pending review.</strong> This policy describes how this website currently handles personal information. It will be reviewed
            and completed by {site.name} before publication.
          </p>

          <div className="prose-body mt-12 space-y-10 text-lg leading-relaxed text-ink-muted [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-forest-950 [&_h2]:mb-4">
            <section>
              <h2>Who we are</h2>
              <p>
                This website is operated by {site.name}, a Destination Management Company with offices at {offices.dublin.address?.join(", ")} and{" "}
                {offices.cork.address?.join(", ")}. For any privacy question, contact us at{" "}
                <a href={`mailto:${site.primaryEmail}`} className="font-semibold text-emerald-700 underline">
                  {site.primaryEmail}
                </a>
                .
              </p>
            </section>
            <section>
              <h2>Information you send us</h2>
              <p>
                When you make an enquiry, you may give us your name, email address, phone number, organisation, country, travel dates, group size and
                details of your plans. We use this information only to respond to your enquiry and, if you go ahead, to plan and deliver your trip.
              </p>
              <p>
                Depending on how the enquiry form is configured, your enquiry is either sent from your own email app to our office inbox, or delivered to
                us by a form-processing service acting on our behalf.
              </p>
            </section>
            <section>
              <h2>Cookies and analytics</h2>
              <p>
                This website does not use advertising or analytics cookies. If we introduce analytics in future, we will update this policy and ask for
                your consent where the law requires it.
              </p>
            </section>
            <section>
              <h2>Sharing your information</h2>
              <p>
                We do not sell your personal information. When we arrange a trip, we share only the details needed with the hotels, transport providers,
                venues and other suppliers who deliver it.
              </p>
            </section>
            <section>
              <h2>Your rights</h2>
              <p>
                Under the General Data Protection Regulation (GDPR) you have the right to access, correct or delete your personal information, to object
                to or restrict its use, and to complain to the Data Protection Commission in Ireland. To exercise these rights, email{" "}
                <a href={`mailto:${site.primaryEmail}`} className="font-semibold text-emerald-700 underline">
                  {site.primaryEmail}
                </a>
                .
              </p>
            </section>
            <section>
              <h2>Questions</h2>
              <p>
                If you have any questions about this policy, please <Link href="/contact" className="font-semibold text-emerald-700 underline">contact us</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
