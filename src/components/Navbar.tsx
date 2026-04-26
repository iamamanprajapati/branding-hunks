import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

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
      "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 pt-[env(safe-area-inset-top)]",
      scrolled ? "bg-brand-blue/90 backdrop-blur-md pb-4" : "pb-6"
    )}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center py-4">
        <a href="#" className="flex flex-col leading-none text-white font-display font-black text-xl sm:text-2xl tracking-tighter">
          <span>BRANDING</span>
          <span>HUNKS</span>
        </a>

        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          <a href="#work" className="hover:opacity-80 transition-opacity">Work</a>
          <a href="#services" className="hover:opacity-80 transition-opacity">Services</a>
          <a href="#process" className="hover:opacity-80 transition-opacity">Process</a>
          <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
          <button className="bg-white text-brand-blue px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all">
            Book a Call
          </button>
        </div>

        <button className="md:hidden text-white p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-blue border-t border-white/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden flex flex-col space-y-4 shadow-xl max-h-[calc(100dvh-4rem)] overflow-y-auto"
          >
            <a href="#work" className="text-white font-medium text-lg" onClick={() => setIsOpen(false)}>Work</a>
            <a href="#services" className="text-white font-medium text-lg" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#process" className="text-white font-medium text-lg" onClick={() => setIsOpen(false)}>Process</a>
            <a href="#about" className="text-white font-medium text-lg" onClick={() => setIsOpen(false)}>About</a>
            <button className="bg-white text-brand-blue px-6 py-3 rounded-full font-bold w-full">
              Book a Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
