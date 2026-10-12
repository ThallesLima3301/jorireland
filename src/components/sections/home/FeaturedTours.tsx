import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/shared/Reveal";
import { TourCard } from "@/components/tours/TourCard";
import { getFeaturedTour, getTour, tours } from "@/content/tours";
import type { Tour } from "@/types/content";

const secondary = ["10-day-grand-tour-of-ireland", "8-day-best-of-the-wild-atlantic-way", "5-day-the-two-capitals-dublin-belfast"]
  .map(getTour)
  .filter((t): t is Tour => Boolean(t));

export function FeaturedTours() {
  const flagship = getFeaturedTour();
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Group tours"
            title="Itineraries that deliver the full Irish experience"
            intro={`Choose from ${tours.length} ready-to-tailor itineraries, from three-day city breaks to the ten-day Grand Tour. Every one can be tailored to your group.`}
          />
          <ButtonLink href="/tours" variant="outline" arrow className="shrink-0 self-start lg:self-auto">
            View all {tours.length} tours
          </ButtonLink>
        </div>

        <Reveal className="mt-14">
          <article className="group relative grid overflow-hidden rounded-3xl bg-forest-900 text-white lg:grid-cols-2">
            <div className="relative min-h-80 lg:min-h-128">
              {flagship.hero && (
                <Image src={flagship.hero.src} alt={flagship.hero.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" quality={75} className="object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
              )}
              <span className="absolute top-5 left-5 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-forest-950 uppercase">
                Our most popular tour
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="eyebrow text-gold-400">Our {flagship.durationDays}-day flagship tour</p>
              <h3 className="mt-3 font-display text-4xl font-medium md:text-5xl">
                <Link href={`/tours/${flagship.slug}`} className="after:absolute after:inset-0">
                  {flagship.title}
                </Link>
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-cream-100/85">
                Your guests take in the best of Irish scenery, explore our most iconic sites, and enjoy exclusive access to unique and exciting Irish
                experiences.
              </p>
              <ul className="mt-6 space-y-2.5">
                {["Tour Ireland's iconic sites", "Traditional Irish pub dinner, with music and dance", "Experience the Wild Atlantic Way"].map((h) => (
                  <li key={h} className="flex gap-3 text-cream-100/90">
                    <Check aria-hidden className="mt-1 size-4 shrink-0 text-gold-400" />
                    {h}
                  </li>
                ))}
              </ul>
              <span className="mt-8 font-semibold text-gold-400">View the day-by-day itinerary →</span>
            </div>
          </article>
        </Reveal>

        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {secondary.map((t, i) => (
            <Reveal as="li" key={t.slug} delay={i * 0.08}>
              <TourCard tour={t} sizes="(min-width: 768px) 33vw, 100vw" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
