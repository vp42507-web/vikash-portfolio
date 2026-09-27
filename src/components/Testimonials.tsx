import React from 'react';
import { TESTIMONIALS } from '../data/portfolioConfig';
import { Quote, Star, CheckCircle, Code } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
            Client Words
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            CLIENT TESTIMONIALS
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Real feedback from creators, brands, and channels collaborating with Vikash Pandey.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-7 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white/[0.03] to-transparent flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-amber-400">
                    <Quote className="w-5 h-5 fill-amber-400/20" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Client Identification */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{testimonial.clientName}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-zinc-400">{testimonial.channelOrRole}</div>
                </div>

                <div className="text-[11px] font-mono text-zinc-500 uppercase">
                  {testimonial.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editable Notice for Vikash */}
        <div className="mt-12 text-center text-xs text-zinc-500 flex items-center justify-center gap-2">
          <Code className="w-3.5 h-3.5 text-zinc-400" />
          <span>
            Easily update client names, quotes, and roles in{' '}
            <code className="text-zinc-300">src/data/portfolioConfig.ts</code>
          </span>
        </div>
      </div>
    </section>
  );
};
