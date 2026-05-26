"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "./FadeIn";

const EMAIL = "contacto@btzstudio.com";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const nombre = String(data.get("nombre") ?? "");
    const email = String(data.get("email") ?? "");
    const fecha = String(data.get("fecha") ?? "");
    const mensaje = String(data.get("mensaje") ?? "");

    const body = [
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      fecha ? `Fecha de la boda: ${fecha}` : null,
      "",
      mensaje,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent("Presupuesto BTZ Studio")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <section id="contacto" className="section-padding bg-cream-dark/60">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs tracking-wide-label uppercase text-gold">Contacto</p>
            <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
              Solicita presupuesto
              <br />
              <span className="text-charcoal-muted">sin compromiso</span>
            </h2>
            <p className="mt-6 leading-relaxed text-charcoal-muted">
              Cuéntanos vuestra boda y os preparamos una propuesta a medida. También podéis
              escribirnos directamente a{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-charcoal underline decoration-gold/60 underline-offset-4 hover:decoration-charcoal"
              >
                {EMAIL}
              </a>
            </p>
            <p className="mt-8 font-serif text-lg italic text-charcoal/80">
              Creado con amor, diseñado para vuestro día más especial
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <form
              onSubmit={handleSubmit}
              className="thin-border bg-cream p-8 md:p-10"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-xs tracking-wide-label uppercase text-charcoal-muted">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full border border-charcoal/20 bg-transparent px-4 py-3 text-charcoal outline-none transition-colors focus:border-charcoal"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs tracking-wide-label uppercase text-charcoal-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full border border-charcoal/20 bg-transparent px-4 py-3 text-charcoal outline-none transition-colors focus:border-charcoal"
                  />
                </div>
                <div>
                  <label htmlFor="fecha" className="mb-2 block text-xs tracking-wide-label uppercase text-charcoal-muted">
                    Fecha de la boda <span className="normal-case tracking-normal">(opcional)</span>
                  </label>
                  <input
                    id="fecha"
                    name="fecha"
                    type="date"
                    className="w-full border border-charcoal/20 bg-transparent px-4 py-3 text-charcoal outline-none transition-colors focus:border-charcoal"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="mb-2 block text-xs tracking-wide-label uppercase text-charcoal-muted">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    placeholder="¿Qué funcionalidades os interesan? ¿Cuántos invitados?"
                    className="w-full resize-y border border-charcoal/20 bg-transparent px-4 py-3 text-charcoal outline-none transition-colors placeholder:text-charcoal-muted/50 focus:border-charcoal"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 w-full bg-charcoal px-8 py-4 text-xs tracking-wide-label uppercase text-cream transition-opacity hover:opacity-90"
              >
                Enviar solicitud
              </button>
              {sent && (
                <p className="mt-4 text-center text-sm text-charcoal-muted">
                  Se abrirá tu cliente de correo para enviar el mensaje.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
