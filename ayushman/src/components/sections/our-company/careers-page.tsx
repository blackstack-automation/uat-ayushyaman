"use client";

import { 
  HeartHandshake, TrendingUp, Users, Handshake, CheckCircle2, 
  FileText, ArrowRight, Briefcase, MapPin, Clock, Stethoscope, Check
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";

export function CareersPageSection() {
  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen">
      <SiteHeader />
      
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Company" },
          { label: "Careers" },
        ]}
        title={
          <>
            Build Your Career. <span className="text-brand">Make a Difference.</span>
          </>
        }
        description="Join Ayushman Surgicare and be part of a mission to deliver world-class surgical care with compassion."
      >
        <button className="rounded-xl bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-deep">
          View Open Positions
        </button>
      </PageHero>

      {/* 2. Top Features */}
      <section className="relative z-20 mt-12 mb-16">
        <div className="site-px w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 flex flex-wrap justify-around gap-8">
            {[
              { icon: HeartHandshake, title: "Meaningful Impact", desc: "Contribute to better patient outcomes every day." },
              { icon: TrendingUp, title: "Growth Opportunities", desc: "Learn, grow and advance your career with us." },
              { icon: Users, title: "Supportive Culture", desc: "Work in a collaborative and people-first environment." },
              { icon: Handshake, title: "Better Together", desc: "Diverse teams united by a shared purpose." }
            ].map((feat, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 max-w-[200px]">
                <div className="size-12 rounded-full bg-teal-50 flex items-center justify-center text-brand shrink-0">
                  <feat.icon className="size-5" />
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
      <section className="py-12 pb-24">
        <div className="site-px w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left: Why Work With Us */}
            <div className="w-full lg:w-1/3">
              <p className="text-[10px] font-bold tracking-widest text-brand uppercase mb-4">Careers</p>
              <h2 className="text-3xl font-bold text-navy mb-6">Why Work With<br/>Ayushman Surgicare?</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                We value our people and invest in your growth, well-being and success.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Competitive compensation & benefits",
                  "Continuous learning & development",
                  "Modern facilities and technology",
                  "Work-life balance and wellness programs",
                  "A culture built on trust, respect and inclusion"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-brand shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Spontaneous Application Box */}
              <div className="bg-[#f0f9f8] rounded-2xl p-6 border border-teal-100 flex items-start gap-4 shadow-sm">
                <div className="size-10 rounded-xl bg-white flex items-center justify-center text-brand shrink-0 shadow-sm">
                  <FileText className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm mb-1.5">Don't see the right role?</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">Share your resume with us. We're always looking for talented people.</p>
                  <button className="px-5 py-2.5 bg-white border border-brand text-brand hover:bg-teal-50 text-xs font-bold rounded-lg transition-colors">
                    Submit Your Resume
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Open Positions */}
            <div className="w-full lg:w-2/3">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-navy">Open Positions</h3>
                <Link href="#" className="text-sm font-bold text-brand hover:text-brand-deep flex items-center gap-1">
                  View All Jobs <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Consultant – Orthopaedic Surgery", type: "Full Time", loc: "New Delhi", exp: "5-8 Years", desc: "We are looking for an experienced Orthopaedic Consultant to join our team." },
                  { title: "Surgical Nurse", type: "Full Time", loc: "New Delhi", exp: "2-4 Years", desc: "Provide exceptional patient care and support to the surgical team before, during and after procedures." },
                  { title: "Patient Care Coordinator", type: "Full Time", loc: "New Delhi", exp: "1-3 Years", desc: "Coordinate with patients, doctors and departments to ensure a smooth care journey." },
                  { title: "Medical Equipment Technician", type: "Full Time", loc: "New Delhi", exp: "2-5 Years", desc: "Maintain and ensure the optimal functioning of all surgical equipment and devices." }
                ].map((job, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-navy mb-3">{job.title}</h4>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                        <span className="flex items-center gap-1.5"><Briefcase className="size-3.5" /> {job.type}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="size-3.5" /> {job.loc}</span>
                        <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> {job.exp}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                        {job.desc}
                      </p>
                    </div>
                    <button className="w-full sm:w-auto px-6 py-3 bg-brand hover:bg-brand-deep text-white font-bold rounded-xl shadow-md transition-colors text-sm shrink-0">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Life at Banner */}
      <section className="site-px pb-16">
        <div className="w-full bg-[#f0f9f8] rounded-3xl p-8 sm:p-12 border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold text-navy mb-3">Life at Ayushman Surgicare</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A place where your work truly matters and you're empowered to grow, lead and inspire.
            </p>
          </div>
          
          <div className="md:w-2/3 flex flex-wrap items-center justify-between gap-6 w-full">
            {[
              { icon: Stethoscope, value: "50+", label: "Expert Doctors" },
              { icon: Users, value: "500+", label: "Team Members" },
              { icon: Briefcase, value: "13+", label: "Specialties" },
              { icon: MapPin, value: "20+", label: "Locations" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-white border border-teal-100 flex items-center justify-center text-brand shadow-sm">
                  <stat.icon className="size-5" />
                </div>
                <div>
                  <div className="font-bold text-navy text-xl">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
