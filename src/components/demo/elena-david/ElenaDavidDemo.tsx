"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Countdown } from "@/components/demo/shared/Countdown";
import { DemoBackBar } from "@/components/demo/shared/DemoBackBar";

const WEDDING_DATE = "2026-06-20T19:00:00";
const HERO = "/portfolio/elena-david.jpg";

const timeline = [
  { time: "19:00", title: "Ceremonia", desc: "Jardín principal" },
  { time: "20:00", title: "Cóctel", desc: "Terraza junto a la piscina" },
  { time: "21:30", title: "Cena", desc: "Salón blanco" },
  { time: "23:30", title: "Baile", desc: "Pista al aire libre" },
];

export function ElenaDavidDemo() {
  const [rsvpSent, setRsvpSent] = useState(false);

  return (
    <div className="bg-white text-[#2a2a28]">
      <DemoBackBar light />

      {/* Editorial hero — split layout */}
      <section className="grid min-h-screen md:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-24 md:px-16 md:py-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[0.65rem] tracking-[0.4em] text-[#6b7c5c] uppercase"
          >
            Sevilla · 20.06.2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 font-serif text-5xl leading-[1.1] md:text-6xl lg:text-7xl"
          >
            Elena
            <br />
            <span className="font-sans text-2xl font-light tracking-[0.2em] text-[#9ca3a0] md:text-3xl">
              &
            </span>
            <br />
            David
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-10 max-w-sm text-sm leading-relaxed text-[#6b6b68]"
          >
            Una celebración minimalista junto al agua. Nos encantaría que nos acompañéis.
          </motion.p>
        </div>
        <div className="relative min-h-[50vh] md:min-h-full">
          <Image src={HERO} alt="" fill priority className="object-cover" />
        </div>
      </section>

      {/* Countdown — minimal line */}
      <section className="border-y border-[#e8e8e6] px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <Countdown
            date={WEDDING_DATE}
            labelClass="text-[#9ca3a0]"
            boxClass=""
          />
        </div>
      </section>

      {/* Horizontal timeline */}
      <section className="overflow-x-auto px-8 py-20 md:py-28">
        <h2 className="text-center font-serif text-3xl md:text-4xl">Programa</h2>
        <div className="mx-auto mt-14 flex min-w-max gap-0 md:min-w-0 md:max-w-5xl md:justify-between">
          {timeline.map((item, i) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-44 flex-shrink-0 border-t border-[#6b7c5c] px-4 pt-6 md:w-auto md:flex-1"
            >
              <p className="text-xs text-[#6b7c5c]">{item.time}</p>
              <h3 className="mt-2 font-serif text-xl">{item.title}</h3>
              <p className="mt-1 text-xs text-[#9ca3a0]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story — editorial grid */}
      <section className="bg-[#f7f7f5] px-8 py-20 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-1 md:grid-cols-12">
          <div className="md:col-span-5 md:pt-20">
            <h2 className="font-serif text-4xl md:text-5xl">Nuestra historia</h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-[#4a4a48] md:text-xl">
              Nos unió una cena con amigos en Sevilla y un viaje improvisado a la costa. David
              propuso bajo las luces del jardín; Elena dijo que sí entre risas y lágrimas.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[#6b6b68]">
              Queremos un día sencillo, luminoso y lleno de detalle. Gracias por ser parte.
            </p>
          </div>
        </div>
      </section>

      {/* Dress code */}
      <section className="px-8 py-16 text-center">
        <p className="text-[0.65rem] tracking-[0.4em] text-[#6b7c5c] uppercase">Dress code</p>
        <h2 className="mt-4 font-serif text-3xl">Formal elegante</h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-[#6b6b68]">
          Tonos claros, verde oliva y beige. Evitar blanco puro y negro total.
        </p>
      </section>

      {/* RSVP modern */}
      <section className="px-8 py-20 md:py-28">
        <div className="mx-auto max-w-xl">
          <h2 className="font-serif text-4xl">RSVP</h2>
          {rsvpSent ? (
            <p className="mt-8 text-[#6b7c5c]">Confirmación recibida. ¡Hasta pronto!</p>
          ) : (
            <form
              className="mt-10 grid gap-6 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setRsvpSent(true);
              }}
            >
              <input
                required
                placeholder="Nombre"
                className="border-b border-[#2a2a28] bg-transparent py-3 outline-none md:col-span-2"
              />
              <select className="border-b border-[#2a2a28] bg-transparent py-3 outline-none">
                <option>Asistiré</option>
                <option>No podré</option>
              </select>
              <select className="border-b border-[#2a2a28] bg-transparent py-3 outline-none">
                <option>Menú estándar</option>
                <option>Vegetariano</option>
                <option>Vegano</option>
                <option>Sin gluten</option>
              </select>
              <button
                type="submit"
                className="bg-[#6b7c5c] py-4 text-xs tracking-[0.3em] text-white uppercase md:col-span-2"
              >
                Confirmar
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Map */}
      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center bg-[#6b7c5c] px-8 py-16 text-white md:py-24">
          <h2 className="font-serif text-3xl">Cómo llegar</h2>
          <p className="mt-4 text-sm opacity-90">Hacienda del Jardín, Sevilla</p>
          <p className="mt-6 text-sm opacity-80">Parking gratuito en la finca.</p>
          <a
            href="https://maps.google.com/?q=Sevilla+Spain"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 text-xs tracking-[0.25em] uppercase underline"
          >
            Abrir mapa
          </a>
        </div>
        <div className="relative min-h-[280px]">
          <Image src={HERO} alt="" fill className="object-cover" />
        </div>
      </section>

      <footer className="px-8 py-20 text-center">
        <p className="font-serif text-4xl">Elena & David</p>
        <p className="mt-4 text-xs tracking-[0.35em] text-[#9ca3a0] uppercase">20 · 06 · 2026</p>
        <p className="mt-10 text-[0.65rem] text-[#9ca3a0]">Demo BTZ Studio</p>
      </footer>
    </div>
  );
}
