import Link from "next/link";
import { EMAIL, NAV_LINKS } from "@/lib/data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-blush-deep/40 bg-white px-5 py-12 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <Logo width={100} height={40} className="h-10 w-auto" alt="BTZ Studio" />
          <p className="mt-4 max-w-xs text-sm text-charcoal-muted">
            Webs de boda personalizadas con diseño emocional y experiencia premium.
          </p>
        </div>

        <nav aria-label="Pie de página">
          <p className="text-xs tracking-wide-label text-gold uppercase">Enlaces</p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  className="text-sm text-charcoal-muted transition-colors hover:text-charcoal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs tracking-wide-label text-gold uppercase">Contacto</p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-4 block text-sm text-charcoal transition-colors hover:text-gold"
          >
            {EMAIL}
          </a>
          <Link
            href="#inicio"
            className="mt-6 inline-block text-xs tracking-wide-label text-charcoal-muted uppercase hover:text-charcoal"
          >
            Volver arriba ↑
          </Link>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl border-t border-blush-deep/30 pt-8 text-center text-xs text-charcoal-muted">
        © {new Date().getFullYear()} BTZ Studio. Todos los derechos reservados.
      </p>
    </footer>
  );
}
