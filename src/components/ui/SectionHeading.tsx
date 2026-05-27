import { AnimateIn } from "./AnimateIn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-white" : "text-charcoal";
  const subColor = light ? "text-white/75" : "text-charcoal-muted";
  const eyebrowColor = light ? "text-gold-light" : "text-gold";

  return (
    <AnimateIn className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs tracking-wide-label uppercase ${eyebrowColor}`}>{eyebrow}</p>
      )}
      <h2 className={`font-serif text-4xl leading-tight md:text-5xl lg:text-[3.25rem] ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${subColor}`}>{subtitle}</p>
      )}
    </AnimateIn>
  );
}
