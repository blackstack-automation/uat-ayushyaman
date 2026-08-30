import { CareBuddy } from "@/components/sections/care-buddy";
import { FreeConsultation } from "@/components/sections/free-consultation";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SpecializedCare } from "@/components/sections/specialized-care";
import { Testimonials } from "@/components/sections/testimonials";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SpecializedCare />
        <WhatWeDo />
        <HowItWorks />
        <CareBuddy />
        <Testimonials />
        <WhyChooseUs />
        <FreeConsultation />
      </main>
      <Footer />
    </>
  );
}
