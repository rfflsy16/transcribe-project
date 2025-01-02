import HeroSection from "@/components/home/HeroSection";
import CardSection from "@/components/home/CardSection";
import FeatureSection from "@/components/home/FeatureSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <main className="relative z-10">
        <HeroSection />

        <CardSection />

        <FeatureSection />

        <CTASection />
      </main>
    </div>
  );
}
