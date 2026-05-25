import { FadeIn } from "./FadeIn";

const benefits = [
  "Personalizable para cada boda",
  "Accesible desde web y móvil",
  "Panel privado para los novios",
  "En funcionamiento desde el primer día",
];

export function SolutionSection() {
  return (
    <section id="solucion" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs tracking-wide-label uppercase text-gold">02 — La solución</p>
            <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
              La solución
              <br />
              ya existe.
            </h2>
            <p className="mt-6 leading-relaxed text-charcoal-muted">
              BTZ Studio es una plataforma web y móvil que centraliza todo lo que una boda
              necesita en un solo lugar.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-muted">
              Elegante, personalizable y accesible desde cualquier dispositivo — sin
              instalaciones, sin complicaciones.
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-charcoal">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                  {b}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={120}>
            <blockquote className="thin-border bg-cream p-10 md:p-14">
              <p className="font-serif text-2xl leading-snug text-charcoal md:text-3xl">
                &ldquo;Tu boda merece una experiencia tan especial como el momento&rdquo;
              </p>
              <footer className="mt-8 text-xs tracking-wide-label uppercase text-charcoal-muted">
                — BTZ Studio
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
