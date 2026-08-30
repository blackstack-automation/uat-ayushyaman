"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export type Crumb = { label: string; href?: string };

type PageHeroProps = {
  breadcrumb?: Crumb[];
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Optional element rendered on the right (lg+), stacked below on mobile. */
  aside?: React.ReactNode;
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.03 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Uniform page header. Orients the visitor calmly — where they are
 * (breadcrumb), what the page is (title), why it matters (one line).
 * The tint is weighted toward the content and dissolves into the page,
 * so there is no empty half — just an intentional wash of space.
 */
export function PageHero({
  breadcrumb,
  title,
  description,
  children,
  aside,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-navy/10 bg-[linear-gradient(100deg,#E8EFF1_0%,#F1F5F6_42%,#FCFDFE_100%)]">
      {/* Texture drifting into the open space on the right, fading toward the words */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(2,32,112,0.055) 1px, transparent 0)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(120% 140% at 100% 0%, black 0%, transparent 62%)",
          WebkitMaskImage:
            "radial-gradient(120% 140% at 100% 0%, black 0%, transparent 62%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 -z-10 size-[380px] rounded-full bg-brand/[0.07] blur-[110px]"
      />

      <div className="site-px w-full py-9 sm:py-12 lg:py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[62ch]"
        >
          {breadcrumb && breadcrumb.length > 0 && (
            <motion.nav variants={item} aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-[#6b7280]">
                {breadcrumb.map((crumb, i) => {
                  const isLast = i === breadcrumb.length - 1;
                  return (
                    <li key={crumb.label} className="flex items-center gap-2">
                      {i > 0 && (
                        <ChevronRight
                          className="size-3.5 text-[#a3aab8]"
                          aria-hidden="true"
                        />
                      )}
                      {crumb.href && !isLast ? (
                        <Link
                          href={crumb.href}
                          className="rounded underline-offset-4 transition-colors hover:text-brand-deep hover:underline hover:decoration-brand/40"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span
                          className={isLast ? "font-semibold text-navy" : undefined}
                          aria-current={isLast ? "page" : undefined}
                        >
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </motion.nav>
          )}

          <motion.h1
            variants={item}
            className="text-[clamp(1.7rem,6vw,3rem)] font-bold leading-[1.12] tracking-[-0.022em] text-navy"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={item}
              className="mt-4 text-[16px] leading-[1.6] text-[#556171]"
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div variants={item} className="mt-7">
              {children}
            </motion.div>
          )}
        </motion.div>

        {aside && <div className="w-full shrink-0 lg:max-w-[340px]">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
