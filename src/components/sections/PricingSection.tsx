import { PLANS } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

export function PricingSection() {
  return (
    <section id="precios" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Paquetes"
          title="Elegid el plan perfecto para vuestra boda"
          subtitle="Cada proyecto es único. Os asesoramos para encontrar la opción ideal."
        />

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <AnimateIn key={plan.id} delay={i * 0.1} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlight
                    ? "scale-[1.02] border-2 border-gold bg-gradient-to-b from-white via-cream to-blush/30 shadow-xl shadow-gold/10 lg:scale-105"
                    : "border border-blush-deep/50 bg-cream/30 hover:border-gold/30 hover:shadow-lg"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[0.6rem] tracking-wide-label text-white uppercase">
                    Más popular
                  </span>
                )}
                <h3 className="font-serif text-3xl text-charcoal">{plan.name}</h3>
                <p className="mt-2 text-sm text-charcoal-muted">Presupuesto personalizado</p>
                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-charcoal">
                      <span className="mt-0.5 text-gold" aria-hidden>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className={`mt-10 block py-3.5 text-center text-xs tracking-wide-label uppercase transition-all ${
                    plan.highlight
                      ? "bg-charcoal text-white hover:opacity-90"
                      : "border border-charcoal/20 hover:border-gold hover:bg-white"
                  }`}
                >
                  Solicitar presupuesto
                </Link>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
