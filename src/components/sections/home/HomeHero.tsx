import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { media } from "@/content/generated/images.data";

const facts = ["Family-run since 1966", "Offices in Dublin & Cork", "The whole island, North & South", "24/7 support"];

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-forest-950">
      <Image
        src={media.heroHome.src}
        alt="Green headlands and islands along the coast of County Kerry under a bright sky"
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        quality={75}
        className="-z-20 animate-hero-zoom object-cover object-[50%_40%]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-forest-950 via-forest-950/45 to-forest-950/30" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_80%,rgba(10,28,22,0.75),transparent_60%)]" />

      <div className="container-page pt-36 pb-10 md:pb-14">
        <p className="eyebrow mb-6 flex items-center gap-3 text-gold-400">
          <span aria-hidden className="h-px w-10 bg-gold-400/70" />
          Ireland&apos;s Destination Management Company
        </p>
        <h1 className="max-w-4xl font-display text-[2.9rem] leading-[1.02] font-medium tracking-[-0.02em] text-white sm:text-7xl lg:text-[5.6rem]">
          Extraordinary Irish experiences, <em className="font-normal text-gold-400 italic">thoughtfully</em> crafted.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream-100/90 md:text-xl">
          Group tours, conferences and incentives, golf trips and private luxury travel, designed and delivered across the island of Ireland by a
          family-run team that has been welcoming the world since 1966.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="lg" arrow>
            Plan Your Experience
          </ButtonLink>
          <ButtonLink href="#services" variant="outline-light" size="lg">
            Explore Our Services
          </ButtonLink>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-medium text-cream-100/80 md:flex md:gap-10">
            {facts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-full bg-gold-500" />
                {f}
              </li>
            ))}
          </ul>
          <a href="#introduction" className="hidden items-center gap-2 text-sm font-semibold text-white/80 hover:text-white md:flex">
            Discover more <ArrowDown aria-hidden className="size-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
