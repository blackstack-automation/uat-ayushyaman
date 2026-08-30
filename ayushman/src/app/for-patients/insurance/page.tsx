import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PatientInsuranceSection } from "@/components/sections/for-patients/insurance";

export const metadata = {
  title: "Insurance Assistance — Ayushman Surgicare",
  description: "All major insurances and government schemes accepted. We handle the paperwork so you focus on recovery.",
};

export default function PatientInsurancePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PatientInsuranceSection />
      </main>
      <Footer />
    </>
  );
}
