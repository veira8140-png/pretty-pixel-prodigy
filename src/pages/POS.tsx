import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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
        title: "POS System Pricing",
        subtitle: "Transparent pricing for Kenyan businesses",
        h1: "POS pricing that makes sense"
      };
    }
    if (variant === 'free') {
      return {
        title: "Free POS System Kenya",
        subtitle: "No upfront cost, no monthly fees",
        h1: "Free POS for your business"
      };
    }
    if (variant === 'compliance') {
      return {
        title: "eTIMS Compliant POS Kenya",
        subtitle: "Stay compliant with KRA requirements",
        h1: "eTIMS compliant POS"
      };
    }
    if (industry) {
      return {
        title: `POS for ${displayIndustry} in Kenya`,
        subtitle: `Built for ${displayIndustry.toLowerCase()} operations`,
        h1: `POS for ${displayIndustry}`
      };
    }
    if (city) {
      return {
        title: `POS System in ${displayCity}`,
        subtitle: `Local installation and support in ${displayCity}`,
        h1: `POS in ${displayCity}`
      };
    }
    return {
      title: "POS System Kenya",
      subtitle: "Accept payments, track sales, manage inventory",
      h1: "POS Terminal"
    };
  };

  const content = getPageContent();

  useEffect(() => {
    document.title = `${content.title} | Veira`;
  }, [content.title]);

  const features = [
    {
      title: "Accept All Payments",
      description: "M-Pesa, cards, and cash in one system. Every transaction recorded automatically.",
      icon: "💳"
    },
    {
      title: "Track Inventory",
      description: "Know what is in stock, what is running low, and what needs reordering.",
      icon: "📦"
    },
    {
      title: "Generate Reports",
      description: "Sales reports, stock reports, and performance insights sent to you automatically.",
      icon: "📊"
    },
    {
      title: "eTIMS Compliant",
      description: "Every sale is recorded correctly for KRA tax compliance. No manual work needed.",
      icon: "🛡️"
    },
    {
      title: "Works Offline",
      description: "Process sales even when internet is down. Data syncs when you are back online.",
      icon: "📡"
    },
    {
      title: "24/7 Support",
      description: "Reach our team anytime via WhatsApp. We respond within minutes.",
      icon: "💬"
    }
  ];

  const faqs = [
    {
      q: "How much does Veira POS cost?",
      a: "There is no upfront software cost. We charge a 1.5% success fee only when you make sales. Contact us for hardware pricing."
    },
    {
      q: "Is the POS eTIMS compliant?",
      a: "Yes. Veira POS is fully integrated with KRA's eTIMS requirements, ensuring every sale is recorded correctly for tax compliance."
    },
    {
      q: "Can I use the POS offline?",
      a: "Yes. Our systems are built for real-world conditions in Kenya. You can process sales offline, and the data will sync automatically once you are back online."
    },
    {
      q: "How long does installation take?",
      a: "Most installations are completed within a few hours. We handle everything from setup to training your staff."
    }
  ];

  return (
    <div className="bg-zinc-50">
      {/* Hero */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">Point of Sale</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-zinc-900 leading-tight mb-4 sm:mb-6">
            {content.h1}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0">
            {content.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a
              href="https://wa.me/254700000000"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              Get Free POS
            </a>
            <Link
              to="/pos/pricing"
              className="px-8 sm:px-10 py-3 sm:py-4 border border-zinc-200 text-zinc-900 rounded-full font-bold hover:bg-white transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">Features</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              Everything you need to sell
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bento-card p-5 sm:p-6 lg:p-8">
                <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">{feature.icon}</span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-zinc-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 block">Pricing</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                No upfront cost.
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed mb-6 sm:mb-8">
                We install the POS for free. You pay only 1.5% success fee when you make sales. Hardware pricing available on request.
              </p>
              <a
                href="https://wa.me/254700000000"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-xs sm:text-sm uppercase tracking-widest"
              >
                Ask About Pricing
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">0</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Software cost</div>
              </div>
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">1.5%</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Success fee</div>
              </div>
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">Free</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Installation</div>
              </div>
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">Free</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Training</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">FAQs</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
              Common questions
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-zinc-100 pb-4 sm:pb-5 lg:pb-6">
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-1 sm:mb-2">{faq.q}</h3>
                <p className="text-sm sm:text-base text-zinc-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4 sm:mb-6">
            Ready to get started?
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 mb-8 sm:mb-10 px-4 sm:px-0">
            Talk to us on WhatsApp and get your free POS installed within days.
          </p>
          <a
            href="https://wa.me/254700000000"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default POSPage;