"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { socialIcons } from "@/components/icons/social";
import { PreFooterCta } from "@/components/layout/pre-footer-cta";
import {
  footerColumns,
  legalLinks,
  siteContact,
  socialLinks,
  telHref,
} from "@/lib/site-data";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type ContactRow = {
  icon: typeof Mail;
  values: { text: string; href?: string }[];
};

const contactRows: ContactRow[] = [
  {
    icon: Mail,
    values: [{ text: siteContact.email, href: `mailto:${siteContact.email}` }],
  },
  {
    icon: Phone,
    values: siteContact.phones.map((p) => ({ text: p, href: telHref(p) })),
  },
  { icon: MapPin, values: [{ text: siteContact.address }] },
];

export function Footer() {
  const ctaRef = useRef<HTMLDivElement>(null);
  // Half the CTA card's height — the footer's top edge is pulled to exactly
  // this point so the card straddles it 50/50.
  const [half, setHalf] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const measure = () => setHalf(Math.round(el.offsetHeight / 2));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
      <PreFooterCta
        ref={ctaRef}
        sectionStyle={half ? { marginBottom: -half } : undefined}
      />

      <footer className="border-t-2 border-navy/15 bg-white">
        <div
          className="site-px pt-52 pb-8"
          style={half ? { paddingTop: half + 56 } : undefined}
        >
          <div className="grid gap-x-8 gap-y-12 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_repeat(5,1fr)]">
            {/* Brand + contact */}
            <div className="max-md:col-span-2 md:col-span-3 lg:col-span-1">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo/AyushmanSurgicareLogoFooter.png"
                  alt="Ayushman Surgicare"
                  width={1376}
                  height={460}
                  className="h-16 w-auto"
                />
              </Link>
              <p className="mt-4 max-w-[28ch] text-[13.5px] leading-[1.55] text-[#556171]">
                Advanced surgical care across 13 specialities, delivered by vetted
                specialists.
              </p>

              <div className="mt-7 flex flex-col gap-3.5">
                {contactRows.map(({ icon: Icon, values }) => (
                  <div key={values[0].text} className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy/8">
                      <Icon className="size-4 text-navy" />
                    </span>
                    <span className="flex flex-col gap-0.5 text-[13.5px] leading-[1.5] text-[#556171]">
                      {values.map(({ text, href }) =>
                        href ? (
                          <a
                            key={text}
                            href={href}
                            className="transition-colors hover:text-brand-deep"
                          >
                            {text}
                          </a>
                        ) : (
                          <span key={text}>{text}</span>
                        ),
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {footerColumns.map((col) => (
              <div key={col.label}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-navy">
                  {col.label}
                </h3>
                <ul className="list-none space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] leading-[1.45] text-[#556171] transition-colors hover:text-brand-deep"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar — social, copyright and legal on one line */}
          <div className="mt-12 flex flex-col items-center gap-5 border-t border-navy/10 py-6 text-[12.5px] text-[#8a90a6] lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="group flex size-9 items-center justify-center rounded-full bg-navy/8 transition-colors hover:bg-navy/12"
                  >
                    <Icon className="size-[17px] text-navy transition-colors group-hover:text-brand" />
                  </a>
                );
              })}
            </div>

            <p className="m-0 order-last text-center lg:order-none">
              © {new Date().getFullYear()} Ayushman Surgicare. All rights reserved.
            </p>

            <ul className="flex list-none flex-wrap justify-center gap-x-5 gap-y-1.5">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#556171] transition-colors hover:text-brand-deep"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
