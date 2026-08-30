"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  FileCheck2,
  HeartHandshake,
  Home,
  Hospital,
  Stethoscope,
} from "lucide-react";

export interface SupportCardItem {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
}

const supportCardsData: SupportCardItem[] = [
  {
    number: "01",
    title: "Hospital & Doctor Matchmaking",
    description:
      "We help connect you with the right hospital and doctor for your specific treatment needs.",
    icon: Hospital,
    href: "/contact",
  },
  {
    number: "02",
    title: "Care Buddy Assistance",
    description:
      "A dedicated companion who supports you throughout your entire surgical journey.",
    icon: HeartHandshake,
    href: "/contact",
  },
  {
    number: "03",
    title: "Insurance Support",
    description:
      "Assistance with insurance-related coordination, paperwork and documentation.",
    icon: FileCheck2,
    href: "/contact",
  },
  {
    number: "04",
    title: "Surgery Coordination",
    description:
      "Support across appointments, hospital coordination and surgical planning.",
    icon: CalendarCheck,
    href: "/contact",
  },
  {
    number: "05",
    title: "Second Opinion Services",
    description:
      "Get help seeking additional medical guidance before important treatment decisions.",
    icon: Stethoscope,
    href: "/contact",
  },
  {
    number: "06",
    title: "Post-Discharge Support",
    description:
      "Continued assistance and follow-up coordination after surgery and discharge.",
    icon: Home,
    href: "/contact",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f5] py-16 sm:py-20 lg:py-24 border-b border-navy/5">
      <div className="site-px w-full">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs sm:text-sm font-bold text-brand uppercase tracking-[0.2em]"
            >
              WHAT WE DO
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="mt-3 text-3xl sm:text-4xl lg:text-[44px] font-bold text-navy tracking-tight leading-[1.15]"
            >
              Complete Support <br />
              Around Your Surgery
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="max-w-md"
          >
            <p className="text-xs sm:text-sm text-[#556171] leading-relaxed font-normal">
              From choosing the right care to recovery, we coordinate the journey around you — so you can focus on healing while we handle the rest.
            </p>
          </motion.div>
        </div>

        {/* 6 Support Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 sm:mt-14 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {supportCardsData.map((card) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-[26px] bg-white p-7 sm:p-8 border border-navy/6 shadow-[0_4px_24px_rgba(2,32,112,0.03)] hover:bg-gradient-to-b hover:from-navy hover:to-[#022870] hover:border-transparent hover:shadow-[0_20px_40px_rgba(2,24,77,0.28)] transition-all duration-350 overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Circular Icon Container */}
                  <div className="flex size-13 items-center justify-center rounded-full bg-[#f0f7ff] text-brand border border-brand/10 group-hover:bg-brand/20 group-hover:text-white group-hover:border-brand/30 transition-all duration-300 shadow-sm">
                    <IconComponent size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold text-navy group-hover:text-white transition-colors duration-300 leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-[#556171] group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-8 pt-4 relative z-10">
                  <a
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand group-hover:text-[#4ade80] transition-colors duration-300"
                  >
                    <span>Book Appointment</span>
                    <ArrowUpRight className="size-4 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
