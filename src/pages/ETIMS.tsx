import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const ETIMSPage: React.FC = () => {
  const faqs = [
    {
      question: "What is KRA ETIMS?",
      answer: "ETIMS (Electronic Tax Invoice Management System) is KRA's system for real-time tax compliance. All businesses in Kenya must use ETIMS-compliant systems to issue tax invoices and report sales to KRA."
    },
    {
      question: "Who needs an ETIMS POS in Kenya?",
      answer: "All VAT-registered businesses and those with annual turnover above KES 5 million must use ETIMS. This includes restaurants, retail shops, wholesalers, pharmacies, and service providers."
    },
    {
      question: "How does Veira POS connect to ETIMS?",
      answer: "Veira POS is directly integrated with KRA's ETIMS API. Every sale automatically generates a compliant tax invoice and transmits it to KRA in real-time. No manual work required."
    },
    {
      question: "What happens if I don't comply with ETIMS?",
      answer: "Non-compliance with ETIMS can result in penalties from KRA, including fines and business disruption. Veira ensures you stay compliant automatically."
    }
  ];

  const complianceFeatures = [
    { title: "Automatic Tax Invoices", description: "Every sale generates a KRA-compliant tax invoice automatically. No manual entry needed.", icon: "📄" },
    { title: "Real-time KRA Reporting", description: "Sales are transmitted to KRA instantly. Your tax records are always up to date.", icon: "⚡" },
    { title: "QR Code Receipts", description: "Each receipt includes a KRA QR code for verification. Customers can confirm compliance.", icon: "📱" },
    { title: "Audit-Ready Records", description: "Complete transaction history ready for KRA audits. All data securely stored in the cloud.", icon: "📊" },
    { title: "M-Pesa Integration", description: "Accept M-Pesa payments with automatic ETIMS compliance. Safaricom and KRA in one system.", icon: "💳" },
    { title: "WhatsApp Alerts", description: "Get daily compliance reports on WhatsApp. Know your tax position without logging in.", icon: "💬" }
  ];

  const businessTypes = [
    { name: "Restaurants & Cafes", description: "Quick service, table service, and fast food outlets" },
    { name: "Retail Shops", description: "Supermarkets, mini-marts, and general stores" },
    { name: "Pharmacies", description: "Medicine dispensaries and health product retailers" },
    { name: "Hardware Stores", description: "Building materials and hardware suppliers" },
    { name: "Wholesalers", description: "Distributors and bulk product sellers" },
    { name: "Service Providers", description: "Salons, repair shops, and professional services" }
  ];

  return (
    <div className="bg-zinc-50">
      <SEOHead 
        title="KRA ETIMS POS System in Kenya"
        description="Veira is a KRA ETIMS compliant POS system in Kenya. Automatically generate ETIMS receipts and stay compliant with KRA regulations."
        keywords="KRA ETIMS POS, ETIMS compliant POS Kenya, KRA POS system, tax invoice Kenya, ETIMS receipt, KRA compliance POS"
        faqs={faqs}
      />

      {/* Hero */}
      <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pb-20 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Breadcrumbs className="justify-center mb-6 sm:mb-8" />
          <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3 block">KRA Compliance</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tighter text-zinc-900 leading-tight mb-3 sm:mb-4">
            KRA ETIMS Compliant POS System in Kenya
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            Stay compliant with KRA regulations. Veira POS automatically generates ETIMS receipts and reports every sale to KRA in real-time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a
              href="https://wa.me/254755792377?text=Hi%20Veira%2C%20I%20need%20help%20with%20KRA%20ETIMS%20compliance%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3 sm:py-3.5 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              Talk to ETIMS Expert on WhatsApp
            </a>
            <Link
              to="/pos"
              className="px-8 sm:px-10 py-3 sm:py-3.5 border border-zinc-200 text-zinc-900 rounded-full font-bold hover:bg-white transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              See Full POS Features
            </Link>
          </div>
        </div>
      </section>

      {/* What Is ETIMS */}
      <section className="py-14 sm:py-18 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            <div>
              <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">Understanding ETIMS</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-zinc-900 mb-4 sm:mb-6">
                What Is KRA ETIMS?
              </h2>
              <p className="text-base sm:text-lg text-zinc-500 leading-relaxed mb-4">
                ETIMS (Electronic Tax Invoice Management System) is Kenya Revenue Authority's platform for real-time tax invoice management. All businesses must use ETIMS-compliant systems to issue tax invoices.
              </p>
              <p className="text-base sm:text-lg text-zinc-500 leading-relaxed mb-6">
                Since January 2024, KRA requires all VAT-registered businesses and those with turnover above KES 5 million to use ETIMS. Non-compliance can result in penalties and business disruption.
              </p>
              <a
                href="https://www.kra.go.ke/etims"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-900 hover:text-zinc-600 underline"
              >
                Learn more on KRA website →
              </a>
            </div>
            <div className="bg-zinc-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl font-bold font-display text-zinc-900 mb-4">ETIMS Compliance Checklist</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-zinc-900 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  <span className="text-sm sm:text-base text-zinc-700">Real-time tax invoice generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-zinc-900 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  <span className="text-sm sm:text-base text-zinc-700">Automatic KRA data transmission</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-zinc-900 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  <span className="text-sm sm:text-base text-zinc-700">QR code on every receipt</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-zinc-900 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  <span className="text-sm sm:text-base text-zinc-700">Secure cloud storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-zinc-900 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  <span className="text-sm sm:text-base text-zinc-700">Audit-ready transaction history</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Veira Helps */}
      <section className="py-14 sm:py-18 lg:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3 block">ETIMS Features</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-zinc-900">
              How Veira Helps You Stay Compliant
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {complianceFeatures.map((feature, idx) => (
              <div key={idx} className="bento-card p-5 sm:p-6 lg:p-8">
                <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">{feature.icon}</span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-zinc-900 mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-zinc-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs ETIMS */}
      <section className="py-14 sm:py-18 lg:py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3 block">Industries</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight">
              Who Needs an ETIMS POS in Kenya
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {businessTypes.map((business, idx) => (
              <div key={idx} className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold font-display mb-1 sm:mb-2">{business.name}</h3>
                <p className="text-sm sm:text-base text-zinc-400">{business.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <p className="text-base sm:text-lg text-zinc-400 mb-6">
              If your business has annual turnover above KES 5 million, you need ETIMS.
            </p>
            <a
              href="https://wa.me/254755792377?text=Hi%20Veira%2C%20I%20want%20to%20check%20if%20my%20business%20needs%20ETIMS%20compliance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              Check Your Compliance Status
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 sm:py-12 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] mb-4 sm:mb-6">Related Pages</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link to="/pos" className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full transition-colors">POS System</Link>
            <Link to="/pos/pricing" className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full transition-colors">POS Pricing</Link>
            <Link to="/pos/free-pos" className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full transition-colors">Free POS</Link>
            <Link to="/pos/for/restaurants" className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full transition-colors">Restaurant POS</Link>
            <Link to="/pos/for/retail" className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full transition-colors">Retail POS</Link>
            <Link to="/agents" className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full transition-colors">AI Agents</Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 sm:py-18 lg:py-20 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3 block">FAQs</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-zinc-900">
              ETIMS Questions Answered
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-zinc-200 pb-4 sm:pb-5">
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-1.5 sm:mb-2">{faq.question}</h3>
                <p className="text-sm sm:text-base text-zinc-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-18 lg:py-20 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-zinc-900 mb-3 sm:mb-4">
            Get ETIMS Compliant Today
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-500 mb-6 sm:mb-8 px-4 sm:px-0">
            Talk to our ETIMS experts on WhatsApp. We'll help you get compliant quickly.
          </p>
          <a
            href="https://wa.me/254755792377?text=Hi%20Veira%2C%20I%20need%20an%20ETIMS%20compliant%20POS%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-10 py-3 sm:py-3.5 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest"
          >
            Talk to ETIMS Expert on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default ETIMSPage;
