import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BTZ Studio — Plataforma digital para bodas",
  description:
    "Plataforma web y móvil para bodas. Centraliza invitados, mesas, RSVP, música, fotos y logística en un único espacio elegante y personalizable.",
  keywords: [
    "bodas",
    "plataforma bodas",
    "RSVP",
    "gestión invitados",
    "app bodas",
    "Sevilla",
  ],
  openGraph: {
    title: "BTZ Studio — Plataforma para bodas",
    description: "La plataforma que lo organiza todo. Web y móvil.",
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
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
