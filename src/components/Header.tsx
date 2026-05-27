"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { Logo } from "./Logo";

const HEADER_OFFSET = 140;
const TOP_THRESHOLD = 120;

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("inicio");

  const updateActiveSection = useCallback(() => {
    if (window.scrollY < TOP_THRESHOLD) {
      setActiveId("inicio");
      return;
    }
    let currentId = "inicio";
    for (const link of NAV_LINKS) {
      const el = document.getElementById(link.id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      if (window.scrollY >= top) currentId = link.id;
    }
    setActiveId(currentId);
  }, []);

  useEffect(() => {
    updateActiveSection();
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActiveSection]);

  const navClass = (id: string) =>
    `text-[0.65rem] tracking-wide-label uppercase transition-colors lg:text-xs ${
      activeId === id ? "text-charcoal" : "text-charcoal-muted hover:text-gold"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blush-deep/30 bg-white/75 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link href="#inicio" onClick={() => setOpen(false)} className="shrink-0">
          <Logo width={120} height={48} className="h-9 w-auto md:h-10" priority alt="BTZ Studio" />
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={navClass(link.id)}
              aria-current={activeId === link.id ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contacto"
          className="hidden bg-charcoal px-5 py-2.5 text-[0.65rem] tracking-wide-label uppercase text-white transition-opacity hover:opacity-90 lg:inline-block"
        >
          Empezar
        </Link>

        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-px w-6 bg-charcoal transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-charcoal transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-blush-deep/30 bg-white px-5 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  className={`text-sm tracking-wide-label uppercase ${navClass(link.id)}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
