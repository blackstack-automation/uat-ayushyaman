"use client";

import { useState } from "react";
import { 
  GraduationCap, Award, Users, TrendingUp, Clock, BookOpen, 
  Briefcase, ShieldCheck, Bone, Activity, Brain, HeartPulse,
  Dna, Stethoscope, ArrowRight, Check, Handshake, ChevronDown
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";

const cmeFaqs = [
  { q: "Who can attend these CME programs?", a: "Our programs are open to all registered medical practitioners, surgeons, and specialists looking to advance their surgical knowledge." },
  { q: "Will I receive a certificate?", a: "Yes, attendees will receive a digital certificate of participation upon successful completion of the program." },
  { q: "Are CME credits applicable for all programs?", a: "Most of our programs are accredited by recognized medical councils. The specific credit points are mentioned on each program details page." },
  { q: "Can I attend programs online?", a: "Yes, we offer both in-person workshops and live webinars to accommodate different schedules and locations." },
  { q: "How do I register for a CME program?", a: "You can click on 'Register Now' for any upcoming program, fill in your details, and complete the registration process online." },
  { q: "How can I stay updated about upcoming programs?", a: "You can join our doctor network or subscribe to our mailing list to receive regular updates on new CME programs." }
];

export function CmeProgramsPageSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen">
      <SiteHeader />
      
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Doctors" },
          { label: "CME Programs" },
        ]}
        title="CME Programs"
        description="Advance your knowledge. Elevate patient care. Join our continuing medical education programs designed for surgical professionals."
      />

      {/* 2. Top Banner Features */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="site-px w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {[
              { icon: GraduationCap, title: "Expert Faculty", desc: "Learn from leading surgeons and specialists." },
              { icon: Award, title: "Accredited CME", desc: "CME credits from recognized medical bodies." },
              { icon: Users, title: "Peer Network", desc: "Collaborate and exchange ideas with peers." },
              { icon: TrendingUp, title: "Stay Updated", desc: "Stay ahead with the latest advancements in surgery." }
            ].map((feat, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-brand shrink-0">
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

      {/* 3. Upcoming CME Programs */}
      <section className="py-16 sm:py-24">
        <div className="site-px w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">Upcoming CME Programs</h2>
            <Link href="#" className="text-sm font-bold text-brand hover:text-brand-deep flex items-center gap-1">
              View All Programs <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                date: "24", month: "MAY", year: "2025", 
                type: "Live Webinar", 
                title: "Advances in Minimally Invasive Surgery",
                time: "04:00 PM - 06:00 PM",
                desc: "Explore the latest techniques, technologies, and outcomes in minimally invasive surgery.",
                credits: "2 CME Credits"
              },
              { 
                date: "08", month: "JUN", year: "2025", 
                type: "Workshop", 
                title: "Hands-on: Arthroscopic Knee Procedures",
                time: "09:30 AM - 05:30 PM",
                desc: "A practical workshop focusing on arthroscopic skills and best practices.",
                credits: "4 CME Credits"
              },
              { 
                date: "21", month: "JUN", year: "2025", 
                type: "Live Webinar", 
                title: "Evidence-Based Approaches in Spine Surgery",
                time: "04:00 PM - 06:00 PM",
                desc: "Review current evidence and improve decision-making in spine surgery.",
                credits: "2 CME Credits"
              }
            ].map((prog, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="text-center shrink-0">
                      <div className="text-2xl font-black text-navy leading-none">{prog.date}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{prog.month}</div>
                      <div className="text-[10px] font-bold text-slate-400">{prog.year}</div>
                    </div>
                    <div>
                      <div className="inline-block px-2.5 py-1 bg-teal-50 text-brand text-[10px] font-bold uppercase tracking-wider rounded-md mb-2">
                        {prog.type}
                      </div>
                      <h4 className="font-bold text-navy text-base leading-tight mb-3">
                        {prog.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                        <Clock className="size-3.5" /> {prog.time}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {prog.desc}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50 mt-auto">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                    <Award className="size-4 text-purple-500" /> {prog.credits}
                  </div>
                  <Link href="#" className="text-xs font-bold text-brand hover:text-brand-deep flex items-center gap-1">
                    Register Now <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Join */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="site-px w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy mb-14">Why Join Our CME Programs?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Earn CME Credits", desc: "Gain credits recognized by medical councils and associations." },
              { icon: TrendingUp, title: "Enhance Skills", desc: "Improve clinical outcomes with up-to-date knowledge and practical insights." },
              { icon: Users, title: "Professional Growth", desc: "Build your profile and network with experts across specialties." },
              { icon: ShieldCheck, title: "Stay Compliant", desc: "Fulfill your CME requirements with accredited programs." }
            ].map((feat, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_35px_rgba(2,32,112,0.05)] text-center flex flex-col items-center">
                <div className="size-16 rounded-2xl bg-teal-50 text-brand flex items-center justify-center mb-6">
                  <feat.icon className="size-8" />
                </div>
                <h4 className="font-bold text-navy mb-3 text-sm">{feat.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Topics Covered & Partner */}
      <section className="py-16 sm:py-24 bg-[#f8fafc]">
        <div className="site-px w-full">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-navy mb-8">CME Topics We Cover</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                { label: "Orthopaedics", icon: Bone },
                { label: "Spine Surgery", icon: Activity },
                { label: "Cardiac Surgery", icon: HeartPulse },
                { label: "Neurosurgery", icon: Brain },
                { label: "Bariatric Surgery", icon: Dna },
                { label: "Robotic Surgery", icon: Stethoscope },
                { label: "& More", icon: Users }
              ].map((topic, i) => (
                <div key={i} className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:border-teal-200 hover:text-brand transition-colors cursor-pointer">
                  <topic.icon className="size-4 text-brand" />
                  {topic.label}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-teal-50 rounded-3xl p-8 sm:p-10 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm mt-16 max-w-4xl mx-auto">
            <div className="flex items-center gap-6">
              <div className="size-16 rounded-full bg-brand flex items-center justify-center text-white shrink-0 shadow-lg">
                <Handshake className="size-8" />
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg mb-2">Partner With Us</h4>
                <p className="text-sm text-slate-600">Host impactful CME programs with Ayushman Surgicare and reach a wider community of surgical professionals.</p>
              </div>
            </div>
            <button className="shrink-0 px-6 py-3 bg-navy hover:bg-navy-deep text-white text-sm font-bold rounded-xl transition-colors flex items-center gap-2 shadow-md">
              Collaborate With Us <ArrowRight className="size-4" />
            </button>
          </div>
          
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="site-px w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cmeFaqs.map((faq, index) => {
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
      <Footer />
    </div>
  );
}
