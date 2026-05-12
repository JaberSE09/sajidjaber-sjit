import HomeFour from "./home-dark-animation/page";
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
        alt: "Sajid Jaber — Milwaukee Web Developer",
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
export default function Home() {
  return <HomeFour />;
}
