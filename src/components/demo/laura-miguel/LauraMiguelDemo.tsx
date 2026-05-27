"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Countdown } from "@/components/demo/shared/Countdown";
import { DemoBackBar } from "@/components/demo/shared/DemoBackBar";

const WEDDING_DATE = "2026-09-12T17:00:00";
const HERO = "/portfolio/laura-miguel.jpg";

const timeline = [
  { time: "17:00", title: "Ceremonia", place: "Capilla de la finca" },
  { time: "18:30", title: "Cóctel", place: "Jardines al atardecer" },
  { time: "20:00", title: "Banquete", place: "Salón principal" },
  { time: "00:00", title: "Fiesta", place: "Bajo las estrellas" },
];

const galleryCrops = [
  "object-center",
  "object-[center_25%]",
  "object-[center_60%]",
] as const;

export function LauraMiguelDemo() {
  const [rsvpSent, setRsvpSent] = useState(false);

  return (
    <div className="bg-[#f4ede4] text-[#3d3429]">
      <DemoBackBar />

      {/* Hero */}
      <section className="relative flex min-h-screen items-end">
        <Image src={HERO} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a221c]/90 via-[#2a221c]/40 to-[#2a221c]/20" />
        <div className="relative z-10 w-full px-6 pb-20 pt-32 text-center text-[#f4ede4] md:px-12 md:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.35em] uppercase text-[#d4c4a8]"
          >
            Nos casamos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 font-serif text-5xl md:text-7xl lg:text-8xl"
          >
            Laura <span className="text-[#c4a574]">&</span> Miguel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm tracking-[0.3em] uppercase"
          >
            12 · Septiembre · 2026 · Córdoba
          </motion.p>
        </div>
      </section>

      {/* Countdown */}
      <section className="px-6 py-20 text-center md:py-28">
        <p className="text-xs tracking-[0.3em] uppercase text-[#8b7355]">Faltan</p>
        <div className="mx-auto mt-8 max-w-lg">
          <Countdown
            date={WEDDING_DATE}
            boxClass="rounded-lg border border-[#d4c4a8]/40 bg-white/50 py-4"
            labelClass="text-[#8b7355]"
          />
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#ebe3d8] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#8b7355]">Nuestra historia</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Un sí entre olivos</h2>
            <p className="mt-6 leading-relaxed text-[#5c4f42]">
              Nos conocimos en un atardecer de verano en Córdoba. Tres años después, Miguel pidió
              matrimonio en la misma finca donde celebraremos nuestro gran día. Queremos que
              viváis con nosotros cada momento.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <Image src={HERO} alt="Laura y Miguel" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl">El día B</h2>
          <div className="mt-14 space-y-0 border-l border-[#c4a574]/50 pl-8 text-left">
            {timeline.map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full bg-[#c4a574]" />
                <p className="text-xs tracking-[0.25em] text-[#8b7355]">{item.time}</p>
                <h3 className="mt-1 font-serif text-2xl">{item.title}</h3>
                <p className="mt-1 text-sm text-[#6b5d4f]">{item.place}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#3d3429] px-6 py-20 text-[#f4ede4] md:py-28">
        <h2 className="text-center font-serif text-4xl">Preboda</h2>
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {galleryCrops.map((crop, i) => (
            <motion.div
              key={crop}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image src={HERO} alt="" fill className={`object-cover opacity-90 ${crop}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* RSVP */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-md rounded-sm border border-[#d4c4a8]/60 bg-white/70 p-10 shadow-lg">
          <h2 className="text-center font-serif text-3xl">Confirma tu asistencia</h2>
          {rsvpSent ? (
            <p className="mt-8 text-center text-[#6b7c5c]">
              Gracias por confirmar. ¡Os esperamos con ilusión!
            </p>
          ) : (
            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setRsvpSent(true);
              }}
            >
              <input
                required
                placeholder="Nombre completo"
                className="w-full border-b border-[#d4c4a8] bg-transparent py-3 outline-none"
              />
              <select className="w-full border-b border-[#d4c4a8] bg-transparent py-3 outline-none">
                <option>Asistiré con alegría</option>
                <option>No podré asistir</option>
              </select>
              <textarea
                placeholder="Alergias o comentarios"
                rows={2}
                className="w-full border-b border-[#d4c4a8] bg-transparent py-3 outline-none"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-[#3d3429] py-3 text-xs tracking-[0.25em] text-[#f4ede4] uppercase"
              >
                Enviar confirmación
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Location + lodging */}
      <section className="bg-[#ebe3d8] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl">Ubicación</h2>
            <p className="mt-4 text-[#5c4f42]">Finca Los Olivos, Córdoba</p>
            <a
              href="https://maps.google.com/?q=Cordoba+Spain"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm tracking-[0.2em] uppercase text-[#8b7355] underline"
            >
              Ver en mapa
            </a>
          </div>
          <div>
            <h2 className="font-serif text-3xl">Alojamiento</h2>
            <ul className="mt-4 space-y-2 text-sm text-[#5c4f42]">
              <li>Hotel Hospes Palacio del Bailío</li>
              <li>Cortijo recomendado: El Olivar (15 min)</li>
              <li>Transporte organizado desde el centro</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 aspect-[21/9] max-w-5xl overflow-hidden rounded-sm bg-[#d4c4a8]/30">
          <iframe
            title="Mapa"
            className="h-full w-full min-h-[240px] border-0 grayscale opacity-80"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-4.8%2C37.85%2C-4.7%2C37.92&layer=mapnik"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="bg-[#2a221c] px-6 py-16 text-center text-[#d4c4a8]">
        <p className="font-serif text-3xl text-[#f4ede4]">Laura & Miguel</p>
        <p className="mt-4 text-xs tracking-[0.3em] uppercase">12.09.2026 · Córdoba</p>
        <p className="mt-8 text-[0.65rem] opacity-60">Demo creada por BTZ Studio</p>
      </footer>
    </div>
  );
}
