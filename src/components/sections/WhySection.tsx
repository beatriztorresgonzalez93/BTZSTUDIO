import { WHY_US } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhySection() {
  return (
    <section id="por-que" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Por qué BTZ Studio"
          title="Más que una web: una experiencia para recordar"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.07}>
              <article className="text-center md:text-left">
                <span className="inline-block font-serif text-3xl text-gold" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{item.desc}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
