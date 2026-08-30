"use client";

import { useState } from "react";
import { 
  FileText, Download, PlayCircle, Book, 
  Bone, HeartPulse, Brain, Dna, Activity, Droplet, 
  Ribbon, MoreHorizontal, ArrowRight, FileDown, 
  Mail, Check, ChevronDown 
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { useMockSubmit } from "@/components/ui/mock-form";

const resourceFaqs = [
  { q: "Are these resources free to access?", a: "Yes, all our clinical resources, guidelines, and templates are completely free for registered doctors in our network." },
  { q: "Can I share these resources with my team?", a: "Absolutely. You are encouraged to share these evidence-based protocols and forms with your clinical and administrative teams." },
  { q: "Do I need to create an account to download resources?", a: "Most public guidelines are available without an account. However, specific surgical protocols and templates require you to be a part of our network." },
  { q: "How can I suggest a resource or topic?", a: "We welcome suggestions! You can email our academic committee or use the feedback form in your doctor portal." },
  { q: "How often are the resources updated?", a: "Our medical advisory board reviews and updates the clinical guidelines quarterly to ensure they reflect the latest evidence-based practices." }
];

export function ResourcesPageSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const newsletter = useMockSubmit();

  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen">
      <SiteHeader />
      
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Doctors" },
          { label: "Resources" },
        ]}
        title="Resources for Surgical Professionals"
        description="Access clinical resources, guidelines, templates and tools curated to support your practice and patient care."
      />

      {/* 2. Top Banner Features */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="site-px w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {[
              { icon: FileText, title: "Clinical Guidelines", desc: "Evidence-based protocols and best practice guidelines." },
              { icon: Download, title: "Downloadable Forms", desc: "Access templates and forms for your practice." },
              { icon: PlayCircle, title: "Webinars & Videos", desc: "Watch expert talks and surgical technique videos." },
              { icon: Book, title: "Research & Publications", desc: "Stay updated with the latest research and publications." }
            ].map((feat, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-navy shrink-0">
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

      {/* 3. Resources by Category */}
      <section className="py-16 sm:py-24">
        <div className="site-px w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10">Resources by Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Bone, title: "Orthopaedics", desc: "Guidelines, protocols, and surgical references." },
              { icon: HeartPulse, title: "Cardiac Surgery", desc: "Clinical pathways, case studies, and literature." },
              { icon: Brain, title: "Neurosurgery", desc: "Surgical techniques, checklists, and more." },
              { icon: Dna, title: "Bariatric Surgery", desc: "Patient selection guides, protocols, and outcomes." },
              { icon: Activity, title: "Spine Surgery", desc: "Approach guides, implant information, and articles." },
              { icon: Droplet, title: "Urology", desc: "Guidelines, procedures, and clinical resources." },
              { icon: Ribbon, title: "Surgical Oncology", desc: "Treatment protocols, updates, and guidelines." },
              { icon: MoreHorizontal, title: "All Specialties", desc: "Explore resources across all surgical specialties." }
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand/30 transition-all group flex flex-col cursor-pointer">
                <div className="size-12 rounded-full bg-teal-50 flex items-center justify-center text-brand mb-5">
                  <cat.icon className="size-6" />
                </div>
                <h4 className="font-bold text-navy text-base mb-2">{cat.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1">{cat.desc}</p>
                <div className="text-xs font-bold text-brand group-hover:text-brand-deep flex items-center gap-1 mt-auto">
                  View Resources <ArrowRight className="size-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Downloads */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="site-px w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">Featured Downloads</h2>
            <Link href="#" className="text-sm font-bold text-brand hover:text-brand-deep flex items-center gap-1">
              View All Downloads <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Pre-Operative Assessment Checklist", date: "May 2025", size: "342 KB" },
              { title: "Surgical Site Infection Prevention Guidelines", date: "Apr 2025", size: "512 KB" },
              { title: "Post-Operative Care Instructions Template", date: "Mar 2025", size: "289 KB" },
              { title: "Informed Consent Template", date: "Feb 2025", size: "198 KB" }
            ].map((file, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col hover:border-brand/50 transition-colors cursor-pointer group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="size-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <FileText className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm leading-snug line-clamp-3">{file.title}</h4>
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 font-medium mb-6 mt-auto">Updated: {file.date}</div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-brand group-hover:text-brand-deep">Download PDF</span>
                  <span className="text-[10px] text-slate-400">({file.size})</span>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Box */}
          <div className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 w-full shadow-sm">
            <div className="flex items-center gap-6 w-full md:w-1/2">
              <div className="size-16 rounded-full bg-brand flex items-center justify-center text-white shrink-0 shadow-lg">
                <Mail className="size-8" />
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg mb-2">Stay Updated</h4>
                <p className="text-sm text-slate-600">Subscribe to receive the latest resources, guidelines and updates for surgical professionals.</p>
              </div>
            </div>
            
            {newsletter.status === "success" ? (
              <p className="w-full md:w-1/2 flex items-center gap-2 rounded-xl border border-brand/20 bg-brand/[0.06] px-4 py-3.5 text-sm font-medium text-brand-deep">
                <Check className="size-4 shrink-0" /> You&apos;re subscribed — new resources will land in your inbox.
              </p>
            ) : (
              <form onSubmit={newsletter.onSubmit} className="w-full md:w-1/2 flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border border-slate-300 px-4 py-3.5 text-sm outline-none focus:border-brand"
                />
                <button
                  type="submit"
                  disabled={newsletter.isSubmitting}
                  className="shrink-0 px-6 py-3.5 bg-brand hover:bg-brand-deep text-white text-sm font-bold rounded-xl transition-colors shadow-md disabled:opacity-70"
                >
                  {newsletter.isSubmitting ? "…" : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="site-px w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resourceFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden h-fit">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-navy text-sm">{faq.q}</span>
                    <ChevronDown className={`size-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs text-slate-600 leading-relaxed bg-white">
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
