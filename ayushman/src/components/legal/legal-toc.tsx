"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import type { LegalSection } from "@/lib/legal-content";
import { cn } from "@/lib/utils";

export function LegalToc({ sections }: { sections: LegalSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const onScroll = () => {
      // the section whose heading has most recently crossed the reading line
      const line = 140;
      let current = headings[0];
      for (const el of headings) {
        if (el.getBoundingClientRect().top <= line) current = el;
        else break;
      }
      // at the very bottom, the last section is the one being read
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80) {
        current = headings[headings.length - 1];
      }
      setActiveId(current.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  return (
    <nav aria-label="On this page" className="print:hidden">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-navy">
        On this page
      </p>
      <ul className="list-none space-y-0.5 border-l border-navy/10">
        {sections.map((section) => {
          const active = activeId === section.id;
          return (
            <li key={section.id} className="relative">
              {active && (
                <motion.span
                  layoutId="toc-marker"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute -left-px top-0 h-full w-0.5 bg-brand"
                />
              )}
              <a
                href={`#${section.id}`}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "block py-1.5 pl-4 pr-2 text-[13.5px] leading-snug transition-colors",
                  active
                    ? "font-medium text-navy"
                    : "text-[#6b7280] hover:text-brand-deep",
                )}
              >
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={false}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "fixed bottom-7 right-7 z-50 flex size-11 items-center justify-center rounded-full bg-navy text-white shadow-[0_10px_28px_rgba(2,32,112,0.28)] transition-colors hover:bg-brand print:hidden",
        !visible && "pointer-events-none",
      )}
    >
      <ArrowUp className="size-5" />
    </motion.button>
  );
}

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg border border-navy/15 bg-white px-4 py-2 text-[13px] font-medium text-navy transition-colors hover:border-brand hover:text-brand-deep print:hidden"
    >
      Print or save as PDF
    </button>
  );
}
