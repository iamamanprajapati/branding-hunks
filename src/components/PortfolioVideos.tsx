import React, { useEffect, useRef, useState } from 'react';
import {
  YOUTUBE_SHORT_VIDEO_IDS,
  youtubeShortEmbedSrc,
  youtubeShortPosterSrc,
} from '../lib/youtubeShorts';

/** Homepage preview cap for the video grid. */
const MAX_HOME_VIDEOS = 12;

const previewVideoIds = YOUTUBE_SHORT_VIDEO_IDS.slice(0, MAX_HOME_VIDEOS);

const LazyYouTubeShortEmbed = React.memo(function LazyYouTubeShortEmbed({
  videoId,
}: {
  videoId: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || active) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px 0px', threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [active]);

  const embedSrc = youtubeShortEmbedSrc(videoId);
  const posterSrc = youtubeShortPosterSrc(videoId);

  return (
    <div
      ref={rootRef}
      className="relative w-full aspect-[9/16] max-w-[216px] sm:max-w-[252px] mx-auto overflow-hidden bg-neutral-900 shadow-xl"
    >
      {active ? (
        <>
          <iframe
            src={embedSrc}
            title="YouTube Shorts"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            style={{ border: 0 }}
          />
          <div className="absolute inset-0 z-10 cursor-default" aria-hidden />
        </>
      ) : (
        <img
          src={posterSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      )}
    </div>
  );
});

function PortfolioVideosInner() {
  return (
    <section id="videos" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-black mb-3 sm:mb-4">
            Video <span className="text-brand-orange">highlights</span>
          </h2>
          <p className="text-gray-500 text-base">
            Short-form work in motion — a curated preview of what we produce.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,210px)] sm:grid-cols-[repeat(auto-fill,250px)] justify-center gap-4 sm:gap-6 md:gap-8">
          {previewVideoIds.map((id) => (
            <LazyYouTubeShortEmbed key={id} videoId={id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const PortfolioVideos = React.memo(PortfolioVideosInner);
