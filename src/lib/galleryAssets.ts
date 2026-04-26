const galleryAssetModules = import.meta.glob('../assets/gallary_assets/**/*.{webp,jpeg,jpg,png}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

function folderNameToCategoryLabel(folder: string): string {
  return folder.charAt(0).toUpperCase() + folder.slice(1);
}

export type GalleryPortfolioItem = {
  key: string;
  src: string;
  category: string;
};

/** Homepage work grid — keep in sync with `Portfolio.tsx` caps. */
export const HOME_GALLERY_MAX = 12;
export const HOME_GALLERY_MIN_PER_CATEGORY = 2;

export function pickHomeGalleryPreviewBalanced(
  items: GalleryPortfolioItem[],
  maxTotal: number = HOME_GALLERY_MAX,
  minPerCategory: number = HOME_GALLERY_MIN_PER_CATEGORY,
): GalleryPortfolioItem[] {
  const categoryOrder = Array.from(new Set(items.map((i) => i.category))).sort((a, b) =>
    a.localeCompare(b),
  );

  const byCategory = new Map<string, GalleryPortfolioItem[]>();
  for (const cat of categoryOrder) {
    byCategory.set(
      cat,
      items.filter((i) => i.category === cat),
    );
  }

  const picked: GalleryPortfolioItem[] = [];
  const used = new Set<string>();

  for (const cat of categoryOrder) {
    const list = byCategory.get(cat) ?? [];
    const take = Math.min(minPerCategory, list.length);
    for (let i = 0; i < take; i++) {
      picked.push(list[i]);
      used.add(list[i].key);
    }
  }

  if (picked.length >= maxTotal) {
    return picked.slice(0, maxTotal);
  }

  for (const item of items) {
    if (picked.length >= maxTotal) break;
    if (!used.has(item.key)) {
      picked.push(item);
      used.add(item.key);
    }
  }

  return picked;
}

export const galleryPortfolioItems: GalleryPortfolioItem[] = Object.entries(galleryAssetModules)
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
  .filter((item): item is GalleryPortfolioItem => item !== null)
  .sort((a, b) => {
    const byCat = a.category.localeCompare(b.category);
    if (byCat !== 0) return byCat;
    return a.key.localeCompare(b.key);
  });

/** All gallery image URLs — use for a future full gallery page. */
export const galleryImageUrls = galleryPortfolioItems.map((item) => item.src);

/** URLs shown on the homepage for the default “All” filter (balanced preview). */
export const homeGalleryPreviewUrls = pickHomeGalleryPreviewBalanced(galleryPortfolioItems).map(
  (item) => item.src,
);

export const galleryCategories = [
  'All',
  ...Array.from(new Set(galleryPortfolioItems.map((item) => item.category))).sort((a, b) =>
    a.localeCompare(b),
  ),
];
