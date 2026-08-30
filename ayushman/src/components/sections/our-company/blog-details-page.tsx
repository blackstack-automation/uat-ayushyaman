"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, Check } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";

export function BlogDetailsPageSection({ slug }: { slug: string }) {
  // Format slug to title
  const title = (slug || "blog-post")
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen flex flex-col">
      <SiteHeader />
      
      {/* 1. Header Section */}
      <section className="bg-white py-12 sm:py-20 relative overflow-hidden border-b border-slate-100 shrink-0">
        <div className="site-px mx-auto max-w-4xl relative z-10 text-center">
          <Link href="/our-company/blogs" className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:text-brand-deep transition-colors mb-8">
            <ArrowLeft className="size-4" /> Back to Blogs
          </Link>
          
          <div className="flex items-center justify-center gap-4 text-xs font-medium text-slate-500 mb-6">
            <span className="bg-teal-50 text-brand px-3 py-1 rounded-full uppercase tracking-wider font-bold">Surgery Guides</span>
            <span className="flex items-center gap-1.5"><Calendar className="size-3.5" /> 20 Aug 2026</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> 8 min read</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight text-navy"
          >
            {title}
          </motion.h1>

          <div className="flex items-center justify-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <Share2 className="size-4" /> Share Article
            </button>
          </div>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-12 sm:py-16 flex-1">
        <div className="site-px mx-auto max-w-3xl">
          {/* Hero Image */}
          <div className="w-full aspect-video bg-slate-200 rounded-3xl mb-12 overflow-hidden relative shadow-lg">
             {/* Placeholder for actual image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-navy/10 to-transparent" />
          </div>

          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-slate-600 mb-8 leading-relaxed">
              This is a dynamic blog post page for <strong>"{title}"</strong>. In a real application, this content would be fetched from a CMS like Sanity, WordPress, or a markdown file.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mt-12 mb-6">Understanding the Basics</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              When it comes to surgical procedures, having the right information is the first step towards a successful recovery. At Ayushman Surgicare, we believe in empowering our patients with knowledge.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Whether you are preparing for a major orthopaedic surgery, exploring minimally invasive options, or trying to understand your insurance coverage, our Care Buddy team is here to help you every step of the way.
            </p>

            <div className="bg-teal-50 border-l-4 border-brand p-6 rounded-r-2xl my-10">
              <h4 className="font-bold text-navy text-lg mb-2">Key Takeaway</h4>
              <p className="text-sm text-teal-900 m-0 leading-relaxed">
                Always consult with a vetted specialist before making any surgical decisions. A second opinion can often provide clarity and peace of mind.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-12 mb-6">The Recovery Journey</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Surgery is only half the journey. The recovery phase is where long-term outcomes are truly determined. Our 90-day Care Buddy program ensures that you have access to physiotherapy, follow-up consultations, and nursing support right from the comfort of your home.
            </p>

            <ul className="space-y-4 my-8 list-none pl-0">
              {[
                "Strict adherence to prescribed medication schedules.",
                "Attending all scheduled physiotherapy sessions.",
                "Maintaining a balanced, protein-rich diet.",
                "Reporting any unusual symptoms to your Care Buddy immediately."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="size-5 text-brand mt-0.5 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this guide or want to explore your surgical options, feel free to book a free consultation with our medical team.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-200">
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 text-center border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-navy mb-4">Ready to take the next step?</h3>
              <p className="text-slate-600 mb-8 max-w-lg mx-auto">Get free, expert guidance for your surgical needs from our medical advisory team.</p>
              <button className="px-8 py-4 bg-brand hover:bg-brand-deep text-white font-bold rounded-xl shadow-md transition-colors text-sm">
                Book Free Consultation
              </button>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
