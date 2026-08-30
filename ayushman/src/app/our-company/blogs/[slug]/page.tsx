import { BlogDetailsPageSection } from "@/components/sections/our-company/blog-details-page";

export const metadata = {
  title: "Surgical Care Blog — Ayushman Surgicare",
  description: "Expert guides, patient stories, insurance help, and recovery tips.",
};

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <BlogDetailsPageSection slug={resolvedParams.slug} />;
}
