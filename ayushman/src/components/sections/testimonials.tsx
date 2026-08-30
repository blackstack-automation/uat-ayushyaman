"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, User } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export interface TestimonialItem {
  id: string;
  quote: string;
  surgeryType: string;
  patientName: string;
  location?: string;
  storyLink?: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: "knee-replacement",
    quote:
      "From the first call to discharge, my Care Buddy made sure nothing was left to chance. I never felt alone through my knee replacement journey.",
    surgeryType: "Knee Replacement Surgery",
    patientName: "Ramesh Sharma",
    storyLink: "#",
  },
  {
    id: "hernia-surgery",
    quote:
      "They coordinated everything — the hospital, the doctor, the insurance. My family only had to focus on recovery. It was genuinely stress-free.",
    surgeryType: "Laparoscopic Hernia Surgery",
    patientName: "Priya Varma",
    storyLink: "#",
  },
  {
    id: "piles-laser",
    quote:
      "The 90-day support model is real. Even after I went home, reminders and follow-up calls kept my recovery on track. Highly recommend.",
    surgeryType: "Piles Laser Surgery",
    patientName: "Anil Kumar",
    storyLink: "#",
  },
  {
    id: "heart-surgery",
    quote:
      "From the first call to discharge, my Care Buddy made sure nothing was left to chance. I never felt alone through my heart surgery journey.",
    surgeryType: "Heart Surgery",
    patientName: "Ramesh Sharma",
    storyLink: "#",
  },
  {
    id: "eye-surgery",
    quote:
      "From the first call to discharge, my Care Buddy made sure nothing was left to chance. I never felt alone through my eye surgery journey.",
    surgeryType: "Eye Surgery",
    patientName: "Ramesh Sharma",
    storyLink: "#",
  },
  {
    id: "cataract-surgery",
    quote:
      "The procedure was completely painless and I was discharged the same evening. My vision was clear within 24 hours thanks to the expert team.",
    surgeryType: "Cataract Surgery",
    patientName: "Sunita Patel",
    storyLink: "#",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  }, []);

  // Auto-slide every 3.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Window of 3 visible card indices for desktop
  const visibleIndices = [
    currentIndex,
    (currentIndex + 1) % testimonialsData.length,
    (currentIndex + 2) % testimonialsData.length,
  ];

  return (
    <section className="relative overflow-hidden bg-[#faf9f6] py-16 sm:py-20 lg:py-24 border-b border-navy/5">
      <div className="site-px w-full">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs sm:text-sm font-bold text-brand uppercase tracking-[0.18em]"
            >
              Stories of Care
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-bold text-navy tracking-tight leading-tight"
            >
              Patients. Journeys. <br className="hidden sm:inline" />
              Stories of Care.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mt-3.5 text-xs sm:text-sm text-[#64748b] font-normal leading-relaxed"
            >
              Real recovery journeys and experiences from patients whose surgical care was coordinated through Ayushman Surgicare.
            </motion.p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="flex size-11 items-center justify-center rounded-full bg-white border border-navy/10 text-navy shadow-sm hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="flex size-11 items-center justify-center rounded-full bg-white border border-navy/10 text-navy shadow-sm hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Auto Sliding Testimonials Carousel */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-12 sm:mt-14"
        >
          {/* Desktop & Tablet Multi-Card View */}
          <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((index, idx) => {
                const item = testimonialsData[index];
                return (
                  <motion.div
                    key={`${item.id}-${index}`}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: idx * 0.04 }}
                    whileHover={{ y: -6 }}
                    className="group relative flex flex-col justify-between rounded-[24px] bg-white p-7 sm:p-8 border border-navy/6 shadow-[0_4px_20px_rgba(2,32,112,0.03)] hover:shadow-[0_20px_40px_rgba(2,132,199,0.14)] hover:border-brand/40 transition-all duration-300 overflow-hidden"
                  >
                    {/* Top Gradient Highlight Bar on Hover */}
                    <span className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-brand group-hover:to-navy transition-all duration-300" />

                    <div>
                      {/* Custom Quote Icon */}
                      <div className="mb-5">
                        <svg
                          width="36"
                          height="28"
                          viewBox="0 0 36 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-brand/70 group-hover:text-brand group-hover:scale-105 transition-all duration-300"
                        >
                          <path
                            d="M0 28V16.8C0 11.4333 1.34167 7.025 4.025 3.575C6.70833 0.125 10.45 0 15.25 0V5.6C12.45 5.6 10.2917 6.65 8.775 8.75C7.25833 10.85 6.5 13.3 6.5 16.1H15.25V28H0ZM20.75 28V16.8C20.75 11.4333 22.0917 7.025 24.775 3.575C27.4583 0.125 31.2 0 36 0V5.6C33.2 5.6 31.0417 6.65 29.525 8.75C28.0083 10.85 27.25 13.3 27.25 16.1H36V28H20.75Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>

                      {/* Quote Text */}
                      <p className="text-sm sm:text-[15px] leading-relaxed text-[#475068] font-normal group-hover:text-navy transition-colors min-h-[96px]">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Patient Info Footer */}
                    <div className="mt-8 pt-6 border-t border-navy/6">
                      <div className="flex items-center gap-3.5">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f0f7ff] text-brand border border-brand/15 group-hover:bg-gradient-to-br group-hover:from-brand group-hover:to-navy group-hover:text-white group-hover:border-brand transition-all duration-300 shadow-sm">
                          <User size={18} />
                        </div>
                        <div>
                          <span className="block text-[11px] font-medium text-[#8492a6] uppercase tracking-wider">
                            Patient story • {item.patientName}
                          </span>
                          <h4 className="text-sm font-bold text-navy group-hover:text-brand transition-colors duration-200">
                            {item.surgeryType}
                          </h4>
                        </div>
                      </div>

                      <div className="mt-4">
                        <a
                          href={item.storyLink}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy group-hover:text-brand transition-colors duration-200"
                        >
                          <span>Read story</span>
                          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Mobile Single Card View */}
          <div className="block md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialsData[currentIndex].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative flex flex-col justify-between rounded-[24px] bg-white p-7 border border-navy/6 shadow-md overflow-hidden"
              >
                <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-navy" />
                <div>
                  <div className="mb-4 text-brand">
                    <svg width="32" height="24" viewBox="0 0 36 28" fill="currentColor">
                      <path d="M0 28V16.8C0 11.4333 1.34167 7.025 4.025 3.575C6.70833 0.125 10.45 0 15.25 0V5.6C12.45 5.6 10.2917 6.65 8.775 8.75C7.25833 10.85 6.5 13.3 6.5 16.1H15.25V28H0ZM20.75 28V16.8C20.75 11.4333 22.0917 7.025 24.775 3.575C27.4583 0.125 31.2 0 36 0V5.6C33.2 5.6 31.0417 6.65 29.525 8.75C28.0083 10.85 27.25 13.3 27.25 16.1H36V28H20.75Z" />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-[#475068]">
                    &ldquo;{testimonialsData[currentIndex].quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-navy/6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <User size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-medium text-[#8492a6] uppercase tracking-wider">
                        Patient story • {testimonialsData[currentIndex].patientName}
                      </span>
                      <h4 className="text-xs font-bold text-navy">
                        {testimonialsData[currentIndex].surgeryType}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Success Stories Dark Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 rounded-[22px] bg-navy p-7 sm:p-9 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Success Stories
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-white/75 max-w-xl font-light leading-relaxed">
              A growing collection of recovery journeys coordinated through Ayushman Surgicare and the Care Buddy model.
            </p>
          </div>

          <a
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-navy hover:bg-[#f0f7ff] hover:text-brand shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore stories</span>
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
