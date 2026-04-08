// app/platforms/shopify/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Shopify Services — Product Uploads, SEO, Support & Maintenance | Servzilla",
  description:
    "Servzilla handles Shopify product uploads, catalog management, SEO-optimised descriptions, image editing, customer support, inventory monitoring, and store maintenance.",
  keywords: [
    "Shopify product upload service",
    "Shopify catalog management",
    "Shopify SEO descriptions",
    "Shopify customer support outsourcing",
    "Shopify store maintenance",
    "Servzilla Shopify",
  ],
  openGraph: {
    title: "Shopify Services | Servzilla",
    description:
      "A great Shopify store needs great back-office support. Product uploads, SEO, support, and maintenance — handled.",
    url: "https://servzilla.com/platforms/shopify",
    siteName: "Servzilla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Services | Servzilla",
    description: "Shopify catalog management, SEO descriptions, support and maintenance outsourcing.",
  },
  alternates: { canonical: "https://servzilla.com/platforms/shopify" },
};

const SERVICES = [
  "Product upload and catalog management",
  "Collection and tag structuring",
  "Product description writing and SEO optimisation",
  "Image editing and uploading to spec",
  "Customer support via email and chat",
  "Inventory level monitoring and updates",
  "App integration support",
  "Store maintenance and content updates",
];

const OTHER_PLATFORMS = [
  { label: "Amazon",           href: "/platforms/amazon" },
  { label: "eBay",             href: "/platforms/ebay" },
  { label: "Etsy",             href: "/platforms/etsy" },
  { label: "Walmart & others", href: "/platforms/walmart" },
];

export default function ShopifyServices() {
  return (
    <>
    <Navbar/>
      <section className="pt-25 pb-24 bg-[#F7F7F5]" aria-labelledby="shopify-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF0F0] border border-[#f5c8c8] text-[#A32D2D] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E84040]" />
              Platforms — Shopify
            </div>
            <h1
              id="shopify-heading"
              className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] mb-6"
            >
              Shopify services.
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mb-10">
              A great Shopify store needs great back-office support.
              That is where we come in.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-trial"
                className="px-8 py-4 rounded-xl bg-[#E84040] hover:bg-[#C42C2C] text-white font-bold text-lg transition-colors"
              >
                Talk to us about your Shopify operations
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-xl border border-[#E8E8E4] text-[#1A1A1A] font-bold text-lg hover:bg-[#FDF0F0] hover:border-[#f5c8c8] transition-all"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FFFFFF] border-y border-[#E8E8E4]" aria-label="Key stats">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+",   label: "Shopify stores supported" },
              { value: "SEO",    label: "Optimised every description" },
              { value: "48hr",   label: "Catalog upload turnaround" },
              { value: "Daily",  label: "Inventory monitoring" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-extrabold text-[#E84040]">{s.value}</dt>
                <dd className="text-sm text-[#6B6B6B] mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">What we handle</p>
          <h2
            id="services-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Everything on Shopify, covered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {SERVICES.map((s, i) => (
              <div
                key={s}
                className="flex items-start gap-4 bg-[#FFFFFF] rounded-2xl p-6 border border-[#E8E8E4] hover:border-[#E84040] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FDF0F0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E84040] transition-colors">
                  <span className="text-xs font-bold text-[#E84040] group-hover:text-white transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm font-medium text-[#1A1A1A] leading-relaxed pt-1">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/free-trial"
              className="inline-flex items-center gap-2 text-[#E84040] font-bold hover:text-[#C42C2C] transition-colors"
            >
              Talk to us about your Shopify operations →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="why-shopify-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">Why Servzilla for Shopify</p>
            <h2
              id="why-shopify-heading"
              className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6"
            >
              The back-office your<br />
              <span className="text-[#E84040]">Shopify store needs.</span>
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-4">
              Running a Shopify store well means more than a good theme. It
              means consistent product data, SEO-optimised descriptions,
              fast customer responses, and a catalog that stays accurate as
              your range grows.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              We handle all of that — so you can focus on the products and
              marketing, not the operational grind.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "SEO on every product",        desc: "Descriptions written to rank and convert" },
              { label: "Shopify-native workflow",      desc: "CSV, metafields, and collections covered" },
              { label: "Support inbox managed",        desc: "Email and chat handled on your SLA" },
              { label: "App integration support",      desc: "We work alongside your existing stack" },
            ].map((f) => (
              <div key={f.label} className="bg-[#F7F7F5] rounded-2xl p-6 border border-[#E8E8E4]">
                <div className="w-8 h-1 rounded-full bg-[#FFD600] mb-4" />
                <p className="font-bold text-[#1A1A1A] text-sm mb-1">{f.label}</p>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-8 bg-[#F7F7F5]" aria-label="Call to action">
        <div className="max-w-7xl mx-auto bg-[#E84040] rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center md:text-left">
          <div className="relative z-10 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Ready to scale your Shopify store?{" "}
                <span className="text-[#FFD600]">Start free.</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mb-10">
                Tell us about your Shopify operations and we will show you
                exactly how we can help. No credit card. No commitment.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/free-trial" className="bg-[#FFD600] hover:bg-[#FFF8D6] text-[#1A1A1A] px-10 py-5 rounded-2xl font-bold text-lg transition-colors">
                  Get started free
                </Link>
                <Link href="/pricing" className="text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                  See pricing
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C42C2C]/40 -skew-x-12 translate-x-1/2 pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#FFD600]/20 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>

      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="other-platforms-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 id="other-platforms-heading" className="font-headline text-2xl font-bold text-[#1A1A1A] tracking-tight mb-8">
            Other platforms we support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {OTHER_PLATFORMS.map((p) => (
              <Link key={p.label} href={p.href} className="group bg-[#F7F7F5] rounded-2xl p-6 border border-[#E8E8E4] hover:border-[#E84040] transition-colors text-center">
                <p className="font-bold text-[#1A1A1A] group-hover:text-[#E84040] transition-colors">{p.label}</p>
                <p className="text-xs text-[#6B6B6B] mt-1">View services →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}