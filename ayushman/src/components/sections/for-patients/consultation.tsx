"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { specialties } from "@/lib/site-data";

export function PatientConsultationSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    condition: "",
    location: "",
    insuranceStatus: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white text-navy font-sans">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "For Patients" },
          { label: "Consultation" },
        ]}
        title="Patient Consultation"
        description="Expert surgical guidance, completely free. No hidden charges, no obligations."
      />

      {/* Main Content Grid: Consultation Steps & Booking Form */}
      <div className="site-px w-full py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: How Consultation Works & Checklist */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                How consultation works
              </h2>

              {/* 4 Numbered Steps */}
              <div className="mt-8 space-y-7">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <div className="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white font-bold text-base shadow-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-navy">
                      Submit your details
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Fill the form with your name, phone number, and the surgery or treatment you need.
                    </p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <div className="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white font-bold text-base shadow-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-navy">
                      We review your case
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Our medical coordinator reviews your information and identifies the right specialist.
                    </p>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <div className="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white font-bold text-base shadow-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-navy">
                      Call within 2 hours
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A specialist or coordinator calls you to understand your condition in detail.
                    </p>
                  </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <div className="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white font-bold text-base shadow-sm">
                    4
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-navy">
                      Treatment recommendation
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      We recommend the best treatment path, hospital options, and cost estimates.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* What's included in the consultation Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="rounded-2xl bg-[#eaf7f5] p-6 sm:p-7 border border-[#ccede7] shadow-sm"
            >
              <h3 className="text-base sm:text-lg font-bold text-navy">
                What&apos;s included in the consultation
              </h3>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-navy font-medium">
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 text-brand shrink-0 stroke-[2.5]" />
                  <span>Insurance eligibility check</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 text-brand shrink-0 stroke-[2.5]" />
                  <span>Hospital recommendations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 text-brand shrink-0 stroke-[2.5]" />
                  <span>Rough cost estimate</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 text-brand shrink-0 stroke-[2.5]" />
                  <span>Surgery timeline</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 text-brand shrink-0 stroke-[2.5]" />
                  <span>Care Buddy enrollment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 text-brand shrink-0 stroke-[2.5]" />
                  <span>Second opinion coordination</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Book Your Free Consultation Form Card */}
          <div className="lg:col-span-5 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white p-7 sm:p-9 border border-slate-200/80 shadow-[0_15px_35px_rgba(2,32,112,0.06)] h-full flex flex-col"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-navy">
                  Book Your Free Consultation
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                  Our team will call you within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="mt-6 flex-1 rounded-2xl bg-teal-50 border border-teal-200 p-6 flex flex-col items-center justify-center text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="size-6 stroke-[3]" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-navy">
                    Consultation Request Received!
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Thank you! Our medical coordinator will call you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex-1 flex flex-col justify-between space-y-2">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-navy placeholder:text-slate-400 outline-none focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="mobile" className="sr-only">Mobile Number</label>
                    <input
                      id="mobile"
                      type="tel"
                      required
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-navy placeholder:text-slate-400 outline-none focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>

                  {/* Medical Condition */}
                  <div>
                    <label htmlFor="condition" className="sr-only">Medical Condition</label>
                    <input
                      id="condition"
                      type="text"
                      required
                      placeholder="Medical Condition"
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-navy placeholder:text-slate-400 outline-none focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>

                  {/* Preferred Location */}
                  <div>
                    <label htmlFor="location" className="sr-only">Preferred Location</label>
                    <input
                      id="location"
                      type="text"
                      required
                      placeholder="Preferred Location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-navy placeholder:text-slate-400 outline-none focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>

                  {/* Insurance Status */}
                  <div>
                    <label htmlFor="insuranceStatus" className="sr-only">Insurance Status</label>
                    <select
                      id="insuranceStatus"
                      required
                      value={formData.insuranceStatus}
                      onChange={(e) => setFormData({ ...formData, insuranceStatus: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-navy outline-none focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20 transition-all invalid:text-slate-400"
                    >
                      <option value="" disabled hidden>Insurance Status</option>
                      <option value="insured" className="text-navy">Yes, I have insurance</option>
                      <option value="uninsured" className="text-navy">No, I do not have insurance</option>
                      <option value="unsure" className="text-navy">I am not sure</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand py-4 text-sm font-bold text-white shadow-md hover:bg-[#0b7c72] active:scale-[0.99] transition-all duration-200 cursor-pointer mt-2"
                  >
                    Book Free Consultation
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
