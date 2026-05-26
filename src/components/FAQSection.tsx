"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

const faqs = [
  {
    q: "¿Los invitados tienen que instalar una app?",
    a: "No. BTZ Studio funciona en el navegador del móvil o del ordenador. Podéis compartir un enlace o un código QR en la invitación.",
  },
  {
    q: "¿Cuánto tarda en estar lista la plataforma?",
    a: "Depende del nivel de personalización, pero una web base puede estar operativa en pocos días. Os acompañamos en la configuración inicial.",
  },
  {
    q: "¿Puedo cambiar el diseño a mi gusto?",
    a: "Sí. Cada boda tiene su propia identidad: colores, tipografías, textos e imágenes adaptados a vuestro estilo.",
  },
  {
    q: "¿Sirve para bodas pequeñas y grandes?",
    a: "Sí. Desde celebraciones íntimas hasta eventos con más de cien invitados, la plataforma escala con vuestras necesidades.",
  },
  {
    q: "¿Quién puede ver la información de los invitados?",
    a: "Los novios tienen un panel privado. Los invitados solo ven lo que vosotros decidáis compartir: RSVP, mesas, música, logística, etc.",
  },
  {
    q: "¿Cómo solicito presupuesto?",
    a: "Rellenad el formulario de contacto o escribid a contacto@btzstudio.com. Os respondemos con una propuesta sin compromiso.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-cream-dark/40">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-xs tracking-wide-label uppercase text-gold">Preguntas frecuentes</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
            Resolvemos tus dudas
          </h2>
        </FadeIn>

        <ul className="mt-12 divide-y divide-charcoal/15 border-y border-charcoal/15">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={item.q}>
                <FadeIn delay={i * 40}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="font-serif text-lg text-charcoal md:text-xl">{item.q}</span>
                    <span
                      className={`mt-1 shrink-0 text-xl text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-charcoal-muted">
                      {item.a}
                    </p>
                  </div>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
