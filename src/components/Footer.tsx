import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioConfig';
import { MessageCircle, Instagram, Mail, ArrowUp, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      scrollToTop();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#060608] py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-xl font-bold tracking-tight text-white uppercase font-display block"
            >
              {PERSONAL_INFO.name}
            </a>
            <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
              Freelance Video Editor
            </p>
            <p className="text-sm text-zinc-400 max-w-sm italic pt-1">
              "Turning ideas into engaging visual stories."
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-4 font-mono">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-4 font-mono">
              Direct Channels
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp ({PERSONAL_INFO.phone})</span>
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram (***{PERSONAL_INFO.instagramDisplay}***)</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href="/vikash-pandey-portfolio.zip"
                download="vikash-pandey-portfolio.zip"
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors pt-1"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Source Code (.ZIP)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>© 2026 {PERSONAL_INFO.name}. All Rights Reserved.</div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
