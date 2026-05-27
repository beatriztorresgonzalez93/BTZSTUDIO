"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Countdown } from "@/components/demo/shared/Countdown";
import { DemoBackBar } from "@/components/demo/shared/DemoBackBar";

const WEDDING_DATE = "2026-07-18T18:00:00";
const HERO = "/portfolio/sofia-alejandro-boda.jpg";

export function SofiaAlejandroDemo() {
  const [rsvpSent, setRsvpSent] = useState(false);

  return (
    <div className="bg-[#faf8f4] text-[#1e3a4c]">
      <DemoBackBar />

      {/* Hero — texto sobre degradado oscuro (legible sobre la foto) */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <Image
          src={HERO}
          alt="Sofía y Alejandro"
          fill
          priority
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-[#1e3a4c]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a4c] via-[#1e3a4c]/70 to-transparent" />
        <div className="relative z-10 w-full px-6 pb-24 pt-32 text-center text-white md:pb-32">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.4em] text-[#d4e8f0] uppercase"
          >
            Málaga · Costa del Sol
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 font-serif text-5xl drop-shadow-sm md:text-7xl lg:text-8xl"
          >
            Sofía <span className="text-[#d4b896]">&</span> Alejandro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="mt-6 text-sm tracking-[0.25em] uppercase text-white/85"
          >
            18 · Julio · 2026
          </motion.p>
        </div>
      </section>

      {/* Countdown — organic wave section */}
      <section className="relative -mt-16 rounded-t-[3rem] bg-[#faf8f4] px-6 pt-20 pb-16">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-xs tracking-[0.3em] text-[#2c6e8a] uppercase">Cuenta atrás</p>
          <div className="mt-8">
            <Countdown
              date={WEDDING_DATE}
              boxClass="text-[#1e3a4c]"
              labelClass="text-[#5a7a8a]"
            />
          </div>
        </div>
      </section>

      {/* Story — full bleed photo + text */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[320px] md:min-h-[420px]">
              <Image
                src={HERO}
                alt="Sofía y Alejandro con sus invitados"
                fill
                className="object-cover object-[center_12%]"
              />
            </div>
            <div className="flex flex-col justify-center p-10 md:p-16">
              <h2 className="font-serif text-4xl text-[#1e3a4c]">Nuestra historia</h2>
              <p className="mt-6 leading-relaxed text-[#5a7a8a]">
                Un encuentro en la playa de Málaga, un viaje por la costa y una propuesta al
                atardecer frente al Mediterráneo. Queremos celebrar el amor con el mar de fondo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP + menu */}
      <section className="mx-6 max-w-2xl rounded-[2rem] bg-[#2c6e8a] px-8 py-14 text-white md:mx-auto md:px-16">
        <h2 className="text-center font-serif text-4xl">Confirma tu asistencia</h2>
        {rsvpSent ? (
          <p className="mt-8 text-center text-white/90">¡Gracias! Nos vemos en la playa.</p>
        ) : (
          <form
            className="mt-10 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setRsvpSent(true);
            }}
          >
            <input
              required
              placeholder="Nombre"
              className="w-full rounded-full border-0 bg-white/15 px-5 py-3 text-white placeholder:text-white/60 outline-none focus:bg-white/25"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <select className="rounded-full bg-white/15 px-5 py-3 outline-none">
                <option className="text-[#1e3a4c]">Asistiré</option>
                <option className="text-[#1e3a4c]">No podré</option>
              </select>
              <select className="rounded-full bg-white/15 px-5 py-3 outline-none">
                <option className="text-[#1e3a4c]">Menú pescado</option>
                <option className="text-[#1e3a4c]">Menú carne</option>
                <option className="text-[#1e3a4c]">Vegetariano</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[#d4b896] py-4 text-xs tracking-[0.25em] text-[#1e3a4c] uppercase"
            >
              Enviar
            </button>
          </form>
        )}
      </section>

      {/* Spotify */}
      <section className="px-6 py-20 text-center md:py-28">
        <h2 className="font-serif text-3xl text-[#1e3a4c]">Nuestra playlist</h2>
        <p className="mt-3 text-sm text-[#5a7a8a]">Sugerid vuestra canción favorita</p>
        <div className="mx-auto mt-8 max-w-md overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="Playlist"
            className="h-[352px] w-full border-0"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      {/* Hotels & beaches */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-[#1e3a4c]">Dónde alojarse</h2>
            <ul className="mt-6 space-y-3 text-sm text-[#5a7a8a]">
              <li>🏨 Hotel Vincci Selección Posada del Patio</li>
              <li>🏨 AC Hotel Málaga Palacio</li>
              <li>🏡 Apartamentos junto a la playa de la Malagueta</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-[#1e3a4c]">Playas cercanas</h2>
            <ul className="mt-6 space-y-3 text-sm text-[#5a7a8a]">
              <li>Playa de la Malagueta</li>
              <li>Playa de Pedregalejo</li>
              <li>Nerja — Maro (45 min)</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl">
          <iframe
            title="Mapa Málaga"
            className="h-64 w-full border-0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-4.45%2C36.68%2C-4.38%2C36.74&layer=mapnik"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="border-t border-[#d4b896]/40 px-6 py-16 text-center">
        <p className="font-serif text-4xl text-[#1e3a4c]">Sofía & Alejandro</p>
        <p className="mt-4 text-xs tracking-[0.3em] text-[#5a7a8a] uppercase">18.07.2026 · Málaga</p>
        <p className="mt-8 text-[0.65rem] text-[#9ab0bc]">Demo BTZ Studio</p>
      </footer>
    </div>
  );
}
