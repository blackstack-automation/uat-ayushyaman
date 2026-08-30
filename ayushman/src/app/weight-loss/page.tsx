import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent["weight-loss"];

export const metadata: Metadata = {
  title: "Weight Loss — Bariatric Surgery & Intragastric Balloon | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/weight-loss" },
};

export default function WeightLossSpecialtyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("weight-loss", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
