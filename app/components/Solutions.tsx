import Link from "next/link";

const SOLUTIONS = [
  {
    number: "01",
    title:  "Grow your store",
    href:   "/solutions/grow",
    body:   "SEO-optimised listings, keyword research, A+ content, competitor analysis, and Buy Box strategy — to increase your visibility and conversions across every platform you sell on. AI-assisted writing, human-reviewed output.",
  },
  {
    number: "02",
    title:  "Run your store",
    href:   "/solutions/run",
    body:   "Customer support, order processing, inventory monitoring, repricing, and store maintenance — handled by a dedicated team on an SLA you can hold us to. Day-to-day operations, off your plate.",
  },
  {
    number: "03",
    title:  "Build your catalog",
    href:   "/solutions/catalog",
    body:   "Product data entry, attribute structuring, bulk uploads, category mapping, image processing, and ongoing catalog maintenance. Whether you have 50 SKUs or 50,000, we build and maintain the foundation.",
  },
  {
    number: "04",
    title:  "AI-powered services",
    href:   "/solutions/ai",
    body:   "AI-assisted listing writing, automated attribute extraction, AI-generated product descriptions with human QA, and analytics reporting. Faster execution, not lower quality.",
  },
];

export default function Solutions() {
  return (
    <section className="py-24 bg-[#F7F7F5]" aria-labelledby="solutions-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-4">
          What we do
        </p>
        <h2
          id="solutions-heading"
          className="font-headline text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-12"
        >
          Our solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOLUTIONS.map((s) => (
            <article
              key={s.number}
              className="group bg-[#FFFFFF] rounded-2xl p-8 border border-[#E8E8E4] hover:border-[#E84040] transition-all duration-300"
            >
              <div className="flex items-start gap-6">

                {/* Number badge */}
                <div className="w-14 h-14 rounded-2xl bg-[#FDF0F0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E84040] transition-colors">
                  <span className="font-headline text-lg font-bold text-[#E84040] group-hover:text-white transition-colors">
                    {s.number}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-headline text-xl font-bold text-[#1A1A1A]">
                    {s.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed text-sm">
                    {s.body}
                  </p>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1 text-[#E84040] font-semibold text-sm hover:text-[#C42C2C] hover:gap-2 transition-all"
                  >
                    Learn more →
                  </Link>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}