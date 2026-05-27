import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { SeatingSection } from "@/components/sections/SeatingSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhySection } from "@/components/sections/WhySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <SeatingSection />
        <PricingSection />
        <PortfolioSection />
        <WhySection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
