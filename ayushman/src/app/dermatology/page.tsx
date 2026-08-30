import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent["dermatology"];

export const metadata: Metadata = {
  title: "Dermatology — Fillers, PRP & Thread Lifts | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/dermatology" },
};

export default function DermatologySpecialtyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("dermatology", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
