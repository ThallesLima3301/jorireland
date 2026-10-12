import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ValueProps } from "@/components/shared/ValueProps";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/content/services";
import { photo } from "@/content/media";
import { pageMetadata } from "@/lib/seo";

const heroImage = photo("header2", "Green islands and headlands along the County Kerry coastline");

export const metadata: Metadata = pageMetadata({
  title: "Our DMC Services in Ireland",
  description:
    "Group tours, M.I.C.E and conference management, golf trips, luxury F.I.T, rugby, equestrian, active retired and special interest travel across the island of Ireland.",
  path: "/services",
  image: heroImage,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our family of DMC services"
        title="Specialist teams for every kind of trip to Ireland"
        intro="Since 1966 we've been welcoming groups to Ireland from all over the world. Whatever brings your guests here, we listen, design the programme with you and manage it on the ground."
        image={heroImage}
        breadcrumbs={[{ name: "Services", path: "/services" }]}
        actions={
          <ButtonLink href="/contact" size="lg" arrow>
            Request a Proposal
          </ButtonLink>
        }
      />
      <section className="py-20 md:py-28">
        <div className="container-page">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 3) * 0.06} className="flex">
                <ServiceCard service={s} className="min-h-104 w-full" headingLevel="h2" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <ValueProps />
      <CtaBanner
        title="Not sure which service fits?"
        text="Tell us about your group and what you have in mind. We'll point you to the right specialist team and come back with ideas."
        image={photo("svcSpecial", "")}
      />
    </>
  );
}
