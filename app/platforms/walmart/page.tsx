// app/platforms/walmart/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Walmart, WooCommerce & More — Multi-Platform E-commerce Services | Servzilla",
  description:
    "Servzilla manages Walmart Marketplace, WooCommerce, Magento, BigCommerce, Flipkart, Meesho, and JioMart — product uploads, listing optimisation, catalog management, and compliance.",
  keywords: [
    "Walmart marketplace listing service",
    "WooCommerce catalog management",
    "Magento product data",
    "BigCommerce bulk upload",
    "Flipkart seller services",
    "multi-platform e-commerce outsourcing",
    "Servzilla",
  ],
  openGraph: {
    title: "Walmart, WooCommerce & More | Servzilla",
    description:
      "Wherever your products are listed, we can manage the operations behind them — Walmart, WooCommerce, Magento, BigCommerce, and Indian marketplaces.",
    url: "https://servzilla.com/platforms/walmart",
    siteName: "Servzilla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walmart & More | Servzilla",
    description: "Multi-platform e-commerce operations — Walmart, WooCommerce, Magento, BigCommerce and more.",
  },
  alternates: { canonical: "https://servzilla.com/platforms/walmart" },
};

const PLATFORM_SERVICES = [
  {
    platform: "Walmart Marketplace",
    services: ["Product uploads and listing optimisation", "Compliance and content requirements", "Buy Box monitoring and pricing", "Account health management"],
  },
  {
    platform: "WooCommerce",
    services: ["Catalog management and product data", "Bulk upload and import management", "Customer support handling", "Inventory updates and maintenance"],
  },
  {
    platform: "Magento",
    services: ["Product data management", "Catalog operations and structuring", "Attribute and category mapping", "Bulk data processing"],
  },
  {
    platform: "BigCommerce",
    services: ["Catalog and bulk upload management", "Product data entry and enrichment", "Collection and category structuring", "Store maintenance and updates"],
  },
  {
    platform: "Flipkart, Meesho & JioMart",
    services: ["Available on request for Indian market sellers", "Listing creation and optimisation", "Catalog management and uploads", "Customer support and operations"],
  },
];

const OTHER_PLATFORMS = [
  { label: "Amazon", href: "/platforms/amazon" },
  { label: "eBay",   href: "/platforms/ebay" },
  { label: "Shopify", href: "/platforms/shopify" },
  { label: "Etsy",   href: "/platforms/etsy" },
];

export default function WalmartAndMore() {
  return (
    <>
    <Navbar/>
      <section className="pt-25 pb-24 bg-[#F7F7F5]" aria-labelledby="walmart-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF0F0] border border-[#f5c8c8] text-[#A32D2D] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E84040]" />
              Platforms — Walmart & others
            </div>
            <h1
              id="walmart-heading"
              className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] mb-6"
            >
              Walmart, WooCommerce & more.
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mb-10">
              Wherever your products are listed, we can manage the operations
              behind them.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-trial"
                className="px-8 py-4 rounded-xl bg-[#E84040] hover:bg-[#C42C2C] text-white font-bold text-lg transition-colors"
              >
                Tell us which platforms you sell on
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-xl border border-[#E8E8E4] text-[#1A1A1A] font-bold text-lg hover:bg-[#FDF0F0] hover:border-[#f5c8c8] transition-all"
              >
                See pricing
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["Walmart", "WooCommerce", "Magento", "BigCommerce", "Flipkart", "Meesho", "JioMart"].map((p) => (
                <span key={p} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFFFF] border border-[#E8E8E4] text-[#6B6B6B]">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FFFFFF] border-y border-[#E8E8E4]" aria-label="Key stats">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "7+",     label: "Platforms supported" },
              { value: "Multi",  label: "Platform management" },
              { value: "India",  label: "Market sellers welcome" },
              { value: "1",      label: "Point of contact for all" },
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
            Services by platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLATFORM_SERVICES.map((ps) => (
              <article
                key={ps.platform}
                className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E8E8E4] hover:border-[#E84040] transition-colors group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-1 rounded-full bg-[#FFD600]" />
                  <h3 className="font-bold text-[#1A1A1A] text-lg">{ps.platform}</h3>
                </div>
                <ul className="space-y-3">
                  {ps.services.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-[#6B6B6B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E84040] mt-1.5 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/free-trial" className="inline-flex items-center gap-2 text-[#E84040] font-bold hover:text-[#C42C2C] transition-colors">
              Tell us which platforms you sell on →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="why-multi-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">Why Servzilla</p>
            <h2
              id="why-multi-heading"
              className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6"
            >
              One team.<br />
              <span className="text-[#E84040]">Every platform.</span>
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-4">
              Managing operations across multiple platforms usually means
              managing multiple teams, logins, and communication threads.
              With Servzilla, you get a single point of contact who coordinates
              everything — regardless of how many platforms you sell on.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Selling on a platform we have not listed? Get in touch — we likely
              cover it, and if we do not yet, we will tell you honestly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Single point of contact",      desc: "One person across all your platforms" },
              { label: "Platform-native knowledge",    desc: "We know each platform's requirements" },
              { label: "Indian market support",        desc: "Flipkart, Meesho, JioMart on request" },
              { label: "Scalable across channels",     desc: "Add platforms without adding headcount" },
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
                Selling on multiple platforms?{" "}
                <span className="text-[#FFD600]">We handle all of them.</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mb-10">
                Tell us where you sell and we will scope exactly what we can
                take off your plate. No credit card. No commitment.
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

      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="core-platforms-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 id="core-platforms-heading" className="font-headline text-2xl font-bold text-[#1A1A1A] tracking-tight mb-8">
            Our core platforms
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