import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BTZ Studio — Webs de boda personalizadas",
  description:
    "Creamos webs de boda únicas con RSVP, galería, mapa e información del evento. Diseño elegante, emocional y fácil de compartir con vuestros invitados.",
  keywords: [
    "web boda",
    "página boda",
    "RSVP boda",
    "invitación digital boda",
    "BTZ Studio",
  ],
  openGraph: {
    title: "BTZ Studio — Webs de boda únicas",
    description: "Vuestra historia, vuestra web. Todo en un solo lugar elegante.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
