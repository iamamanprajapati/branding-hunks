import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BlogArticle } from '../components/BlogArticle';
import { BlogCard } from '../components/BlogCard';
import { FloatingButton } from '../components/FloatingButton';
import {
  formatPostDate,
  getPostBySlug,
  getRelatedPosts,
} from '../lib/blogPosts';
import { usePageMeta } from '../lib/usePageMeta';
import { SITE_NAME, SITE_ORIGIN } from '../lib/site';
import { BOOK_CALL_TEL_HREF, BOOK_CALL_PHONE_DISPLAY } from '../lib/contact';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  usePageMeta({
    title: post ? post.title : 'Article not found',
    description: post?.description ?? '',
    canonicalPath: post ? `/blog/${post.slug}` : undefined,
    ogType: 'article',
  });

  useEffect(() => {
    if (!post) return;

    const scriptId = 'blog-article-jsonld';
    const existing = document.getElementById(scriptId);
    existing?.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      author: { '@type': 'Organization', name: SITE_NAME },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
      mainEntityOfPage: `${SITE_ORIGIN}/blog/${post.slug}`,
    };

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = getRelatedPosts(post.slug, 3);

  return (
    <>
      <Navbar forceSolid />
      <div className="bg-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={18} aria-hidden />
            All articles
          </Link>

          <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-gray-900 mt-3 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-100">
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span className="inline-flex items-center gap-1">
              <Clock size={14} aria-hidden />
              {post.readTimeMinutes} min read
            </span>
          </div>

          <BlogArticle blocks={post.blocks} />

          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
              >
                <Tag size={12} aria-hidden />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-brand-gradient-cta p-8 sm:p-10 text-center text-white">
            <h2 className="font-display font-black text-xl sm:text-2xl mb-3">
              Ready to shoot your next campaign?
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-6 max-w-md mx-auto">
              Book a call with Branding Hunks — we plan, shoot, and deliver D2C-ready visuals from
              Noida for brands across India.
            </p>
            <a
              href={BOOK_CALL_TEL_HREF}
              className="inline-flex items-center justify-center bg-brand-dark text-white px-6 py-3 rounded-lg font-bold hover:bg-black/90 transition-colors min-h-[44px]"
              aria-label={`Book a call — ${BOOK_CALL_PHONE_DISPLAY}`}
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="font-display font-black text-xl sm:text-2xl text-center mb-8 sm:mb-10">
              More <span className="text-brand-orange">articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {related.map((r) => (
                <div key={r.slug} className="h-full">
                  <BlogCard post={r} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingButton />
    </>
  );
}
