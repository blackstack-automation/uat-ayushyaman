"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronDown, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { AskAiCard } from "@/components/ui/ask-ai-card";
import {
  TreatmentBlogs,
  TreatmentTestimonials,
} from "@/components/sections/treatment/treatment-extras";
import type { BlogPost } from "@/lib/blog";
import type { TreatmentFaq, Testimonial } from "@/lib/treatments";

export interface TreatmentTemplateProps {
  specialty: { label: string; href?: string };
  title: string;
  overview?: string[];
  commonSigns?: string[];
  faqs?: TreatmentFaq[];
  testimonials?: Testimonial[];
  relatedPosts?: BlogPost[];
}

const defaultFaqs: TreatmentFaq[] = [
  {
    question: "How long does the procedure take?",
    answer:
      "It depends on the specific procedure, but most minimally invasive surgeries take between 30 minutes and 2 hours. Your surgeon will give you a precise timeline at your consultation.",
  },
  {
    question: "What is the recovery time?",
    answer:
      "Recovery varies by procedure. Many patients go home the same day or within 24 hours, with a return to routine activities in 1 to 4 weeks.",
  },
  {
    question: "Is the surgery covered under Ayushman Bharat?",
    answer:
      "Many of our procedures are covered under Ayushman Bharat (PMJAY) and major private insurance schemes. Your Care Buddy will help you check your eligibility and handle the cashless paperwork.",
  },
];

const defaultSigns = [
  "Persistent pain or discomfort",
  "Difficulty with daily activities",
  "Bleeding or unusual discharge",
  "Swelling or a visible lump",
  "Symptoms that keep returning",
  "No lasting relief from medication",
];

export function TreatmentTemplate({
  specialty,
  title,
  overview,
  commonSigns = defaultSigns,
  faqs = defaultFaqs,
  testimonials = [],
  relatedPosts = [],
}: TreatmentTemplateProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    condition: "",
    location: "",
    insuranceStatus: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-white text-navy font-sans">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: specialty.label, href: specialty.href },
          { label: title },
        ]}
        title={title}
        description="Talk to a specialist, not a call centre. Leave your details and a care coordinator will arrange your consultation, estimate and hospital coordination."
        aside={
          <AskAiCard
            line="Not ready to talk to us yet? Ask ChatGPT for a plain-language summary of this treatment, then come back whenever you feel comfortable. We're here — always, and anytime."
            prompt={`I'm on the Ayushman Surgicare website reading about "${title}". Give me a clear, plain-language summary of what this treatment involves, how recovery usually goes, and the questions I should ask a surgeon before deciding.`}
            cta="Ask ChatGPT about this"
          />
        }
      />

      {/* Main Content Area */}
      <div className="site-px w-full py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start relative">
          {/* Left Column: Long Form Content */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8 sm:space-y-10 text-slate-600 text-sm sm:text-base leading-relaxed">
            {/* Top Text Content */}
            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-navy tracking-tight mb-4 sm:mb-6">
                Understanding {title}
              </h2>

              {overview && overview.length > 0 ? (
                overview.map((para, i) => (
                  <p key={i} className={i < overview.length - 1 ? "mb-4" : undefined}>
                    {para}
                  </p>
                ))
              ) : (
                <>
                  <p className="mb-4">
                    Care Buddy assigns you a dedicated surgical coordinator who is your single point of contact from the moment you book your surgery. They handle everything so you can focus on recovering.
                  </p>
                  <p className="mb-4">
                    Unlike standard hospital discharge follow-ups, Care Buddy stays with you for a full 90 days — ensuring nothing falls through the cracks and that your recovery stays on track.
                  </p>
                </>
              )}
            </div>

            {/* Common Signs Grid */}
            <div className="p-6 sm:p-8 bg-[#fdfdfd] border border-slate-100 rounded-3xl shadow-sm">
              <h3 className="text-navy font-bold mb-2 text-lg">Common Symptoms</h3>
              <p className="mb-6 sm:mb-8 text-sm text-slate-500">
                If you have one or more of these, it&apos;s worth speaking to a specialist.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6 sm:gap-4 text-center text-xs font-medium text-brand">
                {commonSigns.map((sign, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3">
                    <div className="size-12 rounded-full bg-brand/10 flex items-center justify-center border border-brand/15 text-brand">
                      <Check className="size-5" />
                    </div>
                    <span className="text-slate-600">{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4">
                Our specialists use the latest minimally invasive techniques wherever possible — smaller incisions, less bleeding and a faster return to daily life.
              </p>
              <p>
                Every patient has a full pre-surgical evaluation to decide the most effective approach, and a multidisciplinary team supports your health before, during and after the procedure.
              </p>
            </div>

            {/* Treatment Journey Block */}
            <div className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl">
              <h3 className="text-lg sm:text-xl font-bold text-navy mb-5 sm:mb-6">
                Treatment Journey
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-4 text-[13px] sm:text-sm font-semibold text-navy">
                {["Consultation", "Diagnostics", "Hospital", "Surgery", "Discharge", "Recovery"].map(
                  (step, idx, arr) => (
                    <div key={step} className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-white text-xs">
                          {idx + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                      {idx < arr.length - 1 && (
                        <ChevronRight className="hidden sm:block size-4 text-slate-300 ml-2 sm:ml-4" />
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* 90-Day Care Buddy Support Block */}
            <div className="bg-navy rounded-3xl p-6 sm:p-10 text-white flex flex-col sm:flex-row gap-5 sm:gap-8 items-start shadow-xl">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                <ShieldCheck className="size-7 text-[#2dd4bf]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">90-Day Care Buddy Support</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-5">
                  Your dedicated coordinator guides you through every milestone — Day 0–7 recovery monitoring, Week 2–4 physiotherapy, Month 2 check-in, and Day 90 sign-off.
                </p>
                <Link
                  href="/#care-buddy"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#2dd4bf] hover:text-white transition-colors"
                >
                  Learn about Care Buddy <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="pt-2 sm:pt-6">
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-6 sm:mb-8">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between gap-3 p-5 sm:p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-navy text-sm sm:text-base pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`size-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 sm:p-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Consultation Form */}
          <div className="order-first lg:order-none lg:col-span-5 xl:col-span-4 relative h-full">
            <div className="lg:sticky lg:top-28 w-full transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl bg-white p-6 sm:p-7 border border-slate-200/60 shadow-[0_20px_40px_rgba(2,32,112,0.06)]"
              >
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-navy">Book Free Consultation</h2>
                  <p className="mt-1.5 text-xs text-slate-500 font-medium">
                    No charges, no obligations.
                  </p>
                </div>

                {submitted ? (
                  <div className="rounded-2xl bg-brand/5 border border-brand/20 p-6 text-center">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand text-white">
                      <Check className="size-6 stroke-[3]" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-navy">Request Received!</h3>
                    <p className="mt-1 text-xs text-slate-600">
                      Our coordinator will call you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all shadow-sm"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all shadow-sm"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Medical Condition"
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      className="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all shadow-sm"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Preferred Location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all shadow-sm"
                    />
                    <select
                      required
                      value={formData.insuranceStatus}
                      onChange={(e) =>
                        setFormData({ ...formData, insuranceStatus: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all shadow-sm invalid:text-slate-400"
                    >
                      <option value="" disabled hidden>
                        Insurance Status
                      </option>
                      <option value="insured" className="text-navy">
                        Yes, I have insurance
                      </option>
                      <option value="uninsured" className="text-navy">
                        No, I do not have insurance
                      </option>
                      <option value="unsure" className="text-navy">
                        I am not sure
                      </option>
                    </select>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-brand py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-deep active:scale-[0.99] transition-all duration-200 mt-2"
                    >
                      Book Consultation
                    </button>
                  </form>
                )}

                {/* Info Ticks */}
                <div className="mt-6 space-y-2.5">
                  {[
                    "Free consultation, no hidden charges",
                    "We call back within 2 hours",
                    "Insurance eligibility check included",
                  ].map((tick) => (
                    <div key={tick} className="flex items-center gap-2">
                      <Check className="size-4 text-brand stroke-[2.5]" />
                      <span className="text-xs text-slate-500 font-medium">{tick}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <TreatmentTestimonials items={testimonials} />
      <TreatmentBlogs posts={relatedPosts} />
    </section>
  );
}
