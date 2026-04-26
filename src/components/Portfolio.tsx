import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

/** Homepage preview cap per section; expand on a dedicated gallery page later. */
const MAX_HOME_IMAGES = 9;

const galleryAssetModules = import.meta.glob('../assets/gallary_assets/**/*.{webp,jpeg,jpg,png}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

function folderNameToCategoryLabel(folder: string): string {
  return folder.charAt(0).toUpperCase() + folder.slice(1);
}

const portfolioItems = Object.entries(galleryAssetModules)
  .map(([path, src]) => {
    const match = path.match(/gallary_assets\/([^/]+)\//);
    const folder = match?.[1];
    if (!folder) return null;
    return {
      key: path,
      src,
      category: folderNameToCategoryLabel(folder),
    };
  })
  .filter((item): item is { key: string; src: string; category: string } => item !== null)
  .sort((a, b) => {
    const byCat = a.category.localeCompare(b.category);
    if (byCat !== 0) return byCat;
    return a.key.localeCompare(b.key);
  });

const categories = [
  'All',
  ...Array.from(new Set(portfolioItems.map((item) => item.category))).sort((a, b) =>
    a.localeCompare(b),
  ),
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    const list =
      activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory);
    return list.slice(0, MAX_HOME_IMAGES);
  }, [activeCategory]);

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

        <div className="grid grid-cols-[repeat(auto-fill,210px)] sm:grid-cols-[repeat(auto-fill,250px)] justify-center gap-4 sm:gap-6 md:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.key}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full min-w-0 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative group bg-gray-200 aspect-[9/16]"
              >
                <img
                  src={item.src}
                  alt={item.category}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
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
