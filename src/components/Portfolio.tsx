import React, { useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '../lib/utils';
import type { GalleryPortfolioItem } from '../lib/galleryAssets';
import {
  HOME_GALLERY_MAX,
  galleryCategories,
  galleryPortfolioItems,
  homeGalleryPreviewUrls,
  pickHomeGalleryPreviewBalanced,
} from '../lib/galleryAssets';
import { prefetchImageUrls } from '../lib/prefetchImages';

const categories = galleryCategories;

const prefetchedWorkKeys = new Set<string>();

function prefetchWorkCategory(cat: string) {
  if (cat === 'All' || prefetchedWorkKeys.has(cat)) return;
  prefetchedWorkKeys.add(cat);
  const urls = galleryPortfolioItems
    .filter((item) => item.category === cat)
    .slice(0, HOME_GALLERY_MAX)
    .map((item) => item.src);
  if (urls.length) prefetchImageUrls(urls, { staggerMs: 72 });
}

const PortfolioTile = React.memo(function PortfolioTile({ item }: { item: GalleryPortfolioItem }) {
  return (
    <div className="w-full min-w-0 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group bg-gray-200 aspect-[9/16]">
      <img
        src={item.src}
        alt={item.category}
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        sizes="(max-width: 640px) 210px, 250px"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
        <span className="text-white font-bold tracking-widest uppercase text-sm bg-black/50 px-4 py-2 rounded-full">
          {item.category}
        </span>
      </div>
    </div>
  );
});

function PortfolioInner() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);
  const didPrefetchDefaultWork = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || didPrefetchDefaultWork.current) return;
        didPrefetchDefaultWork.current = true;
        prefetchImageUrls(homeGalleryPreviewUrls, { staggerMs: 52 });
        observer.disconnect();
      },
      { rootMargin: '480px 0px', threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return pickHomeGalleryPreviewBalanced(galleryPortfolioItems);
    }
    return galleryPortfolioItems
      .filter((item) => item.category === activeCategory)
      .slice(0, HOME_GALLERY_MAX);
  }, [activeCategory]);

  useEffect(() => {
    prefetchWorkCategory(activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-gray-50">
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
                type="button"
                onClick={() => setActiveCategory(cat)}
                onMouseEnter={() => prefetchWorkCategory(cat)}
                onFocus={() => prefetchWorkCategory(cat)}
                className={cn(
                  'px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 min-h-[40px] active:scale-[0.98]',
                  activeCategory === cat
                    ? 'bg-brand-orange text-white shadow-md md:scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,210px)] sm:grid-cols-[repeat(auto-fill,250px)] justify-center gap-4 sm:gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <PortfolioTile key={item.key} item={item} />
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <button
            type="button"
            className="bg-brand-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 min-h-[44px]"
          >
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}

export const Portfolio = React.memo(PortfolioInner);
