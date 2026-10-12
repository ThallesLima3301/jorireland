import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types/content";
import { cn } from "@/lib/cn";

/** Photographic card linking to a service. */
export function ServiceCard({ service, className, sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw", headingLevel = "h3" }: { service: Service; className?: string; sizes?: string; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className={cn("group relative isolate flex min-h-88 flex-col justify-end overflow-hidden rounded-2xl bg-forest-900 p-6", className)}>
      <Image
        src={service.cardImage.src}
        alt={service.cardImage.alt}
        fill
        sizes={sizes}
        quality={70}
        className="-z-20 object-cover transition-transform duration-[1.4s] ease-(--ease-out-soft) group-hover:scale-105"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-forest-950/95 via-forest-950/45 to-transparent transition-colors duration-500 group-hover:from-forest-950" />
      <Heading className="font-display text-2xl font-medium text-white md:text-[1.7rem]">
        <Link href={service.href} className="after:absolute after:inset-0 focus-visible:outline-none">
          {service.cardTitle}
        </Link>
      </Heading>
      <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-cream-100/85">{service.cardDescription}</p>
      <span aria-hidden className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-white/30 text-white backdrop-blur transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-forest-950">
        <ArrowUpRight className="size-5" />
      </span>
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-gold-500 opacity-0 transition-opacity group-has-[a:focus-visible]:opacity-100" />
    </article>
  );
}
