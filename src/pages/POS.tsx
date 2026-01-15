import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface POSPageProps {
  variant?: 'pricing' | 'free' | 'compliance';
}

const POSPage: React.FC<POSPageProps> = ({ variant }) => {
  const { city, industry } = useParams<{ city?: string; industry?: string }>();

  const format = (slug?: string, fallback: string = "") => {
    if (!slug) return fallback;
    return slug
      .split(/_|-/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const displayCity = format(city, "Kenya");
  const displayIndustry = format(industry, "");

  const getPageContent = () => {
    if (variant === 'pricing') {
      return {
        title: "POS System Pricing Kenya | Free Installation Nairobi",
        description: "Transparent POS pricing for Kenyan businesses. No upfront software cost, 1.5% success fee only. Free installation in Nairobi. Get eTIMS compliant POS today.",
        h1: "POS pricing that makes sense"
      };
    }
    if (variant === 'free') {
      return {
        title: "Free POS System Kenya | No Upfront Cost Nairobi",
        description: "Get a free POS system in Kenya with no monthly fees. Veira POS is eTIMS compliant with free installation in Nairobi. Pay only when you sell.",
        h1: "Free POS for your business"
      };
    }
    if (variant === 'compliance') {
      return {
        title: "eTIMS Compliant POS Kenya | KRA Approved System Nairobi",
        description: "Stay KRA compliant with Veira's eTIMS integrated POS. Automatic tax recording for every sale. Free installation in Nairobi and across Kenya.",
        h1: "eTIMS compliant POS"
      };
    }
    if (industry) {
      return {
        title: `POS for ${displayIndustry} Kenya | ${displayIndustry} Point of Sale`,
        description: `Get the best POS system for ${displayIndustry.toLowerCase()} businesses in Kenya. eTIMS compliant with features built for ${displayIndustry.toLowerCase()} operations.`,
        h1: `POS for ${displayIndustry}`
      };
    }
    if (city) {
      return {
        title: `POS System ${displayCity} | Point of Sale Installation`,
        description: `Get POS system installation in ${displayCity}. eTIMS compliant POS with local support. Free installation and training for your business.`,
        h1: `POS in ${displayCity}`
      };
    }
    return {
      title: "Free ETIMS Compliant POS System for Kenya",
      description: "Get a free ETIMS compliant POS system in Kenya. Veira helps restaurants and retail stores process payments, send ETIMS receipts, and track sales in real time.",
      h1: "Free ETIMS Compliant POS System in Kenya"
    };
  };

  const content = getPageContent();

  const faqs = [
    {
      question: "Is Veira POS ETIMS compliant with KRA?",
      answer: "Yes. Veira POS is fully integrated with KRA's ETIMS requirements. Every sale automatically generates a compliant receipt and is reported to KRA in real-time."
    },
    {
      question: "What payment methods does the POS accept?",
      answer: "Veira POS accepts M-Pesa, Airtel Money, Visa, Mastercard, and cash. All transactions are recorded automatically for ETIMS compliance."
    },
    {
      question: "Can I use the POS on Android devices?",
      answer: "Yes. Veira POS works on Android tablets and smartphones. We also provide dedicated POS hardware if you prefer."
    },
    {
      question: "Do you provide daily sales reports?",
      answer: "Yes. You receive automated WhatsApp reports every day with sales summaries, inventory alerts, and performance insights."
    }
  ];

  const features = [
    { title: "Accept All Payments", description: "M-Pesa, cards, and cash in one system. Every transaction recorded automatically.", icon: "💳" },
    { title: "Track Inventory", description: "Know what is in stock, what is running low, and what needs reordering.", icon: "📦" },
    { title: "Generate Reports", description: "Sales reports, stock reports, and performance insights sent to you automatically.", icon: "📊" },
    { title: "eTIMS Compliant", description: "Every sale is recorded correctly for KRA tax compliance. No manual work needed.", icon: "🛡️" },
    { title: "Works Offline", description: "Process sales even when internet is down. Data syncs when you are back online.", icon: "📡" },
    { title: "24/7 Support", description: "Reach our team anytime via WhatsApp. We respond within minutes.", icon: "💬" }
  ];

  return (
    <div className="bg-zinc-50">
      <SEOHead 
        title={content.title}
        description={content.description}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pb-20 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Breadcrumbs className="justify-center mb-6 sm:mb-8" />
          <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3 block">Point of Sale</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tighter text-zinc-900 leading-tight mb-3 sm:mb-4">
            {content.h1}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            Accept payments, track sales, manage inventory. Built for Kenyan businesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a
              href="https://wa.me/254755792377?text=Hi%20Veira%2C%20I%20want%20to%20start%20using%20a%20free%20ETIMS%20POS%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3 sm:py-3.5 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              Start Free ETIMS POS
            </a>
            <Link
              to="/pos/pricing"
              className="px-8 sm:px-10 py-3 sm:py-3.5 border border-zinc-200 text-zinc-900 rounded-full font-bold hover:bg-white transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 sm:py-18 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3 block">Features</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-zinc-900">
              Built for KRA ETIMS Requirements
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bento-card p-5 sm:p-6 lg:p-8">
                <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">{feature.icon}</span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-zinc-900 mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-zinc-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-14 sm:py-18 lg:py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            <div>
              <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">Pricing</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mb-3 sm:mb-4">
                Cloud Based POS with Daily WhatsApp Reports
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed mb-5 sm:mb-6">
                We install the POS for free. You pay only 1.5% success fee when you make sales. Hardware pricing available on request.
              </p>
              <a
                href="https://wa.me/254755792377"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-xs sm:text-sm uppercase tracking-widest"
              >
                Ask About Pricing
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-1">0</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Software cost</div>
              </div>
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-1">1.5%</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Success fee</div>
              </div>
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-1">Free</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Installation</div>
              </div>
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-1">Free</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Training</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 sm:py-12 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] mb-4 sm:mb-6">Related Pages</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link to="/etims" className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full transition-colors">KRA ETIMS POS</Link>
            <Link to="/pos/etims" className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full transition-colors">eTIMS Compliant POS</Link>
            <Link to="/pos/pricing" className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full transition-colors">POS Pricing</Link>
            <Link to="/pos/for/retail" className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full transition-colors">Retail POS</Link>
            <Link to="/agents" className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full transition-colors">AI Agents</Link>
            <Link to="/cloud" className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-full transition-colors">Cloud</Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 sm:py-18 lg:py-20 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3 block">FAQs</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-zinc-900">
              Common questions
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
            Ready to get started?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-500 mb-6 sm:mb-8 px-4 sm:px-0">
            Talk to us on WhatsApp and get your free POS installed within days.
          </p>
          <a
            href="https://wa.me/254755792377"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-10 py-3 sm:py-3.5 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default POSPage;
