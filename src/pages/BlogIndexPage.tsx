import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BlogCard } from '../components/BlogCard';
import { FloatingButton } from '../components/FloatingButton';
import { BLOG_POSTS } from '../lib/blogPosts';
import { usePageMeta } from '../lib/usePageMeta';
import { BOOK_CALL_TEL_HREF, BOOK_CALL_PHONE_DISPLAY } from '../lib/contact';

export function BlogIndexPage() {
  usePageMeta({
    title: 'Blog — D2C Creative Tips & Guides',
    description:
      'Practical guides on UGC reels, product photography, Meta ads, and ecommerce creatives for Indian D2C brands. Insights from Branding Hunks.',
    canonicalPath: '/blog',
  });

  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <Navbar forceSolid />
      <header className="bg-brand-gradient pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center max-w-3xl">
          <p className="text-brand-cream/80 text-sm font-semibold uppercase tracking-widest mb-4">
            Insights for D2C brands
          </p>
          <h1 className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 sm:mb-6">
            Blog & <span className="text-brand-cream">resources</span>
          </h1>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed">
            Guides on reels, product shoots, Meta ads, and creative strategy — written for founders
            and growth teams selling in India.
          </p>
        </div>
      </header>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sorted.map((post) => (
              <div key={post.slug} className="h-full">
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 rounded-2xl bg-brand-blue text-white p-8 sm:p-10 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="font-display font-black text-xl sm:text-2xl mb-3">
              Need creatives that convert?
            </h2>
            <p className="text-white/85 mb-6 text-sm sm:text-base">
              We turn these playbooks into reels, photos, and ad sets for D2C brands every week.
            </p>
            <a
              href={BOOK_CALL_TEL_HREF}
              className="inline-flex items-center justify-center bg-white text-brand-blue px-6 py-3 rounded-lg font-bold hover:bg-brand-cream transition-colors min-h-[44px]"
              aria-label={`Book a call — ${BOOK_CALL_PHONE_DISPLAY}`}
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <p className="text-center text-sm text-gray-500 pb-8">
        <Link to="/" className="text-brand-orange font-semibold hover:underline">
          ← Back to home
        </Link>
      </p>

      <Footer />
      <FloatingButton />
    </>
  );
}
