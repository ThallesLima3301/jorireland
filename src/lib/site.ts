import type { Office, OfficeId } from "@/types/content";

/**
 * Company facts verified against the public jorireland.com website (October 2026).
 * Update here and every page, footer, form and structured-data block follows.
 */
export const site = {
  name: "Joe O'Reilly Ireland DMC",
  shortName: "JOR Ireland DMC",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jorireland.com").replace(/\/$/, ""),
  foundedYear: 1966,
  founder: "Joe O'Reilly",
  ceo: "Bernard O'Reilly",
  tagline: "Ireland's family-run Destination Management Company since 1966",
  description:
    "Joe O'Reilly Ireland DMC designs and delivers group tours, M.I.C.E programmes, golf trips and luxury travel across the island of Ireland. Family-run since 1966, with offices in Dublin and Cork.",
  primaryEmail: "sales@jorireland.com",
  primaryPhone: "+353 181 20 200",
  primaryPhoneHref: "tel:+35318120200",
  social: {
    facebook: "https://www.facebook.com/jorirelanddmc/",
    linkedin: "https://www.linkedin.com/company/jorirelanddmc/",
  },
} as const;

export const offices: Record<OfficeId, Office> & { france: Office; northAmerica: Office } = {
  dublin: {
    id: "dublin",
    name: "Dublin Office",
    phone: "+353 181 20 200",
    phoneHref: "tel:+35318120200",
    email: "mice@jorireland.com",
    handles: "M.I.C.E, Rugby, Luxury F.I.T, Equestrian & Special Interest",
    address: ["Block A, Santry Business Park", "Airport Road", "Dublin 9, D09 P5F8"],
  },
  cork: {
    id: "cork",
    name: "Cork Office",
    phone: "+353 214 385 700",
    phoneHref: "tel:+353214385700",
    email: "sales@jorireland.com",
    handles: "Group Tours, Golf & Active Retired Tours",
    address: ["River House, Blackpool Retail Park", "Cork, T23 R5TF"],
  },
  france: {
    id: "france",
    name: "French Office",
    contactPerson: "Maude Breteau, Sales Director, French-Speaking Markets",
    phone: "+33 6 32 02 10 00",
    phoneHref: "tel:+33632021000",
    email: "mbreteau@jorireland.com",
  },
  northAmerica: {
    id: "north-america",
    name: "North American Office",
    contactPerson: "Sean Reilly, Sales Director, North America",
    phone: "+1 913 706 0784",
    phoneHref: "tel:+19137060784",
    email: "sreilly@jorireland.com",
  },
};

export const officeList: Office[] = [offices.dublin, offices.cork, offices.france, offices.northAmerica];

export function absoluteUrl(path = "/"): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
