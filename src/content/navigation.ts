export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export const mainNav: NavItem[] = [
  {
    label: "Tours",
    href: "/tours",
    children: [
      { label: "All Group Tours", href: "/tours", description: "30 itineraries, ready to tailor" },
      { label: "City Breaks", href: "/tours#city-break", description: "Dublin, Cork and Belfast" },
      { label: "4 to 7 Day Tours", href: "/tours#short-tour", description: "Focused regional journeys" },
      { label: "8 to 10 Day Tours", href: "/tours#extended-tour", description: "The full Irish experience" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Group Tours", href: "/tours", description: "Leisure group travel" },
      { label: "M.I.C.E", href: "/services/mice", description: "Meetings, incentives, conferences & events" },
      { label: "Golf Trips", href: "/services/golf", description: "Links, parkland and beyond" },
      { label: "Luxury F.I.T", href: "/services/luxury-fit", description: "Bespoke private travel" },
      { label: "Rugby Trips", href: "/services/rugby", description: "Tickets and hospitality" },
      { label: "Equestrian Trips", href: "/services/equestrian", description: "Ireland, home of the horse" },
      { label: "Active Retired Tours", href: "/services/active-retirement", description: "Coach tours for retired groups" },
      { label: "Special Interest", href: "/services/special-interest", description: "Pilgrimages, choirs and more" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about", description: "Family-run since 1966" },
      { label: "Our History", href: "/about/history", description: "Six decades of milestones" },
      { label: "Joe O'Reilly", href: "/about/joe-oreilly", description: "Our founder, 1932–2007" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Group Tours", href: "/tours" },
      { label: "M.I.C.E", href: "/services/mice" },
      { label: "Golf Trips", href: "/services/golf" },
      { label: "Luxury F.I.T", href: "/services/luxury-fit" },
      { label: "Rugby Trips", href: "/services/rugby" },
      { label: "Equestrian Trips", href: "/services/equestrian" },
      { label: "Active Retired Tours", href: "/services/active-retirement" },
      { label: "Special Interest", href: "/services/special-interest" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Our History", href: "/about/history" },
      { label: "Joe O'Reilly", href: "/about/joe-oreilly" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];
