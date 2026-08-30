"use client";

import { Building2, Users, ShieldCheck, TrendingUp, ClipboardCheck, Activity, Check, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { FormSuccess, useMockSubmit } from "@/components/ui/mock-form";

export function PartnershipsPageSection() {
  const { status, onSubmit, reset, isSubmitting } = useMockSubmit();

  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen">
      <SiteHeader />
      
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Hospitals" },
          { label: "Partnerships" },
        ]}
        title="Hospital Partnerships"
        description="Join our growing multi-speciality hospital network. We bring coordinated surgical patients, insurance processing, and 90-day care coordination."
      />

      {/* 2. Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="site-px w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Building2, value: "15+", label: "Partner Hospitals" },
              { icon: Users, value: "50+", label: "Specialist Doctors" },
              { icon: Activity, value: "13+", label: "Surgical Specialities" },
              { icon: ShieldCheck, value: "All", label: "Insurances Processed" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="size-12 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-brand shrink-0">
                  <stat.icon className="size-5" />
                </div>
                <div>
                  <div className="font-bold text-navy text-xl leading-none mb-1">{stat.value}</div>
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Content */}
      <section className="py-16 sm:py-24">
        <div className="site-px w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left: Overview */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Partnership Overview</h2>
              <div className="w-12 h-1 bg-brand rounded-full mb-6" />
              <p className="text-sm text-slate-600 leading-relaxed mb-10">
                Ayushman Surgicare partners with multi-speciality hospitals across India. We act as a surgical coordination partner — bringing patients who have been pre-consulted, pre-authorised for insurance, and prepared for surgery.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Users, title: "Pre-consulted patients", desc: "Every patient arrives with a completed specialist consultation, diagnosis confirmation, and surgery recommendation." },
                  { icon: ShieldCheck, title: "Insurance pre-authorised", desc: "We handle all insurance pre-authorisation before admission, reducing billing friction." },
                  { icon: ClipboardCheck, title: "Full care coordination", desc: "Our Care Buddy team coordinates pre-op, admission, and 90-day post-discharge support." },
                  { icon: TrendingUp, title: "Increased surgical volume", desc: "Partner hospitals see increased planned surgical volumes through our referral pipeline." }
                ].map((feat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start gap-5">
                    <div className="size-12 rounded-full bg-teal-50 flex items-center justify-center text-brand shrink-0">
                      <feat.icon className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm mb-1.5">{feat.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 sticky top-24">
              <h3 className="text-2xl font-bold text-navy mb-2">Partnership Enquiry</h3>
              <div className="w-8 h-1 bg-brand rounded-full mb-8" />

              {status === "success" ? (
                <FormSuccess
                  title="Enquiry received"
                  message="Thanks for your interest in partnering with Ayushman Surgicare. Our network team will be in touch within 2 working days."
                  onReset={reset}
                />
              ) : (
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Contact Name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Hospital Name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="City"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                  />
                  <input
                    type="number"
                    placeholder="No. of beds"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Tell us about your hospital and the specialities you cover..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand py-4 text-sm font-bold text-white shadow-md hover:bg-brand-deep transition-colors mt-2 disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting…" : (
                    <>
                      Submit Partnership Enquiry <ChevronRight className="size-4" />
                    </>
                  )}
                </button>
              </form>
              )}
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
