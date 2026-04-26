import React from 'react';
import { heroMarqueeImageUrls } from '../lib/heroAssets';
import { BOOK_CALL_PHONE_DISPLAY, BOOK_CALL_TEL_HREF } from '../lib/contact';

/** Doubled once at module scope so the loop track length stays stable across renders. */
const marqueeImagesDoubled = [...heroMarqueeImageUrls, ...heroMarqueeImageUrls];

const VerticalMarquee = React.memo(
  ({ direction = "up", speed = 20 }: { direction?: 'up' | 'down'; speed?: number }) => {
    const trackClass =
      direction === 'up' ? 'animate-infinite-scroll-y' : 'animate-infinite-scroll-y-reverse';

    return (
      <div className="h-full w-full min-w-0 overflow-hidden relative flex flex-col gap-2 sm:gap-4 isolate">
        <div
          className={`flex flex-col gap-2 sm:gap-4 ${trackClass}`}
          style={{ ['--marquee-duration' as string]: `${speed}s` }}
        >
          {marqueeImagesDoubled.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] flex-shrink-0 bg-white/5"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover pointer-events-none select-none"
                decoding="async"
                loading={idx < 5 ? 'eager' : 'lazy'}
                fetchPriority={idx < 3 ? 'high' : 'low'}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
);
VerticalMarquee.displayName = 'VerticalMarquee';

export const Hero = () => {
  return (
    <section className="bg-brand-orange pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 min-h-[100dvh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        
        <div className="z-10 order-2 lg:order-1">
          <h1 className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-4 sm:mb-6">
            We create <br />
            <span className="text-brand-blue">high-performing</span> <br />
            <span className="text-brand-blue">visuals</span> that help D2C <br />
            brands sell more
          </h1>
          
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-lg mb-6 sm:mb-8 leading-relaxed">
            Trusted by India's leading D2C brands, Branding Hunks is the creative partner that turns your product into content that converts. From scroll-stopping reels to campaign-ready photos — we make your brand look as good as it performs.
          </p>
          
          <a
            href={BOOK_CALL_TEL_HREF}
            className="inline-flex items-center justify-center bg-brand-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 min-h-[44px]"
            aria-label={`Book a call — ${BOOK_CALL_PHONE_DISPLAY}`}
          >
            Book a Call
          </a>
        </div>

        <div className="relative h-[280px] sm:h-[340px] md:h-[450px] lg:h-[600px] flex gap-2 sm:gap-4 overflow-hidden mask-gradient order-1 lg:order-2">
           {/* Gradient Masks for smooth fade */}
           <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-brand-orange to-transparent z-20 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-orange to-transparent z-20 pointer-events-none"></div>

           <div className="flex-1 min-w-0 h-full flex overflow-hidden"><VerticalMarquee speed={30} direction="up" /></div>
           <div className="flex-1 min-w-0 h-full flex overflow-hidden"><VerticalMarquee speed={40} direction="down" /></div>
           <div className="flex-1 min-w-0 h-full hidden sm:flex overflow-hidden"><VerticalMarquee speed={25} direction="up" /></div>
        </div>
      </div>
    </section>
  );
};
