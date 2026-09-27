import React from 'react';
import { PRICING_PLANS } from '../data/portfolioConfig';
import { Check, Sparkles, ArrowUpRight, MessageCircle } from 'lucide-react';

interface PricingProps {
  onSelectPlan?: (planTitle: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const handleQuoteClick = (planTitle: string) => {
    if (onSelectPlan) {
      onSelectPlan(planTitle);
    } else {
      const el = document.getElementById('inquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#09090c]/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
            Transparent Investment
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            PRICING PACKAGES
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Tailored packages designed for independent creators, growing channels, and scalable brand production.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between p-8 rounded-2xl glass-panel transition-all duration-300 ${
                  isHighlighted
                    ? 'border-amber-400/40 bg-gradient-to-b from-amber-500/[0.06] via-white/[0.03] to-transparent shadow-2xl shadow-amber-500/5 lg:-translate-y-2'
                    : 'border-white/10 hover:border-white/20 bg-gradient-to-b from-white/[0.02] to-transparent'
                }`}
              >
                {/* Popular Pill or Indicator */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-black text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                    MOST POPULAR CHOICE
                  </div>
                )}

                <div>
                  {/* Plan Title & Subheading */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white font-display tracking-tight mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed min-h-[36px]">
                      {plan.subheading}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="mb-8 pb-6 border-b border-white/10 flex items-baseline gap-2">
                    <span className="text-xs text-zinc-400 font-medium">Starting from</span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                      {plan.currency}{plan.priceLabel}
                    </span>
                    {plan.periodLabel && (
                      <span className="text-xs text-zinc-400">{plan.periodLabel}</span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Detail & CTA Button */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  {plan.extraDetails && (
                    <p className="text-[11px] text-zinc-500 italic leading-snug">
                      {plan.extraDetails}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => handleQuoteClick(plan.title)}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                      isHighlighted
                        ? 'bg-white hover:bg-zinc-200 text-black shadow-lg shadow-white/10'
                        : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15'
                    }`}
                  >
                    <span>GET A CUSTOM QUOTE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Custom Requirements */}
        <div className="mt-12 text-center text-xs text-zinc-500">
          Have an ongoing channel or complex documentary project?{' '}
          <a
            href="#inquiry"
            className="text-zinc-300 hover:text-white underline underline-offset-4 font-semibold"
          >
            Request a custom scope & timeline.
          </a>
        </div>
      </div>
    </section>
  );
};
