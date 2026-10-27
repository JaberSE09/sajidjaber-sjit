"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/site";
import { IconClose, IconMenu } from "@/components/site/icons";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const menuButton = buttonRef.current;
    const panel = panelRef.current;
    const links = panel
      ? Array.from(panel.querySelectorAll("a[href]"))
      : [];
    const nodes = [menuButton, ...links].filter(Boolean);
    links[0]?.focus();

    function onKey(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        menuButton?.focus();
        return;
      }

      if (event.key !== "Tab" || nodes.length === 0) {
        return;
      }

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    const main = document.getElementById("main-content");
    const footer = document.getElementById("site-footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    document.body.classList.add("overflow-hidden");
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-6 py-[18px]">
        <Link href="/#top" className="mr-auto inline-flex items-center">
          <Image
            src="/img/logo/logo-light.svg"
            alt="Sajid Jaber"
            width={134}
            height={40}
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-white no-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-accent h-11 px-[22px] text-[15px] shadow-none">
            Book a Call
          </Link>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose /> : <IconMenu />}
          <span className="sr-only">
            {open ? "Close navigation menu" : "Open navigation menu"}
          </span>
        </button>
      </div>

      {open ? (
        <nav
          ref={panelRef}
          id={panelId}
          aria-label="Primary"
          className="border-t border-line bg-canvas px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-lg font-semibold text-white no-underline"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#contact"
                className="btn-accent h-11 px-[22px] text-[15px] shadow-none"
                onClick={closeMenu}
              >
                Book a Call
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
