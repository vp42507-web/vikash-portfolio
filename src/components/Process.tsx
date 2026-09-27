import React from 'react';
import { EDITING_PROCESS_STEPS } from '../data/portfolioConfig';
import { UploadCloud, Scissors, MessageSquare, Download } from 'lucide-react';

export const Process: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return UploadCloud;
      case 1:
        return Scissors;
      case 2:
        return MessageSquare;
      case 3:
        return Download;
      default:
        return Scissors;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#09090c]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
            Collaborative Workflow
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            MY EDITING PROCESS
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            A seamless four-step pipeline designed for zero friction, fast turnarounds, and broadcast-level quality.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {EDITING_PROCESS_STEPS.map((step, index) => {
            const Icon = getStepIcon(index);
            return (
              <div
                key={step.stepNumber}
                className="relative group p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white/[0.03] to-transparent flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-zinc-600 font-mono group-hover:text-amber-400 transition-colors">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white font-display tracking-tight mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Sub-detail */}
                <div className="pt-4 border-t border-white/5 text-[11px] text-zinc-500 leading-normal">
                  {step.details}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
