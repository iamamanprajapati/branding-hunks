export type PrefetchImageOptions = {
  /** Space out image requests so decode/network work does not hit the main thread at once. */
  staggerMs?: number;
};

/**
 * Warm the HTTP cache for image URLs only (no decode()) — avoids main-thread jank from large JPEGs.
 */
export function prefetchImageUrls(urls: readonly string[], options?: PrefetchImageOptions): void {
  if (typeof window === 'undefined') return;

  const unique = [...new Set(urls)];
  const staggerMs = options?.staggerMs ?? 56;

  const schedule = () => {
    unique.forEach((url, i) => {
      window.setTimeout(() => {
        const img = new Image();
        img.decoding = 'async';
        img.src = url;
      }, i * staggerMs);
    });
  };

  const ric = window.requestIdleCallback;
  if (typeof ric === 'function') {
    ric(() => schedule(), { timeout: 3500 });
  } else {
    window.setTimeout(schedule, 300);
  }
}
