import { FadeIn } from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "Cuéntanos vuestra boda",
    desc: "Fecha, estilo y qué necesitáis: RSVP, mesas, música, fotos o todo en uno.",
  },
  {
    num: "02",
    title: "Diseñamos vuestra plataforma",
    desc: "Personalizamos colores, textos e identidad visual para que refleje vuestra historia.",
  },
  {
    num: "03",
    title: "Invitáis con un enlace o QR",
    desc: "Sin apps ni registros complicados. Acceso desde móvil o navegador en segundos.",
  },
  {
    num: "04",
    title: "Gestionáis y disfrutáis",
    desc: "Confirmaciones, cambios de mesa y actualizaciones en tiempo real hasta el gran día.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs tracking-wide-label uppercase text-gold">Cómo funciona</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
            De la idea al gran día
            <br />
            <span className="text-charcoal-muted">en cuatro pasos</span>
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 80}>
              <article className="relative border-t border-charcoal pt-8">
                <span className="font-serif text-4xl text-gold/80">{step.num}</span>
                <h3 className="mt-4 font-serif text-xl text-charcoal">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{step.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
