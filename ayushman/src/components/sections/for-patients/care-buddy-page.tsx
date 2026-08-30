"use client";

import { useState } from "react";
import {
  Check,
  ChevronRight,
  PhoneCall,
  CalendarDays,
  Activity,
  Bell,
  ShieldCheck,
  Building2,
  Home,
  Heart,
  User,
  HeartHandshake
} from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";

export function CareBuddyPageSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    condition: "",
    location: "",
    insuranceStatus: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white font-sans text-navy">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Patients" },
          { label: "Care Buddy" },
        ]}
        title="Meet Your Care Buddy"
        description="One dedicated coordinator who stays with you from the first consultation through 90 days of recovery — handling appointments, hospitals, insurance and follow-ups."
      />

      {/* 2. What is Care Buddy & Right Image Card */}
      <section className="py-16 sm:py-24 relative">
        <div className="site-px w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div>
              <div className="text-[11px] font-bold tracking-widest text-brand uppercase mb-4">
                WHAT IS CARE BUDDY?
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6">
                Dedicated support throughout the surgical <span className="text-brand">recovery journey</span>
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Care Buddy assigns you a dedicated surgical coordinator who is your single point of contact from the moment you book your surgery. They handle everything so you can focus on recovering.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Unlike standard hospital discharge follow-ups, Care Buddy stays with you for a full 90 days — ensuring nothing falls through the cracks and that your recovery stays on track.
              </p>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-brand mb-4">
                    <PhoneCall className="size-5" />
                  </div>
                  <h4 className="font-bold text-navy text-sm mb-2">One Point of Contact</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Your dedicated coordinator for all your needs.</p>
                </div>
                <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-brand mb-4">
                    <CalendarDays className="size-5" />
                  </div>
                  <h4 className="font-bold text-navy text-sm mb-2">90-Day Coverage</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Complete support from pre-surgery to recovery.</p>
                </div>
                <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-brand mb-4">
                    <Activity className="size-5" />
                  </div>
                  <h4 className="font-bold text-navy text-sm mb-2">Physio Coordination</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Assistance with physiotherapy appointments and guidance.</p>
                </div>
                <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-brand mb-4">
                    <Bell className="size-5" />
                  </div>
                  <h4 className="font-bold text-navy text-sm mb-2">Emergency Escalation</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Quick help in case of any medical emergencies.</p>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="rounded-2xl bg-teal-50/60 border border-teal-100 p-5 flex items-center gap-4">
                <ShieldCheck className="size-6 text-brand shrink-0" />
                <p className="text-sm font-semibold text-navy">
                  Your recovery is our priority. We stay with you, every step of the way.
                </p>
              </div>
            </div>

            {/* Right Column - Big White Card */}
            <div className="relative rounded-3xl bg-white border border-slate-100 shadow-[0_15px_40px_rgba(2,32,112,0.06)] overflow-hidden">
              <div className="p-8 pb-10">
                <h3 className="text-2xl font-bold text-navy mb-8">
                  Your Care Buddy<br />Stays With You for 90 Days
                </h3>
                
                {/* Timeline */}
                <div className="flex justify-between items-start relative mb-4">
                  <div className="absolute top-5 left-8 right-8 h-[2px] border-t-2 border-dashed border-slate-200" />
                  
                  {[
                    { icon: CalendarDays, title: "Pre-Surgery", desc: "Planning &\nPreparation" },
                    { icon: Building2, title: "During Hospital", desc: "Coordination &\nSupport" },
                    { icon: Home, title: "Post-Discharge", desc: "Recovery &\nFollow-up" },
                    { icon: Heart, title: "Up to Day 90", desc: "Check-ins &\nGuidance" }
                  ].map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center max-w-[80px]">
                      <div className="size-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-3 text-brand shadow-sm">
                        <step.icon className="size-4" />
                      </div>
                      <span className="text-[10px] font-bold text-navy mb-1 leading-tight">{step.title}</span>
                      <span className="text-[9px] text-slate-500 whitespace-pre-line leading-tight">{step.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image with pill badges overlay */}
              <div className="relative h-[300px] w-full bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                  alt="Care Buddy Support on Phone"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
                
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                  {["Timely reminders", "Regular check-ins", "Personalized support"].map((text, i) => (
                    <div key={i} className="rounded-full bg-white/95 backdrop-blur-sm px-4 py-2.5 flex items-center gap-2 shadow-lg w-[180px]">
                      <div className="size-5 rounded-full bg-brand flex items-center justify-center shrink-0">
                        <Check className="size-3 text-white stroke-[3]" />
                      </div>
                      <span className="text-xs font-bold text-navy">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Three Phases of Care */}
      <section className="py-20 sm:py-24 bg-[#f8fafc] border-y border-slate-200/60">
        <div className="site-px w-full">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Three Phases of Care</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive support before, during, and after your surgery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Phase 1 */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_30px_rgba(2,32,112,0.04)] border border-slate-100">
              <div className="size-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-6">Before Surgery</h3>
              <ul className="space-y-4">
                {[
                  "Hospital selection and appointment booking",
                  "Pre-operative investigations coordination",
                  "Cost estimates and insurance pre-authorization",
                  "Admission scheduling"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="size-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_30px_rgba(2,32,112,0.04)] border border-slate-100">
              <div className="size-12 rounded-xl bg-teal-50 text-brand flex items-center justify-center mb-6">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-6">During Hospitalisation</h3>
              <ul className="space-y-4">
                {[
                  "Admission process support",
                  "Communication between family and medical team",
                  "Insurance documentation during stay",
                  "Discharge planning coordination"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="size-4 text-brand shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_30px_rgba(2,32,112,0.04)] border border-slate-100">
              <div className="size-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-6">After Discharge</h3>
              <ul className="space-y-4">
                {[
                  "Follow-up appointment reminders",
                  "Recovery tracking and check-ins",
                  "Physiotherapy scheduling",
                  "Escalation to surgical team if needed"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="size-4 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 90-Day Timeline */}
      <section className="py-16 sm:py-24 bg-footer-surface border-y border-navy/10">
        <div className="site-px w-full">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-navy">The 90-Day Timeline</h2>
            <p className="text-[#556171] text-sm sm:text-base">
              Every milestone covered, every step guided.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Immediate Recovery",
                subtitle: "Day 0-7",
                items: ["Post-surgery monitoring calls", "Medication reminders", "Wound care guidance", "Emergency escalation if needed"]
              },
              {
                title: "Early Recovery",
                subtitle: "Week 2-4",
                items: ["Physiotherapy scheduling", "Mobility progress check", "Dietary guidance", "Follow-up appointment coordination"]
              },
              {
                title: "Progress Review",
                subtitle: "Month 2",
                items: ["Mid-recovery check-in", "X-ray/scan coordination", "Second opinion arrangement if needed", "Return-to-work guidance"]
              },
              {
                title: "Full Recovery Sign-Off",
                subtitle: "Month 3 / Day 90",
                items: ["Final recovery assessment", "Long-term care plan", "Discharge from Care Buddy program", "Feedback and support review"]
              }
            ].map((col, i) => (
              <div key={i} className="bg-white border border-navy/8 rounded-2xl p-6 shadow-[0_4px_20px_rgba(2,32,112,0.04)] hover:shadow-[0_16px_36px_rgba(2,32,112,0.08)] transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="size-7 rounded-full bg-brand text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-[10px] text-[#8492a6] font-medium uppercase tracking-wider">{col.subtitle}</div>
                    <div className="text-sm font-bold text-navy">{col.title}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {col.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand mt-1.5 shrink-0" />
                      <span className="text-[11px] text-[#556171] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Care Buddy? */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="site-px w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy mb-14">Why Care Buddy?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: User, title: "One Point of Contact", desc: "Your single point of contact for all queries, updates and support." },
              { icon: CalendarDays, title: "90-Day Support", desc: "From pre-surgery to recovery, we stay with you for a full 90 days." },
              { icon: HeartHandshake, title: "End-to-End Coordination", desc: "We coordinate appointments, hospitalities, therapy and follow-ups." },
              { icon: ShieldCheck, title: "Peace of Mind", desc: "You focus on healing. We take care of the rest." }
            ].map((feat, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_35px_rgba(2,32,112,0.05)] text-center flex flex-col items-center group hover:-translate-y-1 transition-transform">
                <div className="size-16 rounded-2xl bg-teal-50 text-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feat.icon className="size-8" />
                </div>
                <h4 className="font-bold text-navy mb-3 text-base">{feat.title}</h4>
                <div className="w-8 h-[2px] bg-slate-200 mb-4" />
                <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA / Booking Form */}
      <section className="bg-white py-16 sm:py-24">
        <div className="site-px w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <div className="text-navy">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-[10px] font-bold text-brand uppercase tracking-widest mb-6">
                <Heart className="size-3.5" />
                Free Consultation
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold mb-6 leading-[1.12] text-navy">
                Tell Us What You<br />Need Help With.
              </h2>
              <p className="text-sm text-[#556171] leading-relaxed mb-10 max-w-md">
                Share a few details and a Care Buddy will reach out to understand your care requirements and guide your next steps — with no pressure, no cost.
              </p>

              <ul className="space-y-5">
                {[
                  "Your information is used to help us understand your care requirements.",
                  "A dedicated Care Buddy contacts you — not a call centre.",
                  "Zero obligation. You decide if and when to proceed."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-brand flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-3 text-white stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#556171]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Form Card */}
            <div>
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(2,32,112,0.08)] border border-navy/8">
                <h3 className="text-2xl font-bold text-navy mb-2">Book your free consultation</h3>
                <p className="text-xs text-slate-500 mb-8 font-medium">We'll get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="rounded-2xl bg-teal-50 border border-teal-200 p-8 text-center">
                    <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand text-white mb-4">
                      <Check className="size-7 stroke-[3]" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">
                      Request Received!
                    </h3>
                    <p className="text-sm text-slate-600">
                      A Care Buddy will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-navy placeholder:text-slate-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-navy placeholder:text-slate-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Medical condition / surgery"
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-navy placeholder:text-slate-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Preferred location / city"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-navy placeholder:text-slate-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                    />
                    <select
                      required
                      value={formData.insuranceStatus}
                      onChange={(e) => setFormData({ ...formData, insuranceStatus: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-navy outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all invalid:text-slate-400"
                    >
                      <option value="" disabled hidden>Select insurance status</option>
                      <option value="insured" className="text-navy">Yes, I have insurance</option>
                      <option value="uninsured" className="text-navy">No, I do not have insurance</option>
                      <option value="unsure" className="text-navy">I am not sure</option>
                    </select>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand py-4 text-sm font-bold text-white shadow-md hover:bg-brand-deep active:scale-[0.99] transition-all duration-200 mt-2"
                    >
                      Book Free Consultation <ChevronRight className="size-4" />
                    </button>
                    <p className="text-center text-[9px] text-slate-400 mt-4">
                      Your information is used to help us understand your care requirements.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
