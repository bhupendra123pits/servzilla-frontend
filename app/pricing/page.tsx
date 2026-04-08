import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Pricing — Straightforward E-commerce Outsourcing Rates | Servzilla",
  description:
    "Servzilla pricing for listing creation, catalog management, monthly packages, virtual assistants, and image processing. Per-SKU rates from $0.50. Free trial included — no credit card required.",
  keywords: [
    "e-commerce outsourcing pricing",
    "Amazon listing service cost",
    "catalog management pricing",
    "virtual assistant pricing",
    "e-commerce VA cost",
    "product listing price per SKU",
    "Servzilla pricing",
  ],
  openGraph: {
    title: "Pricing | Servzilla",
    description:
      "Straightforward pricing. No surprises. Per-SKU rates, monthly packages, VA plans, and image processing — with a free trial to start.",
    url: "https://servzilla.com/pricing",
    siteName: "Servzilla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Servzilla",
    description:
      "Per-SKU rates from $0.50. Monthly packages. VA plans from $350/month. Free trial — no credit card.",
  },
  alternates: { canonical: "https://servzilla.com/pricing" },
};

const LISTING_SERVICES = [
  {
    service: "Product data entry (standard)",
    price: "from $0.50",
    unit: "per SKU",
    note: "",
  },
  {
    service: "Listing creation with copywriting",
    price: "from $2.00",
    unit: "per SKU",
    note: "",
  },
  {
    service: "Listing optimisation",
    price: "from $1.50",
    unit: "per SKU",
    note: "",
  },
  {
    service: "AI-assisted listing writing (human review included)",
    price: "from $1.00",
    unit: "per SKU",
    note: "",
  },
  {
    service: "Catalog enrichment / data cleanup",
    price: "Quoted by scope",
    unit: "",
    note: "Contact us for a quote",
  },
];

const MONTHLY_PACKAGES = [
  {
    name: "Starter",
    hours: "40 hrs / month",
    best: "Stores up to 500 SKUs with moderate support volume.",
    features: [
      "40 hours of operational support",
      "Dedicated account contact",
      "Weekly performance report",
      "Customer support coverage",
      "Listing updates and maintenance",
    ],
    cta: "Start with Starter",
    featured: false,
    price: "Contact for pricing",
  },
  {
    name: "Growth",
    hours: "80 hrs / month",
    best: "Full back-office coverage — support, repricing, and catalog maintenance.",
    features: [
      "80 hours of operational support",
      "Dedicated account contact",
      "Weekly performance report",
      "Full customer support coverage",
      "Repricing and inventory monitoring",
      "Catalog maintenance included",
    ],
    cta: "Start with Growth",
    featured: true,
    price: "Contact for pricing",
  },
  {
    name: "Scale",
    hours: "160 hrs / month",
    best: "Dedicated team with account management and weekly review calls.",
    features: [
      "160 hours of operational support",
      "Dedicated team — not one person",
      "Weekly review call included",
      "Full back-office operations",
      "Account management layer",
      "Priority SLA and escalation",
      "Custom reporting available",
    ],
    cta: "Start with Scale",
    featured: false,
    price: "Contact for pricing",
  },
];

const VA_PLANS = [
  {
    type: "Part-time VA",
    hours: "20 hrs / week",
    price: "from $350",
    period: "/ month",
    best: "Daily store coverage without a full headcount commitment.",
    features: [
      "Dedicated VA, not shared",
      "Agreed daily working hours",
      "Direct communication line",
      "Weekly performance report",
      "Replacement guarantee",
      "Backup cover arranged by us",
    ],
    featured: false,
  },
  {
    type: "Full-time VA",
    hours: "40 hrs / week",
    price: "from $600",
    period: "/ month",
    best: "Full-coverage daily support for growing stores.",
    features: [
      "Dedicated full-time VA",
      "Full working day coverage",
      "Daily check-ins available",
      "Weekly performance report",
      "Priority replacement guarantee",
      "Backup cover included",
      "HR and training handled by us",
    ],
    featured: true,
  },
];

const IMAGE_SERVICES = [
  {
    service: "Background removal",
    price: "from $0.30",
    unit: "per image",
  },
  {
    service: "Full image set (editing, resizing, export)",
    price: "from $1.50",
    unit: "per image",
  },
];

const FREE_TRIAL_OPTIONS = [
  {
    number: "01",
    title: "10 free listings",
    body: "We optimise or create up to 10 product listings at no charge — titles, bullets, descriptions, and keywords.",
  },
  {
    number: "02",
    title: "3 days of customer support",
    body: "We handle your customer support inbox for 3 full days, free. See how we work before you commit.",
  },
  {
    number: "03",
    title: "Sample catalog task",
    body: "Upload, enrich, or clean a batch of your catalog data at no cost. We return it ready to use.",
  },
];

export default function Pricing() {
  return (
    <>
    <Navbar/>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-[#F7F7F5]" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF0F0] border border-[#f5c8c8] text-[#A32D2D] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E84040]" />
              Pricing
            </div>
            <h1
              id="pricing-heading"
              className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] mb-6"
            >
              Straightforward pricing.
              <br />
              <span className="text-[#E84040]">No surprises.</span>
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mb-8">
              No long contracts. No hidden fees. Start with a free trial and
              scale as you grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-trial"
                className="px-8 py-4 rounded-xl bg-[#E84040] hover:bg-[#C42C2C] text-white font-bold text-lg transition-colors"
              >
                Start free trial
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl border border-[#E8E8E4] text-[#1A1A1A] font-bold text-lg hover:bg-[#FDF0F0] hover:border-[#f5c8c8] transition-all"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-12 bg-[#FFFFFF] border-y border-[#E8E8E4]" aria-label="Trust signals">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "No",         label: "Long-term contracts" },
              { value: "No",         label: "Hidden fees" },
              { value: "Free trial", label: "Before you commit" },
              { value: "No",         label: "Credit card to start" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-extrabold text-[#E84040]">{s.value}</dt>
                <dd className="text-sm text-[#6B6B6B] mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Listing & catalog services */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="listing-pricing-heading" id="per-sku">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            Listing & catalog services
          </p>
          <h2
            id="listing-pricing-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4"
          >
            Per-SKU rates
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-12 max-w-2xl">
            Per SKU or per hour, depending on complexity. Volume discounts apply
            for 500+ SKUs.
          </p>

          <div className="max-w-3xl space-y-3">
            {LISTING_SERVICES.map((item) => (
              <div
                key={item.service}
                className="flex items-center justify-between bg-[#FFFFFF] rounded-2xl px-8 py-5 border border-[#E8E8E4] hover:border-[#E84040] transition-colors group"
              >
                <div>
                  <p className="font-medium text-[#1A1A1A] text-sm group-hover:text-[#E84040] transition-colors">
                    {item.service}
                  </p>
                  {item.note && (
                    <p className="text-xs text-[#6B6B6B] mt-0.5">{item.note}</p>
                  )}
                </div>
                <div className="text-right flex-shrink-0 ml-8">
                  <p className="font-extrabold text-[#1A1A1A] text-sm">{item.price}</p>
                  {item.unit && (
                    <p className="text-xs text-[#6B6B6B]">{item.unit}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFF8D6] border border-[#FFD600]">
              <div className="w-2 h-2 rounded-full bg-[#FFD600] flex-shrink-0" />
              <p className="text-sm font-semibold" style={{ color: "#7a5f00" }}>
                Volume discount available for 500+ SKUs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly packages */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="packages-heading" id="packages">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            Monthly packages
          </p>
          <h2
            id="packages-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4"
          >
            Ongoing operational support
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-12 max-w-2xl">
            All packages include weekly reporting and a dedicated account
            contact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MONTHLY_PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className={`rounded-2xl p-8 border transition-colors relative ${
                  pkg.featured
                    ? "bg-[#E84040] border-[#E84040]"
                    : "bg-[#F7F7F5] border-[#E8E8E4] hover:border-[#E84040]"
                }`}
              >
                {pkg.featured && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFD600] mb-4">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#7a5f00" }}
                    >
                      Most popular
                    </span>
                  </div>
                )}
                <h3
                  className={`font-headline text-2xl font-extrabold mb-1 ${
                    pkg.featured ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm font-semibold mb-4 ${
                    pkg.featured ? "text-white/80" : "text-[#E84040]"
                  }`}
                >
                  {pkg.hours}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    pkg.featured ? "text-white/70" : "text-[#6B6B6B]"
                  }`}
                >
                  {pkg.best}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          pkg.featured ? "bg-[#FFD600]" : "bg-[#E84040]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          pkg.featured ? "text-white/80" : "text-[#6B6B6B]"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-bold text-sm transition-colors ${
                    pkg.featured
                      ? "bg-[#FFD600] hover:bg-[#FFF8D6] text-[#1A1A1A]"
                      : "bg-[#E84040] hover:bg-[#C42C2C] text-white"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-[#6B6B6B]">
            Need something between these?{" "}
            <Link
              href="/contact"
              className="text-[#E84040] font-semibold hover:text-[#C42C2C] transition-colors"
            >
              Talk to us about a custom scope →
            </Link>
          </p>
        </div>
      </section>

      {/* Virtual assistants */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="va-pricing-heading" id="va">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            Virtual assistants
          </p>
          <h2
            id="va-pricing-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4"
          >
            Dedicated VA plans
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-12 max-w-2xl">
            E-commerce trained. Onboarded in 48–72 hours. Replacement guarantee
            included on every plan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {VA_PLANS.map((plan) => (
              <article
                key={plan.type}
                className={`rounded-2xl p-8 border transition-colors ${
                  plan.featured
                    ? "bg-[#E84040] border-[#E84040]"
                    : "bg-[#FFFFFF] border-[#E8E8E4] hover:border-[#E84040]"
                }`}
              >
                {plan.featured && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFD600] mb-4">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#7a5f00" }}
                    >
                      Most popular
                    </span>
                  </div>
                )}
                <h3
                  className={`font-headline text-xl font-extrabold mb-1 ${
                    plan.featured ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  {plan.type}
                </h3>
                <p
                  className={`text-sm font-medium mb-2 ${
                    plan.featured ? "text-white/70" : "text-[#6B6B6B]"
                  }`}
                >
                  {plan.hours}
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span
                    className={`text-3xl font-extrabold ${
                      plan.featured ? "text-white" : "text-[#E84040]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.featured ? "text-white/70" : "text-[#6B6B6B]"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    plan.featured ? "text-white/70" : "text-[#6B6B6B]"
                  }`}
                >
                  {plan.best}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          plan.featured ? "bg-[#FFD600]" : "bg-[#E84040]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.featured ? "text-white/80" : "text-[#6B6B6B]"
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
                    plan.featured
                      ? "bg-[#FFD600] hover:bg-[#FFF8D6] text-[#1A1A1A]"
                      : "bg-[#E84040] hover:bg-[#C42C2C] text-white"
                  }`}
                >
                  Get matched with a VA
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-[#6B6B6B]">
            Learn more about our VA service on the{" "}
            <Link
              href="/virtual-assistants"
              className="text-[#E84040] font-semibold hover:text-[#C42C2C] transition-colors"
            >
              Virtual Assistants page →
            </Link>
          </p>
        </div>
      </section>

      {/* Image processing */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="image-pricing-heading" id="images">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            Image processing
          </p>
          <h2
            id="image-pricing-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Image services
          </h2>

          <div className="max-w-2xl space-y-3">
            {IMAGE_SERVICES.map((item) => (
              <div
                key={item.service}
                className="flex items-center justify-between bg-[#F7F7F5] rounded-2xl px-8 py-5 border border-[#E8E8E4] hover:border-[#E84040] transition-colors group"
              >
                <p className="font-medium text-[#1A1A1A] text-sm group-hover:text-[#E84040] transition-colors">
                  {item.service}
                </p>
                <div className="text-right flex-shrink-0 ml-8">
                  <p className="font-extrabold text-[#1A1A1A] text-sm">{item.price}</p>
                  <p className="text-xs text-[#6B6B6B]">{item.unit}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-[#6B6B6B]">
            Need bulk image processing?{" "}
            <Link
              href="/contact"
              className="text-[#E84040] font-semibold hover:text-[#C42C2C] transition-colors"
            >
              Contact us for volume rates →
            </Link>
          </p>
        </div>
      </section>

      {/* Custom scope */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="custom-heading" id="custom">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
              Custom scope
            </p>
            <h2
              id="custom-heading"
              className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6"
            >
              Not a standard fit?
              <br />
              <span className="text-[#E84040]">We will scope it.</span>
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-6">
              Multi-platform operations, large catalog projects, hybrid VA and
              service arrangements, or anything that does not map cleanly to
              the above — we scope and quote these individually.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8">
              Tell us what you need. We will come back with a clear scope,
              a fixed rate, and a timeline — before you commit to anything.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E84040] hover:bg-[#C42C2C] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Talk to us about a custom scope
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: "Fixed scope, fixed rate",      desc: "No open-ended billing — scope agreed before work starts" },
              { label: "No obligation to proceed",     desc: "We quote, you decide — no pressure" },
              { label: "Multi-platform supported",     desc: "Amazon, eBay, Shopify, Etsy, Walmart and more" },
              { label: "Hybrid arrangements welcome",  desc: "Mix of VA, service, and catalog work quoted together" },
            ].map((f) => (
              <div key={f.label} className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E8E8E4] flex items-start gap-4">
                <div className="w-8 h-1 rounded-full bg-[#FFD600] mt-2 flex-shrink-0" />
                <div>
                  <p className="font-bold text-[#1A1A1A] text-sm mb-1">{f.label}</p>
                  <p className="text-[#6B6B6B] text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free trial */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="trial-heading" id="free-trial">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            Free trial
          </p>
          <h2
            id="trial-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4"
          >
            Try before you commit
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-12 max-w-2xl">
            New clients trial the service before committing. No credit card
            required.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {FREE_TRIAL_OPTIONS.map((o) => (
              <div
                key={o.number}
                className="bg-[#F7F7F5] rounded-2xl p-8 border border-[#E8E8E4] hover:border-[#E84040] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FDF0F0] flex items-center justify-center mb-5 group-hover:bg-[#E84040] transition-colors">
                  <span className="text-sm font-bold text-[#E84040] group-hover:text-white transition-colors">
                    {o.number}
                  </span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-3">{o.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/free-trial"
            className="inline-flex items-center gap-2 bg-[#E84040] hover:bg-[#C42C2C] text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            Start free trial — no card required
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="pricing-faq-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">FAQ</p>
          <h2
            id="pricing-faq-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Pricing questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {[
              {
                q: "Are there any setup fees?",
                a: "No. There are no setup fees, onboarding fees, or platform fees. You pay for the work — nothing else.",
              },
              {
                q: "How do volume discounts work?",
                a: "For per-SKU services, volume discounts apply automatically at 500+ SKUs. The rate reduction is applied to the whole batch — not just the SKUs above the threshold. Contact us for exact rates at your volume.",
              },
              {
                q: "Is there a minimum order or commitment?",
                a: "No minimum for per-SKU services. Monthly packages and VA plans are billed monthly — no long-term contract required.",
              },
              {
                q: "How do I pay?",
                a: "We accept bank transfer and major card payments. Invoices are issued per project or monthly depending on the engagement type.",
              },
              {
                q: "Can I mix services and a VA?",
                a: "Yes. Many clients combine a VA with per-SKU listing work or an image processing batch. We can scope these together or run them separately.",
              },
              {
                q: "What if my needs change month to month?",
                a: "Per-SKU services are ordered as needed — there is no recurring commitment. Monthly packages can be adjusted at renewal. VA plans can scale from part-time to full-time with notice.",
              },
            ].map((f) => (
              <div key={f.q} className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E8E8E4]">
                <h3 className="font-bold text-[#1A1A1A] mb-3">{f.q}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 md:px-8 bg-[#F7F7F5]" aria-label="Call to action">
        <div className="max-w-7xl mx-auto bg-[#E84040] rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center md:text-left">
          <div className="relative z-10 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Not sure where to start?{" "}
                <span className="text-[#FFD600]">Start free.</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mb-10">
                Try before you commit. 10 listings, 3 days of support, or a
                sample catalog task — at no charge. No credit card required.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/free-trial"
                  className="bg-[#FFD600] hover:bg-[#FFF8D6] text-[#1A1A1A] px-10 py-5 rounded-2xl font-bold text-lg transition-colors"
                >
                  Start free trial
                </Link>
                <Link
                  href="/contact"
                  className="text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C42C2C]/40 -skew-x-12 translate-x-1/2 pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#FFD600]/20 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>
      <Footer/>
    </>
  );
}