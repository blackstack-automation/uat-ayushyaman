import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent["ophthalmology"];

export const metadata: Metadata = {
  title: "Ophthalmology — LASIK, Cataract & Retina Surgery | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/ophthalmology" },
};

export default function OphthalmologySpecialtyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("ophthalmology", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
