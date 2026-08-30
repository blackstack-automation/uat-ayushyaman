"use client";

import { useState } from "react";
import { 
  ChevronRight, CalendarDays, Percent, Clock, ShieldCheck, 
  Briefcase, Wallet, Users, HeartPulse, Check, ChevronDown, Headset
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";

const emiFaqs = [
  { q: "What is No Cost EMI?", a: "No Cost EMI allows you to pay for your surgery in easy monthly installments without any interest or hidden charges." },
  { q: "Which cards & banks are eligible?", a: "We accept credit cards from all major banks, as well as select debit cards and NBFC partners like Bajaj Finserv." },
  { q: "Is there any processing fee?", a: "There is absolutely zero processing fee from our end. The amount you see is the exact amount you pay over your tenure." },
  { q: "What documents are required?", a: "Basic KYC documents (Aadhaar, PAN), recent bank statements, and income proof are usually sufficient for instant approval." },
  { q: "Can I prepay my EMI?", a: "Yes, you can prepay or foreclose your EMI plan at any time without any pre-closure penalties." },
  { q: "How do I apply for No Cost EMI?", a: "Simply ask your Care Buddy or Finance Coordinator during your consultation, and they will process the application instantly." },
];

export function EmiPageSection() {
  const [cost, setCost] = useState<number>(200000);
  const [tenure, setTenure] = useState<number>(12);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const estimatedEmi = Math.round(cost / tenure);

  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen">
      <SiteHeader />
      
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Patients" },
          { label: "No Cost EMI" },
        ]}
        title="No Cost EMI"
        description="Split your surgery cost into easy monthly instalments at 0% interest — so treatment never has to wait."
      />

      {/* 2. EMI Main Info */}
      <section className="py-16 sm:py-24 relative">
        <div className="site-px w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div>
              <div className="text-[11px] font-bold tracking-widest text-brand uppercase mb-4">
                NO COST EMI
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
                World-Class Surgery,<br/>Now <span className="text-brand">Easier on Your Pocket</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                At Ayushman Surgicare, advanced treatment should never be limited by financial constraints. Avail No Cost EMI options and focus on what matters most — your recovery.
              </p>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: CalendarDays, title: "No Hidden Fees", desc: "100% transparent\nNo extra charges" },
                { icon: Percent, title: "0% Interest", desc: "No cost EMI on\nselected plans" },
                { icon: Clock, title: "Flexible Tenure", desc: "Choose a tenure that\nfits your budget" },
                { icon: ShieldCheck, title: "Instant Approval", desc: "Quick approval\nso you can proceed" }
              ].map((feat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center flex flex-col items-center">
                  <div className="size-12 rounded-full bg-teal-50 flex items-center justify-center text-brand mb-4">
                    <feat.icon className="size-5" />
                  </div>
                  <h4 className="font-bold text-navy text-sm mb-2">{feat.title}</h4>
                  <p className="text-[11px] text-slate-500 whitespace-pre-line leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose EMI */}
      <section className="py-16 sm:py-24 bg-[#f8fafc] border-y border-slate-200/60">
        <div className="site-px w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Why Choose No Cost EMI?</h2>
            <div className="w-16 h-1 bg-brand mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, title: "Affordable Care", desc: "Break your medical expenses into easy monthly payments." },
              { icon: Wallet, title: "Financial Freedom", desc: "Preserve your savings while getting the best treatment." },
              { icon: Users, title: "Wider Access", desc: "Make advanced surgical care accessible to more families." },
              { icon: HeartPulse, title: "Peace of Mind", desc: "Focus on recovery while we take care of the rest." }
            ].map((reason, i) => (
              <div key={i} className="flex items-start gap-4 p-4">
                <div className="size-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-brand shrink-0">
                  <reason.icon className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm mb-2">{reason.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works Timeline */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="site-px w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy mb-20">How It Works</h2>
          
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
            <div className="hidden md:block absolute top-6 left-12 right-12 h-[2px] border-t-2 border-dashed border-teal-100" />
            
            {[
              { step: "01", icon: ShieldCheck, title: "Choose Your Treatment", desc: "Consult with our experts and finalize your treatment plan." },
              { step: "02", icon: Wallet, title: "Submit Your Details", desc: "Our team will help you with a quick & simple application." },
              { step: "03", icon: Check, title: "Get Instant Approval", desc: "Receive quick approval from our financing partner." },
              { step: "04", icon: CalendarDays, title: "Easy EMI Payments", desc: "Enjoy stress-free EMIs and a worry-free treatment." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 px-4">
                <div className="size-14 rounded-full bg-white border-2 border-brand flex items-center justify-center text-brand mb-6 relative">
                  <step.icon className="size-6" />
                  <div className="absolute -bottom-2 -left-2 size-6 rounded-full bg-brand text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                    {step.step}
                  </div>
                </div>
                <h4 className="font-bold text-navy text-sm mb-3">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EMI Calculator */}
      <section className="pb-16 sm:pb-24 pt-8">
        <div className="site-px w-full">
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50/30 rounded-3xl p-8 sm:p-12 border border-teal-100/50 shadow-sm">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              
              {/* Left Details */}
              <div className="w-full md:w-1/3">
                <h3 className="text-2xl font-bold text-navy mb-2">Estimate Your EMI</h3>
                <p className="text-sm text-slate-600 mb-8">Use our easy calculator to plan your monthly payments.</p>
                <button className="px-6 py-3 bg-brand hover:bg-brand-deep text-white font-bold text-sm rounded-xl transition-colors">
                  Calculate EMI
                </button>
              </div>

              {/* Right Controls */}
              <div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-8 bg-white p-6 sm:p-8 rounded-2xl shadow-[0_10px_40px_rgba(13,148,136,0.08)]">
                
                <div className="flex-1 space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-xs font-bold text-slate-500">Treatment Cost</label>
                      <span className="text-lg font-bold text-navy">₹ {cost.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="10000" 
                      max="1000000" 
                      step="5000"
                      value={cost} 
                      onChange={(e) => setCost(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-brand"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-4">Tenure</label>
                    <div className="relative">
                      <select 
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-navy outline-none focus:border-brand"
                      >
                        <option value={3}>3 Months</option>
                        <option value={6}>6 Months</option>
                        <option value={9}>9 Months</option>
                        <option value={12}>12 Months</option>
                        <option value={18}>18 Months</option>
                        <option value={24}>24 Months</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Result */}
                <div className="w-full sm:w-48 shrink-0 bg-teal-50/50 rounded-xl border border-teal-100 p-6 flex flex-col justify-center text-center">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Estimated EMI</div>
                  <div className="text-3xl font-bold text-brand mb-1">
                    ₹ {estimatedEmi.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium mb-4">/ month</div>
                  <div className="inline-flex mx-auto items-center justify-center px-3 py-1 bg-white border border-teal-200 rounded-full text-[10px] font-bold text-brand">
                    No Cost EMI
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="site-px w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emiFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden h-fit">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-navy text-sm">{faq.q}</span>
                    <ChevronDown className={`size-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs text-slate-600 leading-relaxed bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA Help Bar */}
      <section className="site-px pb-16">
        <div className="w-full bg-navy rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5 text-white">
            <div className="size-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <Headset className="size-6 text-[#2dd4bf]" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Need Help?</h4>
              <p className="text-sm text-white/70">Our finance experts are ready to help you.</p>
            </div>
          </div>
          <Link href="/for-patients/consultation" className="shrink-0 px-6 py-3 bg-brand hover:bg-brand-deep text-white text-sm font-bold rounded-xl transition-colors inline-flex items-center gap-2">
            Talk to Our Care Advisor <ChevronRight className="size-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
