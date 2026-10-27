import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export const metadata = {
  title: "Page not found — Sajid Jaber",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-content px-6 py-24">
        <h1 className="section-title">Page not found</h1>
        <p className="mt-4 max-w-xl text-lg">
          That page is not on this site.
        </p>
        <Link href="/" className="btn-accent mt-8 h-[52px] text-base">
          Back home
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
