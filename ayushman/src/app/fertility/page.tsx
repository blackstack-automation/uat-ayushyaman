import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent["fertility"];

export const metadata: Metadata = {
  title: "Fertility — IVF, IUI & Egg Freezing | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/fertility" },
};

export default function FertilitySpecialtyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("fertility", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
