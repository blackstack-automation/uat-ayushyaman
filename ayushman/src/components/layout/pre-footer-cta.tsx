"use client";

import { forwardRef, type CSSProperties } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { siteContact, telHref } from "@/lib/site-data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * The single warm invitation every page ends on. One brand-gradient panel.
 * The footer straddles its exact vertical centre (see Footer) so half sits
 * inside the footer and half outside.
 */
export const PreFooterCta = forwardRef<HTMLDivElement, { sectionStyle?: CSSProperties }>(
  function PreFooterCta({ sectionStyle }, ref) {
    const phone = siteContact.phones[0];

    return (
      <section
        className="site-px w-full bg-white pt-16 -mb-40 sm:pt-24"
        style={sectionStyle}
      >
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-20 overflow-hidden rounded-[1.75rem] px-6 py-11 text-center shadow-[0_28px_60px_-30px_rgba(2,32,112,0.45)] sm:px-14 sm:py-12"
          style={{
            backgroundImage: "linear-gradient(120deg, #163a6e 0%, #12545f 100%)",
          }}
        >
          {/* soft depth */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 -z-10 size-72 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 -z-10 size-72 rounded-full bg-white/[0.06] blur-3xl"
          />

          <motion.h2
            variants={item}
            className="mx-auto text-[clamp(1.45rem,3vw,2.2rem)] font-bold leading-[1.2] tracking-[-0.02em] text-white sm:whitespace-nowrap"
          >
            Not sure where to start? Talk to us first.
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-3 max-w-[52ch] text-[14.5px] leading-[1.6] text-white/80"
          >
            Share your condition and a care coordinator will help you understand your
            options, choose the right hospital and specialist, and plan the costs —
            free, and with no obligation.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap items-center justify-center gap-3.5"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a free consultation
              <ArrowRight className="size-4" />
            </a>
            <a
              href={telHref(phone)}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/70"
            >
              <Phone className="size-4" />
              {phone}
            </a>
          </motion.div>
        </motion.div>
      </section>
    );
  },
);
