import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { media } from "@/content/generated/images.data";
import { getFeaturedTour, tours } from "@/content/tours";

const cliffs = getFeaturedTour().hero ?? { ...media.heroHome, alt: "" };

const stats = [
  { value: "1966", label: "Founded in Cork by Joe O'Reilly" },
  { value: "2", label: "Irish offices, in Dublin and Cork" },
  { value: "8", label: "Specialist travel services" },
  { value: String(tours.length), label: "Ready-to-tailor itineraries" },
];

export function Introduction() {
  return (
    <section id="introduction" className="overflow-hidden py-24 md:py-32">
      <div className="container-page grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Welcome to our Ireland"
            title="The Irish DMC who knows Ireland best"
            intro={
              <div className="prose-body">
                <p>
                  Joe O&apos;Reilly Ireland DMC is the longest-established independent, family-run Destination Management Company in Ireland. Founded in
                  1966 by Joe O&apos;Reilly, a visionary of Irish tourism, the company is now led by his son, Bernard.
                </p>
                <p>
                  From our offices in Dublin and Cork we welcome groups from all over the world. Unlike other DMCs, we take the time to listen and work
                  closely with you to assemble something really special for your guests, then manage every detail on the ground.
                </p>
              </div>
            }
          />
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
            <ButtonLink href="/about" variant="emerald" arrow>
              Our story
            </ButtonLink>
            <ButtonLink href="/about/history" variant="link">
              Six decades of milestones
            </ButtonLink>
          </div>
        </div>

        <Reveal className="relative lg:col-span-6">
          <div className="relative ml-auto aspect-4/5 w-[82%] overflow-hidden rounded-4xl">
            <Image
              src={cliffs.src}
              alt="The Cliffs of Moher rising from the Atlantic Ocean"
              fill
              sizes="(min-width: 1024px) 40vw, 82vw"
              quality={70}
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 left-0 w-[52%] overflow-hidden rounded-2xl border-8 border-cream-50 shadow-xl">
            <div className="relative aspect-4/3">
              <Image src={media.joe1966.src} alt="Founder Joe O'Reilly at a trade exhibition in 1966" fill sizes="(min-width: 1024px) 22vw, 50vw" quality={70} className="object-cover grayscale" />
            </div>
          </div>
          <div className="absolute top-8 left-[6%] grid size-28 place-items-center rounded-full bg-gold-500 text-center text-forest-950 shadow-lg md:size-32">
            <span className="leading-tight">
              <span className="block text-[0.65rem] font-bold tracking-[0.2em] uppercase">Since</span>
              <span className="block font-display text-3xl font-semibold md:text-4xl">1966</span>
            </span>
          </div>
        </Reveal>
      </div>

      <div className="container-page mt-28">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-forest-900/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 bg-cream-50 p-6 md:p-8">
              <dt className="text-sm leading-snug text-ink-muted">{s.label}</dt>
              <dd className="order-first font-display text-5xl font-medium text-emerald-700 md:text-6xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
