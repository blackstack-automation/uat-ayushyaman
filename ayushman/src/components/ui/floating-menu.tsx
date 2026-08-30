"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Headset, Phone, X } from "lucide-react";
import { siteContact, telHref } from "@/lib/site-data";

const phone = siteContact.phones[0];
const phoneDigits = phone.replace(/[^\d]/g, "");

const chatGptPrompt =
  "What is Ayushman Surgicare and how do they support patients through surgery and recovery?";

type MenuItem = {
  label: string;
  description: string;
  href: string;
  external?: boolean;
  iconWrap: string;
  icon: React.ReactNode;
};

const items: MenuItem[] = [
  {
    label: "WhatsApp",
    description: "Chat with a Care Buddy",
    href: `https://wa.me/${phoneDigits}`,
    external: true,
    iconWrap: "bg-[#25D366]/12 text-[#128C4A]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-[18px] fill-current" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
      </svg>
    ),
  },
  {
    label: "Call us",
    description: phone,
    href: telHref(phone),
    iconWrap: "bg-navy/8 text-navy",
    icon: <Phone className="size-[17px]" />,
  },
  {
    label: "Ask ChatGPT",
    description: "See what it says about us",
    href: `https://chatgpt.com/?q=${encodeURIComponent(chatGptPrompt)}`,
    external: true,
    iconWrap: "bg-[#10a37f]/12 text-[#0d8a6c]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-[17px] fill-current" aria-hidden>
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 20.798a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.15a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 7.23V4.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
];

export function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-6 right-6 z-[900] flex flex-col items-end gap-3"
    >
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label="Contact options"
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "bottom right" }}
            className="w-[290px] overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-[0_24px_60px_rgba(2,32,112,0.22)]"
          >
            <div className="border-b border-navy/8 bg-[#f8fafc] px-4 py-3">
              <p className="text-[13px] font-bold text-navy">How can we help?</p>
              <p className="mt-0.5 text-[11px] text-[#64748b]">
                Reach us the way you prefer.
              </p>
            </div>

            <ul className="m-0 list-none divide-y divide-navy/6 p-0">
              {items.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.2, ease: "easeOut" }}
                >
                  <a
                    role="menuitem"
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-brand/[0.06]"
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${item.iconWrap}`}
                    >
                      {item.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13.5px] font-semibold text-navy">
                        {item.label}
                      </span>
                      <span className="block truncate text-[11.5px] text-[#64748b]">
                        {item.description}
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-navy/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={open ? "Close contact menu" : "Contact us — WhatsApp, call or ask ChatGPT"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-brand to-[#022070] text-white shadow-[0_14px_34px_rgba(2,32,112,0.28)]"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              <X className="size-6" strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              <Headset className="size-6" strokeWidth={2} />
            </motion.span>
          )}
        </AnimatePresence>

        {/* availability pulse */}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex size-3.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-70" />
            <span className="relative inline-flex size-3.5 rounded-full border-2 border-white bg-[#25D366]" />
          </span>
        )}
      </motion.button>
    </div>
  );
}
