import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent["laparoscopy"];

export const metadata: Metadata = {
  title: "Laparoscopy — Keyhole Hernia, Gallstone & Appendix Surgery | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/laparoscopy" },
};

export default function LaparoscopySpecialtyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("laparoscopy", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
