import React from 'react';
import { Asterisk } from 'lucide-react';

export const FloatingButton = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex">
      <button className="bg-[#333] hover:bg-black text-[#DFFF00] p-3 rounded-l-lg shadow-lg transition-all duration-300 group" aria-label="Special offer">
        <Asterisk size={32} className="animate-spin-slow group-hover:rotate-180 transition-transform duration-700" />
      </button>
    </div>
  );
};
