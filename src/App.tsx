/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Comparison } from './components/Comparison';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingButton } from './components/FloatingButton';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-brand-orange selection:text-white overflow-x-hidden min-w-0 max-w-[100vw]">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio />
      <Process />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingButton />
    </div>
  );
}
