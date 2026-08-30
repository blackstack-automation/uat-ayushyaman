"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  LoaderCircle,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { specialties } from "@/lib/site-data";

const field =
  "h-13 w-full rounded-xl border border-navy/12 bg-white pl-12 pr-4 text-[15px] text-navy outline-none transition-all placeholder:text-[#8a90a6] focus:border-brand focus:shadow-[0_0_0_3px_rgba(7,151,148,0.15)]";

const iconClass =
  "pointer-events-none absolute left-4 top-[26px] size-[17px] -translate-y-1/2 text-brand";

const labelClass = "mb-2 block text-[13px] font-medium text-navy";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // No submission endpoint is wired yet — swap this for the real POST.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex min-h-[520px] flex-col items-center justify-center rounded-2xl border border-navy/8 bg-white p-8 text-center shadow-[0_20px_50px_rgba(2,32,112,0.08)]"
      >
        <motion.span
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex size-16 items-center justify-center rounded-full bg-brand/12"
        >
          <Check className="size-8 text-brand" strokeWidth={2.5} />
        </motion.span>
        <h3 className="mt-6 text-2xl font-bold tracking-[-0.01em] text-navy">
          Request received
        </h3>
        <p className="mt-3 max-w-[42ch] text-[15px] leading-[1.65] text-[#556171]">
          A care coordinator will call you shortly to understand your concern and book
          your consultation.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-sm font-medium text-brand-deep underline underline-offset-4"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_20px_50px_rgba(2,32,112,0.08)] sm:p-8">
      <h2 className="text-[26px] font-bold tracking-[-0.015em] text-navy sm:text-[28px]">
        Book a free consultation
      </h2>
      <p className="mt-2 text-[14.5px] leading-[1.6] text-[#556171]">
        Tell us what you are dealing with. No charges, no obligation.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full name
            </label>
            <div className="relative">
              <UserRound className={iconClass} />
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className={field}
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone number
            </label>
            <div className="relative">
              <Phone className={iconClass} />
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                pattern="[0-9+\s-]{10,16}"
                placeholder="10-digit mobile"
                className={field}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="font-normal text-[#8a90a6]">(optional)</span>
          </label>
          <div className="relative">
            <Mail className={iconClass} />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={field}
            />
          </div>
        </div>

        <div>
          <label htmlFor="treatment" className={labelClass}>
            What do you need help with?
          </label>
          <div className="relative">
            <Stethoscope className={iconClass} />
            <select
              id="treatment"
              name="treatment"
              required
              defaultValue=""
              className={`${field} cursor-pointer appearance-none`}
            >
              <option value="" disabled>
                Select a speciality
              </option>
              {specialties.map((s) => (
                <option key={s.label} value={s.label}>
                  {s.label}
                </option>
              ))}
              <option value="Not sure">I&rsquo;m not sure yet</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-[26px] size-4 -translate-y-1/2 text-navy" />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Describe your symptoms{" "}
            <span className="font-normal text-[#8a90a6]">(optional)</span>
          </label>
          <div className="relative">
            <MessageSquare className="pointer-events-none absolute left-4 top-4 size-[17px] text-brand" />
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Since when, what you have tried so far, any reports you already have."
              className="w-full resize-y rounded-xl border border-navy/12 bg-white py-3.5 pl-12 pr-4 text-[15px] leading-[1.6] text-navy outline-none transition-all placeholder:text-[#8a90a6] focus:border-brand focus:shadow-[0_0_0_3px_rgba(7,151,148,0.15)]"
            />
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-[1.55] text-[#556171]">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[#079794]"
          />
          <span>
            I agree to be contacted about my enquiry and accept the{" "}
            <Link
              href="/legal/privacy-policy"
              className="font-medium text-brand-deep underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={status === "idle" ? { y: -2 } : undefined}
          whileTap={status === "idle" ? { y: 0, scale: 0.99 } : undefined}
          transition={{ duration: 0.2 }}
          className="group relative mt-1 flex h-14 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-brand text-base font-semibold text-white transition-shadow hover:shadow-[0_18px_36px_rgba(7,151,148,0.35)] disabled:cursor-not-allowed disabled:opacity-80"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "sending" ? (
              <motion.span
                key="sending"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2.5"
              >
                <LoaderCircle className="size-5 animate-spin" />
                Sending
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2.5"
              >
                <Send className="size-[18px]" />
                Request my free consultation
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        <p className="text-center text-[12.5px] text-[#8a90a6]">
          Your details are used only to arrange your care.
        </p>
      </form>
    </div>
  );
}
