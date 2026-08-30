"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import type { Testimonial } from "@/lib/treatments";

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export function TreatmentTestimonials({ items }: { items: Testimonial[] }) {
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
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

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

  if (!items.length) return null;
  const hasControls = items.length > 1;

  return (
    <section className="border-y border-navy/5 bg-[#fafbfc] py-12 sm:py-20">
      <div className="site-px w-full">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              Patient stories
            </p>
            <h2 className="mt-2 text-xl sm:text-3xl font-bold tracking-tight text-navy">
              Real people, real recoveries
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#556171]">
              A few words from patients whose treatment was coordinated through Ayushman
              Surgicare.
            </p>
          </div>

          {hasControls && (
            <div className="hidden shrink-0 gap-3 sm:flex">
              <button
                type="button"
                onClick={() => scrollByPage(-1)}
                disabled={!canPrev}
                aria-label="Previous stories"
                className="flex size-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-sm transition-all hover:border-brand hover:bg-brand hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-35"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollByPage(1)}
                disabled={!canNext}
                aria-label="Next stories"
                className="flex size-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-sm transition-all hover:border-brand hover:bg-brand hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-35"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>

        <motion.div
          ref={trackRef}
          onScroll={syncArrows}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="-mx-[2.5%] mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-[2.5%] px-[2.5%] pb-4 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:scroll-pl-0 sm:gap-6 sm:px-0 [&::-webkit-scrollbar]:hidden"
          style={{ cursor: hasControls ? "grab" : "default" }}
        >
          {items.map((t) => (
            <motion.figure
              key={t.name}
              variants={card}
              className="flex w-[85vw] max-w-[380px] shrink-0 snap-start flex-col rounded-3xl border border-navy/8 bg-white p-6 shadow-[0_4px_20px_rgba(2,32,112,0.04)] sm:w-[380px] sm:max-w-none sm:p-7"
            >
              <Quote className="size-7 text-brand/30" />
              <blockquote className="mt-4 flex-1 text-[13.5px] leading-relaxed text-[#475068]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy/6 pt-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                  {t.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-navy">{t.name}</span>
                  <span className="block truncate text-[11.5px] text-[#8492a6]">
                    {t.procedure}
                    {t.location ? ` · ${t.location}` : ""}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {hasControls && (
          <div className="mt-4 flex items-center gap-3 sm:hidden">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-navy/10">
              <div
                className="h-full rounded-full bg-brand transition-[width] duration-150 ease-out"
                style={{ width: `${Math.max(12, progress)}%` }}
              />
            </div>
            <span className="shrink-0 text-[11px] font-medium text-navy/40">Swipe</span>
          </div>
        )}
      </div>
    </section>
  );
}

export function TreatmentBlogs({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;

  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="site-px w-full">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              From the blog
            </p>
            <h2 className="mt-2 text-xl sm:text-3xl font-bold tracking-tight text-navy">
              Helpful reading before your procedure
            </h2>
          </div>
          <Link
            href="/our-company/blogs"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-deep sm:inline-flex"
          >
            View all articles <ArrowRight className="size-4" />
          </Link>
        </div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8 grid gap-5 sm:mt-10 sm:gap-8 md:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={card}>
              <Link
                href={`/our-company/blogs/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/8 bg-white shadow-[0_4px_20px_rgba(2,32,112,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_44px_rgba(2,32,112,0.1)]"
              >
                <div className={`relative h-40 w-full ${post.imageColor}`}>
                  <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-[#8492a6]">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-base font-bold leading-snug text-navy transition-colors group-hover:text-brand line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#556171] line-clamp-3">
                    {post.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-brand">
                    Read more
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <Link
          href="/our-company/blogs"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-deep sm:hidden"
        >
          View all articles <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
