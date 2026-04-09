import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Servzilla",
  description:
    "Learn how Servzilla collects, uses, and protects your personal data. Our privacy policy covers data collection, storage, third-party sharing, and your rights.",
  alternates: { canonical: "https://servzilla.com/privacy" },
};

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: [
      {
        subtitle: "Information you give us directly",
        body: "When you sign up for a free trial, submit a contact form, or become a client, we collect your name, email address, business name, phone number, and any other information you choose to provide. We also collect the content of messages you send us.",
      },
      {
        subtitle: "Information collected automatically",
        body: "When you visit servzilla.com, we automatically collect certain technical data including your IP address, browser type, operating system, pages viewed, time spent on pages, and referring URLs. This is standard web analytics data collected via cookies and similar technologies.",
      },
      {
        subtitle: "Information from your e-commerce accounts",
        body: "To deliver our services, you may grant us access to your seller accounts on platforms like Amazon Seller Central, eBay, Shopify, or Etsy. We access only the data necessary to perform the specific tasks you've hired us to do — listings, orders, inventory, support tickets. We do not store your platform login credentials.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use your information",
    content: [
      {
        subtitle: "To deliver and improve our services",
        body: "We use your information to set up your account, onboard your team, complete the tasks you've contracted us for, and communicate with you about your work. We may also use aggregated, anonymised data to improve our processes and service quality.",
      },
      {
        subtitle: "To communicate with you",
        body: "We use your email address to send service-related communications — onboarding instructions, weekly reports, invoices, and support correspondence. If you opt in, we may also send you product updates or operational tips. You can unsubscribe from marketing emails at any time.",
      },
      {
        subtitle: "To comply with legal obligations",
        body: "We may process and retain certain data to comply with applicable laws, respond to legal requests, or protect against fraud and abuse.",
      },
    ],
  },
  {
    id: "data-sharing",
    title: "Who we share your data with",
    content: [
      {
        subtitle: "We do not sell your data",
        body: "Servzilla does not sell, rent, or trade your personal information to third parties for marketing purposes — ever.",
      },
      {
        subtitle: "Service providers",
        body: "We work with a small number of trusted third-party service providers who help us operate: cloud hosting, email delivery tools, and project management tools used by our internal team. These providers are contractually bound to protect your data and may not use it for their own purposes.",
      },
      {
        subtitle: "Platform access",
        body: "When our team works inside your seller accounts, they operate under your account permissions. We do not share your account access credentials with any external parties.",
      },
      {
        subtitle: "Legal requirements",
        body: "We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect the rights, property, or safety of Servzilla, our clients, or others.",
      },
    ],
  },
  {
    id: "data-storage",
    title: "Data storage and security",
    content: [
      {
        subtitle: "Where your data is stored",
        body: "Our servers and infrastructure are hosted with reputable cloud providers. Data may be stored and processed in India, the United States, or other countries where our service providers operate. By using our services, you consent to this transfer.",
      },
      {
        subtitle: "How we protect your data",
        body: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Access to client data is restricted to team members who need it to perform their work.",
      },
      {
        subtitle: "How long we keep your data",
        body: "We retain your data for as long as your account is active or as needed to provide services. After contract termination, we retain records for up to 12 months for legal and accounting purposes, after which personal data is deleted or anonymised. You may request earlier deletion — see your rights below.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    content: [
      {
        subtitle: "What we use cookies for",
        body: "We use cookies and similar tracking technologies on servzilla.com to understand how visitors use the site, remember your preferences, and improve your experience. This includes analytics cookies and functional cookies.",
      },
      {
        subtitle: "How to control cookies",
        body: "You can control or disable cookies through your browser settings. Note that disabling cookies may affect the functionality of certain parts of our website. We do not currently use advertising or retargeting cookies.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: [
      {
        subtitle: "Access and correction",
        body: "You have the right to request a copy of the personal data we hold about you, and to ask us to correct any inaccurate information.",
      },
      {
        subtitle: "Deletion",
        body: "You may request that we delete your personal data. We will honour this request unless we are required to retain certain data by law or for legitimate business purposes.",
      },
      {
        subtitle: "Objection and restriction",
        body: "You may object to certain types of processing, or ask us to restrict how we use your data while a dispute is resolved.",
      },
      {
        subtitle: "Data portability",
        body: "You may request a copy of your data in a structured, machine-readable format.",
      },
      {
        subtitle: "How to exercise your rights",
        body: "To exercise any of these rights, email us at privacy@servzilla.com. We will respond within 30 days.",
      },
    ],
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    content: [
      {
        subtitle: "",
        body: "Our website may contain links to third-party websites, including the e-commerce platforms we support. We are not responsible for the privacy practices of those websites. We encourage you to read their privacy policies before providing any personal data.",
      },
    ],
  },
  {
    id: "children",
    title: "Children's privacy",
    content: [
      {
        subtitle: "",
        body: "Servzilla's services are intended for business use by adults. We do not knowingly collect personal data from anyone under the age of 18. If you believe a minor has submitted data to us, please contact us and we will delete it promptly.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: [
      {
        subtitle: "",
        body: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make significant changes, we will notify active clients by email and update the last updated date at the top of this page. Continued use of our services after changes take effect constitutes acceptance of the revised policy.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    content: [
      {
        subtitle: "",
        body: "If you have any questions about this Privacy Policy or how we handle your data, please contact us at privacy@servzilla.com. For general enquiries, visit our contact page or email hello@servzilla.com.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-[#1A1A1A] overflow-x-hidden">
        {/* HEADER */}
        <section className="pt-28 md:pt-32 pb-14 md:pb-16 bg-white border-b-2 border-[#1A1A1A]">
          <div className="max-w-5xl mx-auto px-4 py-6 md:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A]/70 hover:text-[#E84040] transition-colors mb-8 uppercase tracking-widest"
            >
              ← Servzilla
            </Link>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E84040] text-[#E84040] text-xs font-bold tracking-widest uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E84040]" />
                  Legal
                </div>

                <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1A1A1A] tracking-tight leading-[1.05]">
                  Privacy <br />
                  <span className="text-[#E84040]">Policy.</span>
                </h1>
              </div>

              <div className="flex-shrink-0 border-2 border-[#1A1A1A] rounded-2xl px-6 py-4 bg-white">
                <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/60 mb-1">
                  Last updated
                </p>
                <p className="text-lg font-extrabold text-[#1A1A1A] font-headline">
                  April 2026
                </p>
              </div>
            </div>

            <p className="mt-8 text-base md:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-2xl">
              Servzilla is committed to protecting your privacy. This policy
              explains what data we collect, how we use it, and what rights you
              have.
            </p>
          </div>
        </section>

        {/* BODY */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
            {/* TOC */}
            <aside className="hidden md:block md:col-span-3">
              <div className="sticky top-28">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#1A1A1A]/45 mb-5">
                  Contents
                </p>

                <nav className="space-y-1">
                  {SECTIONS.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="group flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-[#1A1A1A]/5 transition-colors"
                    >
                      <span className="text-[10px] font-black text-[#E84040] mt-1 flex-shrink-0 w-4">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-[#1A1A1A]/70 group-hover:text-[#1A1A1A] transition-colors leading-snug">
                        {s.title}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* MAIN */}
            <main className="md:col-span-9 min-w-0">
              <div className="space-y-12 md:space-y-14">
                {SECTIONS.map((section, i) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-black text-[#E84040] flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-headline text-xl md:text-2xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight">
                        {section.title}
                      </h2>
                    </div>

                    

                    <div className="space-y-6">
                      {section.content.map((block, j) => (
                        <div key={j}>
                          {block.subtitle && (
                            <h3 className="font-headline text-base font-bold text-[#1A1A1A] mb-1.5">
                              {block.subtitle}
                            </h3>
                          )}

                          <p className="text-[15px] leading-relaxed text-[#1A1A1A]/70">
                            {block.body}
                          </p>
                          <div className="h-px bg-[#1A1A1A]/10 mb-8" />
                        </div>
                      ))}
                    </div>
                  </section>
                ))}

                {/* FOOTER LINKS */}
                <div className="flex flex-wrap gap-6 pt-4 border-t border-[#1A1A1A]/10">
                  <Link
                    href="/"
                    className="text-sm font-bold text-[#1A1A1A]/60 hover:text-[#E84040] transition-colors"
                  >
                    ← Back to home
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
