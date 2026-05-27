import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding bg-beige/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Ejemplos"
          title="Así pueden verse vuestras webs de boda"
          subtitle="Tres demos con estilos distintos. Haz clic en cada una para explorar la experiencia completa."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((project, i) => (
            <AnimateIn key={project.couple} delay={i * 0.1}>
              <Link
                href={`/${project.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-md shadow-blush/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    key={project.image}
                    src={project.image}
                    alt={`Web de boda de ${project.couple}`}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                  <div className="absolute right-4 bottom-4 left-4 text-white">
                    <p className="font-serif text-2xl">{project.couple}</p>
                    <p className="mt-1 text-xs tracking-wide-label uppercase opacity-90">
                      {project.location}
                    </p>
                  </div>
                  <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[0.6rem] tracking-[0.15em] text-charcoal uppercase opacity-0 transition-opacity group-hover:opacity-100">
                    Ver demo →
                  </span>
                </div>
                <p className="p-5 text-sm leading-relaxed text-charcoal-muted">{project.desc}</p>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
