import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent["gynaecology"];

export const metadata: Metadata = {
  title: "Gynaecology — Women's Surgical Care | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/gynaecology" },
};

export default function GynaecologySpecialtyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("gynaecology", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
