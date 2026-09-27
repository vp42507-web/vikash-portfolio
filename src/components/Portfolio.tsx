import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioConfig';
import { PortfolioCard } from './PortfolioCard';
import { Filter, Code, Sparkles, ExternalLink } from 'lucide-react';

interface PortfolioProps {
  onWatchVideo: (item: PortfolioItem) => void;
}

type CategoryFilter = 'ALL' | 'REELS' | 'YOUTUBE' | 'SHORTS' | 'ADS' | 'PODCAST';

export const Portfolio: React.FC<PortfolioProps> = ({ onWatchVideo }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('ALL');

  const categories: CategoryFilter[] = ['ALL', 'REELS', 'YOUTUBE', 'SHORTS', 'ADS', 'PODCAST'];

  const filteredItems =
    activeFilter === 'ALL'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
              Curated Production Showcase
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              SELECTED WORK
            </h2>
            <p className="mt-2 text-base text-zinc-400 max-w-xl">
              From viral 9:16 Instagram Reels to retention-optimized YouTube documentaries and cinematic brand films.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Single-line, accessible buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-black shadow-lg shadow-white/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} onWatchVideo={onWatchVideo} />
          ))}
        </div>

        {/* Easy Replacement Helper Banner for Vikash */}
        <div className="mt-16 p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <Code className="w-4 h-4" />
            </div>
            <div className="text-xs text-zinc-300">
              <span className="font-semibold text-white">Easy Video Replacement: </span>
              All project videos, titles, and thumbnails are configured inside{' '}
              <code className="px-1.5 py-0.5 rounded bg-white/10 text-amber-300 font-mono text-[11px]">
                src/data/portfolioConfig.ts
              </code>
              . Simply paste your YouTube or Instagram link!
            </div>
          </div>

          <a
            href="#inquiry"
            className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 hover:text-white shrink-0 self-start sm:self-auto"
          >
            <span>Have a custom project?</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
