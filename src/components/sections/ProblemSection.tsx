import { PROBLEMS } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProblemSection() {
  return (
    <section id="problema" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="El problema"
          title="Organizar una boda no debería ser un caos digital"
          subtitle="Os suena familiar alguno de estos momentos?"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-blush-deep/40 bg-cream/50 p-8 transition-all duration-300 hover:border-gold/30 hover:bg-white hover:shadow-lg hover:shadow-blush/20">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blush text-xl"
                  aria-hidden
                >
                  {item.icon}
                </span>
                <h3 className="mt-6 font-serif text-2xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{item.desc}</p>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="mt-14 text-center">
          <p className="font-serif text-2xl text-charcoal md:text-3xl">
            Nosotros reunimos todo en una sola web elegante y fácil de compartir.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
