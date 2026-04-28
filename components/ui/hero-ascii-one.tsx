'use client';

interface HeroAsciiOneProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

export default function HeroAsciiOne({ onGetStarted, onLearnMore }: HeroAsciiOneProps) {
  return (
    <div
      className="relative w-full min-h-[100svh] bg-black flex flex-col"
      style={{ backgroundColor: '#020617', color: '#fff' }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Top Header */}
      <div className="relative z-20 w-full border-b border-white/20">
        <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="font-mono text-white text-xl lg:text-2xl font-bold tracking-widest">
              <span className="text-blue-400">H</span>
              <span className="text-red-400">AK</span>
              <span className="text-blue-400">TL</span>
            </div>
            <div className="h-3 lg:h-4 w-px bg-white/40"></div>
            <span className="text-white/60 text-[8px] lg:text-[10px] font-mono">EST. 2025 · AUSTRIA</span>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-[10px] font-mono text-white/60">
            <span>HTL</span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span>HAK</span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span>ÖSTERREICH</span>
          </div>
        </div>
      </div>

      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/30 z-20"></div>
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/30 z-20"></div>
      <div className="absolute left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/30 z-20" style={{ bottom: '5vh' }}></div>
      <div className="absolute right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-white/30 z-20" style={{ bottom: '5vh' }}></div>

      {/* CTA Content */}
      <div className="relative z-10 flex flex-1 items-center justify-end w-full px-6 lg:px-16">
        <div className="w-full lg:w-1/2 lg:pr-[10%]">
          <div className="max-w-lg relative lg:ml-auto">
            {/* Top decorative line */}
            <div className="flex items-center gap-2 mb-3 opacity-60">
              <div className="w-8 h-px bg-white"></div>
              <span className="text-white text-[10px] font-mono tracking-wider">∞</span>
              <div className="flex-1 h-px bg-white"></div>
            </div>

            {/* Subtitle badge */}
            <div className="mb-3">
              <span className="text-[10px] font-mono text-blue-400/80 tracking-widest uppercase">
                Lernplattform · Österreich · 2025
              </span>
            </div>

            {/* Title */}
            <div className="relative">
              <div className="hidden lg:block absolute -right-3 top-0 bottom-0 w-1 haktl-dither opacity-40"></div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-4 leading-tight font-mono tracking-wider lg:-ml-[2%]" style={{ letterSpacing: '0.05em' }}>
                DEINE PREMIUM<br />LERNPLATTFORM
              </h1>
            </div>

            {/* Decorative dots — desktop only */}
            <div className="hidden lg:flex gap-1 mb-3 opacity-40">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-white rounded-full"></div>
              ))}
            </div>

            {/* Description */}
            <div className="relative">
              <p className="text-xs lg:text-base text-gray-300 mb-5 lg:mb-6 leading-relaxed font-mono opacity-80">
                Für HTL & HAK Schüler in Österreich — organisiere Noten, schreibe Mitschriften, tausche dich mit der Community aus.
              </p>
              <div className="hidden lg:block absolute -left-4 top-1/2 w-3 h-3 border border-white opacity-30" style={{ transform: 'translateY(-50%)' }}>
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white" style={{ transform: 'translate(-50%, -50%)' }}></div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
              <button
                onClick={onGetStarted}
                className="relative px-5 lg:px-6 py-2 lg:py-2.5 bg-transparent text-white font-mono text-xs lg:text-sm border border-white hover:bg-white hover:text-black transition-all duration-200 group cursor-pointer"
              >
                <span className="hidden lg:block absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="hidden lg:block absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                JETZT STARTEN
              </button>

              <button
                onClick={onLearnMore}
                className="relative px-5 lg:px-6 py-2 lg:py-2.5 bg-transparent border border-white/50 text-white/70 font-mono text-xs lg:text-sm hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
              >
                MEHR ERFAHREN
              </button>
            </div>

            {/* Bottom notation — desktop only */}
            <div className="hidden lg:flex items-center gap-2 mt-6 opacity-40">
              <span className="text-white text-[9px] font-mono">∞</span>
              <div className="flex-1 h-px bg-white"></div>
              <span className="text-white text-[9px] font-mono">HAKTL.PROTOCOL · V1.0.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="relative z-20 w-full border-t border-white/20 bg-black/40 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-6 text-[8px] lg:text-[9px] font-mono text-white/50">
            <span className="hidden lg:inline">SYSTEM.ACTIVE</span>
            <span className="lg:hidden">SYS.ACT</span>
            <div className="hidden lg:flex gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-1 bg-white/30" style={{ height: `${(i % 3 + 1) * 4 + 4}px` }}></div>
              ))}
            </div>
            <span>V1.0.0</span>
          </div>

          <div className="flex items-center gap-2 lg:gap-4 text-[8px] lg:text-[9px] font-mono text-white/50">
            <span className="hidden lg:inline">◐ RENDERING</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="hidden lg:inline">FRAME: ∞</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .haktl-dither {
          background-image:
            repeating-linear-gradient(0deg, transparent 0px, transparent 1px, white 1px, white 2px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 1px, white 1px, white 2px);
          background-size: 3px 3px;
        }
      `}</style>
    </div>
  );
}
