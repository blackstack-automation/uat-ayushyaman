import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { AskAiCard } from "@/components/ui/ask-ai-card";
import {
  TreatmentBlogs,
  TreatmentTestimonials,
} from "@/components/sections/treatment/treatment-extras";
import type { BlogPost } from "@/lib/blog";
import type { Specialty } from "@/lib/treatments";

export function SpecialtyPage({
  specialty,
  relatedPosts,
}: {
  specialty: Specialty;
  relatedPosts: BlogPost[];
}) {
  return (
    <section className="bg-white font-sans text-navy">
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: specialty.label }]}
        title={specialty.label}
        description={specialty.blurb}
        aside={
          <AskAiCard
            line={`Prefer to read up first? Ask ChatGPT to explain ${specialty.label.toLowerCase()} conditions and treatments in plain language, then come back with your questions. We're here — always, and anytime.`}
            prompt={`I'm on the Ayushman Surgicare website looking at the ${specialty.label} specialty. Give me a plain-language overview of the conditions this covers, the common treatments, and how to know which one might apply to me.`}
          />
        }
      />

      {/* Treatments grid */}
      <div className="site-px w-full py-12 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            Treatments
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {specialty.label} procedures we coordinate
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#556171] sm:text-base">
            Every treatment includes specialist consultation, diagnostics, hospital and
            insurance coordination, and 90 days of Care Buddy follow-up.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {specialty.treatments.map((t) => (
            <Link
              key={t.slug}
              href={`/${specialty.slug}/${t.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-navy/8 bg-white p-6 shadow-[0_4px_20px_rgba(2,32,112,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_24px_50px_rgba(2,32,112,0.12)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold leading-snug text-navy transition-colors group-hover:text-brand">
                  {t.title}
                </h3>
                <ArrowUpRight className="mt-0.5 size-5 shrink-0 text-navy/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </div>
              <p className="mt-3 line-clamp-3 flex-1 text-[13px] leading-relaxed text-[#556171]">
                {t.overview[0]}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 border-t border-navy/6 pt-4 text-xs font-bold text-brand">
                View treatment
                <ArrowUpRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <TreatmentTestimonials items={specialty.testimonials} />
      <TreatmentBlogs posts={relatedPosts} />
    </section>
  );
}
