"use client";

export default function CTASection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative p-8 sm:p-12 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied users who trust our platform
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-xl">
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
}
