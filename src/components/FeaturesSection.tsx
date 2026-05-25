import { FadeIn } from "./FadeIn";

const features = [
  {
    title: "RSVP Digital",
    desc: "Confirmación online con menú y alergias de cada asistente.",
  },
  {
    title: "Mesas & Invitados",
    desc: "Organización visual de mesas y distribución de invitados.",
  },
  {
    title: "Música colaborativa",
    desc: "Los invitados sugieren canciones para la celebración.",
  },
  {
    title: "Fotos del día",
    desc: "Comparte y descarga los mejores momentos en un solo lugar.",
  },
  {
    title: "Diseño personalizado",
    desc: "Web temática adaptada a la identidad de cada boda.",
  },
  {
    title: "Códigos QR",
    desc: "QR en la invitación para acceso directo a la plataforma.",
  },
  {
    title: "Autobús & logística",
    desc: "Transporte colectivo coordinado para todos los invitados.",
  },
  {
    title: "Área novios",
    desc: "Panel privado de gestión con control total del evento.",
  },
];

export function FeaturesSection() {
  return (
    <section id="funciones" className="section-padding bg-charcoal text-cream">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs tracking-wide-label uppercase text-gold">03 — Funcionalidades</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Todo en un solo lugar</h2>
          <p className="mt-6 max-w-2xl text-cream/70">
            Cada función está diseñada para que los novios disfruten del proceso y los
            invitados vivan la experiencia al máximo.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-px bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 50}>
              <article className="group h-full bg-charcoal p-8 transition-colors hover:bg-charcoal/80">
                <h3 className="font-serif text-xl">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60 group-hover:text-cream/80">
                  {f.desc}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <p className="mt-20 text-center font-serif text-xl text-cream/90 md:text-2xl">
            &ldquo;Porque cada boda es única y merece una plataforma a su altura&rdquo;
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
