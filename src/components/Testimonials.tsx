import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '../lib/utils';

const testimonials = [
  {
    text: "We've been working with Branding Hunks for quite some time now, and they always come through for us! As a pet care brand, BearHugs constantly needs engaging and heartwarming videos to connect with pet parents, and MMM just gets it every time. Their creativity, attention to detail, and ability to bring our vision to life make the whole process effortless.",
    author: "Monuranjan",
    role: "Founder of BearHugs"
  },
  {
    text: "Branding Hunks has a great production team, we have got ugc and storytelling videos from them and they nail it every single time... MMM is one of the few agencies in Bangalore who do this.. they are also pretty flexible and accommodating which made the process easier. Loved working with Mythili and team.",
    author: "Leafy Affair",
    role: "CEO"
  },
  {
    text: "The team at Branding Hunks is exceptional. They transformed our raw ideas into a cohesive visual language that resonated perfectly with our audience. The engagement on our ads went up by 40% after we started using their creatives.",
    author: "Sarah Jenkins",
    role: "Marketing Director, GlowUp"
  }
];

// Duplicate slides so carousel has content to loop through (infinite feel)
const slides = [...testimonials, ...testimonials];
const count = testimonials.length;

export const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    duration: 25,
    startIndex: 0,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );
  // Ensure we have api before first onSelect (initial index)
  useEffect(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap() % count);
  }, [emblaApi, count]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap() % count);
  }, [emblaApi, count]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-black mb-3 sm:mb-4">
            What <span className="text-brand-blue">our clients</span> say
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            When you work with Branding Hunks, you work with a team that gets D2C. We've shot for fast-growing Indian brands, handled complex briefs, and helped products go viral.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Prev / Next buttons on both sides */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 sm:-left-2 sm:-right-2 md:-left-4 md:-right-4 z-10 pointer-events-none">
            <button
              type="button"
              onClick={scrollPrev}
              className="bg-brand-orange text-white p-3 rounded-full shadow-lg pointer-events-auto hover:bg-orange-600 active:scale-95 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="bg-brand-orange text-white p-3 rounded-full shadow-lg pointer-events-auto hover:bg-orange-600 active:scale-95 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Carousel viewport: 2 cards + gap on desktop, 1 card on mobile */}
          <div
            className="overflow-hidden mx-auto"
            style={{ maxWidth: 'min(100%, 784px)' }}
            ref={emblaRef}
          >
            <div className="flex touch-pan-y gap-6 -ml-6">
              {slides.map((t, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_85%] sm:flex-[0_0_calc(50%-12px)] min-w-0 pl-6"
                >
                  <div className="h-full flex flex-col bg-white border border-brand-orange/50 rounded-2xl p-6 sm:p-8 shadow-md min-h-[320px]">
                    <div className="flex gap-0.5 text-brand-orange mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} fill="currentColor" size={18} />
                      ))}
                    </div>
                    <p className="text-black text-sm sm:text-base leading-relaxed flex-1 mb-6 line-clamp-8">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white shrink-0">
                        <User size={24} className="text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-black">{t.author}</h4>
                        <p className="text-sm text-black/80">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollTo(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  selectedIndex === idx ? "bg-brand-orange scale-125" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
