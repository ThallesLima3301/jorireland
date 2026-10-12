import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { media } from "@/content/generated/images.data";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-forest-950">
      <Image src={media.header2.src} alt="" fill sizes="100vw" quality={70} className="-z-20 object-cover opacity-40" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-forest-950 to-forest-950/40" />
      <div className="container-page pt-28 pb-16">
        <p className="eyebrow text-gold-400">Error 404</p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl font-medium text-white md:text-6xl">This road doesn&apos;t lead anywhere.</h1>
        <p className="mt-5 max-w-xl text-lg text-cream-100/85">
          The page you were looking for has moved or no longer exists. Our website has a new home for every tour and service.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/" size="lg" arrow>
            Back to the homepage
          </ButtonLink>
          <ButtonLink href="/tours" variant="outline-light" size="lg">
            Browse group tours
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline-light" size="lg">
            Contact our team
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
