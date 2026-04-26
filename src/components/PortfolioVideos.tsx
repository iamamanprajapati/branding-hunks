import React from 'react';

/** Homepage preview cap; full library can live on a dedicated gallery page later. */
const MAX_HOME_VIDEOS = 9;

/* YouTube Shorts: autoplay, mute, loop, no controls, 9:16. Overlay blocks all interaction. */
const YOUTUBE_SHORTS = [
  { id: '9B_bjfsrl_k' },
  { id: 'LmVL7oYGgCE' },
  { id: '_Vv3yHrFYpY' },
  { id: 'd51IdYIieEg' },
  { id: 'kU3NYcumKMQ' },
  { id: 'uzm_jbHu_so' },
  { id: 'lU3lhdKtRBQ' },
  { id: 'k4hUoySQ6VE' },
  { id: '9KwCu4HpaoU' },
  { id: 'Hn9MsHdHWfk' },
];

const previewVideos = YOUTUBE_SHORTS.slice(0, MAX_HOME_VIDEOS);

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
      <div className="absolute inset-0 z-10 cursor-default" aria-hidden />
    </div>
  );
};

export const PortfolioVideos = () => {
  return (
    <section id="videos" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-black mb-3 sm:mb-4">
            Video <span className="text-brand-blue">highlights</span>
          </h2>
          <p className="text-gray-500 text-base">
            Short-form work in motion — a curated preview of what we produce.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,210px)] sm:grid-cols-[repeat(auto-fill,250px)] justify-center gap-4 sm:gap-6 md:gap-8">
          {previewVideos.map(({ id }) => (
            <YouTubeShortEmbed key={id} videoId={id} />
          ))}
        </div>
      </div>
    </section>
  );
};
