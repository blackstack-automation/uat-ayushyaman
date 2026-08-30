"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Heart } from "lucide-react";
import { useState } from "react";

export function FreeConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    condition: "",
    location: "",
    insurance: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="free-consultation" className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-24 text-white">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 size-96 rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 size-96 rounded-full bg-brand/15 blur-3xl" />

      <div className="site-px w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Info & Bullet Points */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3.5 py-1 text-xs font-semibold text-cyan-300 border border-brand/30 mb-4">
              <Heart className="size-3.5 fill-cyan-300 text-cyan-300" />
              <span>FREE CONSULTATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
              Tell Us What You <br className="hidden sm:inline" />
              Need Help With.
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-white/80 leading-relaxed font-normal max-w-lg">
              Share a few details and a Care Buddy will reach out to understand your care requirements and guide your next steps — with no pressure, no cost.
            </p>

            {/* Check Bullet Points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/30 text-cyan-300 mt-0.5">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-xs sm:text-sm text-white/85 leading-normal">
                  Your information is used to help us understand your care requirements.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/30 text-cyan-300 mt-0.5">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-xs sm:text-sm text-white/85 leading-normal">
                  A dedicated Care Buddy contacts you — not a call centre.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/30 text-cyan-300 mt-0.5">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-xs sm:text-sm text-white/85 leading-normal">
                  Zero obligation. You decide if and when to proceed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Consultation Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="rounded-[28px] bg-white p-7 sm:p-9 text-navy shadow-2xl border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-navy tracking-tight">
                Book your free consultation
              </h3>
              <p className="mt-1 text-xs text-[#64748b]">
                We&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="mt-8 rounded-2xl bg-[#f0fdf4] p-6 text-center border border-brand/30">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand text-white mb-3">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-base font-bold text-navy">Request Received!</h4>
                  <p className="mt-1 text-xs text-[#64748b] leading-relaxed">
                    Thank you! Your Care Buddy will call you shortly to assist with your medical consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#cbd5e1] px-4 py-3 text-xs sm:text-sm text-navy placeholder-[#94a3b8] focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full rounded-xl border border-[#cbd5e1] px-4 py-3 text-xs sm:text-sm text-navy placeholder-[#94a3b8] focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Medical condition / surgery"
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      className="w-full rounded-xl border border-[#cbd5e1] px-4 py-3 text-xs sm:text-sm text-navy placeholder-[#94a3b8] focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Preferred location / city"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full rounded-xl border border-[#cbd5e1] px-4 py-3 text-xs sm:text-sm text-navy placeholder-[#94a3b8] focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                    />
                  </div>

                  <div>
                    <select
                      value={formData.insurance}
                      onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                      className="w-full rounded-xl border border-[#cbd5e1] px-4 py-3 text-xs sm:text-sm text-[#64748b] focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors bg-white"
                    >
                      <option value="">Select insurance status</option>
                      <option value="private">Private / Corporate Insurance</option>
                      <option value="govt">Government Health Scheme (Ayushman Bharat, etc.)</option>
                      <option value="none">Self-Pay / Cashless Query</option>
                      <option value="checking">Need help checking eligibility</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#022070] py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:bg-navy hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                  >
                    <span>Book Free Consultation</span>
                    <ArrowRight size={16} />
                  </button>

                  <p className="mt-3 text-center text-[10px] text-[#94a3b8]">
                    Your information is used to help us understand your care requirements.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
