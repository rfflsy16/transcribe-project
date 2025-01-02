"use client";

import AnimatedSection from "../UI/AnimatedSection";

export default function FeatureSection() {
  const feature = [
    {
      title: "Real-time Processing",
      description: "Get instant results as you speak",
      icon: "⚡️",
    },
    {
      title: "Smart AI Detection",
      description: "Advanced speech recognition technology",
      icon: "🧠",
    },
    {
      title: "Multi-speaker Detection",
      description: "Automatically identify different speakers",
      icon: "👥",
    },
    {
      title: "Custom Dictionary",
      description: "Add industry-specific terminology",
      icon: "📚",
    },
    {
      title: "Cloud Storage",
      description: "Secure backup of all transcriptions",
      icon: "☁️",
    },
    {
      title: "Export Options",
      description: "Multiple format support (PDF, DOC, TXT)",
      icon: "📤",
    },
  ];

  return (
    <AnimatedSection className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-4">
            Powerful Features
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feature.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-[4px] border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-15 transition duration-300"></div>
              <div className="relative">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
