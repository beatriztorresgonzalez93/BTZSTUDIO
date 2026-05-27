import Image from "next/image";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  alt?: string;
};

export function Logo({
  className = "",
  width = 400,
  height = 400,
  priority = false,
  alt = "BTZ Studio — Plataforma para bodas",
}: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={`object-contain ${className}`}
    />
  );
}
