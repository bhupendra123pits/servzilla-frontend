"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const ALL_ITEMS = [
  { label: "Grow your store",     desc: "Listings, SEO, content, competitor analysis",  href: "/solutions/grow",      tag: "Solutions" },
  { label: "Run your store",      desc: "Support, orders, inventory, repricing",         href: "/solutions/runstore",  tag: "Solutions" },
  { label: "Build your catalog",  desc: "Uploads, attributes, enrichment, images",       href: "/solutions/catalog",   tag: "Solutions" },
  { label: "AI-powered services", desc: "Embedded capability, not a buzzword tab",       href: "/solutions/ai",        tag: "Solutions" },
  { label: "Amazon",              desc: "Amazon marketplace management",                 href: "/platforms/amazon",    tag: "Platforms" },
  { label: "eBay",                desc: "eBay listing & order management",               href: "/platforms/ebay",      tag: "Platforms" },
  { label: "Shopify",             desc: "Shopify store operations",                      href: "/platforms/shopify",   tag: "Platforms" },
  { label: "Etsy",                desc: "Etsy catalog & shop management",                href: "/platforms/etsy",      tag: "Platforms" },
  { label: "Walmart & others",    desc: "Multi-channel marketplace support",             href: "/platforms/walmart",   tag: "Platforms" },
  { label: "Virtual Assistants",  desc: "E-commerce specialist VAs, expert hire",        href: "/virtual-assistants",  tag: "VA"        },
  { label: "Per-SKU rates",       desc: "Pay only for what you list",                    href: "/pricing#per-sku",     tag: "Pricing"   },
  { label: "Monthly packages",    desc: "Predictable monthly pricing",                   href: "/pricing#packages",    tag: "Pricing"   },
  { label: "Custom scope",        desc: "Tailored to your operation",                    href: "/pricing#custom",      tag: "Pricing"   },
  { label: "Privacy policy",        desc: "Privacy policy",                    href: "/privacypolicy",      tag: "Privacypolicy"   },

];

export default function SearchBar({ mobile = false }: { mobile?: boolean }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim()
    ? ALL_ITEMS.filter(i =>
        i.label.toLowerCase().includes(query.toLowerCase()) ||
        i.desc.toLowerCase().includes(query.toLowerCase()) ||
        i.tag.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const grouped = filtered.reduce((acc, item) => {
    (acc[item.tag] = acc[item.tag] || []).push(item);
    return acc;
  }, {} as Record<string, typeof ALL_ITEMS>);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ⌘K / Ctrl+K shortcut + Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Inline input */}
      <div className="flex items-center gap-2 bg-white border border-[#E8E8E4] rounded-lg px-3 py-2 focus-within:border-[#E84040] transition-colors">
        <SearchIcon className="text-[#6B6B6B] shrink-0" />
        <input
          ref={inputRef}
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Search…"
          className={`text-sm text-[#1A1A1A] outline-none placeholder:text-[#ABABAB] bg-transparent ${mobile ? "flex-1" : "w-28"}`}
        />
        {!mobile && (
          <kbd className="text-[11px] bg-[#F0F0EE] border border-[#E0E0DC] rounded px-1.5 py-0.5 text-[#888] shrink-0">⌘K</kbd>
        )}
      </div>

      {/* Dropdown */}
      {open && query.trim() && (
        <div className={`absolute top-full mt-2 bg-white border border-[#E8E8E4] rounded-2xl shadow-xl overflow-hidden z-[200] ${mobile ? "left-0 right-0 w-full" : "right-0 w-[360px]"}`}>
          <div className="max-h-[240px] overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="text-center text-[#ABABAB] text-xs py-6">No results for &ldquo;{query}&rdquo;</p>
            ) : (
              Object.entries(grouped).map(([tag, items]) => (
                <div key={tag}>
                  <p className="text-[10px] font-medium text-[#ABABAB] uppercase tracking-wider px-3 pt-2.5 pb-1">{tag}</p>
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleClose}
                      className="flex items-center gap-2 px-3 py-1.5 hover:bg-[#FDF0F0] group transition-colors"
                    >
                      <SearchIcon size={10} className="text-[#ABABAB] group-hover:text-[#E84040] shrink-0 transition-colors" />
                      <span className="flex-1 text-[12px] text-[#1A1A1A] group-hover:text-[#E84040] transition-colors truncate">{item.label}</span>
                      <span className="text-[10px] text-[#ABABAB] bg-[#F5F5F3] rounded px-1.5 py-0.5 shrink-0">{item.tag}</span>
                    </Link>
                  ))}
                </div>
              ))
            )}
          </div>

          <div className="border-t border-[#E8E8E4] px-4 py-2 flex gap-4">
            {[["↵", "select"], ["ESC", "close"]].map(([k, v]) => (
              <span key={k} className="flex items-center gap-1.5 text-[11px] text-[#ABABAB]">
                <kbd className="bg-[#F0F0EE] border border-[#E0E0DC] rounded px-1.5 py-0.5 text-[10px] text-[#888]">{k}</kbd>{v}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SearchIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10.5 10.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
