"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { specialties } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function SpecialtyItem({ index }: { index: number }) {
  const spec = specialties[index];
  const [open, setOpen] = useState(false);
  const [flip, setFlip] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);

  const handleEnter = () => {
    setOpen(true);
    // flip left when the panel would overflow the viewport
    const rect = itemRef.current?.getBoundingClientRect();
    if (rect) setFlip(rect.left + 180 > window.innerWidth);
  };

  const scrollable = spec.items.length > 8;

  const triggerClass = cn(
    "flex items-center gap-1 whitespace-nowrap rounded px-2 py-3 text-[12px] font-medium text-white transition-colors 2xl:gap-1.5 2xl:px-3 2xl:text-[13.5px]",
    open && "bg-white/12",
  );
  const chevron = (
    <ChevronDown
      className={cn("size-2.5 transition-transform duration-250", open && "rotate-180")}
    />
  );

  return (
    <li
      ref={itemRef}
      className="relative shrink-0"
      onMouseEnter={handleEnter}
      onMouseLeave={() => setOpen(false)}
    >
      {spec.href ? (
        <Link href={spec.href} aria-expanded={open} className={triggerClass}>
          {spec.label}
          {chevron}
        </Link>
      ) : (
        <button type="button" aria-expanded={open} className={triggerClass}>
          {spec.label}
          {chevron}
        </button>
      )}

      {/* hover bridge */}
      <span className="absolute left-0 top-full h-3 w-full" />

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "absolute top-[calc(100%+12px)] z-[1000] min-w-[190px] list-none rounded-md border border-navy/8 bg-white py-2 shadow-[0_12px_28px_rgba(2,32,112,0.18)]",
              flip ? "right-0" : "left-0",
              scrollable && "scrollbar-brand max-h-80 overflow-y-auto pr-1",
            )}
          >
            {spec.href && (
              <li>
                <Link
                  href={spec.href}
                  className="block border-b border-navy/8 px-[18px] py-2 text-[13px] font-semibold text-brand transition-colors hover:bg-brand/8 hover:text-brand-deep"
                >
                  All {spec.label} treatments
                </Link>
              </li>
            )}
            {spec.items.map((item) => (
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
    </li>
  );
}

function MobileDrawer({ open }: { open: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden bg-white xl:hidden"
        >
          <div className="scrollbar-brand max-h-[80vh] overflow-y-auto py-2 pb-4">
            <ul className="list-none">
              {specialties.map((spec, i) => (
                <li key={spec.label} className="border-b border-[#f0f0f0]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                    className="flex w-full items-center justify-between px-5 py-3 text-sm font-medium text-navy"
                  >
                    {spec.label}
                    <ChevronDown
                      className={cn(
                        "size-2.5 transition-transform duration-250",
                        openIndex === i && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="list-none overflow-hidden bg-[#f8f9ff] pb-2"
                      >
                        {spec.href && (
                          <li>
                            <a
                              href={spec.href}
                              className="block px-8 py-2.5 text-[13px] font-semibold text-brand transition-colors hover:text-brand-deep"
                            >
                              All {spec.label} treatments
                            </a>
                          </li>
                        )}
                        {spec.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              className="block px-8 py-2.5 text-[13px] text-[#444] transition-colors hover:text-brand"
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="bg-topbar">
      <nav className="site-px flex flex-nowrap items-center">
        <div className="flex-1 max-xl:hidden">
          <ul className="flex list-none items-center justify-center gap-0.5 2xl:gap-1">
            {specialties.map((spec, i) => (
              <SpecialtyItem key={spec.label} index={i} />
            ))}
          </ul>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((v) => !v)}
          className="z-[1001] hidden cursor-pointer items-center gap-2.5 py-2.5 text-sm font-medium text-white max-xl:flex"
        >
          <span className="flex flex-col justify-center gap-[5px]">
            <motion.span
              animate={drawerOpen ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 rounded-sm bg-white"
            />
            <motion.span
              animate={{ opacity: drawerOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 rounded-sm bg-white"
            />
            <motion.span
              animate={drawerOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 rounded-sm bg-white"
            />
          </span>
          Specialties
        </button>
      </nav>

      <MobileDrawer open={drawerOpen} />
    </header>
  );
}
