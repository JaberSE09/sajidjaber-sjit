export const filters = ["All", "Websites", "SEO", "Automation"];

export const projects = [
  {
    slug: "jimmy-jay",
    title: "Jimmy Jay Luxury Shuttle & Limo",
    caseTitle:
      "Jimmy Jay Luxury Shuttle: a booking site that makes the phone ring",
    cat: "Websites",
    kicker: "Website",
    tags: ["Next.js", "Booking"],
    blurb:
      "A booking-focused landing page for a Milwaukee shuttle and limo service, built to turn mobile visitors into calls.",
    whatItIs:
      "Jimmy Jay Luxury Shuttle & Limo is a Milwaukee airport shuttle, car service, and chauffeur service covering Milwaukee and Southeast Wisconsin. The site is built to turn a visit into a call or a quote.",
    built: [
      "A Next.js site with Home, About, Services, and Contact.",
      "Quote, call, and email actions so a visitor can book or reach the service without hunting.",
      "SEO so local shuttle and limo searches can find the business.",
    ],
    image: "/img/portfolio/jimmyjay-hero.jpg",
    imageAlt: "Jimmy Jay Luxury Shuttle website",
    url: "https://www.jimmyjayluxuryshuttleandlimoservice.com/",
    client: "Jimmy Jay Luxury Shuttle & Limo",
    role: "Design, development, SEO",
    stack: ["Next.js"],
    nextSlug: "out-the-box",
  },
  {
    slug: "out-the-box",
    title: "Out The Box Bin Store",
    caseTitle: "Out The Box: a Next.js redesign of the old website",
    cat: "Websites",
    kicker: "Website",
    tags: ["Next.js", "TypeScript", "SEO"],
    blurb:
      "A Next.js and TypeScript redesign of the old store site, with SEO and a contact form for the West Allis bin store.",
    whatItIs:
      "Out The Box is a West Allis premium bin store. This project is a Next.js and TypeScript redesign of the old website. The homepage is a navy-and-gold page built around “Every visit is a treasure hunt,” with deals, hours and location, a newsletter, and directions.",
    built: [
      "A Next.js and TypeScript storefront.",
      "SEO for the redesigned site.",
      "A form so shoppers can sign up or get in touch.",
    ],
    image: "/img/portfolio/outthebox-hero.jpg",
    imageAlt: "Out The Box Bin Store website",
    url: "https://www.outtheboxbins.com/",
    client: "Out The Box",
    role: "Design, development, SEO",
    stack: ["Next.js", "TypeScript"],
    nextSlug: "all-garage-door",
  },
  {
    slug: "all-garage-door",
    title: "All Garage Door Repair",
    caseTitle: "All Garage Door Repair",
    cat: "SEO",
    kicker: "Local SEO",
    tags: ["Local SEO", "Website"],
    blurb:
      "Website and local search for a home-service business that lives and dies by the phone ringing.",
    whatItIs:
      "Website and local search for a home-service business, aimed at getting the phone to ring.",
    built: [],
    image: null,
    imageAlt: null,
    url: null,
    client: null,
    role: null,
    stack: [],
    nextSlug: "jimmy-jay",
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getCaseStudies() {
  return projects.filter((project) => project.slug);
}
