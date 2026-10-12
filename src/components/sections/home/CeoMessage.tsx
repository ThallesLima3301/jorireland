import Image from "next/image";
import { Quote } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/shared/Reveal";
import { ceoMessage } from "@/content/company";

export function CeoMessage() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="relative mx-auto w-full max-w-sm lg:col-span-4">
          <div className="relative aspect-square overflow-hidden rounded-full ring-8 ring-cream-100">
            <Image src={ceoMessage.image.src} alt={ceoMessage.image.alt} fill sizes="(min-width: 1024px) 28vw, 80vw" quality={75} className="object-cover object-top" />
          </div>
          <span aria-hidden className="absolute right-4 bottom-4 grid size-16 place-items-center rounded-full bg-gold-500 text-forest-950">
            <Quote className="size-7" />
          </span>
        </Reveal>
        <div className="lg:col-span-8">
          <p className="eyebrow flex items-center gap-3 text-emerald-700">
            <span aria-hidden className="h-px w-8 bg-emerald-600/60" />A message from our CEO
          </p>
          <blockquote className="mt-6">
            <p className="font-display text-2xl leading-snug font-normal text-forest-950 md:text-[2rem] md:leading-[1.3]">
              &ldquo;{ceoMessage.short}&rdquo;
            </p>
            <footer className="mt-6">
              <cite className="not-italic">
                <span className="block font-semibold text-forest-950">{ceoMessage.name}</span>
                <span className="text-ink-muted">{ceoMessage.role}</span>
              </cite>
            </footer>
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <ButtonLink href="/about" variant="emerald" arrow>
              Read Bernard&apos;s full message
            </ButtonLink>
            <ButtonLink href="/about/joe-oreilly" variant="link">
              About our founder, Joe O&apos;Reilly
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
