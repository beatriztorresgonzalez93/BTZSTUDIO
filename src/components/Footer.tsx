import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt=""
            width={56}
            height={56}
            className="h-14 w-auto object-contain opacity-90"
          />
          <div>
            <p className="font-serif text-lg text-charcoal">BTZ Studio</p>
            <p className="text-xs tracking-wide-label uppercase text-charcoal-muted">
              Plataforma para bodas
            </p>
          </div>
        </div>
        <p className="text-center text-xs text-charcoal-muted md:text-right">
          © {new Date().getFullYear()} BTZ Studio. Todos los derechos reservados.
        </p>
        <Link
          href="#inicio"
          className="text-xs tracking-wide-label uppercase text-charcoal-muted transition-colors hover:text-charcoal"
        >
          Volver arriba ↑
        </Link>
      </div>
    </footer>
  );
}
