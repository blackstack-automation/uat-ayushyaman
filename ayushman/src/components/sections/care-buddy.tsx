"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  HeartHandshake,
  Hospital,
  MessageCircle,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface CareBuddyFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const careBuddyFeatures: CareBuddyFeature[] = [
  {
    id: "appointment-booking",
    title: "Appointment Booking",
    description: "Coordinate appointments and consultations on your behalf.",
    icon: CalendarCheck,
  },
  {
    id: "hospital-coordination",
    title: "Hospital Coordination",
    description: "Help coordinate the hospital journey from admission to discharge.",
    icon: Hospital,
  },
  {
    id: "insurance-assistance",
    title: "Insurance Assistance",
    description: "Support with insurance-related processes and documentation.",
    icon: ShieldCheck,
  },
  {
    id: "family-updates",
    title: "Family Updates",
    description: "Keep your family informed throughout the journey.",
    icon: Users,
  },
  {
    id: "discharge-assistance",
    title: "Discharge Assistance",
    description: "Support the transition home after discharge.",
    icon: HeartHandshake,
  },
  {
    id: "ongoing-support",
    title: "Ongoing Support",
    description: "Be there for you, even after recovery.",
    icon: MessageSquare,
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export function CareBuddy() {
  return (
    <section id="care-buddy" className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-28 font-sans border-b border-slate-200/60">
      {/* Background ambient patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="site-px w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Image Column */}
          <div className="lg:col-span-4 xl:col-span-4 relative h-full min-h-[460px] lg:min-h-0">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden h-full shadow-[0_15px_35px_rgba(2,32,112,0.08)] border border-white group"
            >
              <Image
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1000"
                alt="Care Buddy Compassionate Patient Support"
                fill
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />

              {/* Bottom Left Badge: "Support you can count on" */}
              <div className="absolute bottom-6 left-6 z-20 rounded-2xl bg-white px-5 py-4 shadow-xl border border-slate-100 flex items-center gap-4 max-w-[280px]">
                <div className="flex size-11 items-center justify-center rounded-full bg-teal-50 text-brand">
                  <HeartHandshake className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">Support you can count on</h4>
                  <p className="text-[10px] text-slate-500 font-medium mt-1 uppercase tracking-wider flex items-center gap-1.5">
                    <span>Before</span>
                    <span className="text-brand text-xs">•</span>
                    <span>During</span>
                    <span className="text-brand text-xs">•</span>
                    <span>After</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between h-full py-2">
            <div>
              {/* Header Row: Title & Button */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
                <div>
                  {/* Tagline Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-2 mb-3"
                  >
                    <div className="w-8 h-[2px] bg-brand"></div>
                    <span className="text-[11px] font-bold text-brand uppercase tracking-widest">
                      THE AYUSHMAN SURGICARE DIFFERENCE
                    </span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-3xl sm:text-4xl xl:text-5xl font-bold text-navy tracking-tight leading-tight"
                  >
                    Meet Your Care Buddy
                  </motion.h2>
                </div>

                {/* Top Right CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="shrink-0"
                >
                  <Link href="contact" className="inline-block">
                    <button className="flex items-center gap-2.5 rounded-xl bg-brand px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#0b7c72] active:scale-[0.98] transition-all duration-200">
                      <MessageCircle className="size-4" />
                      <span>TALK TO A CARE BUDDY</span>
                      <ArrowRight className="size-4" />
                    </button>
                  </Link>
                </motion.div>
              </div>

              {/* Subheading */}
              <motion.h3
                initial={{ opacity: 0, y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-lg sm:text-xl font-semibold text-slate-700 mb-3"
              >
                Because Surgery Is More Than Just the Operation.
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-sm text-slate-500 leading-relaxed max-w-2xl"
              >
                A Care Buddy helps patients and families navigate the practical side of the surgical journey and stays supported throughout recovery — from appointment booking to discharge and beyond.
              </motion.p>

              {/* 6 White Cards Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              >
                {careBuddyFeatures.map((feature) => {
                  const IconComp = feature.icon;
                  return (
                    <motion.div
                      key={feature.id}
                      variants={cardVariants}
                      whileHover={{ y: -4, boxShadow: "0px 10px 20px rgba(0,0,0,0.05)" }}
                      className="flex flex-col rounded-2xl bg-white p-5 border border-slate-100 shadow-[0_4px_20px_rgba(2,32,112,0.04)] transition-all duration-300 group"
                    >
                      <div className="flex size-11 items-center justify-center rounded-xl bg-slate-50 text-brand mb-4 group-hover:bg-teal-50 transition-colors">
                        <IconComp className="size-5" />
                      </div>
                      <h4 className="text-[13px] font-bold text-navy mb-1.5">
                        {feature.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Bottom Banner */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-[#eef2f6] px-6 py-4 border border-slate-200/60"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <Sparkles className="size-5 text-brand" />
                  <span className="text-xs sm:text-sm font-semibold text-navy">
                    Your Care Buddy is Just a Message Away
                  </span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-slate-300"></div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  We&apos;re here to make your journey simpler, smoother and stress-free.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
