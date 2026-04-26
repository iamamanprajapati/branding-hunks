export type PrefetchImageOptions = {
  /** Space out image requests so decode/network work does not hit the main thread at once. */
  staggerMs?: number;
  /**
   * When true (default), waits for idle before starting — can defer work until after first paint.
   * When false, starts on the next microtask so cached/repeat visits warm quickly while scrolling.
   */
  deferToIdle?: boolean;
};

/**
 * Warm the HTTP cache for image URLs (Image decode still happens off-thread, but many at once can contend).
 */
export function prefetchImageUrls(urls: readonly string[], options?: PrefetchImageOptions): void {
  if (typeof window === 'undefined') return;

  const unique = [...new Set(urls)];
  const staggerMs = options?.staggerMs ?? 56;
  const deferToIdle = options?.deferToIdle ?? true;

  const schedule = () => {
    unique.forEach((url, i) => {
      window.setTimeout(() => {
        const img = new Image();
        img.decoding = 'async';
        img.src = url;
      }, i * staggerMs);
    });
  };

  if (!deferToIdle) {
    queueMicrotask(schedule);
    return;
  }

  const ric = window.requestIdleCallback;
  if (typeof ric === 'function') {
    ric(() => schedule(), { timeout: 800 });
  } else {
    window.setTimeout(schedule, 0);
  }
}
