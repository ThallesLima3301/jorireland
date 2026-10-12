import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import type { ImageAsset, Office } from "@/types/content";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

interface CtaBannerProps {
  eyebrow?: string;
  title: string;
  text: string;
  image: ImageAsset;
  office?: Office;
  primaryLabel?: string;
  primaryHref?: string;
}

/** Conversion block that closes most pages. */
export function CtaBanner({ eyebrow = "Let's plan your next experience", title, text, image, office, primaryLabel = "Request a Proposal", primaryHref = "/contact" }: CtaBannerProps) {
  const phone = office?.phone ?? site.primaryPhone;
  const phoneHref = office?.phoneHref ?? site.primaryPhoneHref;
  const email = office?.email ?? site.primaryEmail;
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 py-24 md:py-32">
      <Image src={image.src} alt="" fill sizes="100vw" quality={70} className="-z-20 object-cover opacity-45" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-forest-950 via-forest-950/85 to-forest-950/40" />
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5 flex items-center gap-3 text-gold-400">
            <span aria-hidden className="h-px w-8 bg-gold-400/70" />
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl leading-tight font-medium text-white sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-cream-100/85">{text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={primaryHref} size="lg" arrow>
              {primaryLabel}
            </ButtonLink>
            <ButtonLink href={phoneHref} variant="outline-light" size="lg">
              <Phone aria-hidden className="size-4" /> {phone}
            </ButtonLink>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-cream-100/70">
            <Mail aria-hidden className="size-4 text-gold-400" />
            Prefer email? Write to{" "}
            <a href={`mailto:${email}`} className="font-semibold text-white underline-offset-4 hover:underline">
              {email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
