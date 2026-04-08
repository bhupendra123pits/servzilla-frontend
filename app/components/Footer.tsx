import Link from "next/link";

const FOOTER_LINKS = {
  Solutions: [
    { label: "Grow your store",     href: "/solutions/grow" },
    { label: "Run your store",      href: "/solutions/runstore" },
    { label: "Build your catalog",  href: "/solutions/catalog" },
    { label: "AI-powered services", href: "/solutions/ai" },
  ],
  Platforms: [
    { label: "Amazon",           href: "/platforms/amazon" },
    { label: "eBay",             href: "/platforms/ebay" },
    { label: "Shopify",          href: "/platforms/shopify" },
    { label: "Etsy",             href: "/platforms/etsy" },
    { label: "Walmart & others", href: "/platforms/walmart" },
  ],
  Company: [
    { label: "Virtual Assistants", href: "/virtual-assistants" },
    { label: "Pricing",            href: "/pricing" },
    { label: "Free Trial",         href: "/free-trial" },
    { label: "Privacy Policy",     href: "/privacy" },
    { label: "Terms of Service",   href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#2e3440] py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="space-y-6">
            <Link
              href="/"
              className="block text-xl font-black text-white tracking-widest font-headline"
            >
              SERVZILLA
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              E-commerce back-office operations built exclusively for online
              sellers. Amazon, eBay, Shopify, Etsy, Walmart, and more.
            </p>
            <p className="text-xs text-slate-500">
              500+ stores served · 4-hr SLA · 98% retention
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className="space-y-6">
              <h4 className="font-headline text-xs font-black text-white uppercase tracking-widest">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm hover:text-[#8b4e3a] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-slate-500">
          <div>© {new Date().getFullYear()} Servzilla. All rights reserved.</div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms"   className="hover:text-white transition-colors">Terms</Link>
            <span>India pricing available on request</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
