"use client";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute inset-0 blur-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 -z-10 animate-pulse"></div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
              Transform Your
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Audio to Text
              </span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Experience lightning-fast, accurate audio transcription powered by
            cutting-edge AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Transcribing
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">
                →
              </span>
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium transition-all duration-200 border border-white/20">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-md"></div>
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            {/* Add Hero Image or Interactive Element */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
