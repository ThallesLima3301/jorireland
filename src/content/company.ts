import type { ImageAsset, Testimonial } from "@/types/content";
import { photo } from "./media";

/** Company story, proof points and testimonials, as published on jorireland.com. */

export const valueProps: { title: string; text: string; icon: string }[] = [
  { icon: "landmark", title: "Family-run since 1966", text: "Ireland's longest-established independent, family-run DMC, covering the whole island." },
  { icon: "map", title: "Dedicated to Ireland", text: "An Ireland-only DMC covering North and South, with offices in Dublin and Cork." },
  { icon: "compass", title: "Local knowledge", text: "Our local guides teach your guests the lingo and show them the best spots for lasting memories." },
  { icon: "receipt", title: "All-inclusive tours", text: "No surprise bills and no surprise stops. One highly detailed invoice, with no corners cut." },
  { icon: "users", title: "One driver-guide", text: "Your guests keep the same driver-guide from the moment they arrive until they depart." },
  { icon: "languages", title: "Brilliant, multilingual staff", text: "Friendly, multilingual people who make your guests' time with us personal and warm." },
  { icon: "shield", title: "Security via guarantees", text: "We are proud to hold the highest credit rating available to any DMC in Ireland." },
  { icon: "clock", title: "24/7 support", text: "Should an issue arise, we are immediately contactable and guarantee a swift resolution." },
];

export const ceoMessage = {
  name: "Bernard O'Reilly",
  role: "CEO, Joe O'Reilly Ireland DMC",
  image: photo("bernard", "Bernard O'Reilly, CEO of Joe O'Reilly Ireland DMC"),
  short:
    "Welcome to the Ireland of Joe O'Reilly Ireland DMC, and a sincere thank you for taking the time to visit. We would love to help you with your next trip to this wonderful island of ours. Hopefully we will have the opportunity of working with you and welcoming your guests to our shores soon.",
  paragraphs: [
    "I'm really proud to share with you the legacy my father, Joe, created. I hope the creativity and passion we stand for comes across.",
    "What we do is actually very simple: at the end of the day it's all about listening, trust and people. We have to earn your confidence and trust; once we have it, you can rest assured that everything happens as it should, with no surprises.",
    "We become partners, so much so that we treat your business as if it were our own. Some of my colleagues have over 30 years' service. Imagine the knowledge and experience that goes with that.",
    "People make this business, which is why you work with the same person on your project from the very start to the very end. We also place the same drivers and guides with your group throughout the tour, from the moment they arrive until they depart.",
    "If you have a specific idea in mind for a special itinerary, just lift the phone or email me or any of my colleagues. We can have a chat and draw up an itinerary that suits your needs, so that what you receive from us is exactly what you're expecting.",
  ],
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The Joe O'Reilly Group has been our DMC in Ireland for 17 years and we couldn't ask for a better partner. The incredibly high levels of service and care that they provide – at every turn – makes us feel like we have our own offices (and own people) in Dublin and Cork. Problems are anticipated and solved with our guests' well-being always at the forefront.",
    name: "Bruce Epstein",
    role: "President, Odysseys Unlimited",
    image: photo("tBruce", "Bruce Epstein"),
  },
  {
    quote:
      "This was their first time dealing with us and they did a wonderful job. When they said they wanted everything to be perfect they succeeded. The hospitality of their tourism partners also shined. … This was truly a 5 star experience for Travel With Bradley passengers.",
    name: "Bradley Walters",
    role: "President, Travel With Bradley",
    image: photo("tBradley", "Bradley Walters"),
  },
  {
    quote:
      "Ireland is a fantastic country. All feedback from the participants were rave reviews. Thank you from me to all of your team, for their creativity, enthusiasm and resilience. This new success has brought us even closer to our customer.",
    name: "Damien Hurstel",
    role: "CEO, Good Story",
    image: photo("tDamien", "Damien Hurstel"),
  },
  {
    quote: "After this group tour I do not want to cooperate with any other DMC worldwide any more – you are my heroes!",
    name: "Paul",
    role: "Tour Operator, Germany",
  },
  {
    quote:
      "I would like to express my sincere gratitude to you for creating such a wonderful, unique and memorable experience for me personally and for our group. I trust that without your professional efforts, ability and dedication we would never have such a great and successful trip.",
    name: "Tour Operator",
    role: "Dubai, United Arab Emirates",
  },
];

export const partners: ImageAsset[] = [
  photo("partnerUstoa", "USTOA – United States Tour Operators Association"),
  photo("partnerNta", "NTA – National Tour Association"),
];

export interface TimelineEntry {
  period: string;
  title: string;
  text: string;
  image?: ImageAsset;
}

export const timeline: TimelineEntry[] = [
  {
    period: "1966",
    title: "Joe O'Reilly Ireland opens its doors",
    text: "Joe O'Reilly opens his company at Lancaster House, Lancaster Quay, Cork City: the first DMC in Ireland, selling the country mainly in the USA, the United Kingdom and mainland Europe through international trade shows.",
    image: photo("history1", "A vintage newspaper advertisement for Joe O'Reilly Car Rentals and Blarney Romany Caravans"),
  },
  {
    period: "New tours",
    title: "Horse-drawn caravan holidays",
    text: "Joe designs and builds 50 horse-drawn caravans at Blarney, with 117 horses, for international guests who want to holiday in Ireland at a much slower pace.",
    image: photo("history6", "A horse-drawn caravan in front of a castle in the Irish countryside"),
  },
  {
    period: "Growing in business",
    title: "Joe O'Reilly Car Rentals",
    text: "Seeing the demand for Ireland as a destination on his sales travels, Joe opens Joe O'Reilly Car Rentals.",
    image: photo("history2", "The Joe O'Reilly Car Rentals shopfront, black and white photograph"),
  },
  {
    period: "International sales",
    title: "A caravan on the Champs-Élysées",
    text: "To build interest in the French market, Joe drives one of his horse-drawn caravans down the Champs-Élysées in Paris. The photograph made the front page of Le Monde the following morning.",
    image: photo("history3", "A French newspaper clipping about an Irish caravan on the Champs-Élysées"),
  },
  {
    period: "1975",
    title: "Ireland's first International Horse Riding Academy",
    text: "Joe launches Ireland's first International Horse Riding Academy in Blarney, Cork, headed by Major Bill Ritchie, retired Chef d'Équipe of the English Army Equestrian Team.",
    image: photo("history4", "Riders in the arena of the International Horse Riding Academy, black and white photograph"),
  },
  {
    period: "1980s & 1990s",
    title: "An international reputation",
    text: "As the M.I.C.E market develops, the company welcomes groups such as Hewlett Packard from Germany, holding their gala dinner in an Irish boarding school.",
    image: photo("history5", "A newspaper article headlined 'German tourists in awe of hospitality'"),
  },
  {
    period: "1998",
    title: "Bernard O'Reilly becomes CEO",
    text: "Joe's son and protégé, Bernard O'Reilly, buys out the DMC side of the family business and develops the Joe O'Reilly Ireland DMC brand, with offices in Dublin and Cork.",
    image: photo("history7", "A Joe O'Reilly Ireland DMC brochure cover reading 'Thinking Ireland?'"),
  },
  {
    period: "2006",
    title: "The Harley-Davidson festival",
    text: "Together with Harley-Davidson, JOR Ireland DMC hosts 4,500 bikers for a week of open rallies and events in Kerry.",
    image: photo("history10", "A poster for a motorcycle rally in Killarney"),
  },
  {
    period: "2006",
    title: "The Ryder Cup with Arnold Palmer",
    text: "Joe O'Reilly Ireland Golf is privileged to work with Mr. Arnold Palmer at the Ryder Cup at the K Club.",
    image: photo("history8", "Bernard O'Reilly greeting Arnold Palmer"),
  },
  {
    period: "2007",
    title: "The first International Bike Week",
    text: "JOR Ireland DMC creates and launches Ireland's inaugural International Bike Week, an annual biking festival.",
    image: photo("history9", "A poster for Ireland Bike Week"),
  },
];

export const founderStory = {
  title: "Joe O'Reilly (1932–2007)",
  subtitle: "Entrepreneur and legend of Irish tourism",
  portrait: photo("joePortrait", "Joe O'Reilly at a trade exhibition stand for horse-drawn caravan holidays in Ireland"),
  source: "This obituary was first published in the February 2007 edition of Irish Travel Trade News.",
  paragraphs: [
    "The travel trade and Irish tourism has lost one of its most successful and colourful characters in the untimely passing of Joe O'Reilly.",
    "An entrepreneur long before we knew the meaning of the word, he was one of the pioneers of Irish tourism. He travelled extensively in Britain and continental Europe promoting the country in the early 1950s – at a time when many Europeans confused Ireland with Iceland. Those with a knowledge of Ireland at that stage knew little more than its association with Eamonn De Valera, Arthur Guinness, the colour green, and that most of their inclement weather was caused by the winds that blew across the sea from Ireland. In the 1970s and 1980s Ireland became better known, unfortunately for the wrong reasons, as the northern 'Troubles' were widely reported.",
    "It was against this background that people like Joe traversed the highways and byways, at times ploughing very lonely furrows and in the process laying the foundations of what is now one of our most important and successful industries. Later on he contributed at a strategic level as chairman of the Cork / Kerry tourism region.",
    "Joe packed more into his 74 years than anyone I know. Leaving Cavan for the bright lights of Dublin and the car hire business, he quickly made his presence felt, both literally and metaphorically. With a loud hailer on the roof of his car blaring out the merits of his particular company, complaints of public nuisance were received by Garda authorities. He was eventually apprehended by one of those tall impressive Gardaí on point duty on O'Connell Bridge (traffic lights had not yet appeared). He quickly won him over, helped by the fact that they both came from the same neck of the woods – and thus began a 50-year friendship!",
    "Ireland soon became too small to contain his exuberant talents. Like so many of his contemporaries, he took the emigrant ship to America but, unlike them, he had a First Class fare paid for him by a wealthy American who was enormously impressed with a holiday trip around Ireland that Joe had organised for him. With the aid of a borrowed suit, he was suitably dressed to dine at the Captain's table – and in no time he became the top salesman for Avis in New York.",
    "On marrying Sheila, he returned to Ireland and set up a number of businesses, such as car hire, riding school, horse-drawn caravans, incoming and outgoing tourism. Through hard work, meticulous planning, innovation and a highly personalised approach, all were highly successful.",
    "His innovative skills are best epitomised by his driving one of his horse-drawn caravans down the Champs Élysées in Paris, flanked by two gendarmes outriders. The event gained much sought after and invaluable publicity for Irish tourism because a photograph appeared the following morning on the front page of Le Monde, the prestigious French daily newspaper. At the time, Joe was the proud owner of 100 horses. How appropriate that he should in later years become a Knight in the equestrian order of Saint Sylvester.",
    "He was also bestowed the honour of Knight of the Holy Sepulchre. These honours would in part relate to the tens of thousands of people for whom he organised and led pilgrimages to Lourdes, Fatima and the Holy Land, and to his generosity to the church, both at home and on these missions. Indeed, his last flight was to Nigeria three months ago to celebrate the opening of a building named in his honour. It now houses 90 seminarians.",
    "In his younger days, his extracurricular activities were also of note, involving as they did the escorting of the sex goddess Jayne Mansfield around the lakes of Killarney, on one occasion acting as musical accompanist to Elizabeth Taylor and Richard Burton, driving Gregory Peck around Dublin, and spending a night on the town with Dean Martin – not to mention various encounters with The Three Stooges. To balance things out, and with an eye to his final journey, he also managed to have breakfast with Pope John Paul II in his private apartments. No doubt he is now enjoying a four ball with three former members of the Joe O'Reilly Golfing Society (JORGS), two of whom were also doyens of the travel business, i.e. Martin Dully and Paddy Fitzpatrick.",
    "Ar dheis Dé go raibh a anam dílis.",
  ],
};
