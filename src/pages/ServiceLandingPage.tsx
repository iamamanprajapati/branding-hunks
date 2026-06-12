import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, MessageSquare, MapPin, ChevronDown, ChevronUp, Asterisk } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingButton } from '../components/FloatingButton';
import { usePageMeta } from '../lib/usePageMeta';
import { SITE_NAME, SITE_ORIGIN } from '../lib/site';
import {
  BOOK_CALL_PHONE_DISPLAY,
  BOOK_CALL_TEL_HREF,
  BOOK_CALL_SECONDARY_PHONE_DISPLAY,
  BOOK_CALL_SECONDARY_TEL_HREF,
  CONTACT_EMAIL,
  CONTACT_MAILTO_HREF,
} from '../lib/contact';
import { getLandingPageBySlug, getRelatedLandingPages } from '../lib/landingPages';
import { youtubeShortEmbedSrc, youtubeShortPosterSrc } from '../lib/youtubeShorts';

export function ServiceLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const pageData = slug ? getLandingPageBySlug(slug) : undefined;

  // Re-route to home if slug doesn't exist
  useEffect(() => {
    if (!pageData) {
      navigate('/', { replace: true });
    }
  }, [pageData, navigate]);

  // Collapsible FAQ state
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // Schema Markup injection
  useEffect(() => {
    if (!pageData) return;

    const scriptId = 'landing-page-jsonld';
    const existing = document.getElementById(scriptId);
    existing?.remove();

    const localBusinessJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: `${SITE_NAME} - ${pageData.keyword}`,
      image: `${SITE_ORIGIN}/logo.png`,
      '@id': `${SITE_ORIGIN}/services/${pageData.slug}#organization`,
      url: `${SITE_ORIGIN}/services/${pageData.slug}`,
      telephone: '+918683016562',
      email: CONTACT_EMAIL,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office No. 8/2, C-4, Block-C, Rays Business Park, Sector-63',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201309',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.6173,
        longitude: 77.3806,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    };

    const serviceJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: pageData.keyword,
      provider: {
        '@type': 'LocalBusiness',
        name: SITE_NAME,
        image: `${SITE_ORIGIN}/logo.png`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Office No. 8/2, C-4, Block-C, Rays Business Park, Sector-63',
          addressLocality: 'Noida',
          addressRegion: 'Uttar Pradesh',
          postalCode: '201309',
          addressCountry: 'IN',
        }
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Noida' },
        { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
        { '@type': 'AdministrativeArea', name: 'Gurgaon' },
        { '@type': 'AdministrativeArea', name: 'Ghaziabad' }
      ],
      description: pageData.description
    };

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify([localBusinessJsonLd, serviceJsonLd]);
    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [pageData]);

  if (!pageData) {
    return null;
  }

  // Dynamic meta tags using existing usePageMeta hook
  usePageMeta({
    title: pageData.title,
    description: pageData.description,
    canonicalPath: `/services/${pageData.slug}`,
    keywords: `${pageData.keyword.toLowerCase()}, video production Noida, D2C video agency Noida, professional editing, Branding Hunks services`,
  });

  const relatedPages = getRelatedLandingPages(pageData.slug, 5);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Header Section */}
      <section className="bg-brand-gradient pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 flex items-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center max-w-4xl">
          <p className="text-brand-cream/80 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
            {pageData.category}
          </p>
          <h1 className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-4 sm:mb-6">
            {pageData.keyword}
          </h1>
          <p className="text-white/95 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            {pageData.introText}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={BOOK_CALL_TEL_HREF}
              className="inline-flex items-center justify-center bg-brand-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 min-h-[44px]"
            >
              Get Free Quote
            </a>
            <a
              href="https://wa.me/918683016562"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 min-h-[44px] gap-2"
            >
              <MessageSquare size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Strip Section */}
      <section className="py-8 bg-brand-dark text-white border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {pageData.benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 px-4">
              <Asterisk className="text-brand-orange animate-spin-slow" size={24} />
              <p className="text-brand-cream font-medium text-sm sm:text-base">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Long-form Copy Content Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
          <div className="prose prose-lg prose-invert max-w-none text-gray-700 space-y-6">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-black border-l-4 border-brand-orange pl-4">
              Tailored Visual Funnels for Noida Brands
            </h2>
            <p className="leading-relaxed text-base sm:text-lg">
              {pageData.detailedText}
            </p>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-black border-l-4 border-brand-orange pl-4 pt-6">
              Why Partner with Branding Hunks in Noida?
            </h2>
            <p className="leading-relaxed text-base sm:text-lg">
              {pageData.whyUsText}
            </p>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-black border-l-4 border-brand-orange pl-4 pt-6">
              Our Step-by-Step Production Process
            </h2>
            <p className="leading-relaxed text-base sm:text-lg">
              {pageData.processText}
            </p>
          </div>
        </div>
      </section>

      {/* Video Portfolio Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-black mb-3">
              Our <span className="text-brand-orange">Work Showcase</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              Explore dynamic short-form and performance video reels created by our expert team.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-center max-w-5xl mx-auto">
            {pageData.portfolioIds.map((id) => {
              const embedSrc = youtubeShortEmbedSrc(id);
              return (
                <div key={id} className="relative w-full aspect-[9/16] overflow-hidden bg-neutral-900 shadow-xl rounded-xl border border-gray-200">
                  <iframe
                    src={embedSrc}
                    title="Work Showcase Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full pointer-events-none select-none"
                    style={{ border: 0 }}
                  />
                  <div className="absolute inset-0 z-10 cursor-default" aria-hidden />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Map & Contact Block */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Contact Details Card */}
            <div className="bg-brand-dark text-white p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-2xl" />
              <h2 className="font-display font-black text-2xl sm:text-3xl mb-6 relative z-10">
                Book a Free <span className="text-brand-orange font-bold">Strategy Call</span>
              </h2>
              <p className="text-white/80 text-sm sm:text-base mb-8 relative z-10">
                Ready to elevate your visual marketing? Let's discuss how our local video experts can scale your conversion rates.
              </p>

              <div className="space-y-6 relative z-10">
                <a
                  href={BOOK_CALL_TEL_HREF}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange/20 transition-colors">
                    <Phone size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Primary Contact Line</p>
                    <p className="font-bold text-base sm:text-lg">{BOOK_CALL_PHONE_DISPLAY}</p>
                  </div>
                </a>

                <a
                  href={BOOK_CALL_SECONDARY_TEL_HREF}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange/20 transition-colors">
                    <Phone size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Secondary Contact Line</p>
                    <p className="font-bold text-base sm:text-lg">{BOOK_CALL_SECONDARY_PHONE_DISPLAY}</p>
                  </div>
                </a>

                <a
                  href={CONTACT_MAILTO_HREF}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange/20 transition-colors">
                    <Mail size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Send an Email</p>
                    <p className="font-bold text-base sm:text-lg break-all">{CONTACT_EMAIL}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-orange/10 rounded-lg">
                    <MapPin size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Studio Address</p>
                    <p className="font-bold text-sm sm:text-base">
                      Rays Business Park, C-4, Block-C, Sector-63, Noida
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Google Map iframe */}
            <div className="w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.6039269424374!2d77.3806069696161!3d28.617300475753005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0032723655%3A0xbb73f44398db2e5b!2sBranding%20hunks!5e0!3m2!1sen!2sin!4v1781277211273!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Google Map - ${SITE_NAME} Noida Sector 63`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-black">
              Frequently Asked <span className="text-brand-orange">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-4 bg-white px-6 py-2 rounded-xl shadow-sm">
                <button
                  onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center gap-3 py-4 text-left focus:outline-none min-h-[44px]"
                >
                  <span className="font-bold text-sm sm:text-base md:text-lg text-black">{faq.question}</span>
                  {activeFaqIndex === idx ? <ChevronUp className="text-black" /> : <ChevronDown className="text-black" />}
                </button>
                <AnimatePresence>
                  {activeFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed pb-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Backlinks Directory Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl text-center">
          <h3 className="font-display font-black text-xl sm:text-2xl text-black mb-6">
            Explore Other Service Specializations & Locations
          </h3>
          <p className="text-gray-500 text-sm sm:text-base mb-8">
            Click on any of our other landing pages to learn about specialized formats, location shoots, and agency-grade editing structures in Delhi NCR.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedPages.map((page) => (
              <Link
                key={page.slug}
                to={`/services/${page.slug}`}
                className="bg-gray-100 hover:bg-brand-orange hover:text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-700 transition-colors shadow-sm"
              >
                {page.keyword}
              </Link>
            ))}
            <Link
              to="/"
              className="bg-brand-dark hover:bg-brand-orange text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              Main Homepage
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButton />
    </div>
  );
}
