import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const Home: React.FC = () => {
  const faqs = [
    {
      question: "What is an ETIMS compliant POS system?",
      answer: "An ETIMS compliant POS system automatically sends every sale to KRA in real-time, generating tax-compliant receipts. Veira POS is fully integrated with KRA's ETIMS requirements."
    },
    {
      question: "Is Veira POS free for restaurants and retail in Kenya?",
      answer: "Yes. Veira POS has no upfront software cost. You only pay a 1.5% success fee when you make sales. Free installation and training included."
    },
    {
      question: "Does Veira POS work with M-Pesa?",
      answer: "Yes. Veira POS accepts M-Pesa, Airtel Money, cards, and cash. All payments are recorded automatically for ETIMS compliance."
    },
    {
      question: "How quickly can I get ETIMS POS installed in Nairobi?",
      answer: "Most installations in Nairobi and across Kenya are completed within a few hours. We handle setup, KRA integration, and staff training."
    }
  ];

  const operationsLinks = [
    { l: "Free POS Kenya", u: "/pos/free-pos" },
    { l: "POS Pricing", u: "/pos/pricing" },
    { l: "eTIMS Compliant POS", u: "/pos/etims" },
    { l: "Cloud Hosting", u: "/cloud" },
    { l: "POS for Restaurants", u: "/pos/for/restaurants" },
    { l: "POS for Retail", u: "/pos/for/retail" },
    { l: "Websites", u: "/websites" },
    { l: "AI Agents", u: "/agents" },
  ];

  const features = [
    {
      title: "POS Terminal",
      description: "Accept M-Pesa, cards, and cash. Track every sale automatically.",
      link: "/pos",
      icon: "💳"
    },
    {
      title: "AI Agents",
      description: "Glenn, Svan, and Tat monitor operations so you can focus on growth.",
      link: "/agents",
      icon: "🤖"
    },
    {
      title: "Cloud Nodes",
      description: "Your data stays safe, synced, and accessible from anywhere.",
      link: "/cloud",
      icon: "☁️"
    },
    {
      title: "Websites & Apps",
      description: "Get online presence that connects to your POS and agents.",
      link: "/websites",
      icon: "🌐"
    }
  ];

  return (
    <div className="bg-zinc-50">
      <SEOHead 
        title="ETIMS Compliant POS System in Kenya | Free Restaurant & Retail POS"
        description="Veira is a free ETIMS compliant POS system for restaurants and retail businesses in Kenya. Accept M-Pesa, track sales, and stay KRA compliant."
        keywords="ETIMS compliant POS system Kenya, free POS system Kenya, restaurant POS Kenya, retail POS Kenya, KRA ETIMS POS, cloud POS Kenya"
        faqs={faqs}
      />

      {/* Hero Section */}
      <section className="min-h-[calc(100svh-3.5rem)] flex flex-col justify-center text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-[0.03] pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 md:w-96 h-40 sm:h-72 md:h-96 border border-zinc-900 rounded-full"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 sm:w-80 md:w-[500px] h-56 sm:h-80 md:h-[500px] border border-zinc-900 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter font-display text-zinc-900 leading-[0.95] mb-4 sm:mb-6">
            ETIMS Compliant POS<br />
            <span className="text-zinc-400">for Restaurants & Retail in Kenya</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 font-medium px-4 sm:px-0">
            Accept M-Pesa, cards, and cash. Track sales. Stay KRA compliant. Free installation for Kenyan businesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a
              href="https://wa.me/254755792377?text=Hi%20Veira%2C%20I%20want%20to%20get%20a%20free%20ETIMS%20POS%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest shadow-xl active:scale-95"
            >
              Get Free POS on WhatsApp
            </a>
            <Link
              to="/use-cases"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white border border-zinc-200 text-zinc-900 rounded-full font-bold hover:bg-zinc-50 transition-all text-xs sm:text-sm uppercase tracking-widest shadow-sm active:scale-95"
            >
              Explore Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Operations Hub Links */}
      <section className="py-10 sm:py-12 lg:py-14 border-y border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-5 sm:mb-6 lg:mb-8">Why Kenyan Businesses Choose Veira POS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {operationsLinks.map((link, idx) => (
              <Link 
                key={idx} 
                to={link.u} 
                className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-900 border-b border-zinc-100 pb-2 sm:pb-3 transition-colors"
              >
                {link.l}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-14 sm:py-18 lg:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3 block">What We Provide</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-display text-zinc-900">
              KRA ETIMS Compliance Made Simple
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {features.map((feature, idx) => (
              <Link
                key={idx}
                to={feature.link}
                className="bento-card group flex flex-col justify-between min-h-[200px] sm:min-h-[220px] lg:min-h-[250px] p-5 sm:p-6 lg:p-8"
              >
                <div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 lg:mb-5 block">{feature.icon}</span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-zinc-900 mb-1.5 sm:mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </div>
                <div className="mt-4 sm:mt-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-zinc-400">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-14 sm:py-18 lg:py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            <div>
              <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">Why Veira</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mb-4 sm:mb-6">
                Free POS with Android Hardware Support
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed mb-5 sm:mb-6">
                No upfront costs. No monthly fees. Just a 1.5% success fee when your business makes sales. We only win when you win.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/pos"
                  className="text-center px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-xs sm:text-sm uppercase tracking-widest"
                >
                  Get Free POS
                </Link>
                <a
                  href="https://wa.me/254755792377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-6 sm:px-8 py-3 sm:py-3.5 border border-zinc-700 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-1">0</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Upfront cost</div>
              </div>
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-1">1.5%</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Success fee</div>
              </div>
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-1">24/7</div>
                <div className="text-zinc-400 text-xs sm:text-sm">WhatsApp support</div>
              </div>
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-1">Free</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Installation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-14 sm:py-18 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">Trusted By</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-zinc-900 mb-3 sm:mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-500 max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-0">
            Restaurants, retail shops, pharmacies, and hardware stores across Kenya use Veira to handle operations quietly in the background.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Link
              to="/testimonials"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              Read Stories
            </Link>
            <Link
              to="/use-cases"
              className="px-6 sm:px-8 py-3 sm:py-3.5 border border-zinc-200 text-zinc-900 rounded-full font-bold hover:bg-zinc-50 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              See Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 sm:py-18 lg:py-20 bg-zinc-50 border-t border-zinc-100">
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

      {/* CTA Section */}
      <section className="py-14 sm:py-18 lg:py-20 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-zinc-900 mb-3 sm:mb-4">
            Ready to simplify your operations?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-500 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Get your free POS system installed. We handle everything from setup to support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a
              href="https://wa.me/254755792377"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3 sm:py-3.5 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest shadow-xl"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
