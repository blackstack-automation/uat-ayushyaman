"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";
import { siteContact, telHref } from "@/lib/site-data";

/** Thumb-reach action bar. Mobile only — the two things a visitor came here to do. */
export function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={false}
      animate={visible ? { y: 0, opacity: 1 } : { y: 90, opacity: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden print:hidden"
    >
      <div className="flex gap-2.5">
        <a
          href={telHref(siteContact.phones[0])}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-navy/15 text-[14.5px] font-semibold text-navy"
        >
          <Phone className="size-4" />
          Call now
        </a>
        <a
          href="#enquiry"
          className="flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-xl bg-brand text-[14.5px] font-semibold text-white shadow-[0_8px_20px_rgba(7,151,148,0.32)]"
        >
          <CalendarCheck className="size-[17px]" />
          Book free consultation
        </a>
      </div>
    </motion.div>
  );
}
