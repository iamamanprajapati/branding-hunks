import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

/* YouTube Shorts: autoplay, mute, loop, no controls, 9:16. Overlay blocks all interaction. */
const YOUTUBE_SHORTS = [
  { id: 'Km0F48ksCMg' },
  { id: 'HQsS-sfB96M' },
  { id: '7IN5WNKhguQ' },
  { id: 'HQsS-sfB96M' },
];

const YouTubeShortEmbed = ({ videoId }: { videoId: string }) => {
  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`;
  return (
    <div className="relative w-full aspect-[9/16] max-w-[216px] sm:max-w-[252px] mx-auto rounded-0xl overflow-hidden bg-black shadow-xl">
      <iframe
        src={embedSrc}
        title="YouTube Shorts"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={{ border: 0 }}
      />
      {/* Invisible overlay: blocks pause/click so video is view-only */}
      <div className="absolute inset-0 z-10 cursor-default" aria-hidden />
    </div>
  );
};

const categories = ["All", "Beauty", "Fashion", "Food", "Health & Wellness", "Pets", "Kids"];

const portfolioItems = [
  { 
    type: 'video', 
    src: 'https://cdn.coverr.co/videos/coverr-applying-face-cream-5394/1080p.mp4', 
    category: 'Beauty',
    poster: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=800&auto=format&fit=crop'
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop', 
    category: 'Fashion' 
  },
  { 
    type: 'video', 
    src: 'https://cdn.coverr.co/videos/coverr-pouring-fresh-juice-4672/1080p.mp4', 
    category: 'Food',
    poster: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop'
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop', 
    category: 'Pets' 
  },
  { 
    type: 'video', 
    src: 'https://cdn.coverr.co/videos/coverr-girl-playing-with-dog-4568/1080p.mp4', 
    category: 'Pets',
    poster: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop'
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop', 
    category: 'Kids' 
  },
  { 
    type: 'video', 
    src: 'https://cdn.coverr.co/videos/coverr-yoga-by-the-sea-5362/1080p.mp4', 
    category: 'Health & Wellness',
    poster: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop'
  },
  { 
    type: 'video', 
    src: 'https://cdn.coverr.co/videos/coverr-fashion-photoshoot-in-studio-5642/1080p.mp4', 
    category: 'Fashion',
    poster: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop'
  },
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="work" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-black mb-3 sm:mb-4">
            See what <span className="text-brand-blue">Branding Hunks</span> can do
          </h2>
          <p className="text-gray-500 text-base mb-8">
            Everything you need to make your brand look great — online & offline.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 min-h-[40px] active:scale-[0.98]",
                  activeCategory === cat 
                    ? "bg-brand-orange text-white shadow-md md:scale-105" 
                    : "bg-white text-gray-600 hover:bg-gray-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* YouTube Shorts: same grid & gap as image grid below */}
        <div className="mb-12 sm:mb-8">
          <div className="grid grid-cols-[repeat(auto-fill,210px)] sm:grid-cols-[repeat(auto-fill,250px)] justify-center gap-4 sm:gap-6 md:gap-8">
            {YOUTUBE_SHORTS.map(({ id }) => (
              <YouTubeShortEmbed key={id} videoId={id} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,210px)] sm:grid-cols-[repeat(auto-fill,250px)] justify-center gap-4 sm:gap-6 md:gap-8">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full min-w-0 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group bg-gray-200 aspect-[9/16]"
              >
                {item.type === 'video' ? (
                  <video 
                    src={item.src} 
                    poster={item.poster}
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover pointer-events-none"
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.category} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest uppercase text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                        {item.category}
                    </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <button className="bg-brand-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 min-h-[44px]">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};
