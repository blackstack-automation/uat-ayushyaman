import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent["urology"];

export const metadata: Metadata = {
  title: "Urology — Kidney Stones, Prostate & Men's Health Surgery | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/urology" },
};

export default function UrologySpecialtyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("urology", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
