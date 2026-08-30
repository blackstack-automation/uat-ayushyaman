"use client";

import { Building2, ShieldCheck, Users, TrendingUp, BookOpen, Handshake, Check, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { FormSuccess, useMockSubmit } from "@/components/ui/mock-form";

export function JoinNetworkPageSection() {
  const { status, onSubmit, reset, isSubmitting } = useMockSubmit();

  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen">
      <SiteHeader />

      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Doctors" },
          { label: "Join Our Network" },
        ]}
        title="Join Our Doctor Network"
        description="Join 50+ vetted specialists who trust Ayushman Surgicare to coordinate their surgical cases and support their patients."
      />

      {/* 2. Main Content */}
      <section className="py-16 sm:py-24">
        <div className="site-px w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Why join our network?</h2>
            <div className="w-16 h-1 bg-brand mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left: Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Building2, title: "15+ Hospital Network", desc: "Access to our multi-speciality hospital network across India for patient placement." },
                { icon: ShieldCheck, title: "Insurance Coordination", desc: "We handle all insurance pre-authorisation and claim processing, saving you and your team time." },
                { icon: Users, title: "Patient Coordination", desc: "Care Buddy coordinates all pre-op and post-op logistics, reducing your admin burden." },
                { icon: TrendingUp, title: "Referral Pipeline", desc: "Receive coordinated referrals from our patient consultation network." },
                { icon: BookOpen, title: "CME Programmes", desc: "Access to continuing medical education programmes and peer collaboration opportunities." },
                { icon: Handshake, title: "Collaboration Benefits", desc: "Collaborate with a multi-disciplinary network of India's top surgical specialists." }
              ].map((feat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center flex flex-col items-center hover:-translate-y-1 transition-transform">
                  <div className="size-12 rounded-full bg-teal-50 flex items-center justify-center text-brand mb-4">
                    <feat.icon className="size-5" />
                  </div>
                  <h4 className="font-bold text-navy text-sm mb-2">{feat.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: Enquiry Form */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-navy mb-8">Enquiry Form</h3>
              {status === "success" ? (
                <FormSuccess
                  title="Application received"
                  message="Thank you for your interest in joining the Ayushman Surgicare network. Our medical panel team will review your details and reach out shortly."
                  onReset={reset}
                />
              ) : (
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name (Dr.)"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Speciality"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Hospital / Clinic Name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                />
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
                  placeholder="Tell us about your practice and why you'd like to join..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand py-4 text-sm font-bold text-white shadow-md hover:bg-brand-deep transition-colors mt-2 disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting…" : (
                    <>
                      Submit Application <ChevronRight className="size-4" />
                    </>
                  )}
                </button>
              </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Stats Banner */}
      <section className="site-px pb-16">
        <div className="w-full bg-navy rounded-3xl py-12 px-8 flex flex-col md:flex-row items-center justify-around gap-8 text-center shadow-xl">
          {[
            { value: "50+", label: "Doctors in Network" },
            { value: "15+", label: "Partner Hospitals" },
            { value: "13+", label: "Specialities" },
            { value: "All major", label: "Insurers Accepted" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl sm:text-4xl font-bold text-[#2dd4bf] mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
