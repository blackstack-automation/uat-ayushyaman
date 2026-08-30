import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TreatmentTemplate } from "@/components/sections/treatment/treatment-template";
import { relatedPosts } from "@/lib/blog";
import { getTreatment, specialtyContent } from "@/lib/treatments";

const SPECIALTY = "ent";

export function generateStaticParams() {
  return specialtyContent[SPECIALTY].treatments.map((t) => ({ treatment: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ treatment: string }>;
}): Promise<Metadata> {
  const { treatment } = await params;
  const t = getTreatment(SPECIALTY, treatment);
  if (!t) return {};

  return {
    title: `${t.metaTitle ?? t.title} | Ayushman Surgicare`,
    description: t.metaDescription,
    alternates: { canonical: `/${SPECIALTY}/${t.slug}` },
  };
}

export default async function EntTreatmentPage({
  params,
}: {
  params: Promise<{ treatment: string }>;
}) {
  const { treatment } = await params;
  const t = getTreatment(SPECIALTY, treatment);
  if (!t) notFound();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <TreatmentTemplate
          specialty={{ label: "ENT", href: `/${SPECIALTY}` }}
          title={t.title}
          overview={t.overview}
          commonSigns={t.commonSigns}
          faqs={t.faqs}
          testimonials={specialtyContent[SPECIALTY].testimonials}
          relatedPosts={relatedPosts(SPECIALTY, 3)}
        />
      </main>
      <Footer />
    </>
  );
}
