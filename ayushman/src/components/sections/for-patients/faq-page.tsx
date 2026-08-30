"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Headset, Phone } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { AskAiCard } from "@/components/ui/ask-ai-card";

const tabs = ["General FAQs", "Surgery FAQs", "Care Buddy FAQs", "Insurance FAQs", "Consultation FAQs"];

const faqs = {
  "General FAQs": [
    {
      q: "What is Ayushman Surgicare?",
      a: "Ayushman Surgicare is a surgical-care coordination company that helps patients access expert surgical care across 15+ partner hospitals and 50+ doctors. We coordinate everything from consultation to 90-day post-surgery recovery."
    },
    {
      q: "Is Ayushman Surgicare free for patients?",
      a: "Yes, our care coordination services, including Care Buddy support, are completely free for patients. You only pay for the medical procedures at the hospital as you normally would."
    },
    {
      q: "Which cities do you operate in?",
      a: "We currently operate in multiple major cities. Please check our Locations page or contact our support team to find the nearest partner hospital."
    }
  ],
  "Surgery FAQs": [
    {
      q: "How do I book a surgery?",
      a: "You can book a surgery by scheduling a free consultation with our experts. They will guide you through the hospital options, doctors, and the entire process."
    },
    {
      q: "Are your surgeons experienced?",
      a: "Absolutely. We partner with 50+ highly experienced, board-certified surgeons across various specialties to ensure you receive the best care."
    }
  ],
  "Care Buddy FAQs": [
    {
      q: "What does a Care Buddy do?",
      a: "A Care Buddy is your dedicated personal coordinator who handles hospital admission, insurance paperwork, doctor appointments, and stays with you for 90 days post-surgery."
    }
  ],
  "Insurance FAQs": [
    {
      q: "Do you accept all health insurance?",
      a: "We accept most major corporate and retail health insurances. Our team will help you with the pre-authorization and claim process."
    }
  ],
  "Consultation FAQs": [
    {
      q: "Is the first consultation free?",
      a: "Yes, your initial consultation with our medical coordinators is completely free of charge and comes with zero obligation."
    }
  ]
};

export function FaqsPageSection() {
  const [activeTab, setActiveTab] = useState("General FAQs");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen">
      <SiteHeader />
      
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Patients" },
          { label: "FAQs" },
        ]}
        title="Frequently Asked Questions"
        description="Find answers to the most common questions about our services."
        aside={
          <AskAiCard
            line="Prefer to look into it yourself first? Ask ChatGPT what Ayushman Surgicare is and how it works, then come back with your questions. We're here — always, and anytime."
            prompt="I'm on the Ayushman Surgicare website. Explain what Ayushman Surgicare is, how their surgical-care coordination and 90-day Care Buddy work, what it costs patients, and how insurance is handled."
          />
        }
      />

      {/* 2. Main Content */}
      <section className="py-12 sm:py-20">
        <div className="site-px w-full">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14 lg:items-start">
            {/* Left: Tabs + Accordion */}
            <div className="lg:col-span-8 xl:col-span-9">
              {/* Tabs */}
              <div className="-mx-[2.5%] mb-6 flex gap-2.5 overflow-x-auto px-[2.5%] pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:mb-8 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setOpenIndex(0);
                    }}
                    className={`shrink-0 rounded-lg border px-4 py-2 text-[13px] font-bold transition-colors sm:px-5 sm:py-2.5 sm:text-sm ${
                      activeTab === tab
                        ? "border-brand bg-brand text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-brand hover:text-brand"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Accordion */}
              <div className="space-y-4">
                {faqs[activeTab as keyof typeof faqs].map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleOpen(index)}
                        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                      >
                        <span className="font-bold text-navy">{faq.q}</span>
                        <ChevronDown
                          className={`size-5 shrink-0 text-brand transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-slate-50 px-5 pb-5 pt-3.5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Support CTA (sticky sidebar on lg) */}
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="rounded-2xl border border-brand/15 bg-brand/[0.05] p-6 sm:p-7 lg:sticky lg:top-28">
                <div className="flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Headset className="size-6" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-navy">Still have questions?</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  Our care team is here to help you with anything you need.
                </p>
                <Link
                  href="/for-patients/support"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-deep"
                >
                  <Phone className="size-4" /> Talk to Our Care Team
                </Link>
                <p className="mt-2 text-[11px] font-medium text-slate-500">
                  We&apos;re just a call away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
