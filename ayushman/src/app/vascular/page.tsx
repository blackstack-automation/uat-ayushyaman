import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent["vascular"];

export const metadata: Metadata = {
  title: "Vascular — Varicose Veins, DVT & Fibroid Embolization | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/vascular" },
};

export default function VascularSpecialtyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("vascular", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
