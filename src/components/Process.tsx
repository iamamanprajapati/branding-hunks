import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const steps = [
  {
    id: "01",
    title: "Understand",
    description: "We deep-dive into your brand, product and target customer to define the creative brief and conversion goal.",
    videoId: "x1WMLywZWGM"
  },
  {
    id: "02",
    title: "Create",
    description: "Our creative team brainstorms concepts, storyboards, and mood boards tailored to your brand identity.",
    videoId: "9oBThSPGiHg"
  },
  {
    id: "03",
    title: "Approve",
    description: "We present the concepts for your feedback and approval before moving to production.",
    videoId: "N2HDqvGbnz8"
  },
  {
    id: "04",
    title: "Shoot",
    description: "Our production team handles everything from casting to location scouting and the actual shoot.",
    videoId: "fGxEZkpH8sw"
  },
  {
    id: "05",
    title: "Edit",
    description: "Post-production magic happens here. Editing, color grading, sound design, and graphics.",
    videoId: "S3fnBU5CKik"
  },
  {
    id: "06",
    title: "Refine",
    description: "We deliver the assets and make necessary refinements based on your feedback.",
    videoId: "het26ww6bIE"
  }
];

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">Our Process</h2>
          <p className="text-white/80 text-base">Every detail — from lighting to copy — is designed to deliver results.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 lg:gap-16 items-start">
          <div className="space-y-4 sm:space-y-8">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="cursor-pointer group min-h-[44px] flex flex-col justify-center"
                onClick={() => setActiveStep(idx)}
              >
                <div className="flex items-baseline gap-4 sm:gap-6 mb-2 sm:mb-4">
                  <span className={cn(
                    "font-mono text-base sm:text-lg font-bold transition-colors duration-300 shrink-0",
                    activeStep === idx ? "text-brand-orange" : "text-white/40 group-hover:text-white/60"
                  )}>
                    {step.id}
                  </span>
                  <h3 className={cn(
                    "font-display font-bold text-lg sm:text-xl md:text-2xl transition-colors duration-300",
                    activeStep === idx ? "text-white" : "text-white/40 group-hover:text-white/60"
                  )}>
                    {step.title}
                  </h3>
                </div>
                
                <AnimatePresence mode="wait">
                  {activeStep === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/80 text-sm sm:text-base pl-0 sm:pl-12 pb-4 sm:pb-8 max-w-md">
                        {step.description}
                      </p>
                      <motion.div 
                        className="h-1 bg-white w-24 ml-0 sm:ml-12 rounded-full"
                        layoutId="underline"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {activeStep !== idx && (
                  <div className="h-[1px] bg-white/10 w-full ml-0 sm:ml-12" />
                )}
              </div>
            ))}
          </div>

          <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-black mt-6 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${steps[activeStep].videoId}?autoplay=1&mute=1&loop=1&playlist=${steps[activeStep].videoId}&controls=0&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`}
                  title={steps[activeStep].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full pointer-events-none select-none"
                  style={{ border: 0 }}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 z-10 pointer-events-auto cursor-default" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
