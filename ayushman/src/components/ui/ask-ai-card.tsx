"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type AskAiCardProps = {
  /** Sentence shown above the button. */
  line?: string;
  /** The question sent to ChatGPT. The current page URL is appended automatically. */
  prompt: string;
  /** Button label. */
  cta?: string;
};

const DEFAULT_LINE =
  "Not ready to talk to us yet? Ask ChatGPT for a plain-language answer, then come back whenever you feel comfortable. We're here — always, and anytime.";

export function AskAiCard({
  line = DEFAULT_LINE,
  prompt,
  cta = "Ask ChatGPT",
}: AskAiCardProps) {
  const open = () => {
    const here = typeof window !== "undefined" ? window.location.href : "";
    const q = here ? `${prompt} (${here})` : prompt;
    window.open(
      `https://chatgpt.com/?q=${encodeURIComponent(q)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-navy/10 bg-white/70 p-5 shadow-[0_12px_34px_rgba(2,32,112,0.07)] backdrop-blur-sm sm:p-6"
    >
      <p className="text-[13.5px] leading-relaxed text-[#556171]">{line}</p>
      <button
        type="button"
        onClick={open}
        className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-deep"
      >
        <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 20.798a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.15a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 7.23V4.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
        </svg>
        {cta}
        <ArrowUpRight className="size-3.5" />
      </button>
    </motion.div>
  );
}
