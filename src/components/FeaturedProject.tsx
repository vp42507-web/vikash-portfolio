import React, { useState } from 'react';
import { FEATURED_PROJECT } from '../data/portfolioConfig';
import { Play, Volume2, VolumeX, Maximize2, Sparkles, Film } from 'lucide-react';

interface FeaturedProjectProps {
  onOpenModal: (projectId: string) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onOpenModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow w-[600px] h-[600px] bg-amber-500/10 -top-20 right-1/4 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
            Spotlight Reel
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            {FEATURED_PROJECT.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 max-w-2xl mx-auto">
            {FEATURED_PROJECT.description}
          </p>
        </div>

        {/* Large Cinematic Video Container */}
        <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden glass-panel border border-white/15 shadow-2xl bg-zinc-950 group">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src={FEATURED_PROJECT.thumbnailUrl}
              alt="Featured Video Project by Vikash Pandey"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out brightness-95"
            />

            {/* Cinematic Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

            {/* Top Bar Overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300 font-mono">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-white font-semibold">MASTER SHOWCASE</span>
                <span className="text-zinc-500">·</span>
                <span className="text-zinc-400">4K PRORES</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span>TIMECODE: 00:01:24:08</span>
              </div>
            </div>

            {/* Play Button Trigger */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={() => onOpenModal('proj-4')}
                aria-label="Play full featured video"
                className="group/btn relative flex items-center justify-center w-20 h-20 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
              >
                <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-40" />
                <Play className="w-8 h-8 fill-white text-white translate-x-0.5" />
              </button>
            </div>

            {/* Bottom Scrubber Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
              <div className="flex-1 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white">Commercial Edit</span>
                  <span className="text-zinc-500 text-xs">/</span>
                  <span className="text-xs text-zinc-400">Aura Performance</span>
                </div>
                <div className="flex-1 hidden md:block h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-gradient-to-r from-amber-400 to-amber-200 rounded-full" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 text-zinc-300 hover:text-white transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => onOpenModal('proj-4')}
                  className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 text-zinc-300 hover:text-white transition-colors"
                  aria-label="Fullscreen view"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Technical Pillars Underneath */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {FEATURED_PROJECT.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center hover:border-white/20 transition-colors"
            >
              <div className="text-sm font-bold text-white font-display uppercase tracking-wide">
                {pillar.title}
              </div>
              <div className="text-[11px] text-zinc-400 mt-1 leading-snug">
                {pillar.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
