"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  CardiologyIcon,
  ENTIcon,
  GastroenterologyIcon,
  GeneralSurgeryIcon,
  GynecologyIcon,
  OncologyIcon,
  OrthopedicsIcon,
  ProctologyIcon,
  UrologyIcon,
} from "@/components/icons/specialty-icons";

type Specialty = {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  blurb: string;
  procedures: string[];
  href: string;
};

const specialties: Specialty[] = [
  {
    id: "general-surgery",
    title: "General Surgery",
    icon: GeneralSurgeryIcon,
    blurb:
      "Hernia, gallbladder and appendix procedures — keyhole where possible, for a faster recovery.",
    procedures: ["Hernia", "Gallstones", "Appendicitis"],
    href: "#specialties",
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    icon: GastroenterologyIcon,
    blurb:
      "Digestive-system conditions handled end to end, from diagnosis through surgical care.",
    procedures: ["Gallstones", "Piles", "Fissure"],
    href: "#specialties",
  },
  {
    id: "urology",
    title: "Urology",
    icon: UrologyIcon,
    blurb:
      "Kidney stones, prostate and men's-health procedures with discreet, expert care.",
    procedures: ["Kidney Stones", "Circumcision", "Prostate"],
    href: "#specialties",
  },
  {
    id: "gynaecology",
    title: "Gynaecology",
    icon: GynecologyIcon,
    blurb:
      "Women's-health surgery handled with privacy, sensitivity and specialist coordination.",
    procedures: ["Ovarian Cyst", "Fibroids", "Hysterectomy"],
    href: "/gynaecology/ovarian-cyst",
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    icon: OrthopedicsIcon,
    blurb:
      "Joint replacement, spine and sports-injury surgery, with physiotherapy built into recovery.",
    procedures: ["Knee Replacement", "ACL Tear", "Spine Surgery"],
    href: "#specialties",
  },
  {
    id: "ent",
    title: "ENT",
    icon: ENTIcon,
    blurb:
      "Ear, nose and throat procedures that give lasting relief from recurring problems.",
    procedures: ["Tonsillectomy", "Sinus Surgery", "Septoplasty"],
    href: "#specialties",
  },
  {
    id: "proctology",
    title: "Proctology",
    icon: ProctologyIcon,
    blurb:
      "Near-painless laser treatment for piles, fissure and fistula — most cases go home the same day.",
    procedures: ["Piles", "Fistula", "Fissure"],
    href: "/proctology/piles-treatment",
  },
  {
    id: "oncology",
    title: "Oncology",
    icon: OncologyIcon,
    blurb:
      "Coordinated surgical cancer care with multi-specialty planning and insurance support.",
    procedures: ["Tumour Removal", "Biopsy", "Reconstruction"],
    href: "#specialties",
  },
  {
    id: "cardiology",
    title: "Cardiology",
    icon: CardiologyIcon,
    blurb:
      "Heart procedures with senior cardiac specialists and full pre- and post-op coordination.",
    procedures: ["Angioplasty", "Bypass", "Valve Repair"],
    href: "#specialties",
  },
];

function SpecialtyCard({ item, index }: { item: Specialty; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="w-[80vw] max-w-[300px] shrink-0 snap-start sm:w-[300px] sm:max-w-none"
    >
      <Link
        href={item.href}
        className="group flex h-full flex-col rounded-3xl border border-navy/8 bg-white p-6 shadow-[0_4px_20px_rgba(2,32,112,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_24px_50px_rgba(2,32,112,0.12)] sm:p-7"
      >
        <div className="flex items-start justify-between">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand group-hover:to-navy group-hover:text-white">
            <Icon size={30} />
          </span>
          <ArrowUpRight className="size-5 text-navy/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
        </div>

        <h3 className="mt-5 text-lg font-bold text-navy transition-colors group-hover:text-brand">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#556171]">
          {item.blurb}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-navy/6 pt-4">
          {item.procedures.map((p) => (
            <span
              key={p}
              className="rounded-full bg-[#f1f5f9] px-2.5 py-1 text-[11px] font-medium text-navy/70 transition-colors group-hover:bg-brand/10 group-hover:text-brand"
            >
              {p}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

export function SpecializedCare() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);

  const syncArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
    setProgress(max > 0 ? Math.min(100, (el.scrollLeft / max) * 100) : 0);
  }, []);

  useEffect(() => {
    syncArrows();
    window.addEventListener("resize", syncArrows);
    return () => window.removeEventListener("resize", syncArrows);
  }, [syncArrows]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  // pointer drag-to-scroll (desktop mouse)
  const drag = useRef({ active: false, startX: 0, startLeft: 0 });
  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || e.pointerType !== "mouse") return;
    drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;
    el.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX);
  };
  const endDrag = () => {
    drag.current.active = false;
  };

  return (
    <section className="relative overflow-hidden bg-[#fafbfc] py-14 sm:py-16 lg:py-20 border-b border-navy/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-brand/[0.06] blur-[110px]"
      />

      <div className="site-px w-full relative">
        {/* Header + controls */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-brand"
            >
              Our Specialities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-2 text-2xl sm:text-3xl lg:text-[34px] font-bold text-navy tracking-tight leading-tight"
            >
              Find Specialized Care Near You
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="mt-3 text-sm sm:text-base text-[#556171] leading-relaxed"
            >
              Coordinated surgical care across 12+ specialities — advanced technology,
              vetted specialists and faster recovery.
            </motion.p>
          </div>

          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              disabled={!canPrev}
              aria-label="Previous specialities"
              className="flex size-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-sm transition-all hover:border-brand hover:bg-brand hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-35"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              disabled={!canNext}
              aria-label="Next specialities"
              className="flex size-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-sm transition-all hover:border-brand hover:bg-brand hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-35"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          onScroll={syncArrows}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="-mx-[2.5%] mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-[2.5%] px-[2.5%] pb-4 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:mt-12 sm:scroll-pl-0 sm:gap-5 sm:px-0 [&::-webkit-scrollbar]:hidden"
          style={{ cursor: "grab" }}
        >
          {specialties.map((item, i) => (
            <SpecialtyCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Mobile progress bar */}
        <div className="mt-4 flex items-center gap-3 sm:hidden">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-navy/10">
            <div
              className="h-full rounded-full bg-brand transition-[width] duration-150 ease-out"
              style={{ width: `${Math.max(12, progress)}%` }}
            />
          </div>
          <span className="shrink-0 text-[11px] font-medium text-navy/40">
            Swipe to explore
          </span>
        </div>
      </div>
    </section>
  );
}
