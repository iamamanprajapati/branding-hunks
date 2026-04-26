import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import {
  BOOK_CALL_PHONE_DISPLAY,
  BOOK_CALL_TEL_HREF,
  CONTACT_EMAIL,
  CONTACT_MAILTO_HREF,
} from '../lib/contact';
import { SITE_LOGO_ALT, SITE_LOGO_SRC } from '../lib/siteBrand';

export const Footer = () => {
  return (
    <>
      <section className="bg-brand-orange py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <h2 className="font-display font-black text-xl sm:text-2xl md:text-4xl text-white max-w-3xl leading-tight text-center md:text-left">
            Let's talk about how we can <br className="hidden sm:block" />
            create visuals that actually sell!
          </h2>
          <a
            href={BOOK_CALL_TEL_HREF}
            className="inline-flex items-center justify-center bg-brand-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 whitespace-nowrap min-h-[44px]"
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
              <h3 className="text-brand-orange font-bold text-lg sm:text-xl mb-4 sm:mb-6">Address</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Office-8, 2, C Block Road, C Block, Sector 63,<br />
                Noida, Hazratpur Wajidpur, Uttar Pradesh 201309
              </p>
            </div>
            
            <div>
              <h3 className="text-brand-orange font-bold text-lg sm:text-xl mb-4 sm:mb-6">Contact</h3>
              <div className="flex flex-col gap-2 text-gray-300 text-base sm:text-lg">
                <a href={CONTACT_MAILTO_HREF} className="hover:text-white transition-colors break-all">
                  {CONTACT_EMAIL}
                </a>
                <a href={BOOK_CALL_TEL_HREF} className="hover:text-white transition-colors">
                  {BOOK_CALL_PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-brand-orange font-bold text-lg sm:text-xl mb-4 sm:mb-6">Follow</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-brand-orange transition-colors"><Instagram size={28} /></a>
                <a href="#" className="hover:text-brand-orange transition-colors"><Linkedin size={28} /></a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end md:items-center border-t border-gray-800 pt-6 sm:pt-8 gap-6 sm:gap-8">
            <div className="flex items-center">
              <img
                src={SITE_LOGO_SRC}
                alt={SITE_LOGO_ALT}
                className="h-16 w-auto sm:h-20 md:h-24 max-w-[min(400px,90vw)] object-contain object-left"
                width={400}
                height={96}
                decoding="async"
                draggable={false}
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-8 text-gray-500 text-xs sm:text-sm text-center md:text-left">
              <span>© Branding Hunks 2025 | Design Agency | All Rights Reserved</span>
              <span>website by <span className="text-gray-300 font-bold">studioARC</span></span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
