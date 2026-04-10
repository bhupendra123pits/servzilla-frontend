"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import SearchBar from "./searchBar";

const NAV_ITEMS = [
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "Grow your store",     desc: "Listings, SEO, content, competitor analysis", href: "/solutions/grow" },
      { label: "Run your store",      desc: "Support, orders, inventory, repricing",        href: "/solutions/runstore" },
      { label: "Build your catalog",  desc: "Uploads, attributes, enrichment, images",      href: "/solutions/catalog" },
      { label: "AI-powered services", desc: "Embedded capability, not a buzzword tab",      href: "/solutions/ai" },
    ],
  },
  {
    label: "Platforms",
    href: "/platforms",
    dropdown: [
      { label: "Amazon",         desc: "",  href: "/platforms/amazon" },
      { label: "eBay",           desc: "",  href: "/platforms/ebay" },
      { label: "Shopify",        desc: "",  href: "/platforms/shopify" },
      { label: "Etsy",           desc: "",  href: "/platforms/etsy" },
      { label: "Walmart & others", desc: "", href: "/platforms/walmart" },
    ],
  },
  {
    label: "Virtual Assistants",
    href: "/virtual-assistants",
    dropdown: [
      { label: "E-commerce specialist VAs", desc: "Expert hire, not cheap labour", href: "/virtual-assistants" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
    dropdown: [
      { label: "Per-SKU rates",    desc: "Pay only for what you list",        href: "/pricing#per-sku" },
      { label: "Monthly packages", desc: "Predictable monthly pricing",       href: "/pricing#packages" },
      { label: "Custom scope",     desc: "Tailored to your operation",        href: "/pricing#custom" },
    ],
  },
];

function DropdownItem({ item }: { item: typeof NAV_ITEMS[0] }) {
  const [hover, setHover] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHover(true);
  };
  const close = () => {
    timeoutRef.current = setTimeout(() => setHover(false), 120);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={close}>
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${hover ? "text-[#E84040]" : "text-[#1A1A1A]"}`}
      >
        {item.label}
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none"
          className={`transition-transform duration-200 ${hover ? "rotate-180" : ""}`}
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {hover && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
          <div className="bg-[#FFFFFF] border border-[#E8E8E4] rounded-2xl shadow-lg p-2 min-w-[240px]">
            {item.dropdown.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-[#FDF0F0] group transition-colors"
              >
                <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#E84040] transition-colors">
                  {d.label}
                </span>
                {d.desc && (
                  <span className="text-xs text-[#6B6B6B]">{d.desc}</span>
                )}
              </Link>
            ))}
            {/* <div className="mt-1 pt-2 border-t border-[#E8E8E4] px-4 pb-1">
              <Link
                href={item.href}
                className="text-xs font-semibold text-[#E84040] hover:text-[#C42C2C] transition-colors"
              >
                View all {item.label} →
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F7F7F5]/80 backdrop-blur-xl border-b border-[#E8E8E4]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-20">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-[#1A1A1A] font-headline"
        >
          Servzilla
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <DropdownItem key={item.label} item={item} />
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-6">
          <SearchBar />
      
          <Link
            href="/free-trial"
            className="bg-[#E84040] hover:bg-[#C42C2C] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors"
          >
            Start free trial
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-[#1A1A1A] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-[#1A1A1A] transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-[#1A1A1A] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FFFFFF] border-t border-[#E8E8E4] px-6 py-6 space-y-1">
          <div className="pb-4">
            <SearchBar mobile />
          </div>
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <button
                className="w-full flex justify-between items-center text-[#1A1A1A] font-medium py-3 hover:text-[#E84040] transition-colors"
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
              >
                {item.label}
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                >
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {mobileExpanded === item.label && (
                <div className="pl-4 pb-2 space-y-1 border-l-2 border-[#FDF0F0] ml-1">
                  {item.dropdown.map((d) => (
                    <Link
                      key={d.href}
                      href={d.href}
                      onClick={() => { setOpen(false); setMobileExpanded(null); }}
                      className="flex flex-col gap-0.5 py-2.5 px-3 rounded-xl hover:bg-[#FDF0F0] group transition-colors"
                    >
                      <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#E84040] transition-colors">
                        {d.label}
                      </span>
                      {d.desc && (
                        <span className="text-xs text-[#6B6B6B]">{d.desc}</span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 flex flex-col gap-3 border-t border-[#E8E8E4] mt-2">
            
            
            <Link
              href="/free-trial"
              onClick={() => setOpen(false)}
              className="text-center bg-[#E84040] hover:bg-[#C42C2C] text-white py-3 rounded-lg font-bold transition-colors"
            >
              Start free trial
            </Link>
           
          </div>
        </div>
      )}
    </nav>
  );
}