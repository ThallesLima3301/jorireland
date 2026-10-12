import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Reveal } from "@/components/shared/Reveal";
import { services } from "@/content/services";
import { cn } from "@/lib/cn";

/* Editorial bento layout: the first two services take larger tiles on desktop. */
const spans = ["lg:col-span-7 lg:row-span-2 lg:min-h-144", "lg:col-span-5", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4", "lg:col-span-6", "lg:col-span-6"];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-cream-100 py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Ireland DMC services"
            title="One island. Every kind of journey."
            intro="Whether you are bringing a coach tour, a corporate incentive or a private party of four, our specialist teams design the trip around your guests and manage it on the ground."
          />
          <ButtonLink href="/services" variant="outline" arrow className="shrink-0 self-start lg:self-auto">
            All services
          </ButtonLink>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08} className={cn("flex", spans[i])}>
              <ServiceCard service={s} className="w-full" sizes={i === 0 ? "(min-width: 1024px) 58vw, (min-width: 640px) 50vw, 100vw" : undefined} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
