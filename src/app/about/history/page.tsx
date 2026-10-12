import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline } from "@/content/company";
import { photo } from "@/content/media";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";

const hero = photo("joe1966", "Founder Joe O'Reilly at a trade exhibition in 1966");

export const metadata: Metadata = pageMetadata({
  title: "Our History Since 1966",
  description:
    "From horse-drawn caravans and Ireland's first International Horse Riding Academy to the 2006 Ryder Cup: the story of Joe O'Reilly Ireland DMC since 1966.",
  path: "/about/history",
  image: hero,
});

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Ireland's DMC since 1966"
        title="The story of Ireland's DMC"
        intro="Pictured: founder Joe O'Reilly at a trade exhibition in 1966. Six decades on, the company he started is still family-run."
        image={hero}
        imagePosition="center 30%"
        breadcrumbs={[
          { name: "About", path: "/about" },
          { name: "Our History", path: "/about/history" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="A pioneer of Irish tourism"
            title="From a stand at a trade show to the whole island of Ireland"
            intro="Joe was the first DMC in Ireland, selling the country mainly in the USA, the United Kingdom and mainland Europe by attending international trade shows."
          />

          <ol className="relative mt-20">
            <span aria-hidden className="absolute top-0 bottom-0 left-4 w-px bg-forest-900/15 md:left-1/2" />
            {timeline.map((entry, i) => (
              <li key={entry.title} className="relative grid gap-6 pb-16 pl-12 last:pb-0 md:grid-cols-2 md:gap-16 md:pl-0">
                <span aria-hidden className="absolute top-1 left-4 size-3.5 -translate-x-1/2 rounded-full bg-gold-500 ring-4 ring-cream-50 md:left-1/2" />
                <Reveal className={cn("md:text-right", i % 2 === 1 && "md:order-2 md:text-left")}>
                  <p className="font-display text-3xl font-medium text-emerald-700 md:text-4xl">{entry.period}</p>
                  <h2 className="mt-2 font-display text-2xl font-medium text-forest-950">{entry.title}</h2>
                  <p className={cn("mt-3 leading-relaxed text-ink-muted md:ml-auto md:max-w-md", i % 2 === 1 && "md:mr-auto md:ml-0")}>{entry.text}</p>
                </Reveal>
                {entry.image && (
                  <Reveal delay={0.1} className={cn(i % 2 === 1 && "md:order-1")}>
                    <figure className="relative aspect-4/3 overflow-hidden rounded-2xl bg-cream-200 md:max-w-md">
                      <Image src={entry.image.src} alt={entry.image.alt} fill sizes="(min-width: 768px) 28rem, 100vw" quality={70} className="object-contain" />
                    </figure>
                  </Reveal>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-20 text-center">
            <ButtonLink href="/about/joe-oreilly" variant="emerald" arrow>
              Read about our founder, Joe O&apos;Reilly
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner title="Speak with our expert team" text="Lean on six decades of travel design and expertise in all things Ireland." image={photo("heroHome", "")} />
    </>
  );
}
