import React from 'react';

const logos = [
  "Khadi Natural", "Krishna's", "Leafy Affair", "Natch", "Nourish You", "One Good", "Perfora", "Quirksmith",
  "Varalife", "Wakefit", "Yes Bank", "Bajaj Finserv", "Aroma Treasures", "Aramya"
];

/** GPU-friendly horizontal loop (duplicate row once; translate -50% matches `infinite-scroll` keyframes). */
const LogoMarquee = ({
  items,
  direction = 'left',
  speed = 30,
}: {
  items: string[];
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
        className={`flex flex-shrink-0 gap-8 sm:gap-12 md:gap-16 py-4 sm:py-6 items-center pr-8 sm:pr-16 ${trackClass}`}
        style={{ ['--marquee-duration-x' as string]: `${speed}s` }}
      >
        {track.map((logo, idx) => (
          <div key={`${logo}-${idx}`} className="flex justify-center items-center whitespace-nowrap">
            <span className="font-display font-bold text-lg sm:text-xl md:text-2xl text-gray-800 opacity-60 hover:opacity-100 transition-opacity cursor-default">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TrustedBy = () => {
  const row1 = logos.slice(0, 7);
  const row2 = logos.slice(7);

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
