import { CareBuddyPageSection } from "@/components/sections/for-patients/care-buddy-page";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Care Buddy — Ayushman Surgicare",
  description: "Dedicated support throughout the surgical recovery journey.",
};

export default function CareBuddyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <CareBuddyPageSection />
      </main>
      <Footer />
    </>
  );
}
