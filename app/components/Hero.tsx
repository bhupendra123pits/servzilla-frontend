import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[#F7F7F5] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF0F0] border border-[#f5c8c8] text-[#A32D2D] text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E84040]" />
            E-commerce Specialists
          </div>

          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1]">
            Your store runs. <br className="hidden md:block" />
            <span className="text-[#E84040]">We handle</span> everything behind
            it.
          </h1>

          <p className="text-xl text-[#6B6B6B] max-w-xl leading-relaxed">
            From Amazon listings to Shopify operations — Servzilla delivers the
            back-office muscle growing e-commerce brands need, without the
            hiring headache.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/free-trial"
              className="px-8 py-4 rounded-xl bg-[#E84040] hover:bg-[#C42C2C] text-white font-bold text-lg transition-colors"
            >
              Start free trial
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-4 rounded-xl border border-[#E8E8E4] text-[#1A1A1A] font-bold text-lg hover:bg-[#FDF0F0] hover:border-[#f5c8c8] transition-all"
            >
              See what we do
            </Link>
          </div>

          <p className="text-sm text-[#6B6B6B]">
            No commitment. No credit card needed.
          </p>
        </div>

          {/* Right image — only this part fixed */}
        <div className="col-span-12 lg:col-span-5 relative overflow-hidden">
          <div className="relative z-10 w-full max-w-sm mx-auto lg:max-w-none">
            <div className="aspect-square rounded-3xl overflow-hidden border border-[#f0e080] bg-[#FFF8D6]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHx-wjZoHSCe0S1nMsHwSPVs9WhVQGnpYyU9XmmmEq8sbnLRd2VHE6oon2zmgfX6qR0zlS4pS3apM0oe8gWAo5iRPTgLJjF6uHqqVCi1RqxX0pPdpjP4RMUlt9nFn5dlrjx0PZqXuzaSB7hZjRLlQkLC1jO3Fd1ViglY44FBF09dMyuuaJFRHBIE_mMgwsiVgkDVRgYCI_G7mmbOVXeFW5_KSAJmLNINmrRY1R4w0Gav2Xz9hDZtiBBUjvFn1jgqBwwLQYeYtJLW0"
                alt="E-commerce operations, handled by Servzilla"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E84040]/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD600]/15 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}
