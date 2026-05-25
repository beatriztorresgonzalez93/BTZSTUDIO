import { FadeIn } from "./FadeIn";

const problems = [
  {
    num: "01",
    title: "Información dispersa",
    desc: "WhatsApp, hojas de cálculo y emails sin orden. Todo en sitios distintos.",
  },
  {
    num: "02",
    title: "Gestión de invitados",
    desc: "Confirmar asistencia, alergias y menús de cada persona se convierte en un caos.",
  },
  {
    num: "03",
    title: "Distribución de mesas",
    desc: "Reorganizar a cien personas manualmente lleva horas, con cambios de última hora.",
  },
  {
    num: "04",
    title: "Estrés innecesario",
    desc: "Lo que debería ser ilusión y disfrute se convierte en carga de trabajo constante.",
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="section-padding bg-cream-dark/50">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs tracking-wide-label uppercase text-gold">01 — El problema</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
            Organizar una boda
            <br />
            es <em className="font-normal not-italic">caótico</em>.
          </h2>
          <p className="mt-6 max-w-xl text-charcoal-muted">
            Parejas que planifican su boda se enfrentan a los mismos problemas una y otra vez.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {problems.map((item, i) => (
            <FadeIn key={item.num} delay={i * 80}>
              <article className="group border-l-2 border-charcoal/20 pl-8 transition-colors hover:border-charcoal">
                <span className="font-serif text-3xl text-gold">{item.num}</span>
                <h3 className="mt-2 font-serif text-2xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{item.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
