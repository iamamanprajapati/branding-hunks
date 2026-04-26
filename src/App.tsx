/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { heroMarqueeImageUrls } from './lib/heroAssets';
import { homeGalleryPreviewUrls } from './lib/galleryAssets';
import { prefetchImageUrls } from './lib/prefetchImages';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { PortfolioVideos } from './components/PortfolioVideos';
import { Process } from './components/Process';
import { Comparison } from './components/Comparison';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingButton } from './components/FloatingButton';

export default function App() {
  useEffect(() => {
    // Warm hero + homepage grid as soon as the app mounts so repeat visits (HTTP cache) paint without lazy “pop-in”.
    // Light stagger avoids decoding every large JPEG in the same frame on a cold load.
    prefetchImageUrls(heroMarqueeImageUrls, { deferToIdle: false, staggerMs: 28 });
    prefetchImageUrls(homeGalleryPreviewUrls, { deferToIdle: false, staggerMs: 24 });
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-brand-orange selection:text-white overflow-x-hidden min-w-0 max-w-[100vw]">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio />
      <PortfolioVideos />
      <Process />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingButton />
    </div>
  );
}
