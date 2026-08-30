"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

const featuresList: FeatureItem[] = [
  {
    id: "hospitals",
    title: "15+ Multi-speciality Hospitals",
    description: "A wide network of trusted hospitals for your care.",
  },
  {
    id: "doctors",
    title: "50+ Doctors",
    description: "Access to specialist doctors across major specialties.",
  },
  {
    id: "coordination",
    title: "End-to-End Surgery Coordination",
    description: "From enquiry to recovery, we coordinate every step.",
  },
  {
    id: "care-buddy",
    title: "Care Buddy Support",
    description: "A dedicated companion throughout your surgical journey.",
  },
  {
    id: "insurance",
    title: "Insurance Assistance",
    description: "Help navigating insurance and documentation.",
  },
  {
    id: "govt-scheme",
    title: "Government Scheme Support",
    description: "Guidance with accepted government health schemes.",
  },
  {
    id: "second-opinion",
    title: "Second Opinion Services",
    description: "Additional medical guidance before key decisions.",
  },
  {
    id: "post-discharge",
    title: "Post-Discharge Support",
    description: "Continued care and follow-up after you go home.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-navy/5">
      <div className="site-px w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtitle & 2x2 Stat Cards */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold text-brand uppercase tracking-[0.2em]"
            >
              WHY AYUSHMAN SURGICARE
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-3 text-3xl sm:text-4xl lg:text-[44px] font-bold text-navy tracking-tight leading-tight"
            >
              Why Choose <br />
              Ayushman Surgicare?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-4 text-xs sm:text-sm text-[#64748b] leading-relaxed font-normal max-w-md"
            >
              Because your surgery journey deserves more than a referral. We bring coordination, trust and human support to every step.
            </motion.p>

            {/* 2x2 Stat Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl bg-[#faf9f6] p-5 border border-navy/5">
                <span className="block text-2xl sm:text-3xl font-extrabold text-navy">15+</span>
                <span className="block text-xs font-medium text-[#64748b] mt-1">Partnered Hospitals</span>
              </div>

              <div className="rounded-2xl bg-[#faf9f6] p-5 border border-navy/5">
                <span className="block text-2xl sm:text-3xl font-extrabold text-navy">50+</span>
                <span className="block text-xs font-medium text-[#64748b] mt-1">Doctors Network</span>
              </div>

              <div className="rounded-2xl bg-[#faf9f6] p-5 border border-navy/5">
                <span className="block text-2xl sm:text-3xl font-extrabold text-navy">90</span>
                <span className="block text-xs font-medium text-[#64748b] mt-1">Care Buddy Support</span>
              </div>

              <div className="rounded-2xl bg-[#faf9f6] p-5 border border-navy/5">
                <span className="block text-2xl sm:text-3xl font-extrabold text-navy">ALL</span>
                <span className="block text-xs font-medium text-[#64748b] mt-1">Insurances</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 8 Feature Cards (2 columns x 4 rows) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {featuresList.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                className="flex items-start gap-3.5 rounded-2xl p-5 border border-[#e2e8f0] bg-white transition-all duration-300 hover:border-brand/40 hover:bg-[#f0fdf4]/60 hover:shadow-md group"
              >
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand mt-0.5 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-navy tracking-tight group-hover:text-brand transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-xs text-[#64748b] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
