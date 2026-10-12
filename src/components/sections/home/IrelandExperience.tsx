import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { getTour } from "@/content/tours";

const experiences = [
  "Irish music and dancing",
  "Pints of Guinness and Irish stew, served in a traditional Irish pub",
  "Unrivalled Irish wit from our local tour guides",
  "Unique experiences, with exclusive access to venues and sites",
  "Bespoke tours for niche audiences",
];

/* Each tile reuses a tour's cover photograph and links to that tour. */
const tiles = [
  { slug: "8-day-ireland-north-south", caption: "The Giant's Causeway", alt: "Visitors walking across the basalt columns of the Giant's Causeway", className: "col-span-2 row-span-2" },
  { slug: "8-day-experience-irish-music-culture-dance", caption: "Traditional music", alt: "A fiddle and pints of stout on a pub table during a traditional music session", className: "" },
  { slug: "8-day-ireland-its-hidden-heartlands", caption: "The Rock of Cashel", alt: "The Rock of Cashel on its green hill in County Tipperary", className: "" },
  { slug: "4-day-game-of-thrones-experience", caption: "The Dark Hedges", alt: "The beech-tree tunnel of the Dark Hedges in County Antrim", className: "" },
  { slug: "8-day-tours-of-famous-irish-film-locations", caption: "Skellig Michael", alt: "A hiker on a stone path above the sea, looking towards the Skellig islands", className: "" },
];

export function IrelandExperience() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-24 text-cream-100 md:py-32">
      <div aria-hidden className="absolute -top-40 -right-40 size-144 rounded-full bg-emerald-600/10 blur-3xl" />
      <div className="container-page relative grid gap-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionHeading
            tone="light"
            eyebrow="The full Irish experience"
            title="Iconic sites, famous Irish hospitality"
            intro="We make sure your guests see the best of what Ireland has to offer, from ancient monastic sites and the Wild Atlantic Way to lively city streets, and depart with enduring memories."
          />
          <ul className="mt-9 space-y-4">
            {experiences.map((e) => (
              <li key={e} className="flex gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400">
                  <Check aria-hidden className="size-3.5" />
                </span>
                <span className="text-cream-100/90">{e}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid auto-rows-40 grid-cols-2 gap-3 sm:auto-rows-52 md:grid-cols-4">
            {tiles.map((t, i) => {
              const tour = getTour(t.slug);
              if (!tour?.hero) return null;
              return (
                <Reveal as="li" key={t.slug} delay={i * 0.06} className={`group relative overflow-hidden rounded-xl ${t.className}`}>
                  <Image src={tour.hero.src} alt={t.alt} fill sizes={i === 0 ? "(min-width: 768px) 30vw, 100vw" : "(min-width: 768px) 15vw, 50vw"} quality={70} className="object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="absolute inset-0 flex items-end bg-linear-to-t from-forest-950/80 via-transparent to-transparent p-4 text-sm font-semibold text-white"
                  >
                    <span>
                      {t.caption}
                      <span className="sr-only">: view the {tour.title} itinerary</span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
