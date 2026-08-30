"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { cn } from "@/lib/utils";

const insuranceCards = [
  {
    title: "Ayushman Bharat (PMJAY)",
    description: "India's largest government health scheme. Covers up to ₹5 lakh per family per year.",
    type: "Government",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    badgeColor: "text-amber-700 bg-amber-100",
  },
  {
    title: "CGHS",
    description: "Central Government Health Scheme for central government employees and pensioners.",
    type: "Government",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    badgeColor: "text-blue-700 bg-blue-100",
  },
  {
    title: "ESI",
    description: "Employees' State Insurance for organised sector employees.",
    type: "Government",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    badgeColor: "text-emerald-700 bg-emerald-100",
  },
  {
    title: "State Schemes",
    description: "State-specific government health schemes based on eligibility.",
    type: "Government",
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-50",
    badgeColor: "text-indigo-700 bg-indigo-100",
  },
  {
    title: "Star Health Insurance",
    description: "Private health insurance with wide hospital empanelment.",
    type: "Private",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-50",
    badgeColor: "text-rose-700 bg-rose-100",
  },
  {
    title: "Max Bupa Health Insurance",
    description: "Comprehensive health plans covering major surgical procedures.",
    type: "Private",
    iconColor: "text-teal-500",
    iconBg: "bg-teal-50",
    badgeColor: "text-brand-deep bg-teal-100",
  },
  {
    title: "HDFC ERGO",
    description: "Major surgical procedures covered under most plans.",
    type: "Private",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50",
    badgeColor: "text-purple-700 bg-purple-100",
  },
  {
    title: "All Other Private Insurers",
    description: "We work with all major private insurance companies. Contact us to check your specific plan.",
    type: "Private",
    iconColor: "text-slate-500",
    iconBg: "bg-slate-50",
    badgeColor: "text-slate-700 bg-slate-100",
  },
];

const requiredDocuments = [
  "Original insurance policy document",
  "Valid photo ID (Aadhaar / PAN / Passport)",
  "Doctor's recommendation letter",
  "Diagnostic reports confirming the condition",
  "Hospital admission form",
  "Pre-authorisation letter (if required by insurer)",
];

const howWeHelp = [
  "Check your insurance eligibility before surgery",
  "Assist with pre-authorisation applications",
  "Liaise with insurer on your behalf",
  "Track claim status and follow up",
  "Handle documentation and submission",
  "Appeal rejections when possible",
];

export function PatientInsuranceSection() {
  return (
    <section className="bg-white text-navy font-sans">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Patients" },
          { label: "Insurance" },
        ]}
        title="Insurance Assistance"
        description="All major insurances and government schemes accepted. We handle the paperwork so you focus on recovery."
      />

      {/* Main Content Area */}
      <div className="site-px w-full py-16 sm:py-24">
        {/* Insurances & Schemes We Accept Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight"
          >
            Insurances & Schemes We Accept
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-sm sm:text-base text-slate-500 font-medium"
          >
            If your insurer isn&apos;t listed, contact us — we likely work with them too.
          </motion.p>
        </div>

        {/* Insurance Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insuranceCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={cn("flex size-12 items-center justify-center rounded-xl", card.iconBg)}>
                  <ShieldCheck className={cn("size-6", card.iconColor)} />
                </div>
                <div className={cn("px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full", card.badgeColor)}>
                  {card.type}
                </div>
              </div>
              <h3 className="text-base font-bold text-navy mb-2">{card.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section: Documents & How We Help */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Required Documents */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-teal-100/50 bg-[#f4fbfa] p-8 sm:p-10"
          >
            <h3 className="text-2xl font-bold text-navy mb-8">
              Required Documents
            </h3>
            <div className="space-y-4 sm:space-y-5">
              {requiredDocuments.map((doc, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Check className="size-3.5 text-brand stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 font-medium">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* How We Help + Button */}
          <div className="flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1 rounded-3xl bg-navy p-8 sm:p-10 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                How We Help
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {howWeHelp.map((help, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <Check className="mt-0.5 size-5 shrink-0 text-brand stroke-[3]" />
                    <span className="text-sm sm:text-base text-white/90 font-medium">
                      {help}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/for-patients/consultation" className="block w-full">
                <button className="w-full rounded-2xl bg-brand py-4 sm:py-5 text-sm sm:text-base font-bold text-white shadow-md hover:bg-[#0b7c72] active:scale-[0.99] transition-all duration-200">
                  Check My Insurance Coverage
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
