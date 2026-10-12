import Image from "next/image";
import type { ReactNode } from "react";
import type { ImageAsset } from "@/types/content";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { cn } from "@/lib/cn";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image: ImageAsset;
  breadcrumbs?: Crumb[];
  actions?: ReactNode;
  /** Extra content under the intro, e.g. key facts. */
  children?: ReactNode;
  size?: "tall" | "compact";
  imagePosition?: string;
}

/** Full-bleed photographic page header. The image is preloaded as the LCP element. */
export function PageHero({ eyebrow, title, intro, image, breadcrumbs, actions, children, size = "tall", imagePosition = "center" }: PageHeroProps) {
  return (
    <section className={cn("relative isolate flex overflow-hidden bg-forest-950", size === "tall" ? "min-h-[78svh] items-end" : "min-h-[56svh] items-end")}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        preload
        sizes="100vw"
        quality={75}
        className="-z-20 object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-forest-950 via-forest-950/55 to-forest-950/25" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-forest-950/60 to-transparent" />
      <div className="container-page pt-32 pb-14 md:pb-20">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-6" />}
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="eyebrow mb-5 flex items-center gap-3 text-gold-400">
              <span aria-hidden className="h-px w-8 bg-gold-400/70" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-[2.6rem] leading-[1.04] font-medium tracking-[-0.015em] text-white sm:text-6xl lg:text-[4.25rem]">{title}</h1>
          {intro && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/85 md:text-xl">{intro}</div>}
          {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
          {children}
        </div>
      </div>
    </section>
  );
}
