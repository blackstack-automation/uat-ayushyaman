"use client";

import Image from "next/image";
import { Check, ArrowRight, ShieldCheck, HeartHandshake, PhoneCall, Wallet } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";

export function AboutUsPageSection() {
  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen">
      <SiteHeader />
      
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Company" },
          { label: "About Us" },
        ]}
        title="About Ayushman Surgicare"
        description="India's trusted surgical-care partner — from consultation through recovery."
      />

      {/* 2. Our Story Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="site-px w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            <div className="w-full lg:w-1/2">
              <p className="text-[10px] font-bold tracking-widest text-brand uppercase mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">Born from a gap in the system</h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Ayushman Surgicare was founded with a single mission: to make surgical care in India truly accessible, coordinated, and compassionate. Too many patients were navigating complex decisions alone — choosing doctors, hospitals, insurers, and recovery plans without expert guidance.
                </p>
                <p>
                  We built Ayushman Surgicare to be the partner patients never had — coordinating everything from the first consultation through 90 days of post-surgery recovery.
                </p>
                <p>
                  Today, we bring together a network of 15+ multi-speciality hospitals, 50+ vetted specialists, and cashless support with all major insurers — so every patient we work with can access the surgery they need with confidence.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              {/* Image Placeholder */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 relative shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                   {/* Clickable image — opens the local asset in a new tab */}
                  <a
                    href="/assets/doctor-wearing-mask.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full h-full"
                  >
                    <Image
                      src="/assets/doctor-wearing-mask.png"
                      alt="Doctor wearing mask"
                          width={500}
                        height={500}
                      className="object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. What We Do Section */}
      <section className="py-16 sm:py-24 bg-[#f8fafc]">
        <div className="site-px w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">What We Do</h2>
            <p className="text-sm text-slate-600">We explain the journey: Consultation → Doctor → Hospital → Surgery → Recovery.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 1, title: "Consultation", desc: "Free expert consultation matched to your condition and city." },
              { num: 2, title: "Doctor & Hospital", desc: "We match you with vetted specialists and empanelled hospitals." },
              { num: 3, title: "Surgery", desc: "Coordinated surgical care with insurance and scheme support." },
              { num: 4, title: "Recovery", desc: "90-day Care Buddy support ensuring complete recovery." }
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform">
                <div className="size-12 rounded-full bg-brand flex items-center justify-center text-white font-bold mx-auto mb-6 shadow-md">
                  {step.num}
                </div>
                <h4 className="font-bold text-navy text-lg mb-3">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Approach Section */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="site-px w-full">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
            
            <div className="w-full lg:w-1/2">
              <p className="text-[10px] font-bold tracking-widest text-brand uppercase mb-4">Our Approach</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-10">Patient-first, always</h2>
              
              <div className="space-y-8">
                {[
                  { icon: ShieldCheck, title: "Network Strength Without Listing", desc: "We communicate the strength of our 15+ hospital / 50+ doctor network without publishing directories. Your privacy is protected." },
                  { icon: HeartHandshake, title: "Insurance & Scheme Assistance", desc: "We don't just accept insurance — we actively process claims, handle documentation, and liaise on your behalf." },
                  { icon: PhoneCall, title: "Care Buddy Differentiator", desc: "90-day post-surgery support is our core differentiator and something no hospital discharge unit offers at scale." },
                  { icon: Wallet, title: "No Cost, No Obligation Consultation", desc: "We believe every patient deserves expert guidance before making a surgical decision." }
                ].map((feat, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="size-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-3 text-brand stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm mb-1">{feat.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              {/* Image Placeholder */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                   {/* In a real app we'd use next/image here */}
                                     <a
                    href="/assets/surgeon-operating-image.avif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full h-full"
                  >
                    <Image
                      src="/assets/surgeon-operating-image.avif"
                      alt="Surgeon operating"
                          width={922}
                        height={691}
                      className="object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Our Healthcare Network */}
      <section className="bg-footer-surface py-16 sm:py-24 text-center border-y border-navy/10">
        <div className="site-px w-full">
          <h2 className="text-3xl font-bold text-navy mb-3">Our Healthcare Network</h2>
          <p className="text-sm text-[#556171] mb-12">India&apos;s strongest surgical-care network, at your service.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "15+", label: "Multi-Speciality Hospitals" },
              { value: "50+", label: "Vetted Specialists" },
              { value: "13+", label: "Surgical Specialities" },
              { value: "All major", label: "Insurers Accepted" }
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl bg-white border border-navy/8 shadow-[0_4px_20px_rgba(2,32,112,0.04)] py-8 px-4">
                <div className="text-3xl sm:text-4xl font-bold text-brand mb-2">{stat.value}</div>
                <div className="text-[11px] text-[#64748b] tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Ayushman Surgicare */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="site-px w-full">
          <h2 className="text-3xl font-bold text-navy text-center mb-16">Why Ayushman Surgicare</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-brand/20 z-0" />
            
            {[
              { icon: HeartHandshake, title: "True Partnership", desc: "We're with you from the first consultation to full recovery and beyond.", step: "01" },
              { icon: ShieldCheck, title: "Vetted Network", desc: "Every hospital and doctor is carefully verified for quality, safety and outcomes.", step: "02" },
              { icon: PhoneCall, title: "Patient First", desc: "We simplify the complex, so you can focus on what matters most—healing.", step: "03" },
              { icon: Wallet, title: "No Cost to You", desc: "Our consultation is completely free. We're supported by our network partners.", step: "04" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-b-3xl rounded-t-xl pt-12 pb-8 px-6 text-center shadow-lg relative z-10 border-b-4 border-navy">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 size-20 rounded-full bg-brand border-8 border-[#f0f9f8] flex items-center justify-center text-white shadow-sm">
                  <item.icon className="size-7" />
                </div>
                <h4 className="font-bold text-navy text-base mb-4 mt-2">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">{item.desc}</p>
                <div className="text-4xl font-black text-slate-100">{item.step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
