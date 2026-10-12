import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { Introduction } from "@/components/sections/home/Introduction";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { IrelandExperience } from "@/components/sections/home/IrelandExperience";
import { FeaturedTours } from "@/components/sections/home/FeaturedTours";
import { CeoMessage } from "@/components/sections/home/CeoMessage";
import { ValueProps } from "@/components/shared/ValueProps";
import { Testimonials } from "@/components/shared/Testimonials";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { pageMetadata } from "@/lib/seo";
import { getTour } from "@/content/tours";
import { media } from "@/content/generated/images.data";

export const metadata: Metadata = pageMetadata({
  title: "Joe O'Reilly Ireland DMC | Group Tours & Events in Ireland",
  absoluteTitle: true,
  description:
    "Ireland's family-run DMC since 1966: group tours, M.I.C.E, golf trips, luxury F.I.T and specialist travel across Ireland, from offices in Dublin and Cork.",
  path: "/",
});

export default function HomePage() {
  const ctaImage = getTour("8-day-best-of-the-wild-atlantic-way")?.hero ?? { ...media.heroHome, alt: "" };
  return (
    <>
      <HomeHero />
      <Introduction />
      <ServicesGrid />
      <IrelandExperience />
      <FeaturedTours />
      <ValueProps />
      <CeoMessage />
      <Testimonials limit={3} />
      <CtaBanner
        title="Let's plan your next experience in Ireland"
        text="Tell us about your group, your dates and what you'd love your guests to experience. Our team will come back to you with ideas and a tailored proposal."
        image={ctaImage}
      />
    </>
  );
}
