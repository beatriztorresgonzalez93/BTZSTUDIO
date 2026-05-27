import { SEATING_HIGHLIGHT } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TABLES = [
  { label: "Mesa 1", guests: 8, filled: 8 },
  { label: "Mesa 2", guests: 10, filled: 7 },
  { label: "Mesa 3", guests: 8, filled: 5 },
  { label: "Imperial", guests: 12, filled: 4 },
] as const;

function TableVisual({
  label,
  guests,
  filled,
}: {
  label: string;
  guests: number;
  filled: number;
}) {
  const pending = guests - filled;

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-white shadow-sm"
        aria-hidden
      >
        <div className="absolute inset-2 rounded-full border border-dashed border-blush-deep/60" />
        {Array.from({ length: guests }).map((_, i) => {
          const angle = (i / guests) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 38 * Math.cos(rad);
          const y = 50 + 38 * Math.sin(rad);
          const seated = i < filled;
          return (
            <span
              key={i}
              className={`absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                seated ? "bg-gold" : "bg-blush-deep/50"
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
            />
          );
        })}
        <span className="font-serif text-xs text-charcoal">{label}</span>
      </div>
      <p className="text-center text-[0.65rem] leading-snug text-charcoal-muted">
        <span className="text-charcoal">{filled}</span>/{guests} sentados
        {pending > 0 && (
          <>
            <br />
            <span className="text-gold">{pending} pendientes</span>
          </>
        )}
      </p>
    </div>
  );
}

export function SeatingSection() {
  const { eyebrow, title, subtitle, points } = SEATING_HIGHLIGHT;

  return (
    <section
      id="seating"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-cream via-beige/40 to-blush/25"
    >
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold-light/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-blush/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            {points.map((point, i) => (
              <AnimateIn key={point.title} delay={i * 0.08}>
                <div className="flex gap-5 border-l-2 border-gold/60 pl-6">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blush font-serif text-sm text-charcoal"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal md:text-2xl">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{point.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.15}>
            <div
              className="rounded-3xl border border-blush-deep/40 bg-white p-6 shadow-lg shadow-blush/15 md:p-8"
              aria-label="Vista de ejemplo del plan de mesas"
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-blush-deep/30 pb-4">
                <p className="text-xs tracking-wide-label text-gold uppercase">Panel de novios</p>
                <span className="rounded-full bg-blush px-3 py-1 text-[0.65rem] text-charcoal">
                  3 confirmaciones nuevas
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {TABLES.map((table) => (
                  <TableVisual key={table.label} {...table} />
                ))}
              </div>

              <p className="mt-8 text-center text-xs text-charcoal-muted">
                Ejemplo ilustrativo · vuestro salón, a vuestra medida
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
