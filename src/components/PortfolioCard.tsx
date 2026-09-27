import React from 'react';
import { PortfolioItem } from '../data/portfolioConfig';
import { Play, Clock, Sparkles } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
  onWatchVideo: (item: PortfolioItem) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onWatchVideo }) => {
  const isVertical = item.aspectRatio === '9:16';

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white/[0.02] to-transparent">
      {/* Thumbnail Container */}
      <div
        className={`relative w-full overflow-hidden bg-zinc-950 cursor-pointer ${
          isVertical ? 'aspect-[9/14] sm:aspect-[9/16]' : 'aspect-[16/9]'
        }`}
        onClick={() => onWatchVideo(item)}
      >
        <img
          src={item.thumbnailUrl}
          alt={item.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 contrast-105"
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-colors" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px]">
          <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-white font-semibold tracking-wider font-mono">
            {item.category}
          </span>
          {item.duration && (
            <span className="flex items-center gap-1 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300 font-mono">
              <Clock className="w-3 h-3 text-amber-400" />
              {item.duration}
            </span>
          )}
        </div>

        {/* Hover / Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/10 group-hover:bg-white/25 backdrop-blur-md border border-white/20 group-hover:border-white/40 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 shadow-xl">
            <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
          </div>
        </div>

        {/* Bottom Client Marker */}
        {item.client && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-300">
            <span className="text-[11px] text-zinc-400 font-medium truncate">
              Client: {item.client}
            </span>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Unboxed Tags */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-500 mb-2">
            {item.tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>
                {idx < item.tags.length - 1 && <span className="text-zinc-700">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Project Title */}
          <h3
            onClick={() => onWatchVideo(item)}
            className="text-lg font-bold text-white font-display tracking-tight group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1 mb-2"
          >
            {item.title}
          </h3>

          {/* Project Description */}
          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
            {item.description}
          </p>
        </div>

        {/* Watch Video Button */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onWatchVideo(item)}
            className="w-full py-2.5 px-4 rounded-lg bg-white/[0.05] hover:bg-white text-white hover:text-black border border-white/10 hover:border-white text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>WATCH VIDEO</span>
          </button>
        </div>
      </div>
    </div>
  );
};
