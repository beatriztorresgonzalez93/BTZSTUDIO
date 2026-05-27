import { FEATURES } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SolutionSection() {
  return (
    <section id="solucion" className="section-padding bg-beige/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="La solución"
          title="Todo lo que vuestra boda necesita, en un solo lugar"
          subtitle="Una experiencia digital pensada para emocionar a vuestros invitados y simplificaros la vida."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <AnimateIn key={f.title} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm shadow-blush/10 transition-shadow hover:shadow-md">
                <span className="text-2xl" aria-hidden>
                  {f.icon}
                </span>
                <h3 className="mt-4 font-serif text-xl text-charcoal">{f.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-muted">{f.desc}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
