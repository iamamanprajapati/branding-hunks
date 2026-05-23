import { useEffect } from 'react';
import { DEFAULT_META_DESCRIPTION, SITE_NAME } from './site';

type PageMeta = {
  title: string;
  description?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
};

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function usePageMeta({
  title,
  description = DEFAULT_META_DESCRIPTION,
  canonicalPath,
  ogType = 'website',
}: PageMeta) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);

    if (canonicalPath) {
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const canonical = `${origin}${canonicalPath}`;
      upsertLink('canonical', canonical);
      upsertMeta('property', 'og:url', canonical);
    }
  }, [title, description, canonicalPath, ogType]);
}
