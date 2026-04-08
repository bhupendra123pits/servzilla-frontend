// app/free-trial/page.tsx

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Trial — Try Servzilla Before You Commit | No Credit Card",
  description:
    "Try Servzilla free — 10 listings optimised, 3 days of customer support handled, or a sample catalog task completed. No credit card. No commitment. New clients only.",
  keywords: [
    "free e-commerce listing trial",
    "try Servzilla free",
    "e-commerce outsourcing trial",
    "free Amazon listing review",
    "no credit card e-commerce service",
    "Servzilla free trial",
  ],
  openGraph: {
    title: "Free Trial | Servzilla",
    description:
      "10 free listings, 3 days of customer support, or a sample catalog task — at no charge. No credit card. No commitment.",
    url: "https://servzilla.com/free-trial",
    siteName: "Servzilla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Trial | Servzilla",
    description: "Try Servzilla free — no credit card, no commitment. Pick your trial option and get started.",
  },
  alternates: { canonical: "https://servzilla.com/free-trial" },
};

const TRIAL_OPTIONS = [
  {
    number: "01",
    title: "10 free listings",
    body: "We optimise or create up to 10 product listings — titles, bullets, descriptions, and keywords. Delivered in your preferred format, ready to upload.",
    cta: "Start with listings",
    href: "#start",
  },
  {
    number: "02",
    title: "3 days of customer support",
    body: "We handle your customer support inbox for 3 full business days — across email and marketplace messaging. You see the responses before they go out.",
    cta: "Start with support",
    href: "#start",
  },
  {
    number: "03",
    title: "Sample catalog task",
    body: "Upload, enrich, or clean a batch of your catalog data at no cost. We return it structured, attributed, and ready to use on your platforms.",
    cta: "Start with catalog",
    href: "#start",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Pick your trial",
    body: "Choose the option that is most useful to your store right now — listings, support, or a catalog task.",
  },
  {
    step: "2",
    title: "Brief us",
    body: "Fill in a short form telling us your platform, what you need, and any guidelines we should follow. No long onboarding.",
  },
  {
    step: "3",
    title: "We do the work",
    body: "Your trial is completed by an e-commerce specialist — not an automated tool. You get real output, not a demo.",
  },
  {
    step: "4",
    title: "You evaluate",
    body: "Review the output. If you want to continue, we scope a paid engagement. If not, you keep the work — no strings attached.",
  },
];

export default function FreeTrial() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-[#F7F7F5]" aria-labelledby="trial-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF0F0] border border-[#f5c8c8] text-[#A32D2D] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E84040]" />
              Zero risk
            </div>
            <h1
              id="trial-heading"
              className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] mb-6"
            >
              Try before you commit.
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mb-6">
              New clients trial the service before committing. We process up
              to 10 listings, handle 3 days of customer support, or complete
              a sample catalog task — at no charge.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFF8D6] border border-[#FFD600] mb-10"
            >
              <div className="w-2 h-2 rounded-full bg-[#FFD600] flex-shrink-0" />
              <p className="text-sm font-semibold" style={{ color: "#7a5f00" }}>
                No credit card required. No commitment. New clients only.
              </p>
            </div>
            <Link
              href="#start"
              className="px-8 py-4 rounded-xl bg-[#E84040] hover:bg-[#C42C2C] text-white font-bold text-lg transition-colors"
            >
              Start your free trial
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#FFFFFF] border-y border-[#E8E8E4]" aria-label="Trial details">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10",    label: "Free listings" },
              { value: "3",     label: "Days free support" },
              { value: "$0",    label: "Cost to trial" },
              { value: "Yours", label: "Output to keep" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-extrabold text-[#E84040]">{s.value}</dt>
                <dd className="text-sm text-[#6B6B6B] mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Trial options */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="options-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            Your options
          </p>
          <h2
            id="options-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Pick what matters most
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRIAL_OPTIONS.map((o) => (
              <article
                key={o.number}
                className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E8E8E4] hover:border-[#E84040] transition-colors group flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FDF0F0] flex items-center justify-center mb-5 group-hover:bg-[#E84040] transition-colors flex-shrink-0">
                  <span className="text-sm font-bold text-[#E84040] group-hover:text-white transition-colors">
                    {o.number}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-[#1A1A1A] mb-3">{o.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed flex-1 mb-6">{o.body}</p>
                <Link
                  href={o.href}
                  className="block text-center bg-[#F7F7F5] hover:bg-[#FDF0F0] border border-[#E8E8E4] hover:border-[#E84040] text-[#1A1A1A] hover:text-[#E84040] py-3 rounded-xl font-bold text-sm transition-all"
                >
                  {o.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            How it works
          </p>
          <h2
            id="process-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Four steps. No surprises.
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6" aria-label="Trial process">
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

      {/* Trial form */}
      <section className="py-24 bg-[#F7F7F5]" aria-labelledby="form-heading" id="start">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
              Get started
            </p>
            <h2
              id="form-heading"
              className="font-headline text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4"
            >
              Start your free trial
            </h2>
            <p className="text-lg text-[#6B6B6B] mb-10">
              Fill in the details below. We will be in touch within one
              business day to confirm and get started.
            </p>

            <form className="space-y-5" aria-label="Free trial request form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="first-name" className="text-sm font-semibold text-[#1A1A1A]">
                    First name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    name="first_name"
                    autoComplete="given-name"
                    required
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E8E4] bg-[#FFFFFF] text-[#1A1A1A] text-sm placeholder-[#6B6B6B] focus:outline-none focus:border-[#E84040] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="last-name" className="text-sm font-semibold text-[#1A1A1A]">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    name="last_name"
                    autoComplete="family-name"
                    required
                    placeholder="Smith"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E8E4] bg-[#FFFFFF] text-[#1A1A1A] text-sm placeholder-[#6B6B6B] focus:outline-none focus:border-[#E84040] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-[#1A1A1A]">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="jane@yourstore.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E8E4] bg-[#FFFFFF] text-[#1A1A1A] text-sm placeholder-[#6B6B6B] focus:outline-none focus:border-[#E84040] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="platform" className="text-sm font-semibold text-[#1A1A1A]">
                  Platform you sell on
                </label>
                <select
                  id="platform"
                  name="platform"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E8E4] bg-[#FFFFFF] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#E84040] transition-colors"
                >
                  <option value="" disabled selected>Select a platform</option>
                  <option value="amazon">Amazon</option>
                  <option value="ebay">eBay</option>
                  <option value="shopify">Shopify</option>
                  <option value="etsy">Etsy</option>
                  <option value="walmart">Walmart</option>
                  <option value="woocommerce">WooCommerce</option>
                  <option value="multiple">Multiple platforms</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="trial-type" className="text-sm font-semibold text-[#1A1A1A]">
                  What would you like to trial?
                </label>
                <select
                  id="trial-type"
                  name="trial_type"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E8E4] bg-[#FFFFFF] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#E84040] transition-colors"
                >
                  <option value="" disabled selected>Select a trial option</option>
                  <option value="listings">10 free listings</option>
                  <option value="support">3 days of customer support</option>
                  <option value="catalog">Sample catalog task</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-[#1A1A1A]">
                  Anything else we should know?
                  <span className="font-normal text-[#6B6B6B] ml-1">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your store, current challenges, or what you are hoping to get from the trial."
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E8E4] bg-[#FFFFFF] text-[#1A1A1A] text-sm placeholder-[#6B6B6B] focus:outline-none focus:border-[#E84040] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E84040] hover:bg-[#C42C2C] text-white font-bold py-4 rounded-xl text-lg transition-colors"
              >
                Submit free trial request
              </button>

              <p className="text-xs text-[#6B6B6B] text-center">
                No credit card. No commitment. We will respond within one
                business day.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="next-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            What happens next
          </p>
          <h2
            id="next-heading"
            className="font-headline text-3xl font-bold text-[#1A1A1A] tracking-tight mb-10"
          >
            After you submit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {[
              { time: "Within 1 business day", title: "We confirm receipt", body: "You receive a confirmation email with next steps and any questions we need answered to start." },
              { time: "Within 48 hours",        title: "Work begins",       body: "Your trial is assigned to a specialist and work starts — no waiting for a lengthy onboarding process." },
              { time: "On delivery",            title: "You evaluate",      body: "Output is delivered with a summary of what was done. If you want to continue, we scope a paid engagement from there." },
            ].map((s) => (
              <div key={s.title} className="bg-[#F7F7F5] rounded-2xl p-6 border border-[#E8E8E4]">
                <p className="text-xs font-bold text-[#E84040] uppercase tracking-wider mb-3">{s.time}</p>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{s.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 md:px-8 bg-[#F7F7F5]" aria-label="Final CTA">
        <div className="max-w-7xl mx-auto bg-[#E84040] rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center md:text-left">
          <div className="relative z-10 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Still deciding?{" "}
                <span className="text-[#FFD600]">The trial will help.</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mb-10">
                Real output from a real specialist. No pitch deck, no demo
                environment — just the work, delivered to your store.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="#start"
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
    </>
  );
}