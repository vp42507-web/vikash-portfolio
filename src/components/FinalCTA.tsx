import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-white/[0.02] to-[#070709] border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-16 rounded-3xl glass-panel border border-white/15 bg-gradient-to-b from-white/[0.04] to-transparent shadow-2xl relative">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transform Raw Footage Into High-Retention Video</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-tight max-w-3xl mx-auto mb-8">
            READY TO LEVEL UP YOUR CONTENT?
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-10">
            Let's turn your ideas and raw footage into captivating videos that engage your audience and drive real results.
          </p>

          <button
            type="button"
            onClick={scrollToInquiry}
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-2xl shadow-white/10 active:scale-95 cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
