/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { HomePage } from './pages/HomePage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-brand-orange selection:text-white overflow-x-hidden min-w-0 max-w-[100vw]">
      <BrowserRouter>
        <ScrollToTop />
        <GoogleAnalytics />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

