export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export type TourCategory = "city-break" | "short-tour" | "extended-tour";

export interface ItineraryItem {
  /** Emphasised activity, e.g. "Visit to Kylemore Abbey". */
  label: string;
  /** Optional continuation, e.g. "the famous Benedictine Monastery." */
  detail?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  image?: ImageAsset;
  items: ItineraryItem[];
}

export interface TourVisit {
  title: string;
  image: ImageAsset | null;
}

export interface Tour {
  slug: string;
  /** Path of the equivalent page on the former HubSpot site (used for 301 redirects). */
  legacyPath: string;
  title: string;
  durationDays: number;
  category: TourCategory;
  themes: string[];
  featured: boolean;
  summary: string;
  highlights: string[];
  includes: string[];
  hero: ImageAsset | null;
  card: ImageAsset | null;
  intro?: string;
  days: ItineraryDay[];
  visits: TourVisit[];
}

export type OfficeId = "dublin" | "cork";

export interface ServiceSection {
  eyebrow?: string;
  title: string;
  body: string[];
  bullets?: string[];
  image: ImageAsset;
}

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export interface SampleItinerary {
  title: string;
  highlights: string[];
  days: ItineraryDay[];
  /** Link to a full tour page when the sample is also a published tour. */
  tourSlug?: string;
}

export interface Service {
  slug: string;
  name: string;
  /** Short title used on cards. */
  cardTitle: string;
  cardDescription: string;
  /** Destination of service cards; most services link to /services/[slug]. */
  href: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image: ImageAsset;
  };
  cardImage: ImageAsset;
  keyPoints: string[];
  sections: ServiceSection[];
  capabilities?: CapabilityGroup[];
  gallery?: ImageAsset[];
  sampleItinerary?: SampleItinerary;
  office: OfficeId;
  ctaTitle: string;
  ctaText: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: ImageAsset;
}

export interface Office {
  id: string;
  name: string;
  phone: string;
  phoneHref: string;
  email: string;
  contactPerson?: string;
  handles?: string;
  address?: string[];
}
