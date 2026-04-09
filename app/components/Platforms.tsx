import Link from "next/link";

const PLATFORMS = [
  { label: "Amazon",      href: "/platforms/amazon" },
  { label: "eBay",        href: "/platforms/ebay" },
  { label: "Shopify",     href: "/platforms/shopify" },
  { label: "Etsy",        href: "/platforms/etsy" },
  { label: "Walmart",     href: "/platforms/walmart" },
  { label: "WooCommerce", href: "/platforms/woocommerce" },
  { label: "Magento",     href: "/platforms/magento" },
];

export default function Platforms() {
  return (
    <section className="py-20 bg-[#F7F7F5]" aria-label="Supported platforms">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-12">
          We work on every platform you sell on
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {PLATFORMS.map((p) => (
            <Link
              key={p.label}
              href={p.href}
              className="text-2xl font-black text-[#1A1A1A] opacity-30 hover:opacity-100 hover:text-[#FFD600] grayscale hover:grayscale-0 transition-all duration-300"
              aria-label={`${p.label} services`}
            >
              {p.label}
            </Link>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-[#6B6B6B]">
          Amazon · eBay · Shopify · Etsy · Walmart · WooCommerce · Magento ·{" "}
          <Link href="/" className="text-[#E84040] font-semibold hover:text-[#C42C2C] hover:underline transition-colors">
            and more →
          </Link>
        </p>

      </div>
    </section>
  );
}