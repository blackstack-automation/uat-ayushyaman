import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PatientConsultationSection } from "@/components/sections/for-patients/consultation";

export const metadata = {
  title: "Patient Consultation — Ayushman Surgicare",
  description: "Expert surgical guidance, completely free. No hidden charges, no obligations.",
};

export default function PatientConsultationPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PatientConsultationSection />
      </main>
      <Footer />
    </>
  );
}
