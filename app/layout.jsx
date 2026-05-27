"use client";
import ScrollToTop from "@/components/ScrollToTop";
import AOS from "aos";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/scss/main.scss";
import { Nunito } from "next/font/google";

import "@/public/assets/scss/main/globals.scss";

const nunitoFont = Nunito({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});
export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={nunitoFont.variable}>
        {/* Skip to main content — ADA/WCAG 2.4.1 */}
        <a
          href="#main-content"
          style={{
            position: 'absolute',
            left: '-9999px',
            top: 'auto',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
          }}
          onFocus={e => Object.assign(e.currentTarget.style, { left: '16px', top: '16px', width: 'auto', height: 'auto', zIndex: 9999, background: '#fff', padding: '8px 16px', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' })}
          onBlur={e => Object.assign(e.currentTarget.style, { left: '-9999px', top: 'auto', width: '1px', height: '1px' })}
        >
          Skip to main content
        </a>
        <ScrollToTop />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
