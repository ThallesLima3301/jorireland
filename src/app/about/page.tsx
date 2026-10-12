import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { ValueProps } from "@/components/shared/ValueProps";
import { Testimonials } from "@/components/shared/Testimonials";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ceoMessage } from "@/content/company";
import { services } from "@/content/services";
import { photo } from "@/content/media";
import { pageMetadata } from "@/lib/seo";

const hero = photo("joe1966", "Founder Joe O'Reilly at his horse-drawn caravan holidays stand at a trade exhibition in 1966");

export const metadata: Metadata = pageMetadata({
  title: "About Us | Family-Run Since 1966",
  description:
    "Founded in 1966 by Joe O'Reilly and led by his son Bernard, we are Ireland's longest-established independent, family-run DMC, with offices in Dublin and Cork.",
  path: "/about",
  image: hero,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Ireland's DMC since 1966"
        title="A family business built on listening, trust and people"
        intro="Joe O'Reilly Ireland DMC is the longest-established independent, family-run Destination Management Company in Ireland."
        image={hero}
        imagePosition="center 30%"
        breadcrumbs={[{ name: "About", path: "/about" }]}
      />

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our story"
              title="Nobody knows the island of Ireland better"
              intro={
                <div className="prose-body">
                  <p>
                    Joe O&apos;Reilly (1932–2007) was a true pioneer of Irish tourism. Having worked in the car hire business in Ireland and the United
                    States, he came back to Ireland and formed his own company in 1966: the first DMC in Ireland, selling the country at international
                    trade shows in the USA, the United Kingdom and mainland Europe.
                  </p>
                  <p>
                    Over time Joe developed brands in car hire, horse-drawn caravans, an international horse riding academy, travel agencies and tour
                    operating. In 1998 his son Bernard bought out the DMC side of the family business and went on to develop the Joe O&apos;Reilly
                    Ireland DMC brand, with offices in Dublin and Cork covering the whole island of Ireland.
                  </p>
                </div>
              }
            />
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <ButtonLink href="/about/history" variant="emerald" arrow>
                Explore our history
              </ButtonLink>
              <ButtonLink href="/about/joe-oreilly" variant="link">
                Read about our founder
              </ButtonLink>
            </div>
          </div>
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-cream-200">
              <Image src="/images/history/part-06.webp" alt="One of Joe O'Reilly's horse-drawn caravans in front of an Irish castle" fill sizes="(min-width: 1024px) 38vw, 100vw" quality={70} className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CEO message */}
      <section id="ceo-message" className="bg-forest-950 py-20 text-cream-100 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="relative mx-auto aspect-4/5 max-w-sm overflow-hidden rounded-3xl lg:sticky lg:top-28">
              <Image src={ceoMessage.image.src} alt={ceoMessage.image.alt} fill sizes="(min-width: 1024px) 30vw, 90vw" quality={75} className="object-cover object-top" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <SectionHeading tone="light" eyebrow="A message from our CEO" title="“We treat your business as if it were our own.”" />
            <div className="prose-body mt-8 max-w-2xl text-lg leading-relaxed text-cream-100/85">
              <p>Hi there,</p>
              <p>My name&apos;s Bernard, and I just want to thank you for taking the time to visit our site.</p>
              {ceoMessage.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              <p>Take care, and chat soon.</p>
            </div>
            <p className="mt-8 font-display text-2xl text-gold-400">Bernard O&apos;Reilly</p>
            <p className="text-cream-100/70">{ceoMessage.role}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our family of DMC services"
            title="Specialists in every kind of trip"
            intro="The best Irish experiences from local guides, driven in luxury coaches and staying in well-situated hotels, plus dedicated teams for events, golf, luxury travel and special interests."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s.slug} className="flex">
                <ServiceCard service={s} className="min-h-72 w-full" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ValueProps eyebrow="Why choose Joe O'Reilly Ireland DMC" />
      <Testimonials />
      <CtaBanner title="Speak with our expert team" text="Lean on six decades of travel design and expertise in all things Ireland." image={photo("header2", "")} />
    </>
  );
}
