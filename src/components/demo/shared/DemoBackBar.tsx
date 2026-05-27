import Link from "next/link";

export function DemoBackBar({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/#portfolio"
      className={`fixed top-4 left-4 z-50 rounded-full px-4 py-2 text-[0.65rem] tracking-[0.2em] uppercase backdrop-blur-md transition-opacity hover:opacity-80 ${
        light
          ? "bg-white/90 text-charcoal shadow-sm"
          : "bg-black/40 text-white"
      }`}
    >
      ← BTZ Studio
    </Link>
  );
}
