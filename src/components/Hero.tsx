import Image from "next/image";
import Link from "next/link";
import { BranchIcon } from "./BranchIcon";
import { FadeIn } from "./FadeIn";

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
    <section id="inicio" className="section-padding pt-36 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-10 inline-flex flex-col items-center">
              <div className="thin-border px-10 py-8 md:px-16 md:py-12">
                <Image
                  src="/logo.png"
                  alt="BTZ Studio — Plataforma para bodas"
                  width={320}
                  height={320}
                  className="mx-auto h-48 w-auto object-contain md:h-64"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 flex w-32 -translate-x-1/2 items-center justify-center bg-cream px-2 text-charcoal">
                <BranchIcon className="h-6 w-full" />
              </div>
            </div>

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
                href="#funciones"
                className="border border-charcoal px-10 py-4 text-xs tracking-wide-label uppercase text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
              >
                Ver funcionalidades
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
