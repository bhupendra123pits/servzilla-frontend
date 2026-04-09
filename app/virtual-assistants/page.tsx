// app/virtual-assistants/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "E-commerce Virtual Assistants — Dedicated VA for Your Online Store | Servzilla",
  description:
    "Servzilla provides dedicated e-commerce virtual assistants trained in Seller Central, eBay, Shopify and more. Part-time or full-time, onboarded in 48–72 hours with a replacement guarantee.",
  keywords: [
    "e-commerce virtual assistant",
    "Amazon VA service",
    "Shopify virtual assistant",
    "eBay virtual assistant",
    "dedicated e-commerce VA",
    "online store virtual assistant",
    "Servzilla VA",
  ],
  openGraph: {
    title: "E-commerce Virtual Assistants | Servzilla",
    description:
      "A dedicated team member for your store — trained in e-commerce, not general admin. Part-time or full-time, onboarded in 48–72 hours.",
    url: "https://servzilla.com/virtual-assistants",
    siteName: "Servzilla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Virtual Assistants | Servzilla",
    description:
      "Dedicated e-commerce VAs trained in Seller Central, eBay, Shopify and more. Onboarded in 48–72 hours.",
  },
  alternates: { canonical: "https://servzilla.com/virtual-assistants" },
};

const VA_TASKS = [
  {
    number: "01",
    title: "Customer support",
    body: "Responding to buyer messages across all platforms — within agreed SLA windows, every day.",
  },
  {
    number: "02",
    title: "Listing monitoring",
    body: "Watching for suppressions, errors, and policy issues before they cost you visibility or sales.",
  },
  {
    number: "03",
    title: "Product data updates",
    body: "Updating prices, quantities, titles, and product information across your platforms as needed.",
  },
  {
    number: "04",
    title: "Order processing",
    body: "Processing and tracking orders, handling exceptions, and coordinating fulfilment updates.",
  },
  {
    number: "05",
    title: "Competitor research",
    body: "Regular competitor monitoring — pricing, listings, and positioning — with structured reporting.",
  },
  {
    number: "06",
    title: "Returns and refunds",
    body: "Managing return requests and refund processing in line with platform policies and your guidelines.",
  },
  {
    number: "07",
    title: "Performance reporting",
    body: "Weekly sales and performance reports prepared and delivered — so you always know where you stand.",
  },
  {
    number: "08",
    title: "Supplier coordination",
    body: "Liaising with suppliers and logistics partners on your behalf — chasing updates, flagging issues.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "We match you",
    body: "Based on your platform mix, order volume, and specific requirements, we identify the right VA for your store — not a random assignment.",
  },
  {
    step: "2",
    title: "Direct line, agreed hours",
    body: "You get a direct communication channel with your VA, agreed working hours, and a weekly reporting structure from day one.",
  },
  {
    step: "3",
    title: "We handle the rest",
    body: "HR, training, backup cover, and management sit with us. You get the output without the overhead of being an employer.",
  },
  {
    step: "4",
    title: "Live in 48–72 hours",
    body: "From match to active — most VAs are onboarded and operational within 48 to 72 hours of confirmation.",
  },
];

const ENGAGEMENT_OPTIONS = [
  {
    type: "Part-time",
    hours: "20 hrs / week",
    best: "Stores needing daily coverage without a full headcount commitment.",
    features: [
      "Dedicated VA, not shared",
      "Agreed daily working hours",
      "Weekly performance report",
      "Direct messaging line",
      "Replacement guarantee",
    ],
    cta: "Start part-time",
    featured: false,
  },
  {
    type: "Full-time",
    hours: "40 hrs / week",
    best: "Growing stores that need consistent, daily, full-coverage support.",
    features: [
      "Dedicated full-time VA",
      "Full working day coverage",
      "Daily check-ins available",
      "Weekly performance report",
      "Priority replacement guarantee",
      "Backup cover included",
    ],
    cta: "Start full-time",
    featured: true,
  },
];

const PLATFORMS = ["Amazon", "eBay", "Shopify", "Etsy", "Walmart", "WooCommerce"];

export default function VirtualAssistants() {
  return (
    <>
    <Navbar/>
      {/* Hero */}
      <section className="pt-25 pb-24 bg-[#F7F7F5]" aria-labelledby="va-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF0F0] border border-[#f5c8c8] text-[#A32D2D] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E84040]" />
              Virtual Assistants
            </div>
            <h1
              id="va-heading"
              className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] mb-6"
            >
              E-commerce virtual assistants.
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mb-4">
              A dedicated team member for your store — trained in e-commerce,
              not general admin.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFF8D6] border border-[#FFD600] mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#FFD600] flex-shrink-0" />
              <p className="text-sm font-semibold" style={{ color: "#7a5f00" }}>
                Onboarded in 48–72 hours. Replacement guarantee included.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-trial"
                className="px-8 py-4 rounded-xl bg-[#E84040] hover:bg-[#C42C2C] text-white font-bold text-lg transition-colors"
              >
                Get matched with a VA
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

      {/* Stats strip */}
      <section className="py-12 bg-[#FFFFFF] border-y border-[#E8E8E4]" aria-label="Key stats">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "48–72hr", label: "Onboarding time" },
              { value: "100%",    label: "E-commerce trained" },
              { value: "20/40",   label: "Hrs/week options" },
              { value: "Guaranteed", label: "Replacement policy" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-extrabold text-[#E84040]">{s.value}</dt>
                <dd className="text-sm text-[#6B6B6B] mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What makes a Servzilla VA different */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="difference-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
              Not a generalist
            </p>
            <h2
              id="difference-heading"
              className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6"
            >
              Trained in e-commerce.<br />
              <span className="text-[#E84040]">Not general admin.</span>
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-4">
              A Servzilla VA is not a generalist repurposed for e-commerce.
              They are trained specifically in e-commerce operations — familiar
              with Seller Central, eBay dashboards, Shopify, and the workflows
              that keep online stores running.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              When you need someone who already understands the platform, the
              processes, and the pace — that is what we provide. No lengthy
              briefing sessions. No learning on your time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Platform-trained from day one",   desc: "Seller Central, Shopify, eBay — already familiar" },
              { label: "E-commerce workflows built in",   desc: "Order flows, listing cycles, support processes" },
              { label: "We handle HR and training",       desc: "Management overhead stays with us" },
              { label: "Backup cover included",           desc: "No gaps when your VA is unavailable" },
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

      {/* What your VA handles */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="tasks-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            What your VA handles
          </p>
          <h2
            id="tasks-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Day-to-day operations, covered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VA_TASKS.map((t) => (
              <article
                key={t.number}
                className="bg-[#F7F7F5] rounded-2xl p-6 border border-[#E8E8E4] hover:border-[#E84040] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FDF0F0] flex items-center justify-center mb-4 group-hover:bg-[#E84040] transition-colors">
                  <span className="text-xs font-bold text-[#E84040] group-hover:text-white transition-colors">
                    {t.number}
                  </span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-sm mb-2">{t.title}</h3>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            How it works
          </p>
          <h2
            id="process-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            From brief to operational in 72 hours
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6" aria-label="Onboarding steps">
            {HOW_IT_WORKS.map((s) => (
              <li key={s.step}>
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

      {/* Engagement options */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="options-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            Engagement options
          </p>
          <h2
            id="options-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Part-time or full-time
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {ENGAGEMENT_OPTIONS.map((o) => (
              <div
                key={o.type}
                className={`rounded-2xl p-8 border transition-colors ${
                  o.featured
                    ? "bg-[#E84040] border-[#E84040]"
                    : "bg-[#F7F7F5] border-[#E8E8E4] hover:border-[#E84040]"
                }`}
              >
                {o.featured && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFD600] mb-4">
                    <span className="text-xs font-bold" style={{ color: "#7a5f00" }}>
                      Most popular
                    </span>
                  </div>
                )}
                <h3
                  className={`font-headline text-2xl font-extrabold mb-1 ${
                    o.featured ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  {o.type}
                </h3>
                <p
                  className={`text-sm font-semibold mb-4 ${
                    o.featured ? "text-white/80" : "text-[#E84040]"
                  }`}
                >
                  {o.hours}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    o.featured ? "text-white/70" : "text-[#6B6B6B]"
                  }`}
                >
                  {o.best}
                </p>
                <ul className="space-y-3 mb-8">
                  {o.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          o.featured ? "bg-[#FFD600]" : "bg-[#E84040]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          o.featured ? "text-white/80" : "text-[#6B6B6B]"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/free-trial"
                  className={`block text-center py-3 rounded-xl font-bold text-sm transition-colors ${
                    o.featured
                      ? "bg-[#FFD600] hover:bg-[#FFF8D6] text-[#1A1A1A]"
                      : "bg-[#E84040] hover:bg-[#C42C2C] text-white"
                  }`}
                >
                  {o.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#6B6B6B]">
            Need a custom arrangement?{" "}
            <Link href="/contact" className="text-[#E84040] font-semibold hover:text-[#C42C2C] transition-colors">
              Talk to us →
            </Link>
          </p>
        </div>
      </section>

      {/* Guarantee section */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="guarantee-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
                Our guarantees
              </p>
              <h2
                id="guarantee-heading"
                className="font-headline text-4xl font-bold text-[#1A1A1A] tracking-tight"
              >
                Built-in protection.
                <span className="text-[#E84040]"> From day one.</span>
              </h2>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Replacement guarantee",
                  body: "If the fit is not right, we replace your VA — no questions asked, no additional cost.",
                },
                {
                  title: "Backup cover",
                  body: "If your VA is unavailable, backup cover is arranged by us. Your store does not stop.",
                },
                {
                  title: "48–72hr onboarding",
                  body: "From match confirmed to your VA being operational — within two to three business days.",
                },
              ].map((g) => (
                <div key={g.title} className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E8E8E4]">
                  <div className="w-8 h-1 rounded-full bg-[#FFD600] mb-4" />
                  <h3 className="font-bold text-[#1A1A1A] text-sm mb-2">{g.title}</h3>
                  <p className="text-[#6B6B6B] text-xs leading-relaxed">{g.body}</p>
                </div>
              ))}
            </div>
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
            {[
              {
                q: "What platforms is your VA trained on?",
                a: "Amazon Seller Central, eBay seller hub, Shopify, Etsy, Walmart Marketplace, WooCommerce, and Magento. If you sell on a platform not listed, ask us — we likely have coverage.",
              },
              {
                q: "How do I communicate with my VA?",
                a: "Via your preferred channel — email, Slack, WhatsApp, or any tool you already use. A direct line is agreed at onboarding, not routed through a helpdesk.",
              },
              {
                q: "What if the VA is not the right fit?",
                a: "We replace them. No questions, no additional cost, no lengthy process. The replacement guarantee is written into every engagement.",
              },
              {
                q: "Who manages the VA day-to-day?",
                a: "You direct the work. We manage the HR, training, performance oversight, and backup arrangements — so you get the output without the employment overhead.",
              },
              {
                q: "Can I start part-time and move to full-time?",
                a: "Yes. Most clients start part-time and scale up once the working relationship is established. Transitions are handled with no disruption to your store.",
              },
              {
                q: "Is there a minimum contract length?",
                a: "Engagements are monthly. There is no long-term lock-in — though most clients stay because it works, not because they have to.",
              },
            ].map((f) => (
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
                Ready for a VA who already{" "}
                <span className="text-[#FFD600]">knows e-commerce?</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mb-10">
                Tell us your platform, your volume, and what you need off your
                plate. We will match you with the right VA and have them
                operational within 72 hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/free-trial"
                  className="bg-[#FFD600] hover:bg-[#FFF8D6] text-[#1A1A1A] px-10 py-5 rounded-2xl font-bold text-lg transition-colors"
                >
                  Get matched with a VA
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
            Explore our solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Grow your store",     desc: "SEO listings, A+ content, Buy Box strategy.", href: "/solutions/grow" },
              { number: "02", title: "Run your store",      desc: "Support, orders, inventory, repricing.",      href: "/solutions/run" },
              { number: "03", title: "Build your catalog",  desc: "Uploads, attributes, enrichment, images.",    href: "/solutions/catalog" },
              { number: "04", title: "AI-powered services", desc: "AI drafts, human QA, analytics reporting.",   href: "/solutions/ai" },
            ].map((s) => (
              <Link
                key={s.number}
                href={s.href}
                className="group bg-[#F7F7F5] rounded-2xl p-6 border border-[#E8E8E4] hover:border-[#E84040] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FDF0F0] flex items-center justify-center mb-4 group-hover:bg-[#E84040] transition-colors">
                  <span className="text-xs font-bold text-[#E84040] group-hover:text-white transition-colors">{s.number}</span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2 group-hover:text-[#E84040] transition-colors text-sm">{s.title}</h3>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}