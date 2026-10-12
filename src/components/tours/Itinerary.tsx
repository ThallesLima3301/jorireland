import Image from "next/image";
import type { ItineraryDay } from "@/types/content";
import { itemSeparator } from "@/lib/itinerary";

/** Day-by-day itinerary rendered as a vertical timeline. All content is server-rendered for SEO. */
export function Itinerary({ days, headingLevel = "h3" }: { days: ItineraryDay[]; headingLevel?: "h3" | "h4" }) {
  const Heading = headingLevel;
  return (
    <ol className="relative">
      <span aria-hidden className="absolute top-2 bottom-2 left-[1.15rem] w-px bg-linear-to-b from-gold-500/60 via-forest-900/15 to-transparent md:left-[1.4rem]" />
      {days.map((d) => (
        <li key={d.day} className="relative grid gap-6 pb-12 pl-14 last:pb-0 md:grid-cols-[1fr_17rem] md:gap-10 md:pl-20">
          <span
            aria-hidden
            className="absolute top-0 left-0 grid size-[2.3rem] place-items-center rounded-full bg-forest-900 font-display text-sm font-semibold text-gold-400 ring-4 ring-cream-50 md:size-[2.8rem] md:text-base"
          >
            {d.day}
          </span>
          <div>
            <p className="eyebrow text-emerald-700">Day {d.day}</p>
            <Heading className="mt-1 font-display text-2xl font-medium text-forest-950 md:text-[1.7rem]">{d.title}</Heading>
            <ul className="mt-4 space-y-2.5">
              {d.items.map((item, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-ink-muted">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span>
                    <strong className="font-semibold text-forest-900">{item.label}</strong>
                    {item.detail && (
                      <>
                        {itemSeparator(item)}
                        {item.detail}
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {d.image && (
            <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-cream-200 md:mt-1">
              <Image src={d.image.src} alt={d.image.alt} fill sizes="(min-width: 768px) 17rem, 100vw" quality={70} className="object-cover" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
