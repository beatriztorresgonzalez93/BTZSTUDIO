import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { Logo } from "./Logo";

const highlights = [
  { icon: "⚡", title: "Tiempo real", desc: "Actualizaciones al instante" },
  { icon: "🎨", title: "Personalizable", desc: "Adaptado a cada boda" },
  { icon: "📱", title: "Web y móvil", desc: "Desde cualquier dispositivo" },
];

const featureTags = [
  "Invitados & RSVP",
  "Música colaborativa",
  "Diseño personalizado",
  "Autobús & logística",
  "Mesas & distribución",
  "Fotos del día",
  "Códigos QR",
  "Panel novios",
];

export function Hero() {
  return (
    <section id="inicio" className="section-padding relative overflow-hidden pt-36 md:pt-44">
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl md:h-96 md:w-96"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <Logo
              className="mb-10 h-52 w-auto md:h-72"
              width={400}
              height={400}
              priority
            />

            <p className="mb-4 text-xs tracking-wide-label uppercase text-charcoal-muted">
              Plataforma web & móvil
            </p>
            <h1 className="font-serif text-4xl leading-tight text-charcoal md:text-6xl lg:text-7xl">
              La plataforma que lo
              <br />
              <em className="not-italic font-normal text-charcoal-muted">organiza todo</em>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-charcoal-muted md:text-lg">
              BTZ Studio es una plataforma digital diseñada específicamente para bodas.
              Centraliza la información, gestión de invitados, mesas, confirmaciones,
              música y fotos en un único espacio: elegante, personalizable y accesible
              desde cualquier dispositivo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contacto"
                className="bg-charcoal px-10 py-4 text-xs tracking-wide-label uppercase text-cream transition-opacity hover:opacity-90"
              >
                Solicitar presupuesto
              </Link>
              <Link
                href="#como-funciona"
                className="border border-charcoal px-10 py-4 text-xs tracking-wide-label uppercase text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
              >
                Cómo funciona
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150} className="mt-16">
          <div className="flex flex-wrap justify-center gap-3">
            {featureTags.map((tag) => (
              <span
                key={tag}
                className="border border-charcoal/20 px-4 py-2 text-xs tracking-wide-label uppercase text-charcoal-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={250} className="mt-20">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="thin-border bg-cream p-8 text-center transition-colors hover:bg-cream-dark"
              >
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-4 font-serif text-xl text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
