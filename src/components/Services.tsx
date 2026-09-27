import React from 'react';
import { SERVICES } from '../data/portfolioConfig';
import { Instagram, Youtube, Sparkles, Megaphone, Bot, Mic, ArrowUpRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'reels':
        return Instagram;
      case 'youtube':
        return Youtube;
      case 'shorts':
        return Youtube;
      case 'ads':
        return Megaphone;
      case 'ai-video':
        return Bot;
      case 'podcast':
        return Mic;
      default:
        return Sparkles;
    }
  };

  const handleServiceSelect = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    } else {
      const el = document.getElementById('inquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#09090c]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
            Capabilities & Deliverables
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            SERVICES
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            High-retention editing engineered specifically for creators, brands, and modern content ecosystems.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white/[0.03] to-transparent"
              >
                <div>
                  {/* Top Row: Service Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono text-zinc-500 font-semibold">
                      0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-200 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-3">
                    <div className="text-xs text-zinc-400 font-medium tracking-wide uppercase mb-1">
                      {service.categoryLabel}
                    </div>
                    <h3 className="text-xl font-bold text-white font-display tracking-tight group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500 truncate max-w-[170px]">
                    {service.recommendedFor}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleServiceSelect(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>Request</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
