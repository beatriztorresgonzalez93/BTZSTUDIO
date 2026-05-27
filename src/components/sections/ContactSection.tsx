"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { EMAIL } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Nombre: ${data.get("nombre")}`,
      `Email: ${data.get("email")}`,
      data.get("plan") ? `Plan de interés: ${data.get("plan")}` : null,
      "",
      data.get("mensaje"),
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Web de boda — BTZ Studio")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contacto" className="section-padding">
      <motion.div
        className="gradient-cta relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-6 py-16 text-center md:px-16 md:py-24"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_50%)]" />
        <div className="relative">
          <h2 className="font-serif text-4xl text-charcoal md:text-5xl lg:text-6xl">
            ¿Listos para crear vuestra web de boda?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-charcoal-muted">
            Cuéntanos vuestra idea y os respondemos con una propuesta sin compromiso.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="#formulario" variant="primary" className="!bg-charcoal">
              Crear mi web de boda
            </Button>
          </div>
        </div>
      </motion.div>

      <div id="formulario" className="mx-auto mt-16 max-w-xl px-5">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-blush-deep/50 bg-white p-8 shadow-lg shadow-blush/10 md:p-10"
        >
          <h3 className="font-serif text-2xl text-charcoal">Hablemos de vuestra boda</h3>
          <div className="mt-8 space-y-5">
            <div>
              <label htmlFor="nombre" className="mb-2 block text-xs tracking-wide-label uppercase text-charcoal-muted">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                className="w-full border border-blush-deep/60 bg-cream/30 px-4 py-3 outline-none focus:border-gold"
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
                className="w-full border border-blush-deep/60 bg-cream/30 px-4 py-3 outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="plan" className="mb-2 block text-xs tracking-wide-label uppercase text-charcoal-muted">
                Plan de interés
              </label>
              <select
                id="plan"
                name="plan"
                className="w-full border border-blush-deep/60 bg-cream/30 px-4 py-3 outline-none focus:border-gold"
              >
                <option value="">Seleccionar...</option>
                <option value="Básico">Plan Básico</option>
                <option value="Completo">Plan Completo</option>
                <option value="Premium">Plan Premium</option>
              </select>
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
                placeholder="Fecha, lugar, número de invitados..."
                className="w-full resize-y border border-blush-deep/60 bg-cream/30 px-4 py-3 outline-none focus:border-gold"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 w-full bg-charcoal py-4 text-xs tracking-wide-label text-white uppercase hover:opacity-90"
          >
            Enviar solicitud
          </button>
          {sent && (
            <p className="mt-4 text-center text-sm text-charcoal-muted">
              Se abrirá tu correo para enviar el mensaje a {EMAIL}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
