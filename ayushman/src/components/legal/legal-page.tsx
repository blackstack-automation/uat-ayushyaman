import Link from "next/link";
import { AlertTriangle, ChevronRight, Mail, Phone } from "lucide-react";
import { BackToTop, LegalToc, PrintButton } from "@/components/legal/legal-toc";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import type { LegalBlock, LegalDoc } from "@/lib/legal-content";
import { siteContact, telHref } from "@/lib/site-data";

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "p") {
    return <p className="text-[15.5px] leading-[1.75] text-[#4d586b]">{block.text}</p>;
  }

  if (block.type === "ul") {
    return (
      <ul className="list-none space-y-3">
        {block.items.map((item) => (
          <li
            key={item}
            className="relative pl-6 text-[15.5px] leading-[1.7] text-[#4d586b]"
          >
            <span className="absolute left-0 top-[0.62em] size-1.5 rounded-full bg-brand" />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex gap-3.5 rounded-lg border border-brand/20 bg-brand/6 p-4">
      <AlertTriangle className="mt-0.5 size-[18px] shrink-0 text-brand-deep" />
      <p className="text-[14.5px] leading-[1.65] text-[#3d4657]">{block.text}</p>
    </div>
  );
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <SiteHeader />

      <main className="flex-1 bg-white">
        {/* Page header */}
        <header className="border-b border-navy/10 bg-footer-surface">
          <div className="site-px w-full pb-12 pt-10">
            <nav aria-label="Breadcrumb" className="print:hidden">
              <ol className="flex list-none items-center gap-1.5 text-[13px] text-[#6b7280]">
                <li>
                  <Link href="/" className="transition-colors hover:text-brand-deep">
                    Home
                  </Link>
                </li>
                <ChevronRight className="size-3.5 text-[#a3aab8]" aria-hidden="true" />
                <li aria-current="page" className="font-medium text-navy">
                  {doc.title}
                </li>
              </ol>
            </nav>

            <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-brand">
                  {doc.eyebrow}
                </p>
                <h1 className="text-[clamp(2rem,4vw,2.9rem)] font-bold leading-[1.1] tracking-[-0.025em] text-navy">
                  {doc.title}
                </h1>
                <p className="mt-4 max-w-[62ch] text-[16.5px] leading-[1.65] text-[#556171]">
                  {doc.summary}
                </p>
              </div>
              <PrintButton />
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-t border-navy/10 pt-5 text-[13.5px]">
              <div className="flex gap-2">
                <dt className="text-[#6b7280]">Last updated</dt>
                <dd className="font-medium text-navy">{doc.updated}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-[#6b7280]">Effective from</dt>
                <dd className="font-medium text-navy">{doc.effective}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-[#6b7280]">Sections</dt>
                <dd className="font-medium text-navy">{doc.sections.length}</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="site-px w-full py-14">
          <div className="gap-14 lg:grid lg:grid-cols-[240px_minmax(0,1fr)]">
            {/* Contents rail */}
            <aside className="max-lg:hidden">
              <div className="sticky top-40">
                <LegalToc sections={doc.sections} />
              </div>
            </aside>

            <article className="min-w-0">
              {/* Plain-language summary */}
              <section
                aria-label="Summary"
                className="mb-14 rounded-xl border border-navy/10 bg-footer-surface p-7"
              >
                <h2 className="mb-1 text-lg font-semibold tracking-[-0.01em] text-navy">
                  The short version
                </h2>
                <p className="mb-6 text-[14px] text-[#6b7280]">
                  A plain-language summary. It does not replace the full text below.
                </p>
                <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  {doc.highlights.map((h) => (
                    <div key={h.title} className="border-l-2 border-brand pl-4">
                      <h3 className="mb-1.5 text-[14.5px] font-semibold text-navy">
                        {h.title}
                      </h3>
                      <p className="text-[14px] leading-[1.6] text-[#556171]">{h.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mobile contents */}
              <details className="mb-12 rounded-xl border border-navy/10 p-5 lg:hidden print:hidden">
                <summary className="cursor-pointer text-sm font-semibold text-navy">
                  On this page
                </summary>
                <ul className="mt-4 list-none space-y-2 border-l border-navy/10">
                  {doc.sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block pl-4 text-[13.5px] text-[#556171] transition-colors hover:text-brand-deep"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>

              {/* Sections */}
              <div className="flex flex-col gap-12">
                {doc.sections.map((section, i) => (
                  <section
                    key={section.id}
                    aria-labelledby={section.id}
                    className="scroll-mt-40"
                  >
                    <h2
                      id={section.id}
                      className="scroll-mt-40 text-[21px] font-semibold leading-snug tracking-[-0.015em] text-navy"
                    >
                      <span className="mr-3 font-mono text-[13px] font-normal tabular-nums text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </h2>
                    <div className="mt-4 flex max-w-[68ch] flex-col gap-4">
                      {section.blocks.map((block, j) => (
                        <Block key={j} block={block} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Contact */}
              <section
                aria-labelledby="contact"
                className="mt-14 scroll-mt-40 rounded-xl bg-navy p-8 text-white"
              >
                <h2 id="contact" className="text-xl font-semibold tracking-[-0.01em]">
                  Questions about this {doc.title.toLowerCase()}?
                </h2>
                <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.65] text-white/72">
                  Write to our Grievance Officer with your name, the nature of your
                  concern and any reference number you have. We acknowledge every request
                  and respond within thirty days.
                </p>
                <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
                  <a
                    href={`mailto:${siteContact.email}`}
                    className="flex items-center gap-3 text-[15px] transition-colors hover:text-brand"
                  >
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/10">
                      <Mail className="size-4" />
                    </span>
                    {siteContact.email}
                  </a>
                  <div className="flex items-center gap-3 text-[15px]">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Phone className="size-4" />
                    </span>
                    <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      {siteContact.phones.map((phone, i) => (
                        <span key={phone} className="flex items-center gap-3">
                          {i > 0 && (
                            <span aria-hidden="true" className="text-white/30">
                              |
                            </span>
                          )}
                          <a
                            href={telHref(phone)}
                            className="transition-colors hover:text-brand"
                          >
                            {phone}
                          </a>
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>

      <BackToTop />
      <Footer />
    </>
  );
}
