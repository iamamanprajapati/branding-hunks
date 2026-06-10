import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  const location = useLocation();
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  // Validate the measurement ID pattern to prevent any potential script injection/XSS
  // GA4 Measurement IDs always start with "G-" followed by alphanumeric characters.
  const isValidGaId = gaId && /^G-[A-Z0-9]+$/.test(gaId);

  useEffect(() => {
    if (!isValidGaId) return;

    const scriptId = 'google-analytics-gtag';
    if (!document.getElementById(scriptId)) {
      // Create and inject the main gtag script tag
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      // Initialize the dataLayer and gtag function
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };

      window.gtag('js', new Date());
      // Initialize GA4 without sending automatically, so we can track page views manually on every transition
      window.gtag('config', gaId, { send_page_view: false });
    }
  }, [isValidGaId, gaId]);

  useEffect(() => {
    if (!isValidGaId || !window.gtag) return;

    // Track a page view manually on route change (and initial load once the component mounts and script is ready)
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title || 'Branding Hunks',
    });
  }, [location, isValidGaId]);

  return null;
}
