"use client";

import { PhoneCall, MessageCircle, Mail, Check } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";

export function SupportPageSection() {
  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen">
      <SiteHeader />
      
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Patients" },
          { label: "Support" },
        ]}
        title="Support"
        description="We're here to help at every step of your surgical journey."
      />

      {/* 2. Main Content */}
      <section className="py-16 sm:py-24">
        <div className="site-px w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy mb-12">
            How can we help you?
          </h2>

          {/* 3 Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Call Us */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="size-14 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mb-6">
                <PhoneCall className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Call Us</h3>
              <p className="text-xs text-slate-500 mb-6">Speak directly with a support coordinator</p>
              <div className="mt-auto w-full">
                <div className="text-lg font-bold text-navy mb-1">+91 98765 43210</div>
                <div className="text-[10px] text-slate-400 mb-6">Mon-Sat, 8am-8pm</div>
                <button className="w-full py-3 rounded-xl bg-brand hover:bg-brand-deep text-white text-sm font-bold transition-colors">
                  Call Now
                </button>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="size-14 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-6">
                <MessageCircle className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">WhatsApp</h3>
              <p className="text-xs text-slate-500 mb-6">Quick responses on WhatsApp</p>
              <div className="mt-auto w-full">
                <div className="text-base font-bold text-navy mb-1">Message Us</div>
                <div className="text-[10px] text-slate-400 mb-6">Usually within 1 hour</div>
                <button className="w-full py-3 rounded-xl bg-brand hover:bg-brand-deep text-white text-sm font-bold transition-colors">
                  Open WhatsApp
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="size-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
                <Mail className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">Email</h3>
              <p className="text-xs text-slate-500 mb-6">Detailed queries and documentation</p>
              <div className="mt-auto w-full">
                <div className="text-sm font-bold text-navy mb-1">info@ayushmansurgicare.com</div>
                <div className="text-[10px] text-slate-400 mb-6">Response within 24 hours</div>
                <button className="w-full py-3 rounded-xl bg-brand hover:bg-brand-deep text-white text-sm font-bold transition-colors">
                  Send Email
                </button>
              </div>
            </div>
          </div>

          {/* Support Options List */}
          <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm border border-slate-200 mb-16">
            <h3 className="text-2xl font-bold text-navy mb-8">Support Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "General enquiry about services",
                "Help with booking a consultation",
                "Insurance claim assistance",
                "Care Buddy support query",
                "Post-surgery follow-up coordination",
                "Complaint or feedback",
                "Doctor referral query",
                "Hospital partnership enquiry"
              ].map((option, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50/50 border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors">
                  <div className="size-5 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                    <Check className="size-3 text-brand stroke-[3]" />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">{option}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ CTA */}
          <div className="text-center">
            <p className="text-sm text-slate-500 mb-4">Have a common question?</p>
            <Link 
              href="/for-patients/faqs"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border-2 border-navy text-navy font-bold hover:bg-navy hover:text-white transition-colors"
            >
              View Full FAQs
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
