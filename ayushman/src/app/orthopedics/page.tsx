import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SpecialtyPage } from "@/components/sections/treatment/specialty-page";
import { relatedPosts } from "@/lib/blog";
import { specialtyContent } from "@/lib/treatments";

const specialty = specialtyContent["orthopedics"];

export const metadata: Metadata = {
  title: "Orthopedics — Joint Replacement, Sports Injury & Spine Surgery | Ayushman Surgicare",
  description: specialty.blurb,
  alternates: { canonical: "/orthopedics" },
};

export default function OrthopedicsSpecialtyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <SpecialtyPage
          specialty={specialty}
          relatedPosts={relatedPosts("orthopedics", 3)}
        />
      </main>
      <Footer />
    </>
  );
}
