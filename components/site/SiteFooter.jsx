import Link from "next/link";
import { site } from "@/data/site";

export default function SiteFooter({ variant = "home" }) {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm">
        <p>
          © {year} Sajid Jaber · SJ IT LLC · Milwaukee, WI
        </p>
        {variant === "home" ? (
          <nav aria-label="Social" className="flex flex-wrap gap-6">
            <a
              href={site.linkedin}
              className="inline-flex min-h-11 items-center font-semibold text-white no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              className="inline-flex min-h-11 items-center font-semibold text-white no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={site.companySite}
              className="inline-flex min-h-11 items-center font-semibold text-white no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              mysjit.com
            </a>
          </nav>
        ) : (
          <Link
            href="/#contact"
            className="inline-flex min-h-11 items-center font-semibold text-white no-underline"
          >
            Start a project
          </Link>
        )}
      </div>
    </footer>
  );
}
