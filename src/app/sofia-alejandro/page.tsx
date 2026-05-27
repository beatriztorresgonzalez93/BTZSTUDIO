import type { Metadata } from "next";
import { SofiaAlejandroDemo } from "@/components/demo/sofia-alejandro/SofiaAlejandroDemo";

export const metadata: Metadata = {
  title: "Sofía & Alejandro — Boda en Málaga | Demo BTZ Studio",
  description: "Demo de web de boda mediterránea en la costa.",
};

export default function SofiaAlejandroPage() {
  return <SofiaAlejandroDemo />;
}
