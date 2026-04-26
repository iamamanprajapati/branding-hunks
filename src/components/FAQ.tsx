import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Do you provide actors, voiceover artists, or presenters?",
    answer: "Yes. Whether you need a presenter, actor, model, or voiceover artist, we'll source talent that aligns with your brand personality and communicates your message effectively. We don't just pick anyone: we choose people who fit your tone, audience, and budget."
  },
  {
    question: "Can you shoot in our location?",
    answer: "Absolutely. We can travel to your location (factory, office, store) to capture authentic footage. Additional travel and logistics costs will apply."
  },
  {
    question: "What types of videos can you create for our business?",
    answer: "We create everything from product showcases, brand stories, testimonials, explainer videos, social media reels, to high-production ad films."
  },
  {
    question: "Can you work with our marketing or content team?",
    answer: "Yes, we love collaborating! We can work as an extension of your existing team to execute your vision while bringing our creative expertise to the table."
  },
  {
    question: "Where are you based?",
    answer: "We are based in Noida, Uttar Pradesh, India, but we work with clients globally."
  },
  {
    question: "Can we get the RAW footage or images?",
    answer: "Yes, RAW files can be provided upon request for an additional fee."
  },
  {
    question: "What is your typical turnaround time?",
    answer: "It depends on the scope of the project. Typically, photography takes 5-7 days, while video production can take 2-3 weeks from concept to final delivery."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-brand-blue">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center gap-3 py-4 text-left focus:outline-none min-h-[44px]"
              >
                <span className="font-bold text-sm sm:text-base md:text-lg text-black">{faq.question}</span>
                {activeIndex === idx ? <ChevronUp className="text-black" /> : <ChevronDown className="text-black" />}
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
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
  );
};
