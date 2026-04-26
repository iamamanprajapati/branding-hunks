import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { BOOK_CALL_PHONE_DISPLAY, BOOK_CALL_TEL_HREF } from '../lib/contact';
import { SITE_LOGO_ALT, SITE_LOGO_SRC } from '../lib/siteBrand';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const handleScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        setScrolled(window.scrollY > 50);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-colors duration-300 pt-[env(safe-area-inset-top)]',
      scrolled ? 'bg-brand-blue/90 backdrop-blur-md' : '',
    )}>
      <div className="container relative mx-auto flex min-h-16 items-center px-4 py-4 sm:min-h-[4.5rem] sm:px-6 md:min-h-24 md:px-8">
        {/* Out of document flow so nav links / CTA can use full row width */}
        <a
          href="#"
          className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2 items-center py-1 sm:left-6 md:left-8"
        >
          <img
            src={SITE_LOGO_SRC}
            alt={SITE_LOGO_ALT}
            className="h-14 w-auto sm:h-16 md:h-24 max-w-[min(280px,58vw)] object-contain object-left md:max-w-[min(400px,45vw)]"
            width={400}
            height={96}
            decoding="async"
            draggable={false}
          />
        </a>

        <div className="flex w-full justify-end items-center">
          <div className="hidden items-center gap-8 text-white font-medium md:flex">
            <a href="#videos" className="inline-flex items-center py-1 hover:opacity-80 transition-opacity">
              Videos
            </a>
            <a href="#services" className="inline-flex items-center py-1 hover:opacity-80 transition-opacity">
              Services
            </a>
            <a href="#process" className="inline-flex items-center py-1 hover:opacity-80 transition-opacity">
              Process
            </a>
            <a href="#about" className="inline-flex items-center py-1 hover:opacity-80 transition-opacity">
              About
            </a>
            <a
              href={BOOK_CALL_TEL_HREF}
              className="inline-flex items-center justify-center bg-white text-brand-blue px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all"
              aria-label={`Book a call — ${BOOK_CALL_PHONE_DISPLAY}`}
            >
              Book a Call
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-white p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-blue border-t border-white/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden flex flex-col space-y-4 shadow-xl max-h-[calc(100dvh-4rem)] overflow-y-auto"
          >
            <a href="#videos" className="text-white font-medium text-lg" onClick={() => setIsOpen(false)}>Videos</a>
            <a href="#services" className="text-white font-medium text-lg" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#process" className="text-white font-medium text-lg" onClick={() => setIsOpen(false)}>Process</a>
            <a href="#about" className="text-white font-medium text-lg" onClick={() => setIsOpen(false)}>About</a>
            <a
              href={BOOK_CALL_TEL_HREF}
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center bg-white text-brand-blue px-6 py-3 rounded-full font-bold w-full text-center"
              aria-label={`Book a call — ${BOOK_CALL_PHONE_DISPLAY}`}
            >
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
