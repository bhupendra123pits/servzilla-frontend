import Link from "next/link";

const OPTIONS = [
  {
    icon:  "📝",
    title: "10 free listings",
    body:  "We'll optimise or create up to 10 product listings at no charge.",
  },
  {
    icon:  "💬",
    title: "3 days of support",
    body:  "We handle your customer support inbox for 3 full days, free.",
  },
  {
    icon:  "📂",
    title: "Sample catalog task",
    body:  "Upload, enrich, or clean a batch of your catalog data — no cost.",
  },
];

export default function FreeTrial() {
  return (
    <section className="py-24 bg-[#F7F7F5]" aria-labelledby="trial-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
            Zero risk
          </p>
          <h2
            id="trial-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight"
          >
            Try before you commit
          </h2>
          <p className="mt-4 text-lg text-[#6B6B6B] max-w-xl mx-auto">
            New clients trial the service before committing. No credit card required.
          </p>
        </div>

        {/* Options grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {OPTIONS.map((o) => (
            <div
              key={o.title}
              className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E8E8E4] text-center space-y-4 hover:border-[#E84040] transition-colors"
            >
              <div className="text-4xl">{o.icon}</div>
              <h3 className="font-headline text-lg font-bold text-[#1A1A1A]">{o.title}</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/free-trial"
            className="inline-flex items-center gap-2 bg-[#E84040] hover:bg-[#C42C2C] text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            Start free trial — no card required
          </Link>
        </div>

      </div>
    </section>
  );
}