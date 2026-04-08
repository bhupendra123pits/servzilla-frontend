// app/platforms/amazon/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Amazon Services — Listings, A+ Content, Buy Box & Account Health | Servzilla",
  description:
    "Servzilla handles everything your Amazon store needs — product listing creation, A+ content, Buy Box strategy, FBA support, account health monitoring, and Sponsored Products campaign support.",
  keywords: [
    "Amazon listing optimisation service",
    "A+ content service",
    "Buy Box strategy",
    "Amazon account health",
    "FBA shipment support",
    "Amazon Seller Central management",
    "Servzilla Amazon",
  ],
  openGraph: {
    title: "Amazon Services | Servzilla",
    description:
      "Everything your Amazon store needs — from first listing to Buy Box dominance. We work in Seller Central every day.",
    url: "https://servzilla.com/platforms/amazon",
    siteName: "Servzilla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Services | Servzilla",
    description: "Listings, A+ content, Buy Box strategy, FBA support and account health — handled.",
  },
  alternates: { canonical: "https://servzilla.com/platforms/amazon" },
};

const SERVICES = [
  "Product listing creation and optimisation",
  "Flat file and Seller Central bulk uploads",
  "A+ Content and Enhanced Brand Content",
  "Buy Box monitoring and pricing strategy",
  "FBA shipment preparation support",
  "Suppressed listing identification and resolution",
  "Negative feedback and review management",
  "Competitor analysis and keyword research",
  "Account health monitoring",
  "Sponsored Products campaign support",
];

const OTHER_PLATFORMS = [
  { label: "eBay",             href: "/platforms/ebay" },
  { label: "Shopify",          href: "/platforms/shopify" },
  { label: "Etsy",             href: "/platforms/etsy" },
  { label: "Walmart & others", href: "/platforms/walmart" },
];

export default function AmazonServices() {
  return (
    <>
    <Navbar/>
      <section className="pt-25 pb-24 bg-[#F7F7F5]" aria-labelledby="amazon-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF0F0] border border-[#f5c8c8] text-[#A32D2D] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E84040]" />
              Platforms — Amazon
            </div>
            <h1
              id="amazon-heading"
              className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] mb-6"
            >
              Amazon services.
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mb-10">
              Everything your Amazon store needs to grow — from first listing
              to Buy Box dominance. We work in Seller Central every day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-trial"
                className="px-8 py-4 rounded-xl bg-[#E84040] hover:bg-[#C42C2C] text-white font-bold text-lg transition-colors"
              >
                Get a free Amazon listing review
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
              { value: "500+",  label: "Amazon stores managed" },
              { value: "10K+",  label: "Listings optimised" },
              { value: "98%",   label: "Account health rate" },
              { value: "Daily", label: "Seller Central activity" },
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
            Everything on Amazon, covered
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
              Get a free Amazon listing review →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="why-amazon-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">Why Servzilla for Amazon</p>
            <h2
              id="why-amazon-heading"
              className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6"
            >
              We live in<br />
              <span className="text-[#E84040]">Seller Central.</span>
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-4">
              Amazon is not a platform we occasionally dip into. Our team
              works in Seller Central every day — managing listings, resolving
              suppressions, monitoring account health, and responding to
              policy changes before they affect your store.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              That daily presence is the difference between catching a problem
              early and discovering it after it has already cost you sales.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Daily Seller Central activity",   desc: "Not reactive — proactively managed" },
              { label: "A9 algorithm expertise",          desc: "Built into every listing we write" },
              { label: "FBA and FBM experience",          desc: "Both fulfilment models covered" },
              { label: "Account health monitoring",       desc: "Flags resolved before they escalate" },
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
                Ready to grow on Amazon?{" "}
                <span className="text-[#FFD600]">Start free.</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mb-10">
                We will review your Amazon listings at no charge and tell you
                exactly what to fix. No credit card. No commitment.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/free-trial"
                  className="bg-[#FFD600] hover:bg-[#FFF8D6] text-[#1A1A1A] px-10 py-5 rounded-2xl font-bold text-lg transition-colors"
                >
                  Get free listing review
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

      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="other-platforms-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2
            id="other-platforms-heading"
            className="font-headline text-2xl font-bold text-[#1A1A1A] tracking-tight mb-8"
          >
            Other platforms we support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {OTHER_PLATFORMS.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group bg-[#F7F7F5] rounded-2xl p-6 border border-[#E8E8E4] hover:border-[#E84040] transition-colors text-center"
              >
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