// app/solutions/ai/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title:
    "AI-Powered Services — Listing Writing, Attribute Extraction & Analytics | Servzilla",
  description:
    "Servzilla combines AI-assisted listing writing, automated attribute extraction, AI-generated product descriptions with human QA, and analytics reporting — faster execution, not lower quality.",
  keywords: [
    "AI listing writing service",
    "automated attribute extraction",
    "AI product descriptions",
    "e-commerce analytics reporting",
    "AI e-commerce outsourcing",
    "human QA AI content",
    "Servzilla AI",
  ],
  openGraph: {
    title: "AI-Powered Services | Servzilla",
    description:
      "AI-assisted listing writing, automated attribute extraction, AI-generated product descriptions with human QA, and analytics reporting. Faster execution, not lower quality.",
    url: "https://servzilla.com/solutions/ai",
    siteName: "Servzilla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Services | Servzilla",
    description:
      "AI-assisted e-commerce services with human QA. Faster execution, not lower quality.",
  },
  alternates: {
    canonical: "https://servzilla.com/solutions/ai",
  },
};

const CAPABILITIES = [
  {
    number: "01",
    title: "AI-assisted listing writing",
    body: "Listings drafted at scale using AI — titles, bullets, and descriptions structured for platform algorithms and buyer intent. Every output is reviewed by an e-commerce specialist before delivery.",
  },
  {
    number: "02",
    title: "Automated attribute extraction",
    body: "Product attributes pulled from supplier sheets, PDFs, and existing listings using AI — then validated and structured to platform requirements. Reduces manual data entry by up to 80%.",
  },
  {
    number: "03",
    title: "AI-generated product descriptions",
    body: "Long-form and short-form descriptions generated from product data, then refined by human QA for tone, accuracy, and compliance. Consistent voice across thousands of SKUs.",
  },
  {
    number: "04",
    title: "Analytics reporting",
    body: "Performance dashboards covering listing health, keyword rankings, conversion trends, and competitor movement — compiled and interpreted by our team, delivered on your reporting cadence.",
  },
  {
    number: "05",
    title: "Human QA on every output",
    body: "No AI output leaves without a human review. Our specialists check for factual accuracy, platform compliance, tone consistency, and keyword placement before anything is delivered.",
  },
  {
    number: "06",
    title: "Scalable throughput",
    body: "AI lets us process large volumes without sacrificing quality control. Whether it is 100 descriptions or 10,000, the workflow — and the standard — stays the same.",
  },
];

const FAQS = [
  {
    q: "Is the output purely AI-generated?",
    a: "No. AI is used to accelerate drafting and extraction — every output is reviewed, edited, and approved by a human e-commerce specialist before delivery. We use AI as a tool, not a replacement.",
  },
  {
    q: "How do you ensure accuracy on attribute extraction?",
    a: "Extracted attributes go through a structured QA process — cross-referenced against source data and platform requirements before they are written to any catalog or listing.",
  },
  {
    q: "What analytics do you report on?",
    a: "Listing health scores, keyword rank tracking, conversion rate trends, Buy Box percentage, competitor pricing movement, and inventory performance — scoped to what matters for your store.",
  },
  {
    q: "Can you integrate with our existing tools?",
    a: "We work with most common e-commerce and reporting tools — including Helium 10, Jungle Scout, Google Looker Studio, and custom spreadsheet setups. We scope integrations during onboarding.",
  },
];

const PLATFORMS = [
  "Amazon",
  "eBay",
  "Shopify",
  "Etsy",
  "Walmart",
  "WooCommerce",
];

export default function AIPoweredServices() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <section
        className="pt-25 pb-24 bg-[#F7F7F5]"
        aria-labelledby="ai-heading"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF0F0] border border-[#f5c8c8] text-[#A32D2D] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E84040]" />
              Solutions — 04
            </div>
            <h1
              id="ai-heading"
              className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] mb-6"
            >
              AI-powered services
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mb-6">
              AI-assisted listing writing, automated attribute extraction,
              AI-generated product descriptions with human QA, and analytics
              reporting. Faster execution, not lower quality.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFF8D6] border border-[#FFD600] mb-8">
              <div className="w-2 h-2 rounded-full bg-[#FFD600] flex-shrink-0" />
              <p className="text-sm font-semibold" style={{ color: "#7a5f00" }}>
                AI drafts. Humans approve. Every time.
              </p>
            </div>
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
                <span
                  key={p}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFFFF] border border-[#E8E8E4] text-[#6B6B6B]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-12 bg-[#FFFFFF] border-y border-[#E8E8E4]"
        aria-label="Key results"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "80%", label: "Reduction in manual data entry" },
              { value: "100%", label: "Human QA on every output" },
              { value: "10K+", label: "Descriptions generated monthly" },
              { value: "24hr", label: "Reporting turnaround" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-extrabold text-[#E84040]">
                  {s.value}
                </dt>
                <dd className="text-sm text-[#6B6B6B] mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* AI vs Human callout */}
      <section
        className="py-24 bg-[#F7F7F5]"
        aria-labelledby="approach-heading"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            Our approach
          </p>
          <h2
            id="approach-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            How we use AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E8E8E4]">
              <div className="w-8 h-1 rounded-full bg-[#E84040] mb-6" />
              <h3 className="font-bold text-[#1A1A1A] text-lg mb-4">
                What AI does
              </h3>
              <ul className="space-y-3">
                {[
                  "Drafts listings from product data at scale",
                  "Extracts attributes from supplier documents",
                  "Generates description variants for testing",
                  "Flags listing health issues automatically",
                  "Processes and structures bulk data inputs",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#6B6B6B]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E84040] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FFF8D6] rounded-2xl p-8 border border-[#f0e080]">
              <div className="w-8 h-1 rounded-full bg-[#FFD600] mb-6" />
              <h3 className="font-bold text-[#1A1A1A] text-lg mb-4">
                What humans do
              </h3>
              <ul className="space-y-3">
                {[
                  "Reviews every output before delivery",
                  "Checks factual accuracy against source data",
                  "Ensures platform compliance and tone",
                  "Validates keyword placement and intent",
                  "Interprets analytics and makes recommendations",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#6B6B6B]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD600] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        className="py-24 bg-[#FFFFFF]"
        aria-labelledby="capabilities-heading"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            What is included
          </p>
          <h2
            id="capabilities-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            AI capability across every service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((c) => (
              <article
                key={c.number}
                className="bg-[#F7F7F5] rounded-2xl p-8 border border-[#E8E8E4] hover:border-[#E84040] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FDF0F0] flex items-center justify-center mb-5 group-hover:bg-[#E84040] transition-colors">
                  <span className="text-sm font-bold text-[#E84040] group-hover:text-white transition-colors">
                    {c.number}
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#1A1A1A] mb-3">
                  {c.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            The process
          </p>
          <h2
            id="process-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            AI speed. Human standard.
          </h2>
          <ol
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            aria-label="Process steps"
          >
            {[
              {
                step: "1",
                title: "Data in",
                body: "Product data, supplier sheets, or existing listings are ingested and structured for AI processing.",
              },
              {
                step: "2",
                title: "AI drafts",
                body: "AI generates listings, descriptions, or extracts attributes — producing a complete first draft at scale.",
              },
              {
                step: "3",
                title: "Human QA",
                body: "A specialist reviews every output — checking accuracy, compliance, tone, and keyword intent.",
              },
              {
                step: "4",
                title: "Delivery",
                body: "Approved content delivered in your preferred format — ready to upload or handed to your team.",
              },
            ].map((s) => (
              <li key={s.step} className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E84040] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {s.step}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{s.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="faq-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Common questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="bg-[#F7F7F5] rounded-2xl p-8 border border-[#E8E8E4]"
              >
                <h3 className="font-bold text-[#1A1A1A] mb-3">{f.q}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#F7F7F5] overflow-hidden"
       
      >
        <div className="max-w-7xl mx-auto bg-[#E84040] rounded-[3rem] p-12 md:p-24 sm:p-10 md:p-16 lg:p-24 relative overflow-hidden text-center md:text-left">
          <div className="relative z-10">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                See AI-quality output{" "}
                <span className="text-[#FFD600]">for free.</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mb-10">
                Send us 10 products. We will write AI-assisted, human-reviewed
                listings and return them at no charge. Judge the quality before
                you commit.
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
              {
                number: "01",
                title: "Grow your store",
                desc: "Listings, SEO, A+ content and Buy Box strategy.",
                href: "/solutions/grow",
              },
              {
                number: "02",
                title: "Run your store",
                desc: "Support, orders, inventory and repricing.",
                href: "/solutions/run",
              },
              {
                number: "03",
                title: "Build your catalog",
                desc: "Uploads, attributes, enrichment and images.",
                href: "/solutions/catalog",
              },
            ].map((s) => (
              <Link
                key={s.number}
                href={s.href}
                className="group bg-[#F7F7F5] rounded-2xl p-8 border border-[#E8E8E4] hover:border-[#E84040] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FDF0F0] flex items-center justify-center mb-4 group-hover:bg-[#E84040] transition-colors">
                  <span className="text-xs font-bold text-[#E84040] group-hover:text-white transition-colors">
                    {s.number}
                  </span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2 group-hover:text-[#E84040] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
