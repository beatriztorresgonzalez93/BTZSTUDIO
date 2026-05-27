import Image from "next/image";
import logoMark from "@/assets/btz-logo.png";

const LOGO_WIDTH = 895;
const LOGO_HEIGHT = 584;

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
  height,
  priority = false,
  alt = "BTZ Studio",
}: LogoProps) {
  const resolvedHeight =
    height ?? Math.round((width * LOGO_HEIGHT) / LOGO_WIDTH);

  return (
    <Image
      src={logoMark}
      alt={alt}
      width={width}
      height={resolvedHeight}
      priority={priority}
      className={`h-auto w-auto max-w-full object-contain ${className}`}
    />
  );
}
