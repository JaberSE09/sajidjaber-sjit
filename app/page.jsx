import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Work from "@/components/home/Work";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { site } from "@/data/site";

export const metadata = {
  title: "Sajid Jaber — Milwaukee Web Developer & IT Professional",
  description:
    "Milwaukee-based web developer and IT professional. Founder of SJ IT LLC. 7+ years, 50+ clients. Specializing in Next.js, React, Tailwind CSS, SEO, and small business digital solutions.",
  keywords: [
    "Milwaukee web developer",
    "web developer Milwaukee WI",
    "Next.js developer Milwaukee",
    "React developer Milwaukee",
    "SJ IT LLC",
    "small business web design Milwaukee",
    "freelance web developer Wisconsin",
    "full stack developer Milwaukee",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/logo/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: "https://www.sajidjaber.com",
    siteName: "Sajid Jaber",
    title: "Sajid Jaber — Milwaukee Web Developer & IT Professional",
    description:
      "Milwaukee-based web developer and IT professional. Founder of SJ IT LLC. 7+ years, 50+ clients. Next.js, React, SEO & small business solutions.",
    locale: "en_US",
    images: [
      {
        url: "https://www.sajidjaber.com/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sajid Jaber logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajid Jaber — Milwaukee Web Developer & IT Professional",
    description:
      "Milwaukee-based web developer. Founder of SJ IT LLC. 7+ years, 50+ clients. Next.js, React, SEO.",
    images: ["https://www.sajidjaber.com/assets/img/og-image.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sajid Jaber",
  url: site.url,
  jobTitle: "Web Developer & IT Professional",
  email: site.email,
  telephone: "+1-414-380-1606",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Milwaukee",
    addressRegion: "WI",
    addressCountry: "US",
  },
  worksFor: {
    "@type": "Organization",
    name: "SJ IT LLC",
    url: site.companySite,
  },
  sameAs: [site.linkedin, site.github, site.companySite],
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Hero />
        <Stats />
        <Work />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
