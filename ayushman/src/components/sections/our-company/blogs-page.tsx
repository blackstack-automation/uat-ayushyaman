"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { blogCategories, blogPosts } from "@/lib/blog";

const PAGE_SIZE = 6;

export function BlogsPageSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(
    () =>
      activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory),
    [activeCategory],
  );

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pagedPosts = filteredPosts.slice(start, start + PAGE_SIZE);

  const selectCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const goToPage = (next: number) => {
    setPage(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white font-sans text-navy min-h-screen flex flex-col">
      <SiteHeader />
      
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Company" },
          { label: "Blogs" },
        ]}
        title="Surgical Care Blog"
        description="Expert guides, patient stories, insurance help, and recovery tips."
      />

      {/* 2. Main Content */}
      <section className="py-12 sm:py-16 flex-1">
        <div className="site-px w-full">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {blogCategories.map((cat, i) => (
              <button
                key={i}
                onClick={() => selectCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  activeCategory === cat 
                    ? "bg-brand text-white shadow-md" 
                    : "bg-white border border-slate-200 text-slate-600 hover:border-brand hover:text-brand"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pagedPosts.map((post, i) => (
              <Link href={`/our-company/blogs/${post.slug}`} key={i} className="group flex flex-col h-full bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden">
                <div className="h-56 w-full relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  ) : (
                    <div className={`h-full w-full ${post.imageColor}`} />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent mix-blend-overlay group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 leading-snug group-hover:text-brand transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.desc}
                  </p>
                  <div className="text-sm font-bold text-brand group-hover:text-brand-deep flex items-center gap-1 mt-auto">
                    Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Blog pagination"
              className="mt-14 flex items-center justify-center gap-2"
            >
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronLeft className="size-4" />
              </button>

              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => goToPage(num)}
                  aria-current={num === currentPage ? "page" : undefined}
                  className={`size-9 rounded-full text-sm font-bold transition-colors ${
                    num === currentPage
                      ? "bg-brand text-white shadow-sm"
                      : "border border-slate-200 text-slate-600 hover:border-brand hover:text-brand"
                  }`}
                >
                  {num}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronRight className="size-4" />
              </button>
            </nav>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 text-center flex flex-col items-center">
            <p className="text-sm text-slate-500 mb-6">
              Showing {filteredPosts.length === 0 ? 0 : start + 1}
              {pagedPosts.length > 1 ? `–${start + pagedPosts.length}` : ""} of{" "}
              {filteredPosts.length} article{filteredPosts.length === 1 ? "" : "s"}
            </p>
            <button className="px-8 py-4 bg-brand hover:bg-brand-deep text-white font-bold rounded-xl shadow-md transition-colors text-sm">
              Book Free Consultation
            </button>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
