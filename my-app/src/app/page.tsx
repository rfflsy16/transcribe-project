import AnimatedSection from "@/components/UI/AnimatedSection";
import HeroSection from "@/components/home/HeroSection";
import CardSection from "@/components/home/CardSection";
import FeatureSection from "@/components/home/FeatureSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <main className="relative z-10">
        {/* Hero Section - Reduced blur */}
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
        </AnimatedSection>

        {/* Stats Section - Reduced blur */}
        <AnimatedSection className="-mt-32 relative z-20">
          <CardSection />
        </AnimatedSection>

        {/* Features Section - Reduced blur */}
        <AnimatedSection className="py-32 px-4 sm:px-6 lg:px-8">
          <FeatureSection />
        </AnimatedSection>

        {/* Enhanced CTA Section */}
        <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
          <CTASection />
        </AnimatedSection>
      </main>
    </div>
  );
}
