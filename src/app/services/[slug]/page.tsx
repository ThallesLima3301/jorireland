import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { JsonLd } from "@/components/shared/JsonLd";
import { Reveal } from "@/components/shared/Reveal";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Itinerary } from "@/components/tours/Itinerary";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getService, servicePages, services } from "@/content/services";
import { offices } from "@/lib/site";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.metaTitle, description: service.metaDescription, path: service.href, image: service.hero.image });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || service.href !== `/services/${slug}`) notFound();

  const office = offices[service.office];
  const enquiryHref = `/contact?service=${service.slug}`;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const itinerary = service.sampleItinerary;

  return (
    <>
      <PageHero
        eyebrow={service.hero.eyebrow}
        title={service.hero.title}
        intro={service.hero.intro}
        image={service.hero.image}
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: service.cardTitle, path: service.href },
        ]}
        actions={
          <>
            <ButtonLink href={enquiryHref} size="lg" arrow>
              Request a Proposal
            </ButtonLink>
            {itinerary && (
              <ButtonLink href="#sample-itinerary" variant="outline-light" size="lg">
                See a sample itinerary
              </ButtonLink>
            )}
          </>
        }
      />

      {service.keyPoints.length > 0 && (
        <div className="border-b border-forest-900/10 bg-cream-100">
          <ul className="container-page grid gap-x-8 gap-y-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.keyPoints.map((p) => (
              <li key={p} className="flex gap-3 font-medium text-forest-900">
                <Check aria-hidden className="mt-1 size-4 shrink-0 text-emerald-600" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Alternating editorial sections */}
      <div className="py-20 md:py-28">
        <div className="container-page space-y-24 md:space-y-32">
          {service.sections.map((section, i) => (
            <section key={section.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className={cn("lg:col-span-6", i % 2 === 1 && "lg:order-2")}>
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-cream-200">
                  <Image src={section.image.src} alt={section.image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" quality={70} className="object-cover" />
                </div>
              </Reveal>
              <div className="lg:col-span-6">
                <SectionHeading eyebrow={section.eyebrow} title={section.title} />
                <div className="prose-body mt-6 text-lg leading-relaxed text-ink-muted">
                  {section.body.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-forest-900">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>

      {service.gallery && (
        <section aria-label={`${service.cardTitle} gallery`} className="pb-20 md:pb-28">
          <div className="container-page">
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {service.gallery.map((img, i) => (
                <Reveal as="li" key={img.src} delay={(i % 4) * 0.05}>
                  <figure>
                    <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-cream-200">
                      {/* The visible caption names the image, so the alt is left empty to avoid repetition. */}
                      <Image src={img.src} alt="" fill sizes="(min-width: 768px) 25vw, 50vw" quality={70} className="object-cover" />
                    </div>
                    <figcaption className="mt-2 text-sm font-medium text-ink-muted">{img.alt}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {service.capabilities && (
        <section className="bg-forest-950 py-20 text-cream-100 md:py-28">
          <div className="container-page">
            <SectionHeading
              tone="light"
              eyebrow="End-to-end management"
              title={service.slug === "mice" ? "Every facet of your conference, managed" : "How we manage your trip"}
              intro="We manage and execute every element to the highest international standard, so you can focus on your guests."
            />
            <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {service.capabilities.map((group) => (
                <li key={group.title} className="bg-forest-950 p-7">
                  <h3 className="font-display text-xl text-gold-400">{group.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-cream-100/85">
                        <Check aria-hidden className="mt-1 size-4 shrink-0 text-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {itinerary && (
        <section id="sample-itinerary" className="py-20 md:py-28">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <SectionHeading eyebrow="Sample itinerary" title={itinerary.title} />
                <ul className="mt-6 space-y-3">
                  {itinerary.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-forest-900">
                      <Check aria-hidden className="mt-1 size-4 shrink-0 text-emerald-600" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-ink-muted">Every programme is tailored to your group. Use this as a starting point.</p>
                <div className="mt-8 flex flex-col items-start gap-3">
                  <ButtonLink href={enquiryHref} variant="emerald" arrow>
                    Plan a trip like this
                  </ButtonLink>
                  {itinerary.tourSlug && (
                    <ButtonLink href={`/tours/${itinerary.tourSlug}`} variant="link">
                      View the full tour page
                    </ButtonLink>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Itinerary days={itinerary.days} />
            </div>
          </div>
        </section>
      )}

      {/* Department contact */}
      <section className="bg-cream-100 py-16">
        <div className="container-page grid items-center gap-8 rounded-3xl bg-white p-8 ring-1 ring-forest-900/8 md:p-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-emerald-700">Speak to the right team</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-forest-950">
              {service.cardTitle} enquiries are handled by our {office.name}
            </h2>
            <p className="mt-3 text-ink-muted">You&apos;ll work with the same person from the first conversation to the day your guests depart.</p>
          </div>
          <address className="grid gap-3 not-italic sm:grid-cols-2">
            <a href={office.phoneHref} className="flex items-center gap-3 rounded-2xl bg-cream-50 p-4 font-semibold text-forest-950 ring-1 ring-forest-900/8 hover:ring-emerald-600">
              <Phone aria-hidden className="size-5 text-emerald-600" /> {office.phone}
            </a>
            <a href={`mailto:${office.email}`} className="flex items-center gap-3 rounded-2xl bg-cream-50 p-4 font-semibold text-forest-950 ring-1 ring-forest-900/8 hover:ring-emerald-600">
              <Mail aria-hidden className="size-5 text-emerald-600" /> {office.email}
            </a>
            {office.address && (
              <p className="flex gap-3 p-4 text-sm text-ink-muted sm:col-span-2">
                <MapPin aria-hidden className="size-5 shrink-0 text-emerald-600" /> {office.address.join(", ")}
              </p>
            )}
          </address>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Explore more" title="Our other services" />
            <Link href="/services" className="font-semibold text-emerald-700 underline-offset-4 hover:underline">
              All services
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug} className="flex">
                <ServiceCard service={s} className="w-full" sizes="(min-width: 768px) 33vw, 100vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner title={service.ctaTitle} text={service.ctaText} image={service.cardImage} office={office} primaryHref={enquiryHref} />
      <JsonLd data={serviceJsonLd(service)} />
    </>
  );
}
