// app/free-trial/page.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const TRIAL_OPTIONS = [
  {
    id: "listings",
    number: "01",
    title: "10 free listings",
    body: "We optimise or create up to 10 product listings — titles, bullets, descriptions, and keywords. Delivered ready to upload.",
  },
  {
    id: "support",
    number: "02",
    title: "3 days of customer support",
    body: "We handle your customer support inbox for 3 full business days across email and marketplace messaging.",
  },
  {
    id: "catalog",
    number: "03",
    title: "Sample catalog task",
    body: "Upload, enrich, or clean a batch of your catalog data at no cost. Returned structured and ready to use.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Pick your trial",
    body: "Choose the option most useful to your store right now — listings, support, or a catalog task.",
  },
  {
    step: "2",
    title: "Brief us",
    body: "Fill in the short form with your platform, requirements, and any guidelines we should follow.",
  },
  {
    step: "3",
    title: "We do the work",
    body: "Completed by an e-commerce specialist — not an automated tool. Real output, not a demo.",
  },
  {
    step: "4",
    title: "You evaluate",
    body: "Review the output. If you want to continue, we scope a paid engagement. If not, you keep the work.",
  },
];

const PLATFORMS = [
  { value: "amazon", label: "Amazon" },
  { value: "ebay", label: "eBay" },
  { value: "shopify", label: "Shopify" },
  { value: "etsy", label: "Etsy" },
  { value: "walmart", label: "Walmart" },
  { value: "woocommerce", label: "WooCommerce" },
  { value: "multiple", label: "Multiple platforms" },
  { value: "other", label: "Other" },
];

export default function FreeTrial() {
  const [selectedTrial, setSelectedTrial] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    platform: "",
    trial_type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "trial_type") setSelectedTrial(e.target.value);
  };

  const handleTrialSelect = (id: string) => {
    setSelectedTrial(id);
    setForm({ ...form, trial_type: id });
    const el = document.getElementById("start");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(form, "Hello World");
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      {/* Hero */}
      <section
        className="pt-25 pb-24 bg-[#F7F7F5]"
        aria-labelledby="trial-heading"
      >
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
              New clients trial the service before committing. We process up to
              10 listings, handle 3 days of customer support, or complete a
              sample catalog task — at no charge.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFF8D6] border border-[#FFD600] mb-10">
              <div className="w-2 h-2 rounded-full bg-[#FFD600] flex-shrink-0" />
              <p className="text-sm font-semibold" style={{ color: "#7a5f00" }}>
                No credit card required. No commitment. New clients only.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              href="#start" className="px-8 py-4 rounded-xl bg-[#E84040]
              hover:bg-[#C42C2C] text-white font-bold text-lg transition-colors"
              Start your free trial
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

      {/* Stats */}
      <section
        className="py-12 bg-[#FFFFFF] border-y border-[#E8E8E4]"
        aria-label="Trial at a glance"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10", label: "Free listings" },
              { value: "3", label: "Days free support" },
              { value: "$0", label: "Cost to trial" },
              { value: "Yours", label: "Output to keep" },
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
            {TRIAL_OPTIONS.map((o) => {
              const isSelected = selectedTrial === o.id;
              return (
                <article
                  key={o.id}
                  onClick={() => handleTrialSelect(o.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleTrialSelect(o.id)
                  }
                  aria-pressed={isSelected}
                  className={`rounded-2xl p-8 border cursor-pointer transition-all flex flex-col ${
                    isSelected
                      ? "bg-[#E84040] border-[#E84040]"
                      : "bg-[#FFFFFF] border-[#E8E8E4] hover:border-[#E84040]"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-colors ${
                      isSelected ? "bg-[#FFD600]" : "bg-[#FDF0F0]"
                    }`}
                  >
                    <span
                      className={`text-sm font-bold transition-colors ${
                        isSelected ? "text-[#7a5f00]" : "text-[#E84040]"
                      }`}
                    >
                      {o.number}
                    </span>
                  </div>
                  <h3
                    className={`font-headline text-xl font-bold mb-3 transition-colors ${
                      isSelected ? "text-white" : "text-[#1A1A1A]"
                    }`}
                  >
                    {o.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed flex-1 mb-6 transition-colors ${
                      isSelected ? "text-white/80" : "text-[#6B6B6B]"
                    }`}
                  >
                    {o.body}
                  </p>
                  <div
                    className={`text-center py-3 rounded-xl font-bold text-sm transition-colors ${
                      isSelected
                        ? "bg-[#FFD600] text-[#7a5f00]"
                        : "bg-[#F7F7F5] border border-[#E8E8E4] text-[#1A1A1A]"
                    }`}
                  >
                    {isSelected
                      ? "Selected — fill in the form below"
                      : "Select this option"}
                  </div>
                </article>
              );
            })}
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
          <ol
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            aria-label="Trial process steps"
          >
            {HOW_IT_WORKS.map((s) => (
              <li key={s.step}>
                <div className="w-10 h-10 rounded-full bg-[#E84040] flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{s.step}</span>
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

      {/* Form */}
      <section
        className="py-24 bg-[#F7F7F5]"
        aria-labelledby="form-heading"
        id="start"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — context */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-3">
                Get started
              </p>
              <h2
                id="form-heading"
                className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-3"
              >
                Start your free trial
              </h2>
              <p className="text-lg text-[#6B6B6B] leading-relaxed mb-10">
                Fill in the details. We will confirm within one business day and
                get started within 48 hours.
              </p>

              {/* Timeline */}
              <div className="flex flex-col mb-10">
                {[
                  {
                    step: "1",
                    time: "Within 1 business day",
                    title: "We confirm receipt",
                    body: "Confirmation email with next steps sent.",
                    color: "#E84040",
                  },
                  {
                    step: "2",
                    time: "Within 48 hours",
                    title: "Work begins",
                    body: "Assigned to a specialist and started.",
                    color: "#E84040",
                  },
                  {
                    step: "3",
                    time: "On delivery",
                    title: "You evaluate",
                    body: "Output delivered with a summary. Yours to keep.",
                    color: "#1D9E75",
                  },
                ].map((s, i, arr) => (
                  <div key={s.step} className="flex gap-4">
                    {/* Left — dot + line */}
                    <div className="flex flex-col items-center w-8 flex-shrink-0">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: s.color }}
                      >
                        <span className="text-white text-xs font-bold">
                          {s.step}
                        </span>
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          className="w-px flex-1 bg-[#E8E8E4] my-1"
                          style={{ minHeight: "20px" }}
                        />
                      )}
                    </div>
                    {/* Right — content */}
                    <div
                      className={`pb-6 ${i === arr.length - 1 ? "pb-0" : ""}`}
                    >
                      <p
                        className="text-xs font-bold uppercase tracking-wider mb-0.5"
                        style={{ color: s.color }}
                      >
                        {s.time}
                      </p>
                      <p className="font-bold text-[#1A1A1A] text-sm mb-1">
                        {s.title}
                      </p>
                      <p className="text-[#6B6B6B] text-sm leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#FFFFFF] border border-[#E8E8E4] rounded-2xl p-2 text-center">
                  <p className="text-xl font-extrabold text-[#E84040]">No</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">Credit card</p>
                </div>
                <div className="bg-[#FFFFFF] border border-[#E8E8E4] rounded-2xl p-2 text-center">
                  <p className="text-xl font-extrabold text-[#E84040]">No</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">Commitment</p>
                </div>
                <div className="bg-[#FFF8D6] border border-[#f0e080] rounded-2xl p-2 text-center">
                  <p
                    className="text-xl font-extrabold"
                    style={{ color: "#7a5f00" }}
                  >
                    Yours
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#a88200" }}>
                    To keep
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form or success */}
            <div className="bg-[#FFFFFF] rounded-3xl border border-[#E8E8E4] p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#1D9E75] flex items-center justify-center mx-auto mb-6">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M6 14l6 6 10-12"
                        stroke="#fff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-[#1A1A1A] mb-3">
                    Request received
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                    We will confirm within one business day and get your trial
                    started within 48 hours. Check your inbox.
                  </p>
                  <div className="flex flex-col gap-3">
                    {/* <Link
                      href="/solutions"
                      className="block text-center bg-[#E84040] hover:bg-[#C42C2C] text-white py-3 rounded-xl font-bold text-sm transition-colors"
                    >
                      Explore our solutions
                    </Link> */}
                    <Link
                      href="/pricing"
                      className="block text-center border border-[#E8E8E4] text-[#FFD600] py-3 rounded-xl font-bold text-sm hover:bg-[#FDF0F0] hover:border-[#f5c8c8] transition-all"
                    >
                      See pricing
                    </Link>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  aria-label="Free trial request form"
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="first_name"
                        className="text-sm font-semibold text-[#1A1A1A]"
                      >
                        First name
                      </label>
                      <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        autoComplete="given-name"
                        required
                        placeholder="Jane"
                        value={form.first_name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E8E4] bg-[#F7F7F5] text-[#1A1A1A] text-sm placeholder-[#6B6B6B] focus:outline-none focus:border-[#E84040] focus:bg-white transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="last_name"
                        className="text-sm font-semibold text-[#1A1A1A]"
                      >
                        Last name
                      </label>
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        autoComplete="family-name"
                        required
                        placeholder="Smith"
                        value={form.last_name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E8E4] bg-[#F7F7F5] text-[#1A1A1A] text-sm placeholder-[#6B6B6B] focus:outline-none focus:border-[#E84040] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-[#1A1A1A]"
                    >
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="jane@yourstore.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E8E4] bg-[#F7F7F5] text-[#1A1A1A] text-sm placeholder-[#6B6B6B] focus:outline-none focus:border-[#E84040] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="platform"
                      className="text-sm font-semibold text-[#1A1A1A]"
                    >
                      Platform you sell on
                    </label>
                    <select
                      id="platform"
                      name="platform"
                      required
                      value={form.platform}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E8E4] bg-[#F7F7F5] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#E84040] focus:bg-white transition-colors"
                    >
                      <option value="" disabled>
                        Select a platform
                      </option>
                      {PLATFORMS.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="trial_type"
                      className="text-sm font-semibold text-[#1A1A1A]"
                    >
                      What would you like to trial?
                    </label>
                    <select
                      id="trial_type"
                      name="trial_type"
                      required
                      value={form.trial_type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E8E4] bg-[#F7F7F5] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#E84040] focus:bg-white transition-colors"
                    >
                      <option value="" disabled>
                        Select a trial option
                      </option>
                      <option value="listings">10 free listings</option>
                      <option value="support">
                        3 days of customer support
                      </option>
                      <option value="catalog">Sample catalog task</option>
                    </select>
                    {form.trial_type && (
                      <p className="text-xs text-[#1D9E75] font-medium mt-1">
                        {form.trial_type === "listings" &&
                          "We will optimise or create up to 10 listings, delivered ready to upload."}
                        {form.trial_type === "support" &&
                          "We will handle your inbox for 3 full business days."}
                        {form.trial_type === "catalog" &&
                          "We will enrich or clean a sample batch of your catalog data."}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-[#1A1A1A]"
                    >
                      Anything else we should know?
                      <span className="font-normal text-[#6B6B6B] ml-1">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your store, current challenges, or what you are hoping to get from the trial."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E8E4] bg-[#F7F7F5] text-[#1A1A1A] text-sm placeholder-[#6B6B6B] focus:outline-none focus:border-[#E84040] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#E84040] hover:bg-[#C42C2C] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit free trial request"
                    )}
                  </button>

                  <p className="text-xs text-[#6B6B6B] text-center">
                    No credit card. No commitment. We respond within one
                    business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof / trust */}
      <section className="py-24 bg-[#FFFFFF]" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            Why it works
          </p>
          <h2
            id="trust-heading"
            className="font-headline text-4xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Real work. Not a demo.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Specialist, not automation",
                body: "Your trial is completed by an e-commerce specialist who works on these platforms every day — not a template tool or AI output passed off as a service.",
              },
              {
                title: "Output is yours to keep",
                body: "Whether you continue or not, the listings, support responses, or catalog data we produce during your trial are yours — no strings, no takebacks.",
              },
              {
                title: "No pitch at the end",
                body: "We deliver the work, summarise what was done, and let you decide. If you want to continue, we scope it. If not, no follow-up pressure.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-[#F7F7F5] rounded-2xl p-8 border border-[#E8E8E4]"
              >
                <div className="w-8 h-1 rounded-full bg-[#FFD600] mb-5" />
                <h3 className="font-bold text-[#1A1A1A] mb-3">{f.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-24 bg-[#F7F7F5]"
        aria-labelledby="trial-faq-heading"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            FAQ
          </p>
          <h2
            id="trial-faq-heading"
            className="font-headline text-4xl font-bold text-[#1A1A1A] tracking-tight mb-12"
          >
            Trial questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {[
              {
                q: "Is the free trial really free?",
                a: "Yes. No credit card, no invoice, no hidden charges. The trial is a genuine sample of the work — we do it because confident clients convert.",
              },
              {
                q: "Can I do more than one trial option?",
                a: "The free trial covers one option per new client. If you want to trial a second service, we can discuss a heavily discounted sample run after the first trial is complete.",
              },
              {
                q: "How long does the trial take to complete?",
                a: "Listings are typically delivered within 2–3 business days. The support trial runs for 3 consecutive business days from the agreed start date. Catalog tasks are scoped on receipt.",
              },
              {
                q: "What do you need from me to get started?",
                a: "For listings: product data or existing listings plus platform details. For support: inbox access and your support guidelines. For catalog: a sample data file and platform spec.",
              },
              {
                q: "What happens after the trial?",
                a: "We deliver the output, summarise what was done, and let you decide whether to continue. If you do, we scope a paid engagement. If not, no follow-up pressure — the work is yours.",
              },
              {
                q: "Is there a commitment if I continue?",
                a: "No long-term contract. Per-SKU services are ordered as needed. Monthly packages and VA plans are month-to-month. You scale up or down as your business requires.",
              },
            ].map((f) => (
              <div
                key={f.q}
                className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E8E8E4]"
              >
                <h3 className="font-bold text-[#1A1A1A] mb-3">{f.q}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#F7F7F5] overflow-hidden">
        <div className="max-w-7xl mx-auto bg-[#E84040] rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center md:text-left">
          <div className="relative z-10 ">
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
      <Footer />
    </>
  );
}
