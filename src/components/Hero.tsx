import React, { useState } from 'react';
import { Play, ArrowDown, Sparkles, Film, Volume2, VolumeX } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioConfig';

interface HeroProps {
  onOpenVideoModal?: (id?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideoModal }) => {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow w-[500px] h-[500px] bg-amber-500/10 top-12 left-1/4 -translate-x-1/2 -z-10" />
      <div className="ambient-glow w-[450px] h-[450px] bg-cyan-500/10 top-1/3 right-10 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Display: Name & Role */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-zinc-400 mb-6 tracking-wider uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-200 font-semibold">{PERSONAL_INFO.name}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400">Freelance Video Editor</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-display mb-6">
              <span className="block text-white">{PERSONAL_INFO.headline.part1}</span>
              <span className="block text-zinc-300">{PERSONAL_INFO.headline.part2}</span>
              <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.headline.part3}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-8 font-normal">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('portfolio')}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-black bg-white hover:bg-zinc-200 rounded-lg transition-all duration-200 shadow-xl shadow-white/5 active:scale-95 text-center cursor-pointer"
              >
                VIEW MY WORK
              </button>

              <button
                type="button"
                onClick={() => scrollTo('inquiry')}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 rounded-lg transition-all duration-200 active:scale-95 text-center cursor-pointer hover:border-white/30"
              >
                LET'S WORK TOGETHER
              </button>
            </div>

            {/* Unboxed Micro-Features */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Film className="w-3.5 h-3.5 text-amber-400" />
                High-Retention Editing
              </span>
              <span className="text-zinc-600">·</span>
              <span>4K Master Grading</span>
              <span className="text-zinc-600">·</span>
              <span>Multi-Layer Sound Design</span>
              <span className="text-zinc-600">·</span>
              <span>Kinetic Motion Graphics</span>
            </div>
          </div>

          {/* Right Column: Cinematic Video / Workstation Preview Area */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Glass Frame Container */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/15 shadow-2xl group">
                {/* Visual Media Canvas */}
                <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
                  <img
                    src={PERSONAL_INFO.heroBackdrop}
                    alt="Vikash Pandey Professional Video Editing Studio Workstation"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 contrast-105"
                  />

                  {/* Cinematic Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/30 to-black/20" />

                  {/* Live Workstation Status Bar */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      <span className="tracking-wider">REC // 4K 24FPS</span>
                    </div>
                    <span className="text-zinc-400">DAVINCI STUDIO TIMELINE</span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => onOpenVideoModal?.('proj-1')}
                      aria-label="Play showreel preview"
                      className="group/btn relative flex items-center justify-center w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
                    >
                      <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-30" />
                      <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                    </button>
                  </div>

                  {/* Bottom Media Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-300">
                    <div>
                      <div className="font-semibold text-white">2026 Showreel Preview</div>
                      <div className="text-[11px] text-zinc-400">Reels · Shorts · Commercials</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 hover:bg-black/80 text-zinc-300 hover:text-white transition-colors"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Bottom Timeline Indicator */}
                <div className="px-4 py-3 bg-[#0c0c10] border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-mono text-[11px]">00:00:28:14</span>
                    <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-amber-400 rounded-full" />
                    </div>
                  </div>
                  <span className="text-zinc-500 text-[11px]">Color Mastered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => scrollTo('about')}
            aria-label="Scroll to About Me section"
            className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-xs uppercase tracking-widest cursor-pointer"
          >
            <span>Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-zinc-400 group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
