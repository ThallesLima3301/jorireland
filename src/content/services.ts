import type { ImageAsset, ItineraryDay, Service } from "@/types/content";
import { photo } from "./media";
import { getTour } from "./tours";

/**
 * Service content is drawn from the public jorireland.com and connect.jorireland.com pages.
 * Copy has been edited for clarity; facts, names and inclusions are unchanged.
 */

function day(n: number, title: string, items: [string, string?][], image?: ImageAsset): ItineraryDay {
  return { day: n, title, items: items.map(([label, detail]) => (detail ? { label, detail } : { label })), ...(image ? { image } : {}) };
}

function tourDays(slug: string): ItineraryDay[] {
  return getTour(slug)?.days ?? [];
}

function tourDayImage(slug: string, dayNumber: number, alt: string): ImageAsset {
  const image = getTour(slug)?.days.find((d) => d.day === dayNumber)?.image;
  if (!image) throw new Error(`Missing image for ${slug} day ${dayNumber}`);
  return { ...image, alt };
}

function tourHero(slug: string, alt: string): ImageAsset {
  const image = getTour(slug)?.hero;
  if (!image) throw new Error(`Missing hero image for ${slug}`);
  return { ...image, alt };
}

const GOLF = "6-day-ultimate-irish-golf-trip";
const PATRICK = "8-day-in-the-footsteps-of-saint-patrick";

export const services: Service[] = [
  {
    slug: "group-tours",
    name: "Group Tours of Ireland",
    cardTitle: "Group Tours",
    cardDescription: "Thirty ready-to-tailor itineraries, from three-day city breaks to the ten-day Grand Tour.",
    href: "/tours",
    metaTitle: "Group Tours of Ireland",
    metaDescription: "Leisure group tours of Ireland from a family-run DMC: city breaks, 4 to 7 day tours and 8 to 10 day itineraries.",
    hero: {
      eyebrow: "Group Tours",
      title: "Group tours immersed in Irish culture",
      intro: "Local guides, luxury coaches and well-situated hotels, with the island's iconic sites and authentic Irish experiences built into every day.",
      image: photo("svcGroup", "Joe O'Reilly Ireland DMC coach with a tour group at a scenic viewpoint"),
    },
    cardImage: tourHero("4-day-dublin-the-splendour-of-connemara", "Kylemore Abbey reflected in a lake in Connemara"),
    keyPoints: [],
    sections: [],
    office: "cork",
    ctaTitle: "Let's plan your next group tour together",
    ctaText: "Our team is ready to design and plan your next group tour to Ireland.",
  },
  {
    slug: "mice",
    name: "M.I.C.E & Conference Management",
    cardTitle: "M.I.C.E",
    cardDescription: "Meetings, incentives, conferences and events, managed to the highest international standards.",
    href: "/services/mice",
    metaTitle: "M.I.C.E & Events DMC in Ireland",
    metaDescription:
      "Meetings, incentives, conferences and events in Ireland. Joe O'Reilly Ireland DMC designs incentive programmes, gala dinners and full conference management.",
    hero: {
      eyebrow: "M.I.C.E & PCO",
      title: "Meetings, incentives, conferences & events in Ireland",
      intro:
        "From complex corporate conferences to unique incentive trips, we deliver organisation and event management services to the highest international standards, with programmes designed around your guests.",
      image: photo("miceAccommodation", "Aerial view of Adare Manor and its formal gardens beside the River Maigue"),
    },
    cardImage: photo("svcMice", "The Convention Centre Dublin illuminated at night on the River Liffey"),
    keyPoints: [
      "Professional Conference Organiser (PCO) services",
      "Incentive programmes for corporate groups",
      "Gala dinners in iconic Irish venues",
      "Team-building and group activities",
    ],
    sections: [
      {
        eyebrow: "Our philosophy",
        title: "F.O.B.I.C: flexible, original, budget, imagination, creativity",
        body: [
          "This philosophy informs every programme we design together with our clients. The word 'no' does not exist in our vocabulary.",
          "As your M.I.C.E DMC in Ireland, we design and manage unique programmes for incentive groups, corporate groups and events, and we are by your side all the way.",
        ],
        image: photo("miceConference", "Corporate guests at an evening reception outside an ivy-covered Irish castle"),
      },
      {
        eyebrow: "Location, location, location",
        title: "Direct access from all over the world",
        body: [
          "With four main international airports on the island, Ireland enjoys direct access from the main hubs worldwide. Wherever your attendees are flying from, organising their transit is straightforward.",
        ],
        image: photo("miceLocation", "A pint and a fiddle on a table in a traditional Irish pub"),
      },
      {
        eyebrow: "Céad míle fáilte",
        title: "A hundred thousand welcomes",
        body: [
          "We make sure your guests have the opportunity to meet and interact with local people every day. Creative ways we can welcome them include a shot of whiskey on arrival or a surprise bagpiper to guide them through the airport, and many more ideas are available on request.",
        ],
        image: photo("miceFriendly", "A black-faced sheep on a clifftop above the Atlantic"),
      },
      {
        eyebrow: "From cottages to castles",
        title: "Luxury accommodation",
        body: [
          "We have an excellent working relationship with almost every 5-star hotel on the island of Ireland. If your programme needs several properties, our organisers handle the booking and transport logistics so that everything simply works for your guests.",
        ],
        image: photo("miceHero", "Classic cars parked on the lawn of a historic Irish country house hotel"),
      },
      {
        eyebrow: "Spellbinding entertainment",
        title: "Performances your guests will remember",
        body: [
          "For large and small venues alike, we have access to an extensive list of performers and work with you to create a programme that entertains and delights.",
        ],
        bullets: ["Authentic Irish cultural performances", "Traditional Irish music bands", "Group céilí (traditional) dancing", "U2 tribute band", "Gospel choirs"],
        image: photo("miceEntertainment", "Irish dancers performing on stage in traditional costume"),
      },
      {
        eyebrow: "Your group, working together",
        title: "Group activities across the island",
        body: [
          "For corporate and leisure groups alike, we have access to hundreds of creative group activities all across the island of Ireland.",
        ],
        bullets: [
          "Play Irish musical instruments as a band",
          "Team-building away days",
          "Wildlife activities, including falconry",
          "Outdoor activities, including sheep-herding",
          "Learn Irish dancing",
        ],
        image: photo("miceActivities", "Visitors crossing the Carrick-a-Rede rope bridge on the Antrim coast"),
      },
      {
        eyebrow: "Choose from the most impressive venues",
        title: "Gala dinners",
        body: [
          "We have access to an extensive selection of gala dinner venues. For very large groups, the Guinness Storehouse in Dublin can accommodate up to 2,000 guests across five storeys. We also assist with menu selection and manage health and safety.",
        ],
        image: photo("miceGala", "A candlelit banquet table set for a gala dinner in a historic hall"),
      },
      {
        eyebrow: "Fore!",
        title: "World-class golf for incentive groups",
        body: [
          "Access to some of the world's most scenic golf courses, including dozens of links courses along Ireland's coastline, with bespoke golf experiences and group clinics for beginners.",
        ],
        image: photo("miceGolf", "A links golf course at sunset on the Irish coast"),
      },
    ],
    capabilities: [
      { title: "Your guest experience", items: ["Visa applications", "Guest registration", "Luxury accommodation", "Social events programme"] },
      {
        title: "Conference planning",
        items: ["Bid document production", "Project management", "Timeline management", "Site inspections"],
      },
      {
        title: "Finance management",
        items: ["Feasibility study", "Budget management", "Credit control", "Funding assistance"],
      },
      {
        title: "Logistics management",
        items: ["Transport planning", "Local government liaison", "Police liaison", "End-to-end logistics"],
      },
      { title: "Your venue", items: ["Venue co-ordination", "Staging & set-up", "A/V management", "Live entertainment"] },
      { title: "Supplier management", items: ["Accommodation", "Venue & catering", "Insurance", "Design & print"] },
      { title: "Communications", items: ["Event website", "Branding & graphics", "Social media design", "Multilingual staff"] },
    ],
    office: "dublin",
    ctaTitle: "Tell us about your event",
    ctaText: "Our team is ready to design and plan your meeting, incentive trip, conference or event.",
  },
  {
    slug: "golf",
    name: "Golf Trips in Ireland",
    cardTitle: "Golf Trips",
    cardDescription: "Tailor-made itineraries at Ireland's finest courses, wrapped in authentic Irish experiences.",
    href: "/services/golf",
    metaTitle: "Golf Trips & Golf Tours in Ireland",
    metaDescription:
      "Tailor-made golf trips in Ireland: tee times at top links and parkland courses, luxury stays, golfer driver-guides and activities for non-golfers.",
    hero: {
      eyebrow: "Golf in Ireland",
      title: "Your golf DMC in Ireland",
      intro:
        "Tailor-made itineraries, playing the best courses, wrapped in authentic Irish experiences. Once we have built your trip together, we manage it from start to finish.",
      image: photo("svcGolf", "A links fairway leading to a white lighthouse on the Irish coast"),
    },
    cardImage: photo("svcGolf", "Links golf course beside a lighthouse on the Irish coastline"),
    keyPoints: [
      "Choose from around 500 golf courses on the island",
      "Over 50 prestigious links courses",
      "Experienced golfer driver-guides",
      "Accommodation from cottages to castles",
    ],
    sections: [
      {
        eyebrow: "Trusted by the biggest names in golf",
        title: "The team behind Arnold Palmer's Ryder Cup arrangements",
        body: [
          "Joe O'Reilly Ireland Golf was privileged to be asked to manage all arrangements for Mr. Arnold Palmer and his entourage during the Ryder Cup at the K Club in 2006.",
          "Pictured: CEO Bernard O'Reilly with Arnold Palmer, winner of 62 PGA titles, and with Padraig Harrington, winner of the Open and PGA Championships.",
        ],
        image: photo("arnoldPalmer", "Photographs of CEO Bernard O'Reilly with Arnold Palmer and with Padraig Harrington"),
      },
      {
        eyebrow: "An island dedicated to golf",
        title: "Why take your golf trip to Ireland?",
        body: [
          "Only in Ireland can your group sink a putt overlooked by a Viking tower, break for oysters and spend the night in a castle.",
          "Ireland is home to around a third of all links courses in the world. Play Old Head Golf Links in Kinsale, a peninsula shaped into a single remarkable course, or Royal County Down. Whatever your budget and group size, we make sure your group plays some of the most picturesque courses in the world.",
        ],
        image: tourDayImage(GOLF, 2, "Aerial view of links fairways at sunset at Baltray, County Louth"),
      },
      {
        eyebrow: "More than golf",
        title: "Experiences for golfers and non-golfers alike",
        body: [
          "We wrap every golf trip in memorable Irish experiences, chosen from hundreds across the island. Non-golfers on your trip are just as well looked after.",
        ],
        bullets: [
          "Traditional Irish pubs and restaurants",
          "Beer and whiskey tastings",
          "Evenings of horse racing or greyhound racing",
          "Hiking, fishing and cycling",
          "Spa treatments at your hotel",
          "Guided visits to nearby gardens and castles",
          "Irish coffee-making demonstrations",
        ],
        image: tourHero("8-day-irelands-distilleries-breweries-pubs", "A distiller at work beside copper stills in an Irish distillery"),
      },
      {
        eyebrow: "From cottages to castles",
        title: "Luxury accommodation for your golf trip",
        body: [
          "We work with hotels across the island of Ireland, from cosy cottages to luxury castles, with full concierge service, private dining and transport options including helicopters and vintage cars.",
        ],
        image: tourDayImage(GOLF, 5, "Aerial view of a links course on a peninsula near Dublin"),
      },
    ],
    capabilities: [
      {
        title: "What we manage",
        items: [
          "Unlimited re-drafting of your itinerary, until it is just right",
          "Course bookings with the best tee times",
          "Unique Irish experiences every day",
          "Transport with experienced golfer driver-guides",
          "Dining, from pubs to award-winning restaurants",
          "Accommodation, from cottages to castles",
        ],
      },
      { title: "Transportation", items: ["All local transportation", "Private driver options", "Vehicle selection", "Helicopter travel available"] },
    ],
    gallery: [
      photo("golfRcd", "Royal County Down Golf Club"),
      photo("golfPortrush", "Royal Portrush Golf Club"),
      photo("golfLahinch", "Lahinch Golf Club"),
      photo("golfBallybunion", "Ballybunion Golf Club, The Old Course"),
      photo("golfWaterville", "Waterville Golf Links"),
      photo("golfEuropean", "The European Club"),
      photo("golfPortmarnock", "Portmarnock"),
      photo("golfTralee", "Tralee Golf Club"),
    ],
    sampleItinerary: {
      title: "6-Day Ultimate Dublin-Based Golf Trip",
      highlights: ["Stay at the 5-star Shelbourne Hotel", "Five rounds of golf", "Greyhound racing evening in Dublin", "Welcome whiskey on arrival"],
      days: tourDays(GOLF),
      tourSlug: GOLF,
    },
    office: "cork",
    ctaTitle: "Let's plan your next golf trip together",
    ctaText: "Tell us about your group and we'll design a golf trip to Ireland around you.",
  },
  {
    slug: "luxury-fit",
    name: "Luxury F.I.T",
    cardTitle: "Luxury F.I.T",
    cardDescription: "Private, bespoke luxury and ultra-luxury travel shaped by experienced travel designers.",
    href: "/services/luxury-fit",
    metaTitle: "Luxury F.I.T Travel in Ireland",
    metaDescription:
      "Bespoke luxury and ultra-luxury independent travel in Ireland: private tours, castles and estates, curated culinary experiences and MIP packages.",
    hero: {
      eyebrow: "Luxury F.I.T",
      title: "Luxury and ultra-luxury travel in Ireland",
      intro:
        "Let our highly experienced travel designers showcase Ireland's most curious and private experiences, with stays in castles and estates and every detail managed for you.",
      image: photo("fitDay2", "Aerial view of Ashford Castle on the shores of Lough Corrib"),
    },
    cardImage: photo("svcFit", "A falconer with a hawk in front of Ashford Castle"),
    keyPoints: [
      "Private accommodation in Irish castles and estates",
      "Private tailored tours",
      "MIP (Most Important People) packages",
      "World-class concierge service",
    ],
    sections: [
      {
        eyebrow: "Made for you",
        title: "Bespoke journeys for discerning travellers",
        body: [
          "Ireland has some of the most spectacular and discerning properties, both private and public. Combined with Irish hospitality and remarkable scenery, they make for journeys your guests will treasure.",
        ],
        bullets: ["Family and group celebrations", "Unique adventures for thrill-seekers", "Luxury culinary experiences", "Specialty tours for niche interests"],
        image: photo("fit1", "Ashford Castle and its gravel driveway on a sunny day"),
      },
      {
        eyebrow: "Private and personal",
        title: "Every detail arranged around you",
        body: [
          "From falconry on a castle estate to a private chauffeur-guide, our travel designers build creative itineraries and trails around your guests' interests, with additional authentic Irish experiences woven throughout.",
        ],
        image: photo("fit3", "A chauffeur-driven luxury car waiting at a country estate"),
      },
    ],
    sampleItinerary: {
      title: "8 Days: The Luxury Tour of Ireland & the Wild Atlantic Way",
      highlights: ["Explore the Wild Atlantic Way", "Experience the best of Ireland", "5-star hotels, castles and manors"],
      days: [
        day(1, "Dublin & Welcome", [
          ["Arrival at Dublin Airport", "into the care of your experienced chauffeur-guide, with a welcome shot of Irish whiskey."],
          ["Visit to Trinity College", "known for its treasures, in particular the Book of Kells, a 9th-century illuminated manuscript."],
          ["Lunch", "in a traditional Dublin pub."],
          ["Visit to the Guinness Storehouse", "the home of Guinness stout."],
          ["Dinner", "at Dublin's famous Ivy restaurant."],
          ["Overnight", "at the 5-star Westin Hotel, Dublin city centre."],
        ], photo("fitDay1", "The Long Room library at Trinity College Dublin")),
        day(2, "Whiskey Secrets & Galway", [
          ["Your self-drive car is delivered", "to your hotel."],
          ["Depart for County Galway", "across the central plains of Ireland, east to west."],
          ["Connoisseur experience at Kilbeggan Distillery", "an exclusive 'All Access' tour with a whiskey expert, discovering how Irish whiskey has been made here since 1757."],
          ["Continue to Cong", "the famous village in County Mayo."],
          ["Dinner", "in Collins' Cottage at Ashford Castle."],
          ["Overnight", "at the 5-star Ashford Castle."],
        ], photo("fitDay2", "Ashford Castle seen from the air")),
        day(3, "The Magic of Connemara", [
          ["Full-day excursion of Connemara", "a wild landscape of lakes and bogs, mountains and valleys, cliffs and beaches."],
          ["Visit to Kylemore Abbey & Gardens", "the world-famous Benedictine monastery."],
          ["Cruise on Killary Fjord", "with lunch on board."],
          ["Visit to a Connemara oyster farm", "with tasting."],
          ["Dinner", "at Pat Cohan's Bar in Cong village."],
          ["Overnight", "at Ashford Castle."],
        ], photo("fitDay3", "Kylemore Abbey reflected in the lake below the mountains")),
        day(4, "Ashford Castle Demesne", [
          ["Country pursuits on the Ashford Castle estate", "including falconry, fishing, horse riding, golf and more."],
          ["Afternoon treatments", "at the hotel spa."],
          ["Dinner", "in the George V Dining Room at Ashford Castle."],
          ["Overnight", "at Ashford Castle."],
        ], photo("fitDay4", "A falconer with a hawk in the grounds of Ashford Castle")),
        day(5, "The Burren & Cliffs of Moher", [
          ["Full-day exploration", "of the Burren and the Cliffs of Moher."],
          ["Cruise", "with views of the Cliffs of Moher from the Atlantic."],
          ["Visit to Bunratty Castle & Folk Park", "with tea, coffee and scones."],
          ["Dinner", "at The Oak Room restaurant."],
          ["Overnight", "at the 5-star Adare Manor."],
        ], photo("fitDay5", "The Cliffs of Moher in evening light")),
        day(6, "Dingle Peninsula", [
          ["Full-day exploration of the Dingle Peninsula", "renowned for its scenic coastal road along the Atlantic."],
          ["Visit to the Gallarus Oratory"],
          ["Irish coffee demonstration", "in a traditional Irish pub."],
          ["Dinner", "at The Carriage House, Adare Manor."],
          ["Overnight", "at Adare Manor."],
        ]),
        day(7, "Country Pursuits & Cashel", [
          ["A day of activities at Adare Manor", "including a horse-drawn carriage ride, cycling, horse riding, golf and fishing."],
          ["Lunch", "at the clubhouse."],
          ["Visit to the Rock of Cashel"],
          ["Dinner", "at The Bishop's Buttery, Cashel Palace."],
          ["Overnight", "at the 5-star Cashel Palace."],
        ]),
        day(8, "Departure", [["Depart", "towards Dublin Airport for your departure flight."]], photo("fitDay8", "The Ha'penny Bridge over the River Liffey in Dublin")),
      ],
    },
    gallery: [photo("fit2", "Falconry experience at an Irish castle"), photo("fit4", "Illustration of a Georgian country house and gates")],
    office: "dublin",
    ctaTitle: "Speak with a travel designer",
    ctaText: "Ultra-luxury Ireland, planned and managed by our travel designers.",
  },
  {
    slug: "rugby",
    name: "Rugby Group Trips",
    cardTitle: "Rugby Trips",
    cardDescription: "Match tickets, hospitality and the Irish way of celebrating, planned by rugby experts.",
    href: "/services/rugby",
    metaTitle: "Rugby Trips to Ireland",
    metaDescription:
      "Plan a rugby trip to Ireland: access to match tickets, pre- and post-match hospitality, hotels near the stadium and local experiences in Dublin.",
    hero: {
      eyebrow: "Rugby in Ireland",
      title: "Experience rugby the Irish way",
      intro:
        "Over the decades we have developed close links with the Irish Rugby Football Union and many local clubs. Let our rugby experts plan your ultimate rugby experience in Ireland.",
      image: photo("rugbyHero", "Ireland rugby players walking together after a match"),
    },
    cardImage: photo("svcRugby", "Ireland rugby player scoring a try during an international match"),
    keyPoints: [
      "Access to match tickets",
      "Pre- and post-match hospitality packages",
      "Pre- and post-match golf packages",
      "Fixtures and itineraries for visiting teams",
    ],
    sections: [
      {
        eyebrow: "Privileged contacts",
        title: "Tickets, hospitality and fixtures",
        body: [
          "Through our contacts we are fortunate to have access to tickets and hospitality. We also cater for teams visiting from abroad, setting up fixtures and creating fun, engaging itineraries for your group.",
        ],
        bullets: [
          "Airport transfers by luxury coach",
          "Multilingual guide",
          "4-star hotel near the stadium",
          "Full Irish breakfast each morning",
          "Match tickets with pre- and post-match hospitality",
        ],
        image: photo("rugby1", "Ireland and England players contesting a ruck"),
      },
      {
        eyebrow: "Beyond the match",
        title: "Local activities for your group",
        body: ["Make the most of every hour off the pitch, with experiences chosen for your group."],
        bullets: ["Musical pub crawls", "Food trails", "Whiskey tastings", "Guinness experiences"],
        image: photo("rugby2", "Irish whiskey being poured for a tasting"),
      },
    ],
    sampleItinerary: {
      title: "Rugby Trip to Ireland: 3-Day Itinerary",
      highlights: ["Hotel in Dublin city centre", "Match at the Aviva Stadium", "Evening in an Irish pub"],
      days: [
        day(1, "Arrive in Dublin", [
          ["Arrive at Dublin Airport", "into the care of your guide."],
          ["Transfer by luxury coach", "to your city-centre hotel."],
          ["Panoramic tour", "of Dublin."],
          ["Dinner and overnight", "at your hotel in Dublin city centre."],
        ], photo("rugby3", "A green-liveried aircraft landing in Dublin")),
        day(2, "Kick-Off!", [
          ["Full Irish breakfast", "at your hotel."],
          ["Walk to the Aviva Stadium", "for the match."],
          ["Kick-off", "at 3pm."],
          ["Post-match meal", "at an Irish restaurant."],
          ["Evening drinks", "in an Irish pub."],
          ["Overnight", "at your hotel in Dublin city centre."],
        ]),
        day(3, "Shopping & Departure", [
          ["Free time", "in Dublin for sightseeing and shopping."],
          ["Lunch", "in an Irish pub."],
          ["Transfer to Dublin Airport", "for your flight home."],
        ]),
      ],
    },
    office: "dublin",
    ctaTitle: "Let's start planning your rugby trip",
    ctaText: "Tell us about the match, your group and your dates, and we'll take it from there.",
  },
  {
    slug: "equestrian",
    name: "Equestrian Group Trips",
    cardTitle: "Equestrian Trips",
    cardDescription: "Discover why Ireland is renowned as the home of the horse, with bespoke luxury itineraries.",
    href: "/services/equestrian",
    metaTitle: "Equestrian Tours in Ireland",
    metaDescription:
      "Bespoke equestrian trips to Ireland: hunting, horse racing, three-day eventing, the Dublin Horse Show and private stud farm tours.",
    hero: {
      eyebrow: "Equestrian Ireland",
      title: "Ireland, home of the horse",
      intro:
        "For the equestrian enthusiast, Ireland offers the best experiences, from wild mountain trails to a gallop on our beautiful beaches and the famous horse racing on the beach at Laytown.",
      image: photo("eqHero", "Racehorses and jockeys rounding a bend at an Irish racecourse"),
    },
    cardImage: photo("svcEquestrian", "Two riders on horseback along a tree-lined country lane"),
    keyPoints: ["Horse racing", "Horse riding holidays", "Three-day eventing", "Carriage racing", "Dublin Horse Show"],
    sections: [
      {
        eyebrow: "A heritage since 1975",
        title: "Creative equestrian itineraries",
        body: [
          "Since launching Ireland's first International Horse Riding Academy in 1975, we have offered creative equestrian itineraries with activities not available from other operators, for adults and families alike, tailored exclusively to your group.",
        ],
        bullets: [
          "Exclusive access and packages for the Dublin Horse Show",
          "Private tours of Irish stud farms",
          "Race days with access to owners and trainers",
          "Bespoke trips designed for your group",
        ],
        image: photo("eq3", "Riders in hunting attire with their horses in an Irish field"),
      },
      {
        eyebrow: "On the hunt",
        title: "Hunting with Irish harriers",
        body: [
          "Our sample Horse & Hound trip includes four full days riding out with the Fingal, Tara and Oriel Farney Harriers, returning each evening to a period country house, traditional pubs and live Irish music.",
        ],
        image: photo("eq2", "A huntsman in a red coat riding through woodland with hounds"),
      },
    ],
    gallery: [
      photo("eqRacing", "Horse racing on the beach"),
      photo("eqCarriage", "Carriage racing in Ireland"),
      photo("eqSideSaddle", "Side-saddle show jumping"),
      photo("eqHorseShow", "Show jumping at the Dublin Horse Show"),
    ],
    sampleItinerary: {
      title: "Horse & Hound Trip: 7-Day Itinerary",
      highlights: ["Four full days of hunting", "Stay in an iconic country manor", "Authentic Irish evening entertainment"],
      days: [
        day(1, "Arrival in Dublin", [
          ["Arrive at Dublin Airport", "and meet your experienced tour guide, who escorts you to your coach."],
          ["Surprise welcome", "with a bagpiper and a welcome whiskey."],
          ["Guided tour", "of the seaside village of Howth."],
          ["Visit to Newgrange", "a cultural site dating from 3,200 BC."],
          ["Dinner at Clarke's Pub", "with a live show of traditional Irish music and dance."],
          ["Overnight", "at Hanover House, a period country house built in 1690."],
        ], photo("eqDay4", "The Newgrange passage tomb under a deep blue sky")),
        day(2, "Hunting", [
          ["Depart for the hunt", "with the Fingal Harriers hunting club (approx. 3.5 hours)."],
          ["Soup and sandwiches", "at a traditional Irish pub."],
          ["Dinner", "at The Snailbox, a traditional Irish restaurant."],
          ["An evening of traditional Irish music", "back at your accommodation."],
        ]),
        day(3, "Hunting", [
          ["Depart for the hunt", "with the Tara Harriers hunting club (approx. 3.5 hours)."],
          ["Lunch", "at a local Irish pub."],
          ["Dinner", "at O'Brien's, a traditional Irish restaurant."],
        ]),
        day(4, "Exploring Dublin", [
          ["Guided visit", "of the Guinness Storehouse, with lunch."],
          ["Visit", "to EPIC The Irish Emigration Museum."],
          ["Visit", "to Trinity College and the Book of Kells."],
          ["Whiskey blending experience", "at the Irish Whiskey Museum."],
          ["A night of greyhound racing", "and dinner at Shelbourne Park."],
        ], photo("eqDay1", "The black gates of the Guinness Storehouse in Dublin")),
        day(5, "Hunting", [
          ["Depart for the hunt", "with the Fingal Harriers (approx. 3.5 hours)."],
          ["Dinner", "at Man O'War, with an Irish coffee demonstration."],
        ]),
        day(6, "Hunting", [
          ["Depart for the hunt", "with the Oriel Farney Harriers (approx. 3.5 hours)."],
          ["Pre-dinner whiskey tasting", "at Slane Distillery."],
          ["Dinner", "at Browne's Bar in Slane Castle."],
          ["An evening of live traditional Irish music", "back at your accommodation."],
        ]),
        day(7, "Dublin & Departure", [["Check out", "and coach transfer to Dublin Airport for departure."]]),
      ],
    },
    office: "dublin",
    ctaTitle: "Request our equestrian brochure",
    ctaText: "We've assembled hundreds of creative ideas and itineraries for equestrian trips to Ireland. Ask our team for a copy.",
  },
  {
    slug: "active-retirement",
    name: "Active Retired Tours Ireland (A.R.T.I)",
    cardTitle: "Active Retired Tours",
    cardDescription: "Coach tours designed around the unique requirements of active retired groups.",
    href: "/services/active-retirement",
    metaTitle: "Active Retirement Coach Tours",
    metaDescription:
      "Coach tours for active retirement groups in Ireland: half-day, full-day and extended tours with comfortable coaches and experienced driver-guides.",
    hero: {
      eyebrow: "A.R.T.I",
      title: "Coach tours for active retirement groups",
      intro:
        "Our attentive, friendly team understands the requirements of active retired group travel. We listen to exactly what your group wants and manage every aspect of the trip, with a high level of personal service.",
      image: photo("artiEx2", "A Joe O'Reilly coach parked above a scenic Irish bay"),
    },
    cardImage: photo("svcArti", "Smiling members of an active retirement group crossing a rope bridge"),
    keyPoints: [
      "Half-day, full-day and extended tours",
      "Special interest trips, such as pilgrimages and shopping trips",
      "Modern, comfortable, air-conditioned coaches",
      "Smartly dressed, experienced driver-guides",
      "Fully managed and punctual service",
    ],
    sections: [
      {
        eyebrow: "More than a coach",
        title: "Your whole trip, managed end to end",
        body: [
          "With Joe O'Reilly Ireland, you're not just hiring a coach: we manage your whole trip, end to end, in a friendly and professional manner. We have catered for hundreds of groups and deliver a tailor-made itinerary that makes sure every request is met.",
          "We are proud of our driver-guides, who act as tour leader for the duration of the tour.",
        ],
        image: photo("artiEx1", "Members of an active retirement group enjoying a day out"),
      },
    ],
    gallery: [photo("artiEx3", "Glendalough round tower and monastic site in Wicklow"), photo("artiEx4", "Powerscourt House and its terraced gardens")],
    sampleItinerary: {
      title: "Explore Galway & Connemara: 4-Day Coach Tour",
      highlights: ["Luxury coach throughout", "Three Full Irish breakfasts included", "Dinner with live entertainment"],
      days: [
        day(1, "Depart for Galway", [
          ["Collection", "from your chosen collection point."],
          ["Transfer to Galway", "and check in at the 3-star Salthill Hotel."],
          ["Dinner at the hotel", "with live entertainment."],
        ], photo("artiDay1", "A white sandy beach on the west coast of Ireland")),
        day(2, "Exploring Connemara", [
          ["Full-day tour", "of beautiful Connemara."],
          ["Free time in Clifden", "for a stroll and lunch."],
          ["Visit", "to Kylemore Abbey and Gardens."],
          ["Dinner and overnight", "at your hotel."],
        ], photo("artiDay2", "A wooded island in a Connemara lake below the mountains")),
        day(3, "The Burren & Cliffs of Moher", [
          ["Full tour", "of the Burren region."],
          ["Lunch", "en route."],
          ["Visit", "to the Cliffs of Moher and Visitor Centre."],
          ["Dinner", "at your hotel, with live entertainment."],
        ], photo("artiDay3", "The Cliffs of Moher above the Atlantic")),
        day(4, "Departure", [["Depart Galway", "for the journey home."]], photo("artiDay4", "Dry-stone walls criss-crossing green fields on the Aran Islands")),
      ],
    },
    office: "cork",
    ctaTitle: "Plan your group's next coach trip",
    ctaText: "Call our team or tell us about your group, and we'll put together an itinerary to suit.",
  },
  {
    slug: "special-interest",
    name: "Special Interest Trips",
    cardTitle: "Special Interest",
    cardDescription: "Pilgrimages, choirs, culinary groups and more, built around your group's passion.",
    href: "/services/special-interest",
    metaTitle: "Special Interest Group Tours",
    metaDescription:
      "Special interest group tours in Ireland: faith-based tours and pilgrimages, choirs and orchestras, culinary and adventure groups, with full ground handling.",
    hero: {
      eyebrow: "Special Interest",
      title: "Whatever your passion, we build Ireland around it",
      intro:
        "Every day we help groups with particular requirements visit and tour Ireland, from large or fragile luggage to access to special venues. We dot the i's and cross the t's.",
      image: tourDayImage(PATRICK, 7, "The monastic site at Glendalough in County Wicklow"),
    },
    cardImage: photo("svcSpecial", "Hikers on a waymarked trail in the Irish mountains"),
    keyPoints: [
      "Faith-based tours and pilgrimages",
      "Musical groups: choirs, bands and orchestras",
      "Adventure-seekers",
      "Culinary groups",
      "Comités d'entreprise",
    ],
    sections: [
      {
        eyebrow: "From design to delivery",
        title: "Experts in ground handling",
        body: [
          "From creative itinerary design to managing all ground handling, our team are the experts to facilitate your group's visit to Ireland. We work closely with you to make sure your group sees everything it wants to see, on time and within budget.",
        ],
        image: photo("si3", "The interior of an Irish church with a stone altar"),
      },
      {
        eyebrow: "Groups we welcome",
        title: "Musicians, pilgrims, food lovers and adventurers",
        body: [
          "Whatever your special interest is, we will create an Irish experience around it, including help with large or fragile luggage and access to special venues.",
        ],
        image: photo("si2", "Members of a marching band with red drums"),
      },
    ],
    sampleItinerary: {
      title: "In the Footsteps of Saint Patrick: 8-Day Pilgrimage",
      highlights: ["Travel the island of Ireland", "Dive into Irish culture and legends", "Walk in the footsteps of St. Patrick"],
      days: tourDays(PATRICK),
      tourSlug: PATRICK,
    },
    office: "dublin",
    ctaTitle: "Let us manage your special interest tour",
    ctaText: "Tell us about your group and its interests, and we'll design a visit to Ireland around them.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Services with their own detail page under /services/[slug]. */
export const servicePages = services.filter((s) => s.href === `/services/${s.slug}`);
