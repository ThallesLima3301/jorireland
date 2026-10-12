import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ButtonLink } from "@/components/ui/Button";
import { founderStory } from "@/content/company";
import { photo } from "@/content/media";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/shared/JsonLd";
import { site } from "@/lib/site";

const hero = photo("joePortrait", "Joe O'Reilly at a trade exhibition stand for horse-drawn caravan holidays in Ireland");

export const metadata: Metadata = pageMetadata({
  title: "Joe O'Reilly (1932–2007), Our Founder",
  description:
    "A tribute to Joe O'Reilly, founder of Joe O'Reilly Ireland DMC and a pioneer of Irish tourism, from horse-drawn caravans to Ireland's first DMC.",
  path: "/about/joe-oreilly",
  image: hero,
});

export default function FounderPage() {
  const [lead, ...rest] = founderStory.paragraphs;
  return (
    <>
      <PageHero
        eyebrow="1932–2007"
        title="Joe O'Reilly, entrepreneur and legend of Irish tourism"
        intro="This page is dedicated to Joe O'Reilly, our founder and a pioneer of Irish tourism."
        image={hero}
        imagePosition="center 25%"
        size="compact"
        breadcrumbs={[
          { name: "About", path: "/about" },
          { name: "Joe O'Reilly", path: "/about/joe-oreilly" },
        ]}
      />

      <article className="py-20 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <figure className="lg:sticky lg:top-28">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-cream-200">
                <Image src="/images/history/part-03.webp" alt="A French newspaper clipping reporting an Irish horse-drawn caravan on the Champs-Élysées" fill sizes="(min-width: 1024px) 30vw, 100vw" quality={70} className="object-contain" />
              </div>
              <figcaption className="mt-3 text-sm text-ink-muted">Joe&apos;s horse-drawn caravan on the Champs-Élysées made the French press.</figcaption>
            </figure>
          </aside>
          <div className="lg:col-span-8">
            <p className="font-display text-2xl leading-relaxed text-forest-950 md:text-3xl">{lead}</p>
            <div className="prose-body mt-8 text-lg leading-[1.8] text-ink-muted">
              {rest.map((p) => (
                <p key={p.slice(0, 40)} className={p.startsWith("Ar dheis") ? "font-display text-xl text-forest-950 italic" : undefined}>
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-10 border-t border-forest-900/10 pt-6 text-sm text-ink-muted">{founderStory.source}</p>
            <div className="mt-10">
              <ButtonLink href="/about/history" variant="emerald" arrow>
                Explore our history
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>

      <CtaBanner title="Carrying Joe's legacy forward" text="The company Joe founded in 1966 is still family-run. Let us welcome your guests to Ireland." image={photo("header2", "")} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Joe O'Reilly",
          birthDate: "1932",
          deathDate: "2007",
          description: "Founder of Joe O'Reilly Ireland DMC and a pioneer of Irish tourism.",
          url: `${site.url}/about/joe-oreilly`,
          affiliation: { "@id": `${site.url}/#organization` },
        }}
      />
    </>
  );
}
