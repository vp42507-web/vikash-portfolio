import React, { useEffect, useState } from 'react';
import { PortfolioItem, PERSONAL_INFO } from '../data/portfolioConfig';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, MessageCircle, ExternalLink } from 'lucide-react';

interface VideoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ item, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, onClose]);

  if (!item) return null;

  // Helper to convert standard YouTube URLs into embed URLs
  const getEmbedUrl = (url?: string) => {
    if (!url) return '';
    if (url.includes('embed')) return url;
    if (url.includes('youtube.com/watch?v=')) {
      const id = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    return url;
  };

  const isVertical = item.aspectRatio === '9:16';
  const whatsappProjectMessage = encodeURIComponent(
    `Hi Vikash! I saw your project "${item.title}" (${item.category}) in your portfolio and I would like to discuss a similar video edit.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Backdrop click close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div
        className={`relative z-10 w-full rounded-2xl glass-panel border border-white/20 bg-[#0d0d12] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] ${
          isVertical ? 'max-w-md' : 'max-w-4xl'
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px] uppercase font-bold">
              {item.category}
            </span>
            <h3 className="text-sm font-bold text-white truncate font-display">{item.title}</h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
          {item.videoType === 'youtube' && item.videoUrl ? (
            <div className="w-full aspect-video">
              <iframe
                src={getEmbedUrl(item.videoUrl)}
                title={item.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : item.videoType === 'direct' && item.videoUrl ? (
            <video
              src={item.videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[65vh] object-contain"
            />
          ) : (
            /* Cinematic Showcase Simulator */
            <div
              className={`relative w-full overflow-hidden flex items-center justify-center ${
                isVertical ? 'aspect-[9/16] max-h-[65vh]' : 'aspect-video max-h-[65vh]'
              }`}
            >
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Simulation Player Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-between items-center text-[11px] font-mono text-zinc-300">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>PREVIEW PLAYBACK</span>
                  </div>
                  <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                    1080p 60fps
                  </span>
                </div>

                {/* Big Center Play/Pause button */}
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer shadow-2xl"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-white" />
                    ) : (
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    )}
                  </button>
                </div>

                {/* Interactive Player Controls */}
                <div className="space-y-2 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  {/* Progress bar */}
                  <div
                    className="h-1.5 w-full bg-white/20 rounded-full cursor-pointer relative overflow-hidden"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickPos = (e.clientX - rect.left) / rect.width;
                      setProgress(Math.round(clickPos * 100));
                    }}
                  >
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-200 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-zinc-300">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="hover:text-white"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsMuted(!isMuted)}
                        className="hover:text-white"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <span className="font-mono text-[11px] text-zinc-400">
                        00:12 / {item.duration || '01:00'}
                      </span>
                    </div>

                    <span className="text-[11px] text-zinc-400">Master Render</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Info Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs text-zinc-400 leading-relaxed">{item.description}</div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-zinc-500">
              <span>Client: {item.client || 'Confidential'}</span>
              <span>·</span>
              <span>Tags: {item.tags.join(', ')}</span>
            </div>
          </div>

          <a
            href={`https://wa.me/918839296833?text=${whatsappProjectMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs tracking-wider transition-all whitespace-nowrap active:scale-95 cursor-pointer shadow-lg shadow-emerald-500/10"
          >
            <MessageCircle className="w-4 h-4" />
            <span>DISCUSS THIS STYLE</span>
          </a>
        </div>
      </div>
    </div>
  );
};
