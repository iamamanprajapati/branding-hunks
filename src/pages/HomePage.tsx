import React, { useEffect } from 'react';
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
import { DEFAULT_META_DESCRIPTION, SITE_NAME, SITE_ORIGIN } from '../lib/site';
import {
  CONTACT_EMAIL,
  SOCIAL_FACEBOOK_URL,
  SOCIAL_INSTAGRAM_URL,
  SOCIAL_LINKEDIN_URL,
  SOCIAL_YOUTUBE_URL,
} from '../lib/contact';

export function HomePage() {
  usePageMeta({
    title: 'Branding Hunks — UGC Video Production & Meta Ad Creative Agency',
    description: 'Branding Hunks is the best Meta ad company and UGC video production house in India. We specialize in high-converting video editing, product photography, and Facebook & Instagram marketing reels that scale D2C brands.',
    keywords: 'video editing, UGC videos, best meta ad company, instagram marketing, facebook marketing, D2C creative agency, product photography, performance ad creatives, e-commerce growth, creative agency Noida, ad production, ad creatives',
    canonicalPath: '/',
  });

  useEffect(() => {
    const scriptId = 'homepage-jsonld';
    const existing = document.getElementById(scriptId);
    existing?.remove();

    const websiteJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_ORIGIN,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_ORIGIN}/blog?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    };

    const businessJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: SITE_NAME,
      image: `${SITE_ORIGIN}/logo.png`,
      '@id': `${SITE_ORIGIN}/#organization`,
      url: SITE_ORIGIN,
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
      sameAs: [
        SOCIAL_INSTAGRAM_URL,
        SOCIAL_YOUTUBE_URL,
        SOCIAL_FACEBOOK_URL,
        SOCIAL_LINKEDIN_URL,
      ],
    };

    const faqJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          question: 'Do you provide actors, voiceover artists, or presenters?',
          answer:
            "Yes. Whether you need a presenter, actor, model, or voiceover artist, we'll source talent that aligns with your brand personality and communicates your message effectively. We don't just pick anyone: we choose people who fit your tone, audience, and budget.",
        },
        {
          question: 'Can you shoot in our location?',
          answer:
            'Absolutely. We can travel to your location (factory, office, store) to capture authentic footage. Additional travel and logistics costs will apply.',
        },
        {
          question: 'What types of videos can you create for our business?',
          answer:
            'We create everything from product showcases, brand stories, testimonials, explainer videos, social media reels, to high-production ad films.',
        },
        {
          question: 'Can you work with our marketing or content team?',
          answer:
            'Yes, we love collaborating! We can work as an extension of your existing team to execute your vision while bringing our creative expertise to the table.',
        },
        {
          question: 'Where are you based?',
          answer: 'We are based in Noida, Uttar Pradesh, India, but we work with clients globally.',
        },
        {
          question: 'Can we get the RAW footage or images?',
          answer: 'Yes, RAW files can be provided upon request for an additional fee.',
        },
        {
          question: 'What is your typical turnaround time?',
          answer:
            'It depends on the scope of the project. Typically, photography takes 5-7 days, while video production can take 2-3 weeks from concept to final delivery.',
        },
      ].map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify([websiteJsonLd, businessJsonLd, faqJsonLd]);
    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, []);

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

