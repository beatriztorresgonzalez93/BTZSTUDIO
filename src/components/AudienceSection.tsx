import { FadeIn } from "./FadeIn";

const audiences = [
  {
    num: "01",
    title: "Parejas",
    desc: "Quieren organizar su boda con ilusión, no con estrés. BTZ Studio les da una herramienta elegante que gestionan desde el móvil.",
  },
  {
    num: "02",
    title: "Wedding Planners",
    desc: "Profesionales que gestionan múltiples bodas. Les permite ofrecer una herramienta digital moderna como parte de su servicio.",
  },
  {
    num: "03",
    title: "Venues & Salones",
    desc: "Espacios que quieren diferenciarse. Una plataforma propia es un argumento de venta poderoso.",
  },
  {
    num: "04",
    title: "Fotógrafos & Proveedores",
    desc: "Colaboradores que necesitan acceso coordinado: horarios, invitados y galería en un solo lugar.",
  },
];

const stats = [
  { value: "+100", label: "invitados por boda" },
  { value: "360°", label: "gestión completa" },
  { value: "1", label: "plataforma para todo" },
];

const perks = [
  "Diseño a medida",
  "Fácil de usar",
  "Todo centralizado",
  "Tiempo real",
  "Web y móvil",
  "Soporte dedicado",
];

export function AudienceSection() {
  return (
    <section id="para-quien" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs tracking-wide-label uppercase text-gold">05 — ¿Para quién?</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
            ¿Para quién es BTZ Studio?
          </h2>
          <p className="mt-6 max-w-xl text-charcoal-muted">
            Sirve a todos los que hacen posible una boda extraordinaria.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-12 grid gap-8 border-y border-charcoal/15 py-12 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-5xl text-charcoal md:text-6xl">{s.value}</p>
                <p className="mt-2 text-xs tracking-wide-label uppercase text-charcoal-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {audiences.map((a, i) => (
            <FadeIn key={a.num} delay={i * 80}>
              <article className="thin-border p-8 transition-colors hover:bg-cream-dark">
                <span className="text-xs tracking-wide-label uppercase text-gold">{a.num}</span>
                <h3 className="mt-2 font-serif text-2xl text-charcoal">{a.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-muted">{a.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={150}>
          <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <div
                key={p}
                className="flex items-center gap-3 border border-charcoal/10 px-5 py-4"
              >
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                <span className="text-sm tracking-wide-label uppercase">{p}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
