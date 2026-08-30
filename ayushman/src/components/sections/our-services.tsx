"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BadgePercent,
  Car,
  CheckCircle2,
  FileText,
  HeartHandshake,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  highlights: string[];
  href: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "doctor-consultation",
    title: "Free Doctor Consultation",
    description:
      "Connect with highly experienced surgical specialists in your city for accurate diagnosis and personalized treatment plans.",
    icon: Stethoscope,
    highlights: ["Top-rated Surgeons", "Zero Booking Fee", "Second Opinion Assistance"],
    href: "/contact",
  },
  {
    id: "care-coordinator",
    title: "Dedicated Care Assistant",
    description:
      "A personal care coordinator is assigned to handle hospital admissions, diagnostic scheduling, and paperwork for you.",
    icon: HeartHandshake,
    highlights: ["24/7 Personal Guidance", "Hassle-Free Admission", "Family Support"],
    href: "/contact",
  },
  {
    id: "cashless-insurance",
    title: "100% Cashless Insurance",
    description:
      "Complete insurance approval assistance with 30+ leading health insurance providers and TPA networks.",
    icon: FileText,
    highlights: ["Fast Claim Approval", "Paperwork Assistance", "Pre-authorization Support"],
    href: "/contact",
  },
  {
    id: "advanced-surgery",
    title: "Laser & Laparoscopic Surgery",
    description:
      "USFDA-approved US-grade minimally invasive surgical procedures ensuring minimal pain, no scars, and rapid recovery.",
    icon: Sparkles,
    highlights: ["Day-Care Procedures", "Minimal Pain & Blood Loss", "Discharge in 24 Hours"],
    href: "/contact",
  },
  {
    id: "no-cost-emi",
    title: "No-Cost EMI Options",
    description:
      "Flexible 0% interest monthly payment options so financial constraints never delay your critical healthcare needs.",
    icon: BadgePercent,
    highlights: ["0% Interest Rate", "Flexible Tenure", "Quick Documentation"],
    href: "/contact",
  },
  {
    id: "cab-facility",
    title: "Free Pick-up & Drop Facility",
    description:
      "Complimentary pick-up and drop service on the day of surgery to make your hospital commute completely stress-free.",
    icon: Car,
    highlights: ["Sanitized Cabs", "Doorstep Pickup", "Patient & Attendant Comfort"],
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
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export function OurServices() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-navy/5">
      {/* Decorative subtle background elements */}
      <div className="pointer-events-none absolute -left-20 top-1/4 size-80 rounded-full bg-brand/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 size-80 rounded-full bg-navy/5 blur-3xl" />

      <div className="site-px w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#f0f7ff] px-4 py-1.5 text-xs font-bold text-brand uppercase tracking-wider border border-brand/15"
          >
            <Sparkles className="size-3.5 text-brand" />
            <span>Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-2xl sm:text-3xl lg:text-[36px] font-bold text-navy tracking-tight leading-tight"
          >
            Comprehensive Care <span className="text-brand">Designed Around You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-3.5 text-sm sm:text-base text-[#556171] font-normal leading-relaxed"
          >
            From doctor consultations to seamless hospital admissions, insurance approvals, and post-surgery care — we handle everything for your peace of mind.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 sm:mt-14 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#fafbfc] p-6 sm:p-7 border border-navy/8 shadow-[0_4px_20px_rgba(2,32,112,0.03)] hover:shadow-[0_20px_40px_rgba(2,132,199,0.14)] hover:border-brand/40 hover:bg-white transition-all duration-300 overflow-hidden"
              >
                {/* Top Gradient Highlight Bar on Hover */}
                <span className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-brand group-hover:to-navy transition-all duration-300" />

                <div>
                  {/* Icon & Title Header */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#f0f7ff] text-brand group-hover:bg-gradient-to-br group-hover:from-brand group-hover:to-navy group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                      <IconComponent size={28} />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg sm:text-xl font-bold text-navy group-hover:text-brand transition-colors duration-200 leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-[#556171] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-5 space-y-2 border-t border-navy/5 pt-4">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-navy/80 group-hover:text-navy transition-colors">
                        <CheckCircle2 className="size-4 shrink-0 text-brand group-hover:scale-110 transition-transform" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action Link */}
                <div className="mt-6 pt-4 border-t border-navy/5">
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand group-hover:text-navy transition-colors duration-200"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="size-4 transition-transform duration-250 group-hover:translate-x-1" />
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
