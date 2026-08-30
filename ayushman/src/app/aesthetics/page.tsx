import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent["aesthetics"];

export const metadata: Metadata = {
  title: "Aesthetics — Body Contouring & Cosmetic Surgery | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/aesthetics" },
};

export default function AestheticsSpecialtyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("aesthetics", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
