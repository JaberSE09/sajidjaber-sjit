import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.sajidjaber.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-canvas">
      <body
        className={`${nunito.variable} bg-canvas font-sans text-base leading-[1.7] text-muted antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
