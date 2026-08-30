import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent.proctology;

export const metadata: Metadata = {
  title:
    "Proctology — Piles, Fistula, Fissure & Pilonidal Sinus Treatment | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/proctology" },
};

export default function ProctologyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("proctology", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
