"use client";

import { Check } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { FormSuccess, useMockSubmit } from "@/components/ui/mock-form";

export function ReferPatientPageSection() {
  const { status, onSubmit, reset, isSubmitting } = useMockSubmit();

  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen flex flex-col">
      <SiteHeader />

      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Doctors" },
          { label: "Refer a Patient" },
        ]}
        title="Refer a Patient"
        description="Refer your patients to Ayushman Surgicare for expert surgical coordination, hospital placement, and 90-day care support."
      />

      {/* 2. Main Content */}
      <section className="py-16 sm:py-24 flex-1">
        <div className="site-px w-full">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
            
            {/* Left: Info Cards */}
            <div className="w-full md:w-1/3 flex flex-col gap-6">
              {/* Referral Process */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <h3 className="font-bold text-navy text-lg mb-6">Referral Process</h3>
                <div className="space-y-6">
                  {[
                    "Fill in the referral form",
                    "We contact the patient within 2 hours",
                    "Hospital and specialist assignment",
                    "Surgery coordination begins",
                    "Care Buddy enrolled post-surgery"
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="size-6 rounded-full bg-teal-50 text-brand font-bold text-[11px] flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm text-slate-600 font-medium leading-tight pt-1">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What we handle */}
              <div className="bg-navy rounded-2xl p-6 shadow-md text-white">
                <h3 className="font-bold text-lg mb-5">What we handle</h3>
                <ul className="space-y-4">
                  {[
                    "Hospital placement",
                    "Insurance pre-authorisation",
                    "Pre-op coordination",
                    "Post-op 90-day Care Buddy",
                    "Patient communication"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="size-4 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-2.5 text-[#2dd4bf] stroke-[3]" />
                      </div>
                      <span className="text-sm text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Referral Form */}
            <div className="w-full md:w-2/3 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-navy mb-8">Patient Referral Form</h2>
              {status === "success" ? (
                <FormSuccess
                  title="Referral received"
                  message="Thank you, doctor. Our coordination team will contact the patient within 2 hours and keep you updated on their care."
                  onReset={reset}
                  resetLabel="Refer another patient"
                />
              ) : (
              <form className="space-y-6" onSubmit={onSubmit}>

                {/* Doctor Details */}
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Doctor Details</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name (Dr.)"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Hospital / Clinic"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                    />
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Patient Details */}
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Patient Details</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      required
                      placeholder="Patient Name"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Patient Phone"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                    />
                  </div>
                  <div className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="Condition / Diagnosis"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                    />
                    <input
                      type="text"
                      placeholder="Urgency level"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                    />
                    <textarea
                      rows={4}
                      placeholder="Additional clinical notes..."
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand py-4 text-sm font-bold text-white shadow-md hover:bg-brand-deep transition-colors mt-4 disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting…" : "Submit Referral"}
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
