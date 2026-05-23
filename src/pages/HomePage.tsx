import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustedBy } from '../components/TrustedBy';
import { Services } from '../components/Services';
import { PortfolioVideos } from '../components/PortfolioVideos';
import { Process } from '../components/Process';
import { Comparison } from '../components/Comparison';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { FloatingButton } from '../components/FloatingButton';
import { usePageMeta } from '../lib/usePageMeta';
import { DEFAULT_META_DESCRIPTION } from '../lib/site';

export function HomePage() {
  usePageMeta({
    title: 'Branding Hunks — D2C Creative Agency',
    description: DEFAULT_META_DESCRIPTION,
    canonicalPath: '/',
  });

  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <PortfolioVideos />
      <Process />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingButton />
    </>
  );
}
