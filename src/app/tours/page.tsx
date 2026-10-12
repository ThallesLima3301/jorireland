import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TourExplorer } from "@/components/tours/TourExplorer";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/shared/JsonLd";
import { tours, tourCategories, tourThemes, getTour } from "@/content/tours";
import { getService } from "@/content/services";
import { offices } from "@/lib/site";
import { absoluteUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const groupTours = getService("group-tours")!;

export const metadata: Metadata = pageMetadata({
  title: "Group Tours of Ireland",
  description: `Explore ${tours.length} group tour itineraries of Ireland, from Dublin, Cork and Belfast city breaks to 8 and 10 day tours of the Wild Atlantic Way, castles, food, music and heritage.`,
  path: "/tours",
  image: groupTours.hero.image,
});

export default function ToursPage() {
  const ctaImage = getTour("8-day-irelands-gardens-castles-manors")?.hero ?? groupTours.hero.image;
  return (
    <>
      <PageHero
        eyebrow="Group tours"
        title="Amazing group tours from Ireland's DMC"
        intro={`Every one of our tours is immersed in Irish culture. Choose from ${tours.length} itineraries with local guides, luxury coaches and well-situated hotels, or ask us to design something bespoke.`}
        image={groupTours.hero.image}
        breadcrumbs={[{ name: "Group Tours", path: "/tours" }]}
        actions={
          <>
            <ButtonLink href="/contact" size="lg" arrow>
              Plan a bespoke tour
            </ButtonLink>
            <ButtonLink href="/tours/8-day-best-of-ireland" variant="outline-light" size="lg">
              See our most popular tour
            </ButtonLink>
          </>
        }
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <TourExplorer tours={tours} categories={tourCategories} themes={tourThemes} />
          <p className="mt-16 rounded-2xl border border-forest-900/10 bg-cream-100 p-6 text-ink-muted md:p-8">
            <strong className="font-semibold text-forest-950">These are sample itineraries.</strong> Contact our sales team and we&apos;ll work together to
            design a tour your guests will remember, with your choice of dates, hotels, pace and experiences.
          </p>
        </div>
      </section>

      <CtaBanner
        eyebrow="Plan a bespoke tour"
        title="Let's plan your next group tour together"
        text="Our team is ready to work with you to design and plan your next group tour to Ireland."
        image={ctaImage}
        office={offices.cork}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Group tours of Ireland",
          numberOfItems: tours.length,
          itemListElement: tours.map((t, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/tours/${t.slug}`), name: t.title })),
        }}
      />
    </>
  );
}
