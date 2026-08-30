"use client";

import { 
  Award, Truck, ShieldCheck, Headphones, ClipboardList, 
  Scissors, Activity, Scan, HeartPulse, Shield, 
  Beaker, Bed, Package, Check
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { FormSuccess, useMockSubmit } from "@/components/ui/mock-form";

export function EquipmentSupplyPageSection() {
  const { status, onSubmit, reset, isSubmitting } = useMockSubmit();

  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen">
      <SiteHeader />
      
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Hospitals" },
          { label: "Equipment Supply" },
        ]}
        title="Equipment Supply"
        description="Reliable, certified, on time — a wide range of advanced medical equipment for hospitals and healthcare institutions, with full after-sales support."
      />

      {/* 2. Why Partner With Us? */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="site-px w-full">
          <h2 className="text-2xl font-bold text-center text-navy mb-10">Why Partner With Us?</h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {[
              { icon: Award, title: "Quality Assured", desc: "All equipment are from trusted global brands and fully quality-checked." },
              { icon: Truck, title: "Timely Delivery", desc: "Pan-India delivery with efficient logistics and real-time tracking." },
              { icon: ShieldCheck, title: "Installation & Training", desc: "Professional installation and hands-on training for your team." },
              { icon: Headphones, title: "After-Sales Support", desc: "Dedicated support team for maintenance and service." },
              { icon: ClipboardList, title: "Compliant & Certified", desc: "All products comply with national and international standards." }
            ].map((feat, i) => (
              <div key={i} className="flex flex-col items-center text-center max-w-[180px]">
                <div className="size-14 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-brand shrink-0 mb-4 shadow-sm hover:shadow-md transition-shadow">
                  <feat.icon className="size-6" />
                </div>
                <h4 className="font-bold text-navy text-sm mb-2">{feat.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Content */}
      <section className="py-16 sm:py-24">
        <div className="site-px w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left: Categories */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">Our Equipment Categories</h2>
              <div className="w-12 h-1 bg-brand rounded-full mb-10" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
                {[
                  { icon: Scissors, title: "Surgical Equipment", desc: "High precision surgical instruments and devices." },
                  { icon: Activity, title: "Patient Monitoring", desc: "Advanced monitors for accurate patient tracking." },
                  { icon: Scan, title: "Imaging Systems", desc: "State-of-the-art imaging solutions for better diagnosis." },
                  { icon: HeartPulse, title: "Anaesthesia Workstations", desc: "Reliable anaesthesia machines for safe procedures." },
                  { icon: Shield, title: "Sterilization Equipment", desc: "Ensure infection control with advanced sterilization solutions." },
                  { icon: Beaker, title: "Laboratory Equipment", desc: "High-quality lab equipment for accurate results." },
                  { icon: Bed, title: "Hospital Furniture & ICU Setup", desc: "Ergonomic and durable furniture for better patient care." },
                  { icon: Package, title: "Medical Consumables", desc: "A wide range of genuine consumables and accessories." }
                ].map((cat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-brand/30 transition-colors">
                    <div className="size-12 bg-slate-50 text-navy rounded-xl flex items-center justify-center mb-4">
                       <cat.icon className="size-6 text-brand" />
                    </div>
                    <h4 className="font-bold text-navy text-sm mb-2">{cat.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button className="px-6 py-3 border-2 border-brand text-brand text-sm font-bold rounded-xl hover:bg-teal-50 transition-colors">
                  View All Categories
                </button>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="w-full lg:w-2/5 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 sticky top-24">
              <h3 className="text-2xl font-bold text-navy mb-2">Enquire About Equipment Supply</h3>
              <div className="w-8 h-1 bg-brand rounded-full mb-8" />

              {status === "success" ? (
                <FormSuccess
                  title="Enquiry received"
                  message="Thanks for your enquiry. Our equipment supply team will contact you with product details and a quote shortly."
                  onReset={reset}
                />
              ) : (
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Hospital / Clinic Name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                  />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                />
                <select defaultValue="" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand bg-white text-slate-500">
                  <option value="" disabled>Type of Equipment</option>
                  <option value="surgical">Surgical Equipment</option>
                  <option value="monitoring">Patient Monitoring</option>
                  <option value="imaging">Imaging Systems</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  placeholder="Requirement Details / Quantity"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand"
                />
                <select defaultValue="" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand bg-white text-slate-500">
                  <option value="" disabled>Preferred Purchase Timeline</option>
                  <option value="immediate">Immediate</option>
                  <option value="1month">Within 1 Month</option>
                  <option value="3months">1-3 Months</option>
                  <option value="planning">Just Planning</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Additional Requirements / Message"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand py-4 text-sm font-bold text-white shadow-md hover:bg-brand-deep transition-colors mt-2 disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting…" : "Submit Enquiry"}
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
