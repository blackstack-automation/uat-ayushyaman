"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export type MockSubmitStatus = "idle" | "submitting" | "success";

/**
 * Front-end-only form submission. There is no backend — on submit we
 * briefly show a "submitting" state, then a persistent success state.
 * Swap `wait` for a real POST when an endpoint exists.
 */
export function useMockSubmit(delay = 650) {
  const [status, setStatus] = useState<MockSubmitStatus>("idle");

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus((prev) => {
        if (prev !== "idle") return prev;
        window.setTimeout(() => setStatus("success"), delay);
        return "submitting";
      });
    },
    [delay],
  );

  const reset = useCallback(() => setStatus("idle"), []);

  return { status, onSubmit, reset, isSubmitting: status === "submitting" };
}

type FormSuccessProps = {
  title?: string;
  message?: string;
  tone?: "light" | "dark";
  onReset?: () => void;
  resetLabel?: string;
  className?: string;
};

export function FormSuccess({
  title = "Thank you — we have your details",
  message = "Our team will review your request and get back to you shortly.",
  tone = "light",
  onReset,
  resetLabel = "Submit another response",
  className = "",
}: FormSuccessProps) {
  const dark = tone === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border p-6 text-center sm:p-8 ${
        dark ? "border-white/15 bg-white/[0.06]" : "border-brand/20 bg-brand/[0.04]"
      } ${className}`}
    >
      <motion.span
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
        className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand text-white"
      >
        <CheckCircle2 className="size-6" />
      </motion.span>
      <h3 className={`mt-4 text-lg font-bold ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h3>
      <p
        className={`mt-1.5 text-sm leading-relaxed ${
          dark ? "text-white/70" : "text-[#556171]"
        }`}
      >
        {message}
      </p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className={`mt-5 text-[13px] font-semibold underline underline-offset-4 ${
            dark ? "text-white/80 hover:text-white" : "text-brand-deep hover:text-brand"
          }`}
        >
          {resetLabel}
        </button>
      )}
    </motion.div>
  );
}
