import React, { useEffect, useRef, useState } from 'react';
import { BOOK_CALL_PHONE_DISPLAY, BOOK_CALL_TEL_HREF } from '../lib/contact';
import {
  YOUTUBE_SHORT_VIDEO_IDS,
  youtubeShortEmbedSrc,
  youtubeShortPosterSrc,
} from '../lib/youtubeShorts';

/** Split IDs into three disjoint lists so no video appears in more than one column. */
function splitIdsForHeroColumns(ids: readonly string[]): [string[], string[], string[]] {
  const n = ids.length;
  if (n === 0) return [[], [], []];
  const q = Math.floor(n / 3);
  const r = n % 3;
  const sizes = [q + (r > 0 ? 1 : 0), q + (r > 1 ? 1 : 0), q + (r > 2 ? 1 : 0)];
  let i = 0;
  const a = [...ids.slice(i, (i += sizes[0]))];
  const b = [...ids.slice(i, (i += sizes[1]))];
  const c = [...ids.slice(i, (i += sizes[2]))];
  return [a, b, c];
}

const [heroMarqueeCol0, heroMarqueeCol1, heroMarqueeCol2] =
  splitIdsForHeroColumns(YOUTUBE_SHORT_VIDEO_IDS);

/** Poster first; load autoplay iframe only when near the viewport, staggered to avoid burst-loading many players. */
const LazyHeroYouTubeCell = React.memo(function LazyHeroYouTubeCell({
  videoId,
  staggerIndex,
}: {
  videoId: string;
  staggerIndex: number;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || active) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const staggerMs = (staggerIndex % 8) * 180;
        timeoutRef.current = setTimeout(() => {
          setActive(true);
          timeoutRef.current = null;
        }, staggerMs);
      },
      { rootMargin: '100px 0px', threshold: 0.08 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [active, staggerIndex]);

  const embedSrc = youtubeShortEmbedSrc(videoId);
  const posterSrc = youtubeShortPosterSrc(videoId);

  return (
    <div
      ref={rootRef}
      className="relative rounded-2xl overflow-hidden aspect-[9/16] flex-shrink-0 bg-black"
    >
      {active ? (
        <>
          <iframe
            src={embedSrc}
            title="Branding Hunks work preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute inset-0 h-full w-full pointer-events-none select-none"
            style={{ border: 0 }}
            loading="lazy"
          />
          <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden />
        </>
      ) : (
        <img
          src={posterSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      )}
    </div>
  );
});

const VerticalMarquee = React.memo(
  ({
    videoIds,
    direction = 'up',
    speed = 20,
  }: {
    videoIds: readonly string[];
    direction?: 'up' | 'down';
    speed?: number;
  }) => {
    const track = videoIds.length ? [...videoIds, ...videoIds] : [];
    const trackClass =
      direction === 'up' ? 'animate-infinite-scroll-y' : 'animate-infinite-scroll-y-reverse';

    return (
      <div className="h-full w-full min-w-0 overflow-hidden relative flex flex-col gap-2 sm:gap-4 isolate">
        <div
          className={`flex flex-col gap-2 sm:gap-4 ${trackClass}`}
          style={{ ['--marquee-duration' as string]: `${speed}s` }}
        >
          {track.map((videoId, idx) => (
            <LazyHeroYouTubeCell key={`${videoId}-${idx}`} videoId={videoId} staggerIndex={idx} />
          ))}
        </div>
      </div>
    );
  },
);
VerticalMarquee.displayName = 'VerticalMarquee';

export const Hero = () => {
  return (
    <section className="bg-brand-gradient pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-[100dvh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="z-10 order-2 lg:order-1">
          <h1 className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-4 sm:mb-6">
            We create <br />
            <span className="text-brand-cream">high-performing</span> <br />
            <span className="text-brand-cream">visuals</span> that help D2C <br />
            brands sell more
          </h1>

          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-lg mb-6 sm:mb-8 leading-relaxed">
            Trusted by India's leading D2C brands, Branding Hunks is the creative partner that turns your product into content that converts. From scroll-stopping reels to campaign-ready photos — we make your brand look as good as it performs.
          </p>

          <a
            href={BOOK_CALL_TEL_HREF}
            className="inline-flex items-center justify-center bg-brand-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-black/90 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 min-h-[44px]"
            aria-label={`Book a call — ${BOOK_CALL_PHONE_DISPLAY}`}
          >
            Book a Call
          </a>
        </div>

        <div className="relative h-[280px] sm:h-[340px] md:h-[450px] lg:h-[600px] flex gap-2 sm:gap-4 overflow-hidden mask-gradient order-1 lg:order-2">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-brand-gradient-fade to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-gradient-fade to-transparent z-20 pointer-events-none" />

          <div className="flex-1 min-w-0 h-full flex overflow-hidden">
            <VerticalMarquee videoIds={heroMarqueeCol0} speed={30} direction="up" />
          </div>
          <div className="flex-1 min-w-0 h-full flex overflow-hidden">
            <VerticalMarquee videoIds={heroMarqueeCol1} speed={40} direction="down" />
          </div>
          <div className="flex-1 min-w-0 h-full hidden sm:flex overflow-hidden">
            <VerticalMarquee videoIds={heroMarqueeCol2} speed={25} direction="up" />
          </div>
        </div>
      </div>
    </section>
  );
};
