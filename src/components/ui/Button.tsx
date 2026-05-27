import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const variants = {
  primary:
    "bg-charcoal text-white shadow-lg shadow-charcoal/15 hover:bg-charcoal/90 hover:shadow-xl",
  secondary:
    "bg-white/80 text-charcoal border border-blush-deep/60 backdrop-blur-sm hover:bg-white hover:border-gold/40",
  outline:
    "border border-charcoal/20 text-charcoal hover:border-gold hover:bg-white/60",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium tracking-wide-label uppercase transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
