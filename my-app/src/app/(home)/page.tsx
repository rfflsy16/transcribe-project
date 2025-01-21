import HeroSection from "@/app/(home)/HeroSection"; 
import CardSection from "@/app/(home)/CardSection";
import FeatureSection from "@/app/(home)/FeatureSection";
import PricingSection from "@/app/(home)/PricingSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <main className="relative z-10">
        <HeroSection />
        <CardSection />
        <FeatureSection />
        <PricingSection />
      </main>
    </div>
  );
}
