import React from 'react';
import { Camera, Video, User, Users, Megaphone, Mic, PlayCircle, Film, Box, MessageSquare } from 'lucide-react';

const services = [
  { icon: Camera, title: "Product photography" },
  { icon: Video, title: "Product videos" },
  { icon: User, title: "Model images & videos" },
  { icon: Users, title: "UGC Videos" },
  { icon: Megaphone, title: "Campaign shoots" },
  { icon: Film, title: "Brand story videos" },
  { icon: Mic, title: "Podcast style videos" },
  { icon: PlayCircle, title: "Reels" },
  { icon: Camera, title: "Hook based videos for A/B Testing" },
  { icon: Film, title: "Ad films" },
  { icon: Box, title: "Product launch photos" },
  { icon: MessageSquare, title: "Testimonial Videos" },
];

export const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-black mb-3 sm:mb-4">
            What <span className="text-brand-blue">We Can Do</span> For You
          </h2>
          <p className="text-gray-500 text-base">
            Any visual your D2C brand needs — we make it. Images, videos, ads, everything.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-xl transition-colors group cursor-default min-h-[56px]">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shrink-0">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-gray-900">{service.title}</h3>
            </div>
          ))}
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
