import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent["ent"];

export const metadata: Metadata = {
  title: "ENT — Ear, Nose & Throat Surgery | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/ent" },
};

export default function ENTSpecialtyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("ent", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
