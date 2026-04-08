// app/page.tsx  —  Homepage entry point
// Imports every section component from @/components/

import type { Metadata } from "next";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import FreeTrial from "./components/Freetrial";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowitWorks";
import Navbar from "./components/Navbar";
import Platforms from "./components/Platforms";
import Solutions from "./components/Solutions";
import StatsBar from "./components/Statusbar";
import WhyUs from "./components/Whyus";

export const metadata: Metadata = {
  title: "Servzilla — E-commerce Back-Office for Online Sellers",
  description:
    "From Amazon listings to Shopify operations — Servzilla delivers the back-office muscle growing e-commerce brands need, without the hiring headache. Start free trial.",
  keywords: [
    "e-commerce outsourcing",
    "Amazon listing optimisation",
    "Shopify virtual assistant",
    "eBay store management",
    "product catalog management",
    "e-commerce back office",
    "AI listing writing",
  ],
  alternates: { canonical: "https://servzilla.com" },
  openGraph: {
    title: "Servzilla — Your store runs. We handle everything behind it.",
    description:
      "E-commerce back-office built exclusively for online sellers. Start free trial — no card required.",
    url: "https://servzilla.com",
    siteName: "Servzilla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servzilla — E-commerce Operations, Done For You",
    description: "500+ stores served globally. 4-hour SLA. 98% retention.",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WhyUs />
        <Solutions />
        <Platforms />
        <HowItWorks />
        <FreeTrial />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
