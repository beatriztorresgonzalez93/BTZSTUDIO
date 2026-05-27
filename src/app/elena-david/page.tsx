import type { Metadata } from "next";
import { ElenaDavidDemo } from "@/components/demo/elena-david/ElenaDavidDemo";

export const metadata: Metadata = {
  title: "Elena & David — Boda en Sevilla | Demo BTZ Studio",
  description: "Demo de web de boda minimalista y editorial.",
};

export default function ElenaDavidPage() {
  return <ElenaDavidDemo />;
}
