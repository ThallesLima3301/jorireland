import Image from "next/image";
import { partners, testimonials } from "@/content/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

/** Partner testimonials (verbatim from the existing website) and partner associations. */
export function Testimonials({ limit = 5, showPartners = true }: { limit?: number; showPartners?: boolean }) {
  const [lead, ...rest] = testimonials.slice(0, limit);
  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="What our partners say" title="Trusted by tour operators and event planners worldwide" />
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure className="flex h-full flex-col justify-between rounded-3xl bg-forest-900 p-8 text-white md:p-12">
              <blockquote>
                <span aria-hidden className="block font-display text-7xl leading-none text-gold-400">&ldquo;</span>
                <p className="font-display text-xl leading-relaxed md:text-2xl">{lead.quote}</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                {lead.image && (
                  <Image src={lead.image.src} alt="" width={56} height={56} className="size-14 rounded-full bg-cream-100 object-cover" />
                )}
                <span>
                  <span className="block font-semibold">{lead.name}</span>
                  <span className="text-sm text-cream-100/75">{lead.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid gap-6 lg:col-span-5">
            {rest.map((t, i) => (
              <Reveal key={t.name + t.role} delay={i * 0.08}>
                <figure className={cn("h-full rounded-3xl bg-cream-50 p-7 ring-1 ring-forest-900/8")}>
                  <blockquote>
                    <p className="leading-relaxed text-forest-900">&ldquo;{t.quote}&rdquo;</p>
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    {t.image && <Image src={t.image.src} alt="" width={44} height={44} className="size-11 rounded-full bg-cream-100 object-cover" />}
                    <span>
                      <span className="block text-sm font-semibold text-forest-950">{t.name}</span>
                      <span className="text-sm text-ink-muted">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        {showPartners && (
          <div className="mt-16 flex flex-col items-center gap-6 border-t border-forest-900/10 pt-10 sm:flex-row sm:justify-center sm:gap-12">
            <p className="eyebrow text-ink-muted">Our partners</p>
            <ul className="flex items-center gap-10">
              {partners.map((p) => (
                <li key={p.src}>
                  <Image src={p.src} alt={p.alt} width={p.width} height={p.height} className="h-12 w-auto mix-blend-multiply md:h-14" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
