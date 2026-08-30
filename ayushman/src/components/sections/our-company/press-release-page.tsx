"use client";

import { ArrowRight, Calendar, Building2, Users, ShieldCheck, Headphones, Mail, Phone, Download, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";

const pressReleases = [
  {
    badge: "New Launch",
    badgeColor: "bg-teal-50 text-brand",
    date: "May 20, 2025",
    title: "Ayushman Surgicare Launches Advanced Robotic Surgery Program in Delhi",
    desc: "Ayushman Surgicare is proud to announce the launch of its state-of-the-art Robotic Surgery Program, bringing world-class precision and faster recovery to patients in India.",
  },
  {
    badge: "Partnership",
    badgeColor: "bg-blue-50 text-blue-600",
    date: "Apr 28, 2025",
    title: "Ayushman Surgicare Partners with Leading Insurance Providers for Cashless Care",
    desc: "This partnership will ensure seamless cashless treatment and better access to quality surgical care for patients across the country.",
  },
  {
    badge: "Milestone",
    badgeColor: "bg-purple-50 text-purple-600",
    date: "Apr 10, 2025",
    title: "Ayushman Surgicare Expands to 15 Partner Hospitals Across India",
    desc: "Our growing network now connects patients to 50+ empanelled specialists and cashless insurance support in every major city we serve.",
  },
  {
    badge: "Event",
    badgeColor: "bg-indigo-50 text-indigo-600",
    date: "Mar 25, 2025",
    title: "Ayushman Surgicare Hosts National Conference on Advances in Minimally Invasive Surgery",
    desc: "The event brought together leading surgeons and healthcare experts to discuss innovations shaping the future of surgery.",
  },
  {
    badge: "CSR",
    badgeColor: "bg-green-50 text-green-600",
    date: "Mar 05, 2025",
    title: "Ayushman Surgicare Organizes Free Surgical Camp in Rural Haryana",
    desc: "Free consultations and diagnostic screening were offered to the local community, reinforcing our mission to make quality healthcare accessible for all.",
  }
];

export function PressReleasePageSection() {
  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen flex flex-col">
      <SiteHeader />
      
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Company" },
          { label: "Press Release" },
        ]}
        title="Press Releases"
        description="Stay updated with the latest announcements, achievements and milestones from Ayushman Surgicare."
      />

      {/* 2. Main Content */}
      <section className="py-16 sm:py-20 flex-1">
        <div className="site-px w-full">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            
            {/* Left: Press Release List */}
            <div className="w-full lg:w-2/3 space-y-8">
              {pressReleases.map((pr, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col sm:flex-row group hover:shadow-md transition-shadow">
                  {/* Thumbnail Placeholder */}
                  <div className="w-full sm:w-64 h-48 sm:h-auto bg-slate-200 shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent" />
                  </div>
                  
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${pr.badgeColor}`}>
                        {pr.badge}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Calendar className="size-3.5" /> {pr.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2 leading-snug group-hover:text-brand transition-colors">
                      {pr.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {pr.desc}
                    </p>
                    <Link href="#" className="text-xs font-bold text-brand hover:text-brand-deep flex items-center gap-1 mt-auto w-fit">
                      Read More <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 pt-8">
                <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
                  <ChevronLeft className="size-4" />
                </button>
                <button className="size-8 flex items-center justify-center rounded-full bg-brand text-white font-bold text-sm shadow-sm">1</button>
                <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600 font-bold text-sm transition-colors">2</button>
                <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600 font-bold text-sm transition-colors">3</button>
                <span className="text-slate-400 px-1">...</span>
                <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600 font-bold text-sm transition-colors">8</button>
                <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="w-full lg:w-1/3 space-y-6 lg:sticky lg:top-24">
              
              {/* About Block */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h4 className="text-lg font-bold text-navy mb-4">About Ayushman Surgicare</h4>
                <div className="w-8 h-1 bg-brand rounded-full mb-6" />
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Ayushman Surgicare is a leading multi-speciality surgical care provider with a mission to deliver world-class healthcare with compassion and innovation.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Building2, title: "15+", desc: "Multi-speciality Hospitals" },
                    { icon: Users, title: "50+", desc: "Expert Doctors" },
                    { icon: ShieldCheck, title: "All", desc: "Insurances Accepted" },
                    { icon: Headphones, title: "24/7", desc: "Care Buddy Support" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-teal-50 flex items-center justify-center text-brand shrink-0">
                        <stat.icon className="size-5" />
                      </div>
                      <div>
                        <div className="font-bold text-navy text-sm leading-tight">{stat.title}</div>
                        <div className="text-[11px] text-slate-500">{stat.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Media Contact */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h4 className="text-lg font-bold text-navy mb-4">Media Contact</h4>
                <div className="w-8 h-1 bg-brand rounded-full mb-6" />
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  For media enquiries, interviews or additional information, please contact:
                </p>
                <div className="space-y-3 mb-8">
                  <a href="mailto:media@ayushmansurgicare.com" className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-brand transition-colors">
                    <Mail className="size-4 text-brand" /> media@ayushmansurgicare.com
                  </a>
                  <a href="tel:+919876543210" className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-brand transition-colors">
                    <Phone className="size-4 text-brand" /> +91 98765 43210
                  </a>
                </div>
                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-deep transition-colors">
                  Download Media Kit <Download className="size-4" />
                </button>
              </div>
              
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
