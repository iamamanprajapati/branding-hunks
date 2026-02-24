import React from 'react';
import { Check, X } from 'lucide-react';

export const Comparison = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-black">
            What <span className="text-brand-blue">makes us</span> different
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Other Agencies */}
          <div className="bg-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-black">Other Agencies</h3>
            <ul className="space-y-4 sm:space-y-6">
              {[
                "Generic production teams with no D2C context.",
                "You do the planning, they just show up to shoot.",
                "Hidden charges & unclear scope.",
                "Outsourced freelancers and inconsistent quality.",
                "Pretty visuals that don't drive performance.",
                "You're just another client in the queue."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-brand-orange rounded-full p-1 mt-0.5 shrink-0">
                    <X size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Branding Hunks */}
          <div className="bg-brand-blue rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-xl lg:scale-[1.02] xl:scale-105 z-10">
            <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8">BRANDING HUNKS</h3>
            <ul className="space-y-4 sm:space-y-6">
              {[
                "Deep D2C experience — we understand your customer & category.",
                "We help you plan what to shoot & why — not just execute.",
                "Transparent pricing and deliverables.",
                "In-house editors, stylists, and writers.",
                "Data-backed creatives that convert.",
                "We treat your brand like our own."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5 shrink-0">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-white text-sm sm:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <button className="bg-brand-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 min-h-[44px]">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};
