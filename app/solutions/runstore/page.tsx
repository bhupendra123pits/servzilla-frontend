// app/solutions/run/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Run Your Store — Customer Support, Orders & Operations | Servzilla",
  description:
    "Servzilla handles customer support, order processing, inventory monitoring, repricing, and store maintenance for e-commerce sellers — on an SLA you can hold us to.",
  keywords: [
    "e-commerce customer support outsourcing",
    "Amazon order processing",
    "inventory monitoring service",
    "repricing service",
    "store maintenance outsourcing",
    "e-commerce operations",
    "Servzilla",
  ],
  openGraph: {
    title: "Run Your Store | Servzilla",
    description:
      "Customer support, order processing, inventory monitoring, repricing, and store maintenance — handled by a dedicated team on an SLA.",
    url: "https://servzilla.com/solutions/run",
    siteName: "Servzilla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Run Your Store | Servzilla",
    description: "Day-to-day e-commerce operations, off your plate. SLA-backed dedicated team.",
  },
  alternates: {
    canonical: "https://servzilla.com/solutions/run",
  },
};

const CAPABILITIES = [
  {
    number: "01",
    title: "Customer support",
    body: "Inbox management across email, marketplace messaging, and live chat. Returns, refunds, escalations, and feedback responses — handled within your SLA window, every day.",
  },
  {
    number: "02",
    title: "Order processing",
    body: "Order confirmation, tracking updates, exception handling, and fulfilment coordination. We catch the issues before your customers do.",
  },
  {
    number: "03",
    title: "Inventory monitoring",
    body: "Stock level alerts, low-inventory flags, suppressed listing detection, and restock recommendations — so you never lose a sale to an avoidable out-of-stock.",
  },
  {
    number: "04",
    title: "Repricing",
    body: "Rule-based and competitive repricing across Amazon and Walmart to protect your margins while staying Buy Box competitive. Configured to your floor and ceiling.",
  },
  {
    number: "05",
    title: "Store maintenance",
    body: "Listing health checks, suppression fixes, policy violation responses, image compliance, and routine platform updates — the upkeep that keeps your store running clean.",
  },
  {
    number: "06",
    title: "SLA-backed delivery",
    body: "Every engagement comes with a service-level agreement. Response times, resolution targets, and escalation paths — written down, agreed upfront, and held to.",
  },
];

const FAQS = [
  {
    q: "What does the SLA cover?",
    a: "Response time targets, resolution windows, escalation procedures, and reporting cadence. Every client gets a written SLA before work begins — not after.",
  },
  {
    q: "Do you work across multiple platforms simultaneously?",
    a: "Yes. We manage operations across Amazon, eBay, Shopify, Etsy, and Walmart concurrently — with a single point of contact for your account.",
  },
  {
    q: "How quickly can you start?",
    a: "Most clients are onboarded within 5 business days. We need platform access, your support guidelines, and a brief on any open issues — that's it.",
  },
  {
    q: "Can I scale up or down?",
    a: "Yes. Our packages are scoped monthly. You can increase coverage during peak season and reduce it off-peak — no long-term lock-in required.",
  },
];

const PLATFORMS = ["Amazon", "eBay", "Shopify", "Etsy", "Walmart", "WooCommerce"];

export default function RunYourStore() {
  return (
    <>
    <Navbar/>
      {/* ── Hero ── */}
      <section className="pt-25 pb-24 bg-[#F7F7F5]" aria-labelledby="run-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF0F0] border border-[#f5c8c8] text-[#A32D2D] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E84040]" />
              Solutions — 02
            </div>

            <h1
              id="run-heading"
              className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] mb-6"
            >
              Run your store
            </h1>

            <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mb-10">
              Customer support, order processing, inventory monitoring, repricing,
              and store maintenance — handled by a dedicated team on an SLA you can
              hold us to. Day-to-day operations, off your plate.
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

      {/* ── Stats strip ── */}
      <section className="py-12 bg-[#FFFFFF] border-y border-[#E8E8E4]" aria-label="Key results">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+",  label: "Stores supported" },
              { value: "4hr",   label: "Average first response" },
              { value: "98%",   label: "Ticket resolution rate" },
              { value: "5 days", label: "Onboarding time" },
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
            What is included
          </p>
          <h2
            id="capabilities-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Everything that keeps your store running
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
                <h3 className="font-headline text-lg font-bold text-[#1A1A1A] mb-3">{c.title}</h3>
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
            Up and running in 5 days
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6" aria-label="Onboarding steps">
            {[
              { step: "1", title: "Access & brief", body: "Share platform credentials and your support guidelines. One intake call — no lengthy process." },
              { step: "2", title: "Team assigned", body: "A dedicated specialist is matched to your account based on your platform mix and volume." },
              { step: "3", title: "SLA agreed", body: "Response targets, escalation paths, and reporting cadence — written and signed before day one." },
              { step: "4", title: "We take over", body: "Your inbox, orders, and store health — managed from day one, with weekly reporting to you." },
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

      {/* ── Why Servzilla ── */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">Why Servzilla</p>
            <h2
              id="why-heading"
              className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6"
            >
              An SLA you can<br />
              <span className="text-[#E84040]">actually hold us to.</span>
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-4">
              Most outsourcing services give you a team and a hope. We give you
              a written service-level agreement with defined response windows,
              resolution targets, and escalation procedures — before work starts,
              not buried in the small print.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              And because we work exclusively with e-commerce sellers, our team
              already knows the platforms, the policies, and the edge cases. No
              ramping up on your dime.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Written SLA on every contract",     desc: "Not a verbal promise — a document" },
              { label: "Dedicated account specialist",      desc: "One person, not a rotating pool" },
              { label: "Platform-trained from day one",     desc: "No onboarding to your industry" },
              { label: "Weekly reporting included",         desc: "Visibility without chasing us" },
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

      {/* ── FAQ ── */}
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

      {/* ── CTA Banner ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#F7F7F5] overflow-hidden">
        <div className="max-w-7xl mx-auto bg-[#E84040] rounded-[3rem] p-12 md:p-24 sm:p-10 md:p-16 lg:p-24 relative overflow-hidden text-center md:text-left">
          <div className="relative z-10">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Ready to hand off operations?{" "}
                <span className="text-[#FFD600]">Start free.</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mb-10">
                3 days of customer support handled for free. No credit card.
                No commitment. Evaluate the quality before you spend a penny.
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
              { number: "01", title: "Grow your store",     desc: "Listings, SEO, A+ content and Buy Box strategy.",        href: "/solutions/grow" },
              { number: "03", title: "Build your catalog",  desc: "Uploads, attributes, enrichment and image processing.",  href: "/solutions/catalog" },
              { number: "04", title: "AI-powered services", desc: "Automated extraction, AI descriptions, analytics.",      href: "/solutions/ai" },
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