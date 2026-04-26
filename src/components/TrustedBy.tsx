import React from 'react';
import type { PartnerLogo } from '../lib/partnerLogos';
import { partnerLogos } from '../lib/partnerLogos';

/** GPU-friendly horizontal loop (duplicate row once; translate -50% matches `infinite-scroll` keyframes). */
const LogoMarquee = ({
  items,
  direction = 'left',
  speed = 30,
}: {
  items: PartnerLogo[];
  direction?: 'left' | 'right';
  speed?: number;
}) => {
  const track = [...items, ...items];
  const trackClass = direction === 'left' ? 'animate-infinite-scroll-x' : 'animate-infinite-scroll-x-reverse';

  return (
    <div className="relative flex overflow-hidden select-none">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className={`flex flex-shrink-0 gap-10 sm:gap-14 md:gap-20 py-4 sm:py-6 items-center pr-10 sm:pr-14 md:pr-20 ${trackClass}`}
        style={{ ['--marquee-duration-x' as string]: `${speed}s` }}
      >
        {track.map((logo, idx) => (
          <div
            key={`${logo.src}-${idx}`}
            className="flex h-11 w-[100px] shrink-0 items-center justify-center sm:h-12 sm:w-[120px] md:h-14 md:w-[140px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain opacity-75 transition-opacity hover:opacity-100"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const TrustedBy = () => {
  const half = Math.ceil(partnerLogos.length / 2);
  const row1 = partnerLogos.slice(0, half);
  const row2 = partnerLogos.slice(half);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center mb-10 sm:mb-16">
        <h2 className="font-display font-black text-xl sm:text-2xl md:text-4xl text-black mb-3 sm:mb-4 px-2">
          Trusted Creative Partner for <span className="text-brand-blue">150+ D2C Brands</span>
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-3xl mx-auto px-2">
          We've partnered with some of India's most loved D2C names across beauty, health and wellness, fashion, food, skincare and lifestyle.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* First row: Left to Right */}
        <LogoMarquee items={row1} direction="right" speed={40} />
        
        {/* Second row: Right to Left */}
        <LogoMarquee items={row2} direction="left" speed={40} />
      </div>
    </section>
  );
};
