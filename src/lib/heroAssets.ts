const heroAssetModules = import.meta.glob('../assets/hero_assets/*.{jpeg,jpg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

/** Unique hero marquee image URLs, sorted by numeric filename when present. */
export const heroMarqueeImageUrls = Object.entries(heroAssetModules)
  .sort(([pathA], [pathB]) => {
    const nA = Number(pathA.match(/(\d+)\.(?:jpe?g)$/i)?.[1] ?? 0);
    const nB = Number(pathB.match(/(\d+)\.(?:jpe?g)$/i)?.[1] ?? 0);
    return nA - nB;
  })
  .map(([, url]) => url);
