import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-24 px-6 md:px-8 bg-[#F7F7F5] overflow-hidden">
      <div className="max-w-7xl mx-auto bg-[#E84040] rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center md:text-left">

        <div className="relative z-10 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-8">

            <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to hand off the{" "}
              <span className="text-[#FFD600]">back-office work?</span>
            </h2>

            <p className="text-xl text-white/80 max-w-2xl mb-10">
              Join 500+ stores that trust Servzilla to run their operations
              so they can focus on growth.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="/free-trial"
                className="bg-[#FFD600] text-[#1A1A1A] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#FFF8D6] transition-colors"
              >
                Start free trial
              </Link>
              <Link
                href="/solutions"
                className="text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                See what we do
              </Link>
            </div>

          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C42C2C]/40 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#FFD600]/20 rounded-full blur-3xl pointer-events-none" />

      </div>
    </section>
  );
}