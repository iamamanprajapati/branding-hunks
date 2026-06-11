import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingButton } from '../components/FloatingButton';
import { usePageMeta } from '../lib/usePageMeta';
import { CONTACT_EMAIL } from '../lib/contact';

export function PrivacyPolicyPage() {
  usePageMeta({
    title: 'Privacy Policy — Branding Hunks',
    description: 'Privacy Policy and data protection details for clients and visitors of Branding Hunks creative agency.',
    canonicalPath: '/privacy',
  });

  return (
    <>
      <Navbar forceSolid />
      <div className="bg-white pt-28 sm:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6">
            Privacy <span className="text-brand-orange">Policy</span>
          </h1>
          <p className="text-gray-500 text-sm mb-8">Last Updated: June 11, 2026</p>

          <div className="prose prose-lg text-gray-700 space-y-6">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information you provide directly to us when booking a call, signing up for newsletters,
                or communicating with our team. This includes your name, email address, phone number, company name,
                and details about your D2C brand's creative requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use your information to provide and deliver our video editing, product photography, and marketing services;
                process payments; contact you regarding project scope; and send updates and performance marketing recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">3. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                We use cookies and web analytics tools (such as Google Analytics) to measure site traffic, check user engagement,
                and optimize landing page load times. You can disable cookies in your browser settings if preferred.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">4. Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your personal information. We do not sell, trade,
                or rent your personal details to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">5. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-orange font-semibold hover:underline">
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButton />
    </>
  );
}
