"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#problema", label: "Problema" },
  { href: "#solucion", label: "Solución" },
  { href: "#funciones", label: "Funciones" },
  { href: "#para-quien", label: "Para quién" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-charcoal/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <Link href="#inicio" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="BTZ Studio"
            width={48}
            height={48}
            className="h-10 w-10 object-contain md:h-12 md:w-12"
          />
          <span className="hidden text-xs tracking-wide-label uppercase text-charcoal-muted sm:block">
            Plataforma para bodas
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-wide-label uppercase text-charcoal-muted transition-colors hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contacto"
          className="hidden border border-charcoal px-5 py-2 text-xs tracking-wide-label uppercase transition-colors hover:bg-charcoal hover:text-cream md:inline-block"
        >
          Presupuesto
        </Link>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
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
                  className="text-sm tracking-wide-label uppercase text-charcoal"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contacto"
                className="inline-block border border-charcoal px-5 py-2 text-xs tracking-wide-label uppercase"
                onClick={() => setOpen(false)}
              >
                Solicitar presupuesto
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
