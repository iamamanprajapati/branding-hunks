const partnerLogoModules = import.meta.glob('../assets/companies_logo/*.{avif,jpeg,jpg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

function pathToAlt(path: string): string {
  const base = path.split('/').pop()?.replace(/\.[^.]+$/i, '') ?? 'Partner';
  return base.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
}

export type PartnerLogo = { src: string; alt: string };

/** Partner logos from `src/assets/companies_logo/`, sorted by filename. */
export const partnerLogos: PartnerLogo[] = Object.entries(partnerLogoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ src, alt: pathToAlt(path) }));
