import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Check, Hotel, Mail, MapPinned, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { JsonLd } from "@/components/shared/JsonLd";
import { Reveal } from "@/components/shared/Reveal";
import { Itinerary } from "@/components/tours/Itinerary";
import { TourCard } from "@/components/tours/TourCard";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getRelatedTours, getTour, tourCategories, tours } from "@/content/tours";
import { offices } from "@/lib/site";
import { pageMetadata, tourJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tours/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};
  // Keep titles within ~70 characters: drop the brand suffix for long tour names.
  const base = `${tour.title}: ${tour.durationDays}-Day Tour`;
  const withBrand = `${base} | Joe O'Reilly Ireland DMC`.length <= 70;
  return pageMetadata({
    title: withBrand ? base : `${base} | JOR Ireland DMC`,
    absoluteTitle: !withBrand,
    description: tour.summary.length < 110 ? `${tour.summary} A ${tour.durationDays}-day itinerary, tailored to your group.` : tour.summary,
    path: `/tours/${tour.slug}`,
    image: tour.hero ?? undefined,
  });
}

export default async function TourPage({ params }: PageProps<"/tours/[slug]">) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const category = tourCategories.find((c) => c.id === tour.category);
  const accommodation = tour.includes.find((i) => /night/i.test(i));
  const related = getRelatedTours(tour);
  const office = offices.cork;
  const enquiryHref = `/contact?tour=${tour.slug}`;

  return (
    <>
      <PageHero
        eyebrow={`${tour.durationDays}-day tour · ${category?.label ?? "Group tour"}`}
        title={tour.title}
        intro={tour.summary}
        image={tour.hero ?? tour.card!}
        breadcrumbs={[
          { name: "Group Tours", path: "/tours" },
          { name: tour.title, path: `/tours/${tour.slug}` },
        ]}
        actions={
          <>
            <ButtonLink href={enquiryHref} size="lg" arrow>
              Request this tour
            </ButtonLink>
            <ButtonLink href={tour.days.length ? "#itinerary" : "#highlights"} variant="outline-light" size="lg">
              {tour.days.length ? "View itinerary" : "Explore the city"}
            </ButtonLink>
          </>
        }
      />

      {/* Key facts */}
      <div className="border-b border-forest-900/10 bg-cream-100">
        <dl className="container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          <Fact icon={<CalendarDays className="size-5" />} label="Duration" value={`${tour.durationDays} days`} />
          <Fact icon={<Hotel className="size-5" />} label="Accommodation" value={accommodation ?? "Selected hotels"} />
          <Fact icon={<MapPinned className="size-5" />} label="Style" value={tour.themes.join(", ")} />
          <Fact icon={<Check className="size-5" />} label="Tailoring" value="Tailored on request" />
        </dl>
      </div>

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div id="highlights">
              <SectionHeading eyebrow="Tour route & highlights" title="What makes this tour special" />
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {tour.highlights.map((h) => (
                  <li key={h} className="rounded-2xl border border-forest-900/10 bg-white p-5">
                    <span aria-hidden className="mb-3 block h-0.5 w-8 bg-gold-500" />
                    <span className="font-display text-lg leading-snug text-forest-950">{h}</span>
                  </li>
                ))}
              </ul>
              {tour.intro && <p className="mt-10 text-lg leading-relaxed text-ink-muted">{tour.intro}</p>}
            </div>

            {tour.days.length > 0 && (
              <div id="itinerary" className="mt-20">
                <SectionHeading
                  eyebrow="Sample itinerary"
                  title={`${tour.title}: ${tour.durationDays}-day itinerary`}
                  intro="A proven route that we tailor to your group's dates, interests and budget."
                />
                <div className="mt-12">
                  <Itinerary days={tour.days} />
                </div>
              </div>
            )}

            {tour.visits.length > 0 && (
              <div className="mt-20">
                <SectionHeading
                  eyebrow={tour.days.length ? "Optional extras" : "Suggested visits"}
                  title={tour.days.length ? "Add more to your tour" : "What to see and do"}
                />
                <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                  {tour.visits.map((v, i) => (
                    <Reveal as="li" key={v.title} delay={(i % 3) * 0.05} className="group">
                      {v.image && (
                        <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-cream-200">
                          <Image src={v.image.src} alt={v.image.alt} fill sizes="(min-width: 768px) 22vw, 50vw" quality={70} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                      )}
                      <p className="mt-3 font-semibold text-forest-950">{v.title}</p>
                    </Reveal>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-forest-900 p-8 text-cream-100">
                <h2 className="font-display text-2xl text-white">What&apos;s included</h2>
                <ul className="mt-5 space-y-3">
                  {tour.includes.map((inc) => (
                    <li key={inc} className="flex gap-3">
                      <Check aria-hidden className="mt-1 size-4 shrink-0 text-gold-400" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href={enquiryHref} className="mt-8 w-full" size="lg" arrow>
                  Request a proposal
                </ButtonLink>
              </div>
              <div className="rounded-3xl border border-forest-900/10 bg-white p-8">
                <h2 className="font-display text-xl text-forest-950">Looking for something more bespoke?</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  Contact our sales department and we&apos;ll work together to design a tour your guests will remember forever.
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  <li>
                    <a href={office.phoneHref} className="flex items-center gap-2 font-semibold text-forest-900 hover:text-emerald-700">
                      <Phone aria-hidden className="size-4 text-emerald-600" /> {office.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${office.email}?subject=${encodeURIComponent(`Enquiry: ${tour.title}`)}`} className="flex items-center gap-2 font-semibold text-forest-900 hover:text-emerald-700">
                      <Mail aria-hidden className="size-4 text-emerald-600" /> {office.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="You may also like" title="More tours of Ireland" />
            <Link href="/tours" className="font-semibold text-emerald-700 underline-offset-4 hover:underline">
              View all {tours.length} tours
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((t) => (
              <li key={t.slug}>
                <TourCard tour={t} sizes="(min-width: 768px) 33vw, 100vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title={`Bring your group on ${tour.title}`}
        text="Tell us your preferred dates and group size, and we'll send you a tailored proposal for this tour or a bespoke alternative."
        image={tour.days.at(-2)?.image ?? tour.hero ?? tour.card!}
        office={office}
        primaryHref={enquiryHref}
      />

      <JsonLd data={tourJsonLd(tour)} />
    </>
  );
}

function Fact({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow flex items-center gap-2 text-ink-muted">
        <span aria-hidden className="text-emerald-700">
          {icon}
        </span>
        {label}
      </dt>
      <dd className="mt-1.5 font-semibold text-forest-950">{value}</dd>
    </div>
  );
}
