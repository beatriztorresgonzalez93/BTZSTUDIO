"use client";

import { motion } from "framer-motion";
import { STEPS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section id="proceso" className="section-padding bg-cream">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Tres pasos hacia vuestra web de ensueño"
        />

        <div className="relative mt-16">
          <div
            className="absolute top-8 bottom-8 left-6 hidden w-px bg-gradient-to-b from-gold/20 via-gold to-gold/20 md:left-1/2 md:block md:-translate-x-px"
            aria-hidden
          />

          <ol className="space-y-12 md:space-y-16">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.num}
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div
                  className={`flex flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}
                >
                  <div
                    className={`rounded-2xl border border-blush-deep/40 bg-white p-8 shadow-sm ${
                      i % 2 === 1 ? "md:ml-auto" : ""
                    } max-w-md`}
                  >
                    <span className="font-serif text-4xl text-gold/80">{step.num}</span>
                    <h3 className="mt-2 font-serif text-2xl text-charcoal">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{step.desc}</p>
                  </div>
                </div>

                <div
                  className="absolute left-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-white font-serif text-lg text-gold md:static md:left-auto md:mx-4 md:shrink-0"
                  aria-hidden
                >
                  {i + 1}
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
