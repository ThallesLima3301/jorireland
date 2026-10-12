import { Clock, Compass, Landmark, Languages, Map, Receipt, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { valueProps } from "@/content/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  landmark: Landmark,
  map: Map,
  compass: Compass,
  receipt: Receipt,
  users: Users,
  languages: Languages,
  shield: ShieldCheck,
  clock: Clock,
};

/** "Why choose us" grid of the company's published advantages. */
export function ValueProps({ eyebrow = "Why choose us", title = "The highest quality of tour, price and support" }: { eyebrow?: string; title?: string }) {
  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={eyebrow}
          title={title}
          intro="It's all about listening, trust and people. Here is what working with Joe O'Reilly Ireland DMC means for you and your guests."
        />
        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-forest-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v, i) => {
            const Icon = icons[v.icon] ?? Compass;
            return (
              <Reveal as="li" key={v.title} delay={(i % 4) * 0.06} className="bg-cream-50 p-8">
                <span className="grid size-12 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <Icon aria-hidden className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium text-forest-950">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{v.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
