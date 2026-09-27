import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioConfig';
import { Layers, Sliders, Music, Zap, Video, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Storytelling & Retention',
      description: 'Crafting intentional narrative arcs and hooks that grip viewers from the first second.',
      icon: Video,
    },
    {
      title: 'Pacing & Dynamic Cuts',
      description: 'Zero dead air. Rhythmically synchronized jump cuts, speed ramps, and seamless scene transitions.',
      icon: Zap,
    },
    {
      title: 'Cinematic Color Grading',
      description: 'Natural skin tones, balanced luminance, and stylized filmic contrast using DaVinci Resolve.',
      icon: Sliders,
    },
    {
      title: 'Multi-Track Sound Design',
      description: 'Layered whooshes, impacts, risers, atmospheric foley, and surgical dialogue cleanup.',
      icon: Music,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Professional Profile Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-transparent to-white/10 rounded-2xl blur-xl opacity-60" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/15 p-2 bg-[#0c0c10]">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-900">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Vikash Pandey - Freelance Video Editor & Content Creator"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Identification Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-lg font-bold text-white font-display">{PERSONAL_INFO.name}</div>
                    <div className="text-xs text-zinc-300 flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Freelance Video Editor & Content Creator</span>
                    </div>
                  </div>
                </div>

                {/* Software Stack Strip */}
                <div className="mt-3 p-3 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Editing Toolkit
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                    {PERSONAL_INFO.softwareTools.map((tool) => (
                      <span
                        key={tool.name}
                        className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[11px] text-zinc-300"
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            {/* Section Tag */}
            <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
              Background & Approach
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-8">
              ABOUT ME
            </h2>

            {/* User-requested Narrative Text */}
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              <p>
                I'm <span className="text-white font-semibold">Vikash Pandey</span>, a freelance video editor and
                content creator focused on creating engaging videos for social media, YouTube and brands.
              </p>
              <p className="text-zinc-400">
                I transform raw footage into clean, engaging and professional content using storytelling, pacing, motion
                graphics, sound design and modern editing techniques.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 rounded-lg bg-white/5 text-amber-400">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-white">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Direct Contact Links */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-all font-semibold text-xs"
              >
                <span>WhatsApp: {PERSONAL_INFO.phone}</span>
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 border border-pink-500/20 transition-all font-semibold text-xs"
              >
                <span>Instagram: {PERSONAL_INFO.instagramDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
