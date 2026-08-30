"use client";

import { 
  UserPlus, FileCheck, HeartHandshake, TrendingUp, 
  Clock, Award, CheckCircle2, FileText, Search,
  GraduationCap, Check, ArrowRight
} from "lucide-react";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { FormSuccess, useMockSubmit } from "@/components/ui/mock-form";

export function TrainingProgramsPageSection() {
  const { status, onSubmit, reset, isSubmitting } = useMockSubmit();

  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen">
      <SiteHeader />
      
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Hospitals" },
          { label: "Training Programs" },
        ]}
        title="Training Programs"
        description="Structured clinical and operational training for hospital teams — building surgical capability, safety and coordination across your institution."
      />

      {/* 2. Top Features */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="site-px w-full">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {[
              { icon: UserPlus, title: "Expert Faculty", desc: "Learn from leading surgeons and industry experts." },
              { icon: FileCheck, title: "Certified Programs", desc: "Industry-recognized certifications on completion." },
              { icon: HeartHandshake, title: "Hands-on Learning", desc: "Practical exposure in real clinical scenarios." },
              { icon: TrendingUp, title: "Career Growth", desc: "Enhance your skills and advance your career." }
            ].map((feat, i) => (
              <div key={i} className="flex items-start gap-4 max-w-xs">
                <div className="size-14 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-brand shrink-0 shadow-sm">
                  <feat.icon className="size-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm mb-1">{feat.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Content */}
      <section className="py-16 sm:py-24">
        <div className="site-px w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left: Programs & Process */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-8">Our Training Programs</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                {[
                  { 
                    tag: "Popular",
                    title: "Robotic Surgery Fellowship", 
                    desc: "Comprehensive training in robotic surgical techniques and advanced procedures.",
                    duration: "6 Months",
                    bg: "bg-slate-200"
                  },
                  { 
                    title: "Arthroscopy Workshop", 
                    desc: "Hands-on training in arthroscopic techniques for joints and sports injuries.",
                    duration: "3 Days",
                    bg: "bg-slate-200"
                  },
                  { 
                    title: "Spine Surgery Program", 
                    desc: "Advanced program covering minimally invasive and complex spine surgeries.",
                    duration: "1 Month",
                    bg: "bg-slate-200"
                  },
                  { 
                    title: "Laparoscopy Training", 
                    desc: "Skill development in minimally invasive laparoscopic surgical procedures.",
                    duration: "1 Week",
                    bg: "bg-slate-200"
                  }
                ].map((prog, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                    <div className={`h-40 ${prog.bg} relative w-full`}>
                      {prog.tag && (
                        <div className="absolute top-4 left-4 bg-brand text-white text-[10px] font-bold px-2 py-1 rounded-md z-10">
                          {prog.tag}
                        </div>
                      )}
                      {/* Placeholder for images. Usually we use next/image here */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    </div>
                    
                    <div className="p-6 pt-8 relative flex-1 flex flex-col">
                      <div className="absolute -top-6 left-6 size-12 bg-white rounded-full flex items-center justify-center shadow-md">
                        <div className="size-10 bg-teal-50 rounded-full flex items-center justify-center text-brand">
                          <Award className="size-5" />
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-navy text-base mb-2">{prog.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1">{prog.desc}</p>
                      
                      <div className="flex items-center gap-6 mt-auto pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                          <Clock className="size-3.5 text-brand" /> {prog.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                          <FileCheck className="size-3.5 text-brand" /> Certificate
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Who Can Enroll */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-6">Who Can Enroll?</h3>
                  <div className="w-8 h-1 bg-brand rounded-full mb-6" />
                  <ul className="space-y-4">
                    {[
                      "Surgeons and Specialist Doctors",
                      "Postgraduate Students",
                      "Medical Professionals",
                      "International Medical Graduates"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="size-4 text-brand shrink-0" />
                        <span className="text-sm font-medium text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Training Process */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-6">Our Training Process</h3>
                  <div className="w-8 h-1 bg-brand rounded-full mb-6" />
                  
                  <div className="space-y-6">
                    {[
                      { icon: FileText, title: "1. Apply", desc: "Fill out the application form online." },
                      { icon: Search, title: "2. Review", desc: "Our team reviews your details and eligibility." },
                      { icon: CheckCircle2, title: "3. Confirmation", desc: "Receive confirmation and program details." },
                      { icon: GraduationCap, title: "4. Learn & Grow", desc: "Join the program and enhance your skills." }
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="size-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-navy shrink-0">
                          <step.icon className="size-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-navy text-sm mb-1">{step.title}</h4>
                          <p className="text-xs text-slate-500">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="w-full lg:w-2/5 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 sticky top-24">
              <h3 className="text-2xl font-bold text-navy mb-2">Enquire About Training Programs</h3>
              <div className="w-8 h-1 bg-brand rounded-full mb-8" />

              {status === "success" ? (
                <FormSuccess
                  title="Enquiry received"
                  message="Thanks for your interest in our training programs. Our academy team will share batch details and next steps with you shortly."
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
                    placeholder="Specialization"
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
                  <option value="" disabled>Select Program of Interest</option>
                  <option value="robotic">Robotic Surgery Fellowship</option>
                  <option value="arthroscopy">Arthroscopy Workshop</option>
                  <option value="spine">Spine Surgery Program</option>
                  <option value="laparoscopy">Laparoscopy Training</option>
                  <option value="other">Other</option>
                </select>
                <select defaultValue="" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand bg-white text-slate-500">
                  <option value="" disabled>Preferred Batch / Timing</option>
                  <option value="upcoming">Upcoming Batch</option>
                  <option value="next_month">Next Month</option>
                  <option value="later">Later this year</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Tell us about your background and goals..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand resize-none"
                ></textarea>
                
                <div className="flex items-start gap-3 mt-4">
                  <input type="checkbox" id="consent" className="mt-1" />
                  <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                    I agree to receive communication from Ayushman Surgicare regarding training programs.
                  </label>
                </div>
                
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
