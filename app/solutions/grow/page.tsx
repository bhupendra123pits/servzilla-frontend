import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Grow Your Store — SEO Listings, A+ Content & Buy Box Strategy | Servzilla",
  description:
    "Servzilla helps e-commerce sellers grow with SEO-optimised listings, keyword research, A+ content, competitor analysis, and Buy Box strategy across Amazon, eBay, Shopify, Etsy and Walmart.",
  keywords: [
    "Amazon listing optimisation",
    "eBay SEO",
    "Shopify product listings",
    "A+ content service",
    "Buy Box strategy",
    "e-commerce keyword research",
    "product listing service",
    "Servzilla",
  ],
  openGraph: {
    title: "Grow Your Store | Servzilla",
    description:
      "SEO-optimised listings, keyword research, A+ content, competitor analysis, and Buy Box strategy — AI-assisted writing, human-reviewed output.",
    url: "https://servzilla.com/solutions/grow",
    siteName: "Servzilla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Your Store | Servzilla",
    description:
      "SEO listings, A+ content and Buy Box strategy for every platform you sell on.",
  },
  alternates: {
    canonical: "https://servzilla.com/solutions/grow",
  },
};

const CAPABILITIES = [
  {
    number: "01",
    title: "SEO-optimised listings",
    body: "Titles, bullet points, and descriptions written around high-intent search terms — structured for the algorithm, readable for the buyer. Every listing is researched, not templated.",
  },
  {
    number: "02",
    title: "Keyword research",
    body: "Platform-native keyword discovery across Amazon, eBay, Shopify, Etsy, and Walmart. We surface the terms your buyers actually use — then build every asset around them.",
  },
  {
    number: "03",
    title: "A+ content & enhanced brand content",
    body: "Module layouts, comparison charts, lifestyle copy, and brand story sections that lift conversion rates and reduce returns. Built to Amazon and Shopify brand standards.",
  },
  {
    number: "04",
    title: "Competitor analysis",
    body: "We audit your top competitors — their listings, pricing, reviews, and keyword coverage — and identify the gaps you can win. Actionable output, not a slide deck.",
  },
  {
    number: "05",
    title: "Buy Box strategy",
    body: "Repricing logic, fulfilment recommendations, seller metrics, and listing health checks — all tuned to maximise your Buy Box ownership on Amazon and Walmart.",
  },
  {
    number: "06",
    title: "AI-assisted writing, human-reviewed output",
    body: "We use AI to accelerate — not replace — quality. Every piece of copy is reviewed and refined by an e-commerce specialist before it reaches your listings.",
  },
];

const PLATFORMS = ["Amazon", "eBay", "Shopify", "Etsy", "Walmart", "WooCommerce"];

const FAQS = [
  {
    q: "How long does it take to optimise a listing?",
    a: "Most listings are turned around within 2–3 business days. Bulk projects (50+ SKUs) are scoped individually with a delivery schedule agreed upfront.",
  },
  {
    q: "Do you write listings from scratch or improve existing ones?",
    a: "Both. We can create net-new listings from a product brief, or audit and rewrite your existing copy to improve ranking and conversion.",
  },
  {
    q: "Which platforms do you support?",
    a: "Amazon, eBay, Shopify, Etsy, Walmart, WooCommerce, and Magento. If you sell on a platform not listed here, get in touch — we likely cover it.",
  },
  {
    q: "Is there a minimum order?",
    a: "No minimum. You can start with a single listing or a full catalog refresh. We also offer a free trial — 10 listings optimised at no charge.",
  },
];

export default function GrowYourStore() {
  return (
    <>
    <Navbar/>
      {/* ── Hero ── */}
      <section className="pt-25 pb-24 bg-[#F7F7F5]" aria-labelledby="grow-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF0F0] border border-[#f5c8c8] text-[#A32D2D] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E84040]" />
              Solutions — 01
            </div>

            <h1
              id="grow-heading"
              className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] mb-6"
            >
              Grow your store
            </h1>

            <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mb-10">
              SEO-optimised listings, keyword research, A+ content, competitor
              analysis, and Buy Box strategy — to increase your visibility and
              conversions across every platform you sell on. AI-assisted
              writing, human-reviewed output.
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

      {/* ── Stats strip ── */}
      <section className="py-12 bg-[#FFFFFF] border-y border-[#E8E8E4]" aria-label="Key results">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Stores grown" },
              { value: "2–3x", label: "Average visibility uplift" },
              { value: "48hr", label: "Average turnaround" },
              { value: "10", label: "Free trial listings" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-extrabold text-[#E84040]">{s.value}</dt>
                <dd className="text-sm text-[#6B6B6B] mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="capabilities-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            What's included
          </p>
          <h2
            id="capabilities-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Every lever that drives growth
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((c) => (
              <article
                key={c.number}
                className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E8E8E4] hover:border-[#E84040] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FDF0F0] flex items-center justify-center mb-5 group-hover:bg-[#E84040] transition-colors">
                  <span className="text-sm font-bold text-[#E84040] group-hover:text-white transition-colors">
                    {c.number}
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#1A1A1A] mb-3">
                  {c.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            The process
          </p>
          <h2
            id="process-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            How it works
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6" aria-label="Process steps">
            {[
              { step: "1", title: "Brief us", body: "Share your products, platforms, and goals. A one-page intake form — no lengthy onboarding." },
              { step: "2", title: "We research", body: "Keyword discovery, competitor audit, and platform-specific requirements before a single word is written." },
              { step: "3", title: "We write & review", body: "AI-assisted drafting, then human QA from an e-commerce specialist with platform experience." },
              { step: "4", title: "You go live", body: "Listings delivered in your preferred format — ready to upload or handed off to your team." },
            ].map((s) => (
              <li key={s.step} className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E84040] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{s.step}</span>
                  </div>
                  <div className="hidden md:block flex-1 h-px bg-[#E8E8E4] last:hidden" />
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{s.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>

        </div>
      </section>

      {/* ── Why Servzilla ── */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
              Why Servzilla
            </p>
            <h2
              id="why-heading"
              className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6"
            >
              Built for e-commerce.<br />
              <span className="text-[#E84040]">Not for everything.</span>
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-4">
              Most agencies spread thin across industries. We work exclusively
              with online sellers. Every writer, analyst, and strategist on our
              team understands Amazon's A9 algorithm, eBay's Cassini, and
              Shopify's SEO quirks — not as a side skill, but as their day job.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              That means faster briefs, fewer revisions, and output that
              actually performs — because the context is already there.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "E-commerce only", desc: "We don't work outside online retail" },
              { label: "Platform-trained team", desc: "Every member trained on your platforms" },
              { label: "Human QA on every asset", desc: "AI drafts, humans approve" },
              { label: "SLA-backed delivery", desc: "Deadlines we're accountable to" },
            ].map((f) => (
              <div
                key={f.label}
                className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E8E8E4]"
              >
                <div className="w-8 h-1 rounded-full bg-[#FFD600] mb-4" />
                <p className="font-bold text-[#1A1A1A] text-sm mb-1">{f.label}</p>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
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

      {/* ── CTA Banner ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#F7F7F5] overflow-hidden">
        <div className="max-w-7xl mx-auto bg-[#E84040] rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center md:text-left">

          <div className="relative z-10">
            <div className="col-span-12 lg:col-span-8">

              <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Ready to grow your store?{" "}
                <span className="text-[#FFD600]">Start free.</span>
              </h2>

              <p className="text-xl text-white/80 max-w-2xl mb-10">
                10 listings optimised at no charge. No credit card. No
                commitment. Just results you can evaluate before you spend a
                penny.
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

      {/* ── Related solutions ── */}
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
              { number: "02", title: "Run your store", desc: "Support, orders, inventory, repricing and maintenance.", href: "/solutions/run" },
              { number: "03", title: "Build your catalog", desc: "Uploads, attributes, enrichment and image processing.", href: "/solutions/catalog" },
              { number: "04", title: "AI-powered services", desc: "Automated extraction, AI descriptions, analytics reporting.", href: "/solutions/ai" },
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