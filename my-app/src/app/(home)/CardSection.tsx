"use client";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "react-countup";

export default function CardSection() {
  const stats = [
    { number: 99, suffix: "%", label: "Accuracy" },
    { number: 99, suffix: "+", label: "Languages" },
    { number: 1000000, suffix: "+", label: "Users" },
    { number: 24, suffix: "/7", label: "Support" },
  ];

  return (
    <AnimatedSection className="-mt-32 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-[4px] border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  <CountUp 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={4}
                    separator=","
                  />
                </div>
                <div className="text-gray-400 mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
