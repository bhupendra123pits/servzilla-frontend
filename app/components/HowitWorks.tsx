import Link from "next/link";

const STEPS = [
  {
    n:    "1",
    title: "Share your requirements",
    body:  "Tell us your platform, your SKU volume, and your priorities. We'll scope exactly what you need — no generic packages forced on you.",
    highlight: false,
  },
  {
    n:    "2",
    title: "We set up your team",
    body:  "Matched specialists are onboarded and briefed within 48 hours. You get a dedicated account contact from day one.",
    highlight: false,
  },
  {
    n:    "3",
    title: "Review and approve",
    body:  "You review our first outputs and give feedback. We calibrate to your standards, then operate at scale with weekly reporting.",
    highlight: false,
  },
  {
    n:    "4",
    title: "Start free — no risk",
    body:  "New clients get a free trial: up to 10 listings processed, or 3 days of customer support handling, or a sample catalog task. No credit card required.",
    highlight: true,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#f9f9ff]" aria-labelledby="how-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#76777c] mb-4">
            The process
          </p>
          <h2
            id="how-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#111c2d] tracking-tight"
          >
            How it works
          </h2>
        </div>

        {/* Desktop: 4-col with connector line */}
        <div className="hidden md:grid grid-cols-4 gap-8 relative">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[#e8eeff] z-0" />
          {STEPS.map((step) => (
            <div key={step.n} className="relative z-10 space-y-5">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold font-headline shadow-lg
                  ${step.highlight
                    ? "slate-gradient text-white"
                    : "bg-white text-[#8b4e3a] border border-[#e8eeff]"}`}
              >
                {step.n}
              </div>
              <h3 className={`text-lg font-bold ${step.highlight ? "text-[#8b4e3a]" : "text-[#111c2d]"}`}>
                {step.title}
              </h3>
              <p className="text-[#45474c] text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden space-y-8">
          {STEPS.map((step, i) => (
            <div key={step.n} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold font-headline flex-shrink-0
                    ${step.highlight ? "slate-gradient text-white" : "bg-[#f0f3ff] text-[#8b4e3a]"}`}
                >
                  {step.n}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="flex-1 w-px bg-[#e8eeff] my-2 min-h-[2rem]" />
                )}
              </div>
              <div className="space-y-2 pb-4">
                <h3 className="text-base font-bold text-[#111c2d]">{step.title}</h3>
                <p className="text-[#45474c] text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/free-trial"
            className="inline-flex items-center gap-2 bg-[#E84040] hover:bg-[#C42C2C] text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            Start your free trial →
          </Link>
        </div>

      </div>
    </section>
  );
}
