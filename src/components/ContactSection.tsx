import Link from "next/link";
import { FadeIn } from "./FadeIn";

const EMAIL = "contacto@btzstudio.com";

export function ContactSection() {
  return (
    <section id="contacto" className="section-padding bg-cream-dark/60">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
            Solicita presupuesto
            <br />
            <span className="text-charcoal-muted">sin compromiso</span>
          </h2>
          <p className="mt-6 text-charcoal-muted">
            Cuéntanos tu proyecto y te preparamos una propuesta adaptada a vuestra boda.
          </p>

          <Link
            href={`mailto:${EMAIL}?subject=Presupuesto%20BTZ%20Studio`}
            className="mt-10 inline-block bg-charcoal px-12 py-4 text-xs tracking-wide-label uppercase text-cream transition-opacity hover:opacity-90"
          >
            {EMAIL}
          </Link>

          <p className="mt-8 font-serif text-lg italic text-charcoal/80">
            Creado con amor, diseñado para vuestro día más especial
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
