import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  ChevronRight,
  CreditCard,
  HeartPulse,
  IndianRupee,
  Lock,
  Mail,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { MobileCallBar } from "@/components/contact/mobile-call-bar";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  mapDirectionsUrl,
  mapEmbedUrl,
  nextSteps,
  trustPoints,
} from "@/lib/contact-content";
import { siteContact, telHref } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us | Ayushman Surgicare",
  description:
    "Talk to Ayushman Surgicare in Uppal, Hyderabad. Call, email or request a free consultation with a vetted surgical specialist.",
  alternates: { canonical: "/contact" },
};

const trustIcons = {
  shield: ShieldCheck,
  rupee: IndianRupee,
  card: CreditCard,
  lock: Lock,
  pulse: HeartPulse,
  badge: BadgeCheck,
};

const overline =
  "block text-[11px] font-semibold uppercase tracking-[0.07em] text-[#8a90a6]";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1 bg-white pb-24 md:pb-0">
        {/* ---------- Header ---------- */}
        <section className="border-b border-navy/10 bg-footer-surface">
          <div className="site-px w-full pb-12 pt-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex list-none items-center gap-1.5 text-[13px] text-[#6b7280]">
                <li>
                  <Link href="/" className="transition-colors hover:text-brand-deep">
                    Home
                  </Link>
                </li>
                <ChevronRight className="size-3.5 text-[#a3aab8]" aria-hidden="true" />
                <li aria-current="page" className="font-medium text-navy">
                  Contact Us
                </li>
              </ol>
            </nav>

            <div className="mt-7 max-w-[60ch]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-brand">
                Contact
              </p>
              <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.08] tracking-[-0.025em] text-navy">
                Talk to a specialist,{" "}
                <span className="text-brand">not a call centre</span>
              </h1>
              <p className="mt-4 text-[16.5px] leading-[1.65] text-[#556171]">
                Call us, email us, or leave your details and a care coordinator will
                reach out to arrange your consultation.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Form + details ---------- */}
        <section id="enquiry" className="scroll-mt-40 bg-white py-14 sm:py-16 lg:py-20">
          <div className="site-px w-full">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
              <ContactForm />

              <div className="flex flex-col gap-10">
                {/* Reach us */}
                <div>
                  <h2 className="text-[22px] font-bold tracking-[-0.015em] text-navy">
                    Reach us directly
                  </h2>
                  <div className="mt-6 flex flex-col gap-5">
                    <div className="flex gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy/8">
                        <Phone className="size-[17px] text-navy" />
                      </span>
                      <div>
                        <p className={overline}>Phone</p>
                        <div className="mt-1 flex flex-col gap-0.5">
                          {siteContact.phones.map((phone) => (
                            <a
                              key={phone}
                              href={telHref(phone)}
                              className="text-[15px] font-medium text-navy transition-colors hover:text-brand-deep"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy/8">
                        <Mail className="size-[17px] text-navy" />
                      </span>
                      <div className="min-w-0">
                        <p className={overline}>Email</p>
                        <a
                          href={`mailto:${siteContact.email}`}
                          className="mt-1 block break-words text-[15px] font-medium text-navy transition-colors hover:text-brand-deep"
                        >
                          {siteContact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy/8">
                        <MapPin className="size-[17px] text-navy" />
                      </span>
                      <div>
                        <p className={overline}>Clinic address</p>
                        <p className="mt-1 max-w-[38ch] text-[14.5px] leading-[1.6] text-[#556171]">
                          {siteContact.address}
                        </p>
                        <a
                          href={mapDirectionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-deep"
                        >
                          <Navigation className="size-3.5" />
                          Get directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What happens next */}
                <div className="rounded-2xl border border-navy/10 bg-footer-surface p-6 sm:p-7">
                  <h3 className="text-[17px] font-bold tracking-[-0.01em] text-navy">
                    What happens after you enquire
                  </h3>
                  <ol className="mt-5 flex list-none flex-col gap-5">
                    {nextSteps.map((step, i) => (
                      <li key={step.title} className="relative flex gap-4">
                        {i < nextSteps.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="absolute left-4 top-9 h-[calc(100%+4px)] w-px bg-navy/12"
                          />
                        )}
                        <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-[13px] font-bold text-white">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-[14.5px] font-semibold text-navy">
                            {step.title}
                          </p>
                          <p className="mt-1 text-[13.5px] leading-[1.6] text-[#556171]">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Trust points ---------- */}
        <section className="border-y border-navy/10 bg-footer-surface py-14 sm:py-16">
          <div className="site-px w-full">
            <div className="max-w-[52ch]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-brand">
                Why patients choose us
              </p>
              <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.02em] text-navy">
                Surgery is a decision you make once. We make it easier to make it well.
              </h2>
            </div>

            <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {trustPoints.map((point) => {
                const Icon = trustIcons[point.icon];
                return (
                  <div key={point.title} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_4px_14px_rgba(2,32,112,0.07)]">
                      <Icon className="size-5 text-brand" />
                    </span>
                    <div>
                      <h3 className="text-[15.5px] font-semibold text-navy">
                        {point.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-[1.6] text-[#556171]">
                        {point.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- Map ---------- */}
        <section aria-labelledby="find-us" className="bg-white py-14 sm:py-16">
          <div className="site-px w-full">
            <div className="max-w-[52ch]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-brand">
                Find us
              </p>
              <h2
                id="find-us"
                className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.02em] text-navy"
              >
                Bitla Residency, Uppal
              </h2>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10 shadow-[0_20px_50px_rgba(2,32,112,0.08)]">
              <div className="grid lg:grid-cols-[minmax(0,1fr)_360px]">
                <iframe
                  src={mapEmbedUrl}
                  title="Ayushman Surgicare location on Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-[320px] w-full border-0 sm:h-[400px] lg:h-full lg:min-h-[430px]"
                />

                <div className="flex flex-col justify-center gap-6 bg-navy p-7 sm:p-8">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/55">
                      Clinic address
                    </p>
                    <p className="mt-2.5 text-[15px] leading-[1.65] text-white">
                      {siteContact.address}
                    </p>
                  </div>

                  <div className="h-px bg-white/12" />

                  <div className="flex flex-col gap-3">
                    <a
                      href={mapDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 items-center justify-center gap-2 rounded-xl bg-brand text-[14.5px] font-semibold text-white transition-shadow hover:shadow-[0_14px_30px_rgba(7,151,148,0.35)]"
                    >
                      <Navigation className="size-4" />
                      Get directions
                    </a>
                    <a
                      href={telHref(siteContact.phones[0])}
                      className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/25 text-[14.5px] font-semibold text-white transition-colors hover:border-white/60"
                    >
                      <Phone className="size-4" />
                      Call before you visit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency notice */}
            <div className="mt-8 flex gap-3.5 rounded-xl border border-[#e8c9c2] bg-[#fdf5f3] p-5">
              <HeartPulse className="mt-0.5 size-5 shrink-0 text-[#b4341f]" />
              <p className="text-[14px] leading-[1.65] text-[#6b4a43]">
                <span className="font-semibold text-[#8f2a18]">
                  This page is not for emergencies.
                </span>{" "}
                Enquiries are answered during working hours. If you are facing a medical
                emergency, call your local emergency number or go to the nearest
                emergency department immediately.
              </p>
            </div>
          </div>
        </section>
      </main>

      <MobileCallBar />
      <Footer />
    </>
  );
}
