"use client";

import { motion, type Variants } from "framer-motion";

export interface StepItem {
  stepNumber: string;
  stepLabel: string;
  title: string;
  description: string;
}

const stepsData: StepItem[] = [
  {
    stepNumber: "1",
    stepLabel: "Step 01",
    title: "Submit Enquiry",
    description:
      "Share your medical condition and preferred location through our simple form or WhatsApp.",
  },
  {
    stepNumber: "2",
    stepLabel: "Step 02",
    title: "Talk to Care Buddy",
    description:
      "Your dedicated Care Buddy connects within 30 minutes to understand your needs.",
  },
  {
    stepNumber: "3",
    stepLabel: "Step 03",
    title: "Get Hospital & Doctor Recommendations",
    description:
      "Receive a curated list of vetted hospitals and surgeons matched to your case.",
  },
  {
    stepNumber: "4",
    stepLabel: "Step 04",
    title: "Receive Cost Estimate",
    description:
      "Get transparent cost breakdowns with insurance and self-pay options.",
  },
  {
    stepNumber: "5",
    stepLabel: "Step 05",
    title: "Admission & Surgery Coordination",
    description:
      "We handle all paperwork, OT scheduling, and pre-surgical preparation.",
  },
  {
    stepNumber: "6",
    stepLabel: "Step 06",
    title: "Recovery & Follow-up Support",
    description:
      "Post-discharge care plans, check-ins, and physiotherapy coordination.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#effaf6] py-16 sm:py-20 lg:py-24 border-b border-navy/5">
      <div className="site-px w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm font-bold text-brand uppercase tracking-[0.2em]"
          >
            PATIENT JOURNEY
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-bold text-navy tracking-tight leading-tight"
          >
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-3.5 text-sm sm:text-base text-[#556171] font-normal leading-relaxed"
          >
            Six simple steps from your first enquiry to full recovery.
          </motion.p>
        </div>

        {/* Steps Grid Container */}
        <div className="relative mt-12 sm:mt-14 lg:mt-16">
          {/* Desktop Flow Connector Lines */}
          <div className="hidden lg:block absolute top-[4.2rem] left-[10%] right-[10%] h-0.5 bg-[#bce8e2] z-0 pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {stepsData.map((step) => (
              <motion.div
                key={step.stepNumber}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-[22px] bg-white p-6 sm:p-7 border border-[#e2f3ef] shadow-[0_4px_20px_rgba(2,32,112,0.03)] hover:shadow-[0_20px_40px_rgba(13,148,136,0.14)] hover:border-brand/40 transition-all duration-300 overflow-hidden"
              >
                {/* Top Gradient Highlight Bar on Hover */}
                <span className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-brand group-hover:to-navy transition-all duration-300" />

                <div>
                  {/* Step Circle Badge */}
                  <div className="flex items-center gap-3.5">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold text-lg shadow-md group-hover:scale-105 group-hover:bg-[#0b7c72] transition-all duration-300">
                      {step.stepNumber}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand uppercase tracking-wider block">
                        {step.stepLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-lg sm:text-xl font-bold text-navy group-hover:text-brand transition-colors duration-200 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-[#556171] leading-relaxed">
                    {step.description}
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
