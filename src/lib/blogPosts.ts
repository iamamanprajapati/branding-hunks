export type { BlogBlock, BlogPost } from './blog/types';

import type { BlogPost } from './blog/types';
import { postUgcReels } from './blog/post-ugc-reels';
import { postAmazonPhotography } from './blog/post-amazon-photography';
import { postCreativeBrief } from './blog/post-creative-brief';
import { postMetaAds } from './blog/post-meta-ads';
import { postAgencyComparison } from './blog/post-agency-comparison';
import { postWhatsappCatalog } from './blog/post-whatsapp-catalog';

export const BLOG_POSTS: BlogPost[] = [
  postUgcReels,
  postAmazonPhotography,
  postCreativeBrief,
  postMetaAds,
  postAgencyComparison,
  postWhatsappCatalog,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return BLOG_POSTS.slice(0, limit);
  return BLOG_POSTS.filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit)
    .concat(BLOG_POSTS.filter((p) => p.slug !== slug && p.category !== current.category))
    .slice(0, limit);
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
