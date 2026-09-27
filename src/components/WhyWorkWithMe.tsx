import React from 'react';
import { WHY_WORK_WITH_ME } from '../data/portfolioConfig';
import { Zap, ShieldCheck, Flame, Eye, HeartHandshake } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return Zap;
      case 1:
        return ShieldCheck;
      case 2:
        return Flame;
      case 3:
        return Eye;
      case 4:
        return HeartHandshake;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
            Standards & Values
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            WHY WORK WITH ME
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            More than just cutting clips — a dedicated editing partner focused on elevating your brand presence and viewer retention.
          </p>
        </div>

        {/* 5 Premium Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((card, index) => {
            const Icon = getIcon(index);
            // On desktop, the 4th and 5th items can span appropriately
            const isSpan = index === 3 || index === 4;

            return (
              <div
                key={card.title}
                className={`p-7 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white/[0.03] to-transparent flex flex-col justify-between ${
                  index === 3 ? 'lg:col-span-1' : ''
                } ${index === 4 ? 'lg:col-span-2' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase font-mono">
                      {card.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display tracking-tight mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
