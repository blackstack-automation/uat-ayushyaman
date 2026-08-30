"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, ChevronDown, MessageCircle, Phone, Star, Stethoscope, User } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { FormSuccess, useMockSubmit } from "@/components/ui/mock-form";
import { heroStats, specialties } from "@/lib/site-data";

const doctorAvatars = [1, 2, 3, 4].map((n) => `/images/excerpt-doctor-img-${n}.jpg`);

const fieldClass =
  "h-[54px] w-full rounded-xl border border-navy/12 bg-white/85 pl-[46px] pr-[18px] text-[15px] text-navy outline-none transition-all placeholder:text-[#8a90a6] focus:border-brand focus:shadow-[0_0_0_3px_rgba(7,151,148,0.15)]";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const { status, onSubmit, reset, isSubmitting } = useMockSubmit();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f7fb_100%)] pb-14 pt-10 sm:pb-[70px] sm:pt-[60px]">
      <div className="site-px relative z-10 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left column */}
          <div className="relative z-20">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-[22px] inline-flex items-center gap-[9px] rounded-full border border-navy/8 bg-white/70 px-[18px] py-2 text-[13px] font-semibold uppercase tracking-[0.02em] text-navy shadow-[0_6px_18px_rgba(2,32,112,0.06)] backdrop-blur-[10px]"
            >
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 0 3px rgba(7,151,148,0.22)",
                    "0 0 0 7px rgba(7,151,148,0)",
                    "0 0 0 3px rgba(7,151,148,0.22)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="size-[9px] rounded-full bg-brand"
              />
              Your Health, Our Priority
            </motion.h3>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-[clamp(1.9rem,6vw,4rem)] font-bold leading-[1.12] tracking-[-0.02em] text-navy"
            >
              Your Trusted Surgery <span className="text-brand">& Hospital Care Partner</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-4 max-w-[480px] text-base leading-[1.6] text-[#475068] sm:mt-6 sm:text-lg"
            >
              Connecting patients to the right hospital, Doctors and treatment.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-8 grid grid-cols-2 gap-x-3 gap-y-4 sm:mt-9 sm:flex sm:max-w-[580px] sm:items-center sm:gap-0"
            >
              {heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group relative flex cursor-default flex-col items-center gap-1.5 px-2 pb-2.5 pt-1.5 text-center sm:flex-1 sm:px-4 ${
                    i > 0 ? "sm:border-l sm:border-navy/12" : ""
                  }`}
                >
                  <h3 className="m-0 text-[26px] font-extrabold leading-none tracking-[-0.01em] text-navy transition-all duration-300 group-hover:scale-110 group-hover:text-brand sm:text-[30px]">
                    <Counter to={stat.value} />
                    {stat.suffix}
                  </h3>
                  <p className="m-0 text-[11px] font-semibold uppercase leading-[1.3] tracking-[0.04em] text-[#6b7280] transition-colors duration-300 group-hover:text-navy">
                    {stat.label}
                  </p>
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-sm bg-[linear-gradient(90deg,#079794,#022070)] transition-[width] duration-300 group-hover:w-3/5" />
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons: Get Cost Estimate & Talk to Care Buddy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-8 flex items-center gap-3 sm:flex-wrap sm:gap-3.5"
            >
              <a
                href="#free-consultation"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand px-3 py-3 text-[13px] font-bold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-[#0b7c72] active:scale-[0.98] sm:flex-none sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
              >
                <span>Get Cost Estimate</span>
                <span className="text-sm sm:text-base">→</span>
              </a>

              <a
                href="#care-buddy"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#022070] px-3 py-3 text-[13px] font-bold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-navy active:scale-[0.98] sm:flex-none sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
              >
                <MessageCircle className="size-4 shrink-0 text-white sm:size-[18px]" />
                <span>Talk to Care Buddy</span>
              </a>
            </motion.div>

            {/* Google rating */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
              className="mt-10 border-t border-[#55617124] pt-5"
            >
              <div className="flex flex-wrap items-center gap-3 text-navy">
                <span className="inline-flex items-center gap-2 font-bold text-navy">5 star care</span>

                <div className="inline-flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-[#FFA800] text-[#FFA800]" />
                  ))}
                </div>

                <span className="inline-flex items-center text-sm text-[#556171]">from your first call to full recovery.</span>
              </div>
            </motion.div>
          </div>

          {/* Right column — lead form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[460px] pb-0 sm:pb-[34px] lg:ml-auto"
          >
            <div className="relative rounded-[22px] border border-navy/6 bg-white px-5 pb-8 pt-7 shadow-[0_30px_60px_rgba(2,32,112,0.12),0_4px_14px_rgba(2,32,112,0.05)] sm:px-8 sm:pb-9 sm:pt-[34px]">
              <div className="mb-6">
                <h2 className="m-0 mb-1.5 text-[28px] font-bold tracking-[-0.01em] text-navy">
                  Book Free Consultation
                </h2>
                <p className="m-0 text-sm text-[#556171]">
                  Get expert medical advice — no charges, no obligations.
                </p>
              </div>

              {status === "success" ? (
                <FormSuccess
                  title="Request received"
                  message="Thanks! A care coordinator will call you shortly to book your free consultation."
                  onReset={reset}
                />
              ) : (
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="relative">
                  <User className="pointer-events-none absolute left-[18px] top-1/2 size-[15px] -translate-y-1/2 text-brand" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className={fieldClass}
                  />
                </div>

                <div className="relative">
                  <Phone className="pointer-events-none absolute left-[18px] top-1/2 size-[15px] -translate-y-1/2 text-brand" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className={fieldClass}
                  />
                </div>

                <div className="relative">
                  <Stethoscope className="pointer-events-none absolute left-[18px] top-1/2 size-[15px] -translate-y-1/2 text-brand" />
                  <select
                    name="treatment"
                    required
                    defaultValue=""
                    className={`${fieldClass} cursor-pointer appearance-none`}
                  >
                    <option value="" disabled>
                      Select Treatment
                    </option>
                    {specialties.map((s) => (
                      <option key={s.label} value={s.label}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-[18px] top-1/2 size-3 -translate-y-1/2 text-navy" />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? undefined : { y: -3, scale: 1.02 }}
                  whileTap={isSubmitting ? undefined : { y: -1, scale: 0.99 }}
                  transition={{ duration: 0.25 }}
                  className="group relative mt-1.5 h-14 w-full cursor-pointer overflow-hidden rounded-xl bg-brand text-base font-semibold text-white transition-shadow hover:shadow-[0_18px_36px_rgba(7,151,148,0.38)] disabled:cursor-not-allowed disabled:opacity-80"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Submitting…" : "Book My Free Consultation"}
                  </span>
                  <span className="absolute left-[-120%] top-0 h-full w-3/5 -skew-x-12 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] transition-[left] duration-700 group-hover:left-[130%]" />
                </motion.button>
              </form>
              )}

              {/* Partner hospitals badge */}
              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[22px] right-4 z-20 hidden items-center gap-2.5 rounded-full border border-navy/6 bg-white py-2 pl-2 pr-[18px] shadow-[0_12px_28px_rgba(2,32,112,0.14)] sm:flex"
              >
                <span className="flex size-[34px] items-center justify-center rounded-full bg-brand/12 text-brand">
                  <Building2 className="size-4" />
                </span>
                <p className="m-0 whitespace-nowrap text-[13px] font-semibold text-navy">
                  <Counter to={15} />+ Partner Hospitals
                </p>
              </motion.div>
            </div>

            {/* Doctors badge */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden translate-y-1/2 items-center justify-between px-3.5 sm:flex">
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-auto flex items-center gap-2.5 rounded-full border border-navy/6 bg-white py-2 pl-2 pr-4 shadow-[0_12px_28px_rgba(2,32,112,0.14)]"
              >
                <div className="flex">
                  {doctorAvatars.map((src, i) => (
                    <span
                      key={src}
                      className={`relative size-[34px] overflow-hidden rounded-full border-2 border-white ${
                        i > 0 ? "-ml-3" : ""
                      }`}
                    >
                      <Image src={src} alt="" fill sizes="34px" className="object-cover" />
                    </span>
                  ))}
                </div>
                <p className="m-0 whitespace-nowrap text-[13px] font-semibold text-navy">
                  <Counter to={50} />+ Doctors
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
