// app/solutions/catalog/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Build Your Catalog — Product Data Entry, Bulk Uploads & Enrichment | Servzilla",
  description:
    "Servzilla builds and maintains e-commerce product catalogs — data entry, attribute structuring, bulk uploads, category mapping, image processing, and ongoing maintenance for 50 to 50,000 SKUs.",
  keywords: [
    "product data entry service",
    "bulk product upload",
    "catalog management outsourcing",
    "Amazon catalog building",
    "product attribute structuring",
    "category mapping service",
    "image processing e-commerce",
    "Servzilla",
  ],
  openGraph: {
    title: "Build Your Catalog | Servzilla",
    description:
      "Product data entry, attribute structuring, bulk uploads, category mapping, image processing, and ongoing catalog maintenance — 50 SKUs or 50,000.",
    url: "https://servzilla.com/solutions/catalog",
    siteName: "Servzilla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your Catalog | Servzilla",
    description: "We build and maintain the catalog foundation your e-commerce store runs on.",
  },
  alternates: {
    canonical: "https://servzilla.com/solutions/catalog",
  },
};

const CAPABILITIES = [
  {
    number: "01",
    title: "Product data entry",
    body: "Accurate, structured product data entered across your platforms — titles, descriptions, specifications, pricing, and variants. Built to platform requirements, not copy-pasted from a supplier sheet.",
  },
  {
    number: "02",
    title: "Attribute structuring",
    body: "Platform-specific attribute mapping for Amazon, eBay, Shopify, and more. Colour, size, material, compatibility — structured correctly so your listings filter, rank, and convert.",
  },
  {
    number: "03",
    title: "Bulk uploads",
    body: "Large-scale catalog uploads via flat files, feed templates, and platform APIs. We handle the formatting, error resolution, and upload confirmation — no failed batches left unresolved.",
  },
  {
    number: "04",
    title: "Category mapping",
    body: "Correct category placement across every platform. Misclassified products lose visibility and ranking — we map every SKU to the right node, browse tree, or product type.",
  },
  {
    number: "05",
    title: "Image processing",
    body: "Background removal, resizing to platform spec, compression, alt-text writing, and compliance checks. Images that meet Amazon's main image requirements and Shopify's storefront standards.",
  },
  {
    number: "06",
    title: "Ongoing catalog maintenance",
    body: "Price updates, stock status, seasonal refreshes, discontinued SKU handling, and periodic audits. Your catalog stays accurate without you managing a spreadsheet.",
  },
];

const FAQS = [
  {
    q: "What size catalogs do you handle?",
    a: "From 50 SKUs to 50,000+. We scope larger projects in phases with agreed delivery milestones, so you get usable output early rather than waiting for a full-catalog delivery.",
  },
  {
    q: "What file formats do you work with?",
    a: "Amazon flat files, eBay bulk listing templates, Shopify CSV, WooCommerce import files, and custom formats. If your platform has a bulk upload mechanism, we can work with it.",
  },
  {
    q: "Can you work from supplier data sheets?",
    a: "Yes. We regularly work from raw supplier spreadsheets, PDFs, and product pages — extracting, structuring, and enriching the data before it goes anywhere near your live catalog.",
  },
  {
    q: "Do you handle catalog maintenance after the initial build?",
    a: "Yes. Many clients retain us on a monthly basis for ongoing updates, seasonal changes, and new product additions after the initial catalog build is complete.",
  },
];

const PLATFORMS = ["Amazon", "eBay", "Shopify", "Etsy", "Walmart", "WooCommerce", "Magento"];

export default function BuildYourCatalog() {
  return (
    <>
    <Navbar/>
      {/* Hero */}
      <section className="pt-25 pb-24 bg-[#F7F7F5]" aria-labelledby="catalog-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF0F0] border border-[#f5c8c8] text-[#A32D2D] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E84040]" />
              Solutions — 03
            </div>
            <h1
              id="catalog-heading"
              className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] mb-6"
            >
              Build your catalog
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mb-10">
              Product data entry, attribute structuring, bulk uploads, category
              mapping, image processing, and ongoing catalog maintenance.
              Whether you have 50 SKUs or 50,000, we build and maintain the
              foundation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-trial"
                className="px-8 py-4 rounded-xl bg-[#E84040] hover:bg-[#C42C2C] text-white font-bold text-lg transition-colors"
              >
                Start free trial
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-xl border border-[#E8E8E4] text-[#1A1A1A] font-bold text-lg hover:bg-[#FDF0F0] hover:border-[#f5c8c8] transition-all"
              >
                See pricing
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {PLATFORMS.map((p) => (
                <span key={p} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFFFF] border border-[#E8E8E4] text-[#6B6B6B]">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#FFFFFF] border-y border-[#E8E8E4]" aria-label="Key results">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+",  label: "SKUs processed" },
              { value: "99%",   label: "Data accuracy rate" },
              { value: "7",     label: "Platforms supported" },
              { value: "48hr",  label: "Sample batch turnaround" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-extrabold text-[#E84040]">{s.value}</dt>
                <dd className="text-sm text-[#6B6B6B] mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="capabilities-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">What is included</p>
          <h2
            id="capabilities-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Every layer of your catalog, covered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((c) => (
              <article
                key={c.number}
                className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E8E8E4] hover:border-[#E84040] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FDF0F0] flex items-center justify-center mb-5 group-hover:bg-[#E84040] transition-colors">
                  <span className="text-sm font-bold text-[#E84040] group-hover:text-white transition-colors">{c.number}</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#1A1A1A] mb-3">{c.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">The process</p>
          <h2
            id="process-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            From raw data to live catalog
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6" aria-label="Process steps">
            {[
              { step: "1", title: "Data audit",      body: "We review your existing product data — supplier sheets, current listings, or nothing at all — and map what needs to be built or fixed." },
              { step: "2", title: "Scope & format",  body: "Platform templates, attribute requirements, and image specs are confirmed before a single SKU is touched." },
              { step: "3", title: "Build & enrich",  body: "Data entry, attribute structuring, image processing, and category mapping — delivered in phases for large catalogs." },
              { step: "4", title: "Upload & verify", body: "Bulk upload, error resolution, and a final QA pass to confirm every SKU is live and correct on your platforms." },
            ].map((s) => (
              <li key={s.step} className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E84040] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{s.step}</span>
                  </div>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{s.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Servzilla */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">Why Servzilla</p>
            <h2
              id="why-heading"
              className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6"
            >
              The foundation everything<br />
              <span className="text-[#E84040]">else is built on.</span>
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-4">
              A poorly built catalog costs you in ranking, conversion, and
              returns. Wrong categories mean invisible products. Missing
              attributes mean filtered-out listings. Bad images mean lost sales.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              We work exclusively with e-commerce sellers, which means our team
              understands Amazon's taxonomy, eBay's item specifics, and
              Shopify's metafield structure — not as a learning exercise, but
              as the job they do every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Platform-native formatting",  desc: "Built to each platform's exact spec" },
              { label: "Supplier data accepted",       desc: "We work from raw sheets and PDFs" },
              { label: "Phased delivery on large jobs", desc: "Usable output early, not all at the end" },
              { label: "Ongoing maintenance available", desc: "Retain us after the initial build" },
            ].map((f) => (
              <div key={f.label} className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E8E8E4]">
                <div className="w-8 h-1 rounded-full bg-[#FFD600] mb-4" />
                <p className="font-bold text-[#1A1A1A] text-sm mb-1">{f.label}</p>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="faq-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">FAQ</p>
          <h2
            id="faq-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Common questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {FAQS.map((f) => (
              <div key={f.q} className="bg-[#F7F7F5] rounded-2xl p-8 border border-[#E8E8E4]">
                <h3 className="font-bold text-[#1A1A1A] mb-3">{f.q}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#F7F7F5] overflow-hidden">
        <div className="max-w-7xl mx-auto bg-[#E84040] rounded-[3rem] p-12 md:p-24 sm:p-10 md:p-16 lg:p-24 relative overflow-hidden text-center md:text-left">
          <div className="relative z-10">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Ready to build your catalog?{" "}
                <span className="text-[#FFD600]">Start free.</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mb-10">
                Send us a sample batch — we will structure, enrich, and return
                it at no charge. No credit card. No commitment.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/free-trial"
                  className="bg-[#FFD600] hover:bg-[#FFF8D6] text-[#1A1A1A] px-10 py-5 rounded-2xl font-bold text-lg transition-colors"
                >
                  Start free trial
                </Link>
                <Link
                  href="/pricing"
                  className="text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C42C2C]/40 -skew-x-12 translate-x-1/2 pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#FFD600]/20 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* Related solutions */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="related-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2
            id="related-heading"
            className="font-headline text-2xl font-bold text-[#1A1A1A] tracking-tight mb-8"
          >
            Explore other solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: "01", title: "Grow your store",     desc: "Listings, SEO, A+ content and Buy Box strategy.",   href: "/solutions/grow" },
              { number: "02", title: "Run your store",      desc: "Support, orders, inventory, repricing.",            href: "/solutions/run" },
              { number: "04", title: "AI-powered services", desc: "Automated extraction, AI descriptions, analytics.", href: "/solutions/ai" },
            ].map((s) => (
              <Link
                key={s.number}
                href={s.href}
                className="group bg-[#F7F7F5] rounded-2xl p-8 border border-[#E8E8E4] hover:border-[#E84040] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FDF0F0] flex items-center justify-center mb-4 group-hover:bg-[#E84040] transition-colors">
                  <span className="text-xs font-bold text-[#E84040] group-hover:text-white transition-colors">{s.number}</span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2 group-hover:text-[#E84040] transition-colors">{s.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}