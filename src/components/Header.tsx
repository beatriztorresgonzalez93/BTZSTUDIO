"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const navLinks = [
  { href: "#inicio", id: "inicio", label: "Inicio" },
  { href: "#problema", id: "problema", label: "Problema" },
  { href: "#solucion", id: "solucion", label: "Solución" },
  { href: "#funciones", id: "funciones", label: "Funciones" },
  { href: "#para-quien", id: "para-quien", label: "Para quién" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
];

const HEADER_OFFSET = 140;
const TOP_THRESHOLD = 160;

function navLinkClass(active: boolean) {
  return `text-xs tracking-wide-label uppercase transition-colors ${
    active
      ? "text-charcoal border-b border-charcoal pb-1"
      : "text-charcoal-muted hover:text-charcoal"
  }`;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("inicio");

  const updateActiveSection = useCallback(() => {
    if (window.scrollY < TOP_THRESHOLD) {
      setActiveId("inicio");
      return;
    }

    let currentId = "inicio";

    for (const link of navLinks) {
      const el = document.getElementById(link.id);
      if (!el) continue;

      const sectionTop = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      if (window.scrollY >= sectionTop) {
        currentId = link.id;
      }
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
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [updateActiveSection]);

  const handleNavClick = (id: string) => {
    setOpen(false);
    setActiveId(id);
    requestAnimationFrame(() => {
      setTimeout(updateActiveSection, 400);
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-charcoal/10">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-4 md:px-12">
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={activeId === link.id ? "page" : undefined}
              className={navLinkClass(activeId === link.id)}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="absolute right-6 flex flex-col gap-1.5 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-px w-6 bg-charcoal transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-charcoal transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-charcoal/10 bg-cream px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={activeId === link.id ? "page" : undefined}
                  className={`text-sm tracking-wide-label uppercase ${
                    activeId === link.id ? "text-charcoal font-medium" : "text-charcoal-muted"
                  }`}
                  onClick={() => handleNavClick(link.id)}
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
