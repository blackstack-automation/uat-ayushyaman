import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent["dentistry"];

export const metadata: Metadata = {
  title: "Dentistry — Dental Implants, Braces & Aligners | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/dentistry" },
};

export default function DentistrySpecialtyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("dentistry", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
