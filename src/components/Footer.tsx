import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import {
  BOOK_CALL_PHONE_DISPLAY,
  BOOK_CALL_SECONDARY_PHONE_DISPLAY,
  BOOK_CALL_SECONDARY_TEL_HREF,
  BOOK_CALL_TEL_HREF,
  CONTACT_EMAIL,
  CONTACT_MAILTO_HREF,
  SOCIAL_FACEBOOK_URL,
  SOCIAL_INSTAGRAM_URL,
  SOCIAL_LINKEDIN_URL,
  SOCIAL_YOUTUBE_URL,
} from '../lib/contact';
import { SITE_LOGO_ALT, SITE_LOGO_SRC } from '../lib/siteBrand';

function externalLinkProps(href: string): { target?: '_blank'; rel?: string } {
  return href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}

export const Footer = () => {
  return (
    <>
      <section className="bg-brand-gradient-cta py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <h2 className="font-display font-black text-xl sm:text-2xl md:text-4xl text-white max-w-3xl leading-tight text-center md:text-left">
            Let's talk about how we can <br className="hidden sm:block" />
            create visuals that actually sell!
          </h2>
          <a
            href={BOOK_CALL_TEL_HREF}
            className="inline-flex items-center justify-center bg-brand-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-black/90 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 whitespace-nowrap min-h-[44px]"
            aria-label={`Book a call — ${BOOK_CALL_PHONE_DISPLAY}`}
          >
            Book a Call
          </a>
        </div>
      </section>

      <footer className="bg-[#111111] text-white pt-12 sm:pt-16 md:pt-20 pb-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-20">
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">Address</h3>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                Office No. 8/2, C-4, Block-C, Rays Business Park,<br />
                Kaida Sector-63, 201309
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">Contact</h3>
              <div className="flex flex-col gap-2 text-white/90 text-base sm:text-lg">
                <a href={CONTACT_MAILTO_HREF} className="break-all underline-offset-2 hover:text-white hover:underline transition-colors">
                  {CONTACT_EMAIL}
                </a>
                <a href={BOOK_CALL_TEL_HREF} className="underline-offset-2 hover:text-white hover:underline transition-colors">
                  {BOOK_CALL_PHONE_DISPLAY}
                </a>
                <a href={BOOK_CALL_SECONDARY_TEL_HREF} className="underline-offset-2 hover:text-white hover:underline transition-colors">
                  {BOOK_CALL_SECONDARY_PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">Follow</h3>
              <div className="flex flex-wrap gap-4 text-white">
                <a
                  href={SOCIAL_INSTAGRAM_URL}
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                  {...externalLinkProps(SOCIAL_INSTAGRAM_URL)}
                >
                  <Instagram size={28} />
                </a>
                <a
                  href={SOCIAL_YOUTUBE_URL}
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label="YouTube"
                  {...externalLinkProps(SOCIAL_YOUTUBE_URL)}
                >
                  <Youtube size={28} />
                </a>
                <a
                  href={SOCIAL_FACEBOOK_URL}
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                  {...externalLinkProps(SOCIAL_FACEBOOK_URL)}
                >
                  <Facebook size={28} />
                </a>
                <a
                  href={SOCIAL_LINKEDIN_URL}
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                  {...externalLinkProps(SOCIAL_LINKEDIN_URL)}
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-gray-800 pt-8 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4 sm:pt-10">
            <div className="flex justify-center sm:justify-start">
              <img
                src={SITE_LOGO_SRC}
                alt={SITE_LOGO_ALT}
                className="h-16 w-auto max-w-[min(280px,85vw)] object-contain sm:h-20 md:h-24 md:max-w-[min(400px,40vw)]"
                width={400}
                height={96}
                decoding="async"
                draggable={false}
              />
            </div>

            <p className="text-center text-xs text-white/90 sm:text-sm sm:px-2">
              © Branding Hunks 2025 | Design Agency | All Rights Reserved
            </p>

            <div className="flex justify-end">
              <a
                href="#"
                className="text-xs text-white/90 underline-offset-2 hover:text-white hover:underline transition-colors sm:text-sm"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
