import type { Metadata } from "next";
import { LauraMiguelDemo } from "@/components/demo/laura-miguel/LauraMiguelDemo";

export const metadata: Metadata = {
  title: "Laura & Miguel — Boda en Córdoba | Demo BTZ Studio",
  description: "Demo de web de boda romántica en finca andaluza.",
};

export default function LauraMiguelPage() {
  return <LauraMiguelDemo />;
}
