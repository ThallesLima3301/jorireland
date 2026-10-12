import type { Metadata } from "next";
import type { ImageAsset, Service, Tour } from "@/types/content";
import { media } from "@/content/generated/images.data";
import { absoluteUrl, offices, site } from "./site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  image?: Pick<ImageAsset, "src" | "width" | "height"> & { alt?: string };
  /** Use the title as-is instead of appending the brand via the root title template. */
  absoluteTitle?: boolean;
}

const defaultOg = { ...media.brandOg, alt: "Experience Ireland with Joe O'Reilly Ireland DMC" };

export function pageMetadata({ title, description, path, image, absoluteTitle }: PageMetaInput): Metadata {
  const img = image ?? defaultOg;
  const ogImage = { url: img.src, width: img.width, height: img.height, alt: img.alt ?? title };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_IE",
      url: path,
      title,
      description,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}

/* ---------------------------- JSON-LD ---------------------------- */

const orgId = `${site.url}/#organization`;

export function organizationJsonLd() {
  const postal = (o: typeof offices.dublin, locality: string, postalCode: string) => ({
    "@type": "PostalAddress",
    streetAddress: o.address?.slice(0, -1).join(", "),
    addressLocality: locality,
    postalCode,
    addressCountry: "IE",
  });
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": orgId,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: absoluteUrl("/brand/logo-dark.svg"),
    image: absoluteUrl(media.heroHome.src),
    description: site.description,
    foundingDate: String(site.foundedYear),
    founder: { "@type": "Person", name: site.founder },
    email: site.primaryEmail,
    telephone: site.primaryPhone,
    areaServed: { "@type": "Place", name: "Island of Ireland" },
    address: postal(offices.dublin, "Dublin", "D09 P5F8"),
    location: [
      { "@type": "Place", name: offices.dublin.name, address: postal(offices.dublin, "Dublin", "D09 P5F8"), telephone: offices.dublin.phone },
      { "@type": "Place", name: offices.cork.name, address: postal(offices.cork, "Cork", "T23 R5TF"), telephone: offices.cork.phone },
    ],
    sameAs: [site.social.facebook, site.social.linkedin],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "en",
    publisher: { "@id": orgId },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

export function tourJsonLd(tour: Tour) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.summary,
    url: absoluteUrl(`/tours/${tour.slug}`),
    ...(tour.hero ? { image: absoluteUrl(tour.hero.src) } : {}),
    touristType: tour.themes,
    provider: { "@id": orgId },
    ...(tour.days.length
      ? {
          itinerary: {
            "@type": "ItemList",
            numberOfItems: tour.days.length,
            itemListElement: tour.days.map((d) => ({ "@type": "ListItem", position: d.day, name: `Day ${d.day}: ${d.title}` })),
          },
        }
      : {}),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    serviceType: service.name,
    url: absoluteUrl(service.href),
    image: absoluteUrl(service.hero.image.src),
    areaServed: { "@type": "Place", name: "Island of Ireland" },
    provider: { "@id": orgId },
  };
}
