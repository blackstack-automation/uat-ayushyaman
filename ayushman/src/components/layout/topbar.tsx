"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { socialIcons } from "@/components/icons/social";
import { siteContact, socialLinks, telHref, topbarMenus } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Topbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (!barRef.current?.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={barRef} className="relative bg-white py-2.5 text-navy border-b border-navy/5">
      <div className="site-px mx-auto flex w-full items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="mr-2 shrink-0 lg:mr-6" onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/images/logo/AyushmanSurgicareLogoFull.png"
            alt="Ayushman Surgicare"
            width={420}
            height={120}
            priority
            className="h-[42px] w-auto lg:h-[50px]"
          />
        </Link>

        {/* Contact info (Desktop) */}
        <div className="shrink-0 max-xl:hidden">
          <ul className="flex items-center">
            <li>
              <a
                href={telHref(siteContact.phones[0])}
                aria-label={`Call ${siteContact.phones[0]}`}
                className="flex items-center gap-2.5 text-sm text-navy transition-colors hover:text-brand"
              >
                <Phone className="size-4 shrink-0" />
                {siteContact.phones[0]}
              </a>
            </li>
            <li className="ml-5 border-l border-navy/15 pl-5">
              <a
                href={`mailto:${siteContact.email}`}
                aria-label={`Email ${siteContact.email}`}
                className="flex items-center gap-2.5 text-sm text-navy transition-colors hover:text-brand"
              >
                <Mail className="size-4 shrink-0" />
                {siteContact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Dropdown menus (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-end">
          <div className="flex items-center gap-6">
            {topbarMenus.map((menu, i) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) setOpenIndex(i);
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 1024) setOpenIndex(null);
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className={cn(
                    "flex cursor-pointer items-center gap-1.5 whitespace-nowrap text-[13px] font-medium transition-colors",
                    openIndex === i ? "text-brand" : "text-navy hover:text-brand",
                  )}
                >
                  {menu.label}
                  <ChevronDown
                    className={cn(
                      "size-2.5 transition-transform duration-250",
                      openIndex === i && "rotate-180",
                    )}
                  />
                </button>

                {/* hover bridge */}
                <span className="absolute left-0 top-full h-3.5 w-full" />

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.ul
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute z-[1500] list-none rounded-md border border-navy/8 bg-white py-2 shadow-[0_8px_24px_rgba(2,32,112,0.14)] left-1/2 top-[calc(100%+14px)] min-w-40 -translate-x-1/2"
                    >
                      {menu.items.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className="block px-[18px] py-2 text-[13px] text-navy transition-colors hover:bg-brand/8 hover:text-brand"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Social (Desktop) */}
        <div className="shrink-0 max-lg:hidden">
          <div className="ml-5 border-l border-navy/15 pl-5">
            <ul className="flex items-center gap-4">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="block text-navy transition-colors hover:text-brand"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Icon (3 lines menu icon) on the right side */}
        <button
          type="button"
          aria-label="Toggle top menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="z-[1001] cursor-pointer items-center justify-center p-2 rounded-lg text-navy hover:bg-navy/5 transition-colors lg:hidden"
        >
          <span className="flex flex-col justify-center gap-[5px]">
            <motion.span
              animate={mobileMenuOpen ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 rounded-sm bg-navy"
            />
            <motion.span
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 rounded-sm bg-navy"
            />
            <motion.span
              animate={mobileMenuOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 rounded-sm bg-navy"
            />
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-navy/10 bg-white lg:hidden"
          >
            <div className="scrollbar-brand max-h-[75vh] overflow-y-auto site-px py-3">
              <ul className="list-none divide-y divide-navy/8">
                {topbarMenus.map((menu, i) => (
                  <li key={menu.label} className="py-1">
                    <button
                      type="button"
                      onClick={() => setMobileOpenIndex(mobileOpenIndex === i ? null : i)}
                      aria-expanded={mobileOpenIndex === i}
                      className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-navy transition-colors hover:text-brand"
                    >
                      <span>{menu.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-4 text-navy/60 transition-transform duration-250",
                          mobileOpenIndex === i && "rotate-180 text-brand"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileOpenIndex === i && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="list-none overflow-hidden rounded-lg bg-navy/[0.03] my-1 py-1.5"
                        >
                          {menu.items.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 text-xs font-medium text-navy/80 hover:bg-brand/10 hover:text-brand transition-colors"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>

              {/* Contact Details & Social Links on Mobile */}
              <div className="mt-4 border-t border-navy/10 pt-4 space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-navy/50">Contact & Support</p>
                <div className="flex flex-col gap-2">
                  {siteContact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={telHref(phone)}
                      className="flex items-center gap-2.5 text-xs text-navy font-medium transition-colors hover:text-brand"
                    >
                      <Phone className="size-3.5 text-brand shrink-0" />
                      {phone}
                    </a>
                  ))}
                  <a
                    href={`mailto:${siteContact.email}`}
                    className="flex items-center gap-2.5 text-xs text-navy font-medium transition-colors hover:text-brand"
                  >
                    <Mail className="size-3.5 text-brand shrink-0" />
                    {siteContact.email}
                  </a>
                </div>

                {/* Social Icons */}
                <div className="pt-2 flex items-center gap-3">
                  {socialLinks.map((s) => {
                    const Icon = socialIcons[s.icon];
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="flex size-8 items-center justify-center rounded-full bg-navy/5 text-navy hover:bg-brand hover:text-white transition-colors"
                      >
                        <Icon className="size-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

