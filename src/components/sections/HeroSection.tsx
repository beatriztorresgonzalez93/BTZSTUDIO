"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="gradient-hero relative pt-[calc(5.75rem+env(safe-area-inset-top,0px))] pb-16 md:pt-36 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-blush/50 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-gold-light/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-8">
        <div>
          <motion.p
            className="mb-4 text-[0.65rem] tracking-[0.14em] text-gold uppercase sm:text-xs sm:tracking-wide-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            BTZ Studio · Webs de boda
          </motion.p>
          <motion.h1
            className="font-serif text-4xl leading-[1.15] text-charcoal md:text-5xl lg:text-[3.5rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Webs de boda únicas para contar vuestra historia y organizar vuestro gran día
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-muted md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Diseñamos plataformas digitales personalizadas con confirmación de asistencia,
            plan de mesas (seating) y toda la información que vuestros invitados necesitan.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button href="#contacto">Quiero mi web de boda</Button>
            <Button href="#portfolio" variant="secondary">
              Ver ejemplos
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
            <div className="h-64 w-64 rounded-full bg-gold/15 blur-3xl md:h-80 md:w-80" />
          </div>
          <Logo
            width={420}
            priority
            className="relative h-56 md:h-72 lg:h-80"
            alt="BTZ Studio"
          />
        </motion.div>
      </div>
    </section>
  );
}
