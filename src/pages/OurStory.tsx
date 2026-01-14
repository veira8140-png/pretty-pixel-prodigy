import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const OurStory: React.FC = () => {
  const faqs = [
    { question: "Where is Veira located?", answer: "Veira is based in Nairobi, Kenya at Ruprani House, 3rd Floor, Moktar Daddah St." },
    { question: "Does Veira support GBV causes?", answer: "Yes, we allocate 10% of our annual profits to organizations that fight gender-based violence and support survivors." },
  ];

  return (
    <div className="bg-purple-950 text-white min-h-screen">
      <SEOHead 
        title="About Veira Kenya | Our Story & Mission"
        description="Learn about Veira's mission to simplify business operations for Kenyan SMEs. We allocate 10% of profits to fight GBV and support survivors."
        faqs={faqs}
      />

      {/* Hero */}
      <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Breadcrumbs className="justify-start mb-6 sm:mb-8 text-purple-300" />
          <span className="text-[9px] sm:text-[10px] font-bold text-purple-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 block">Our Story</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tighter leading-tight mb-8 sm:mb-10 lg:mb-12">
            Why we built<br />
            <span className="text-purple-400">Veira.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="space-y-4 sm:space-y-5">
              <p className="text-base sm:text-lg lg:text-xl text-purple-200 leading-relaxed font-medium">
                Running a business should not mean carrying everything alone.
              </p>
              <p className="text-base sm:text-lg text-purple-300 leading-relaxed">
                Most small businesses struggle not because they lack ambition, but because operations are heavy. Sales systems break. Inventory gets messy. Technology becomes another responsibility instead of support.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-5">
              <p className="text-base sm:text-lg text-purple-300 leading-relaxed">
                We built Veira to change that. Not by adding more tools, but by taking operational work off your plate entirely.
              </p>
              <p className="text-base sm:text-lg text-purple-300 leading-relaxed">
                Veira is a productised service. We install POS systems, deploy AI agents, build websites, and manage cloud infrastructure. You get modern business systems without hiring IT staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GBV Commitment */}
      <section className="py-12 sm:py-16 lg:py-20 bg-purple-900/50 border-y border-purple-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-800/50 rounded-full mb-4 sm:mb-6">
            <span className="text-lg sm:text-xl">💜</span>
            <span className="text-xs sm:text-sm font-bold text-purple-200 uppercase tracking-widest">Our Commitment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight mb-4 sm:mb-6">
            10% of profits fight GBV
          </h2>
          <p className="text-base sm:text-lg text-purple-300 max-w-2xl mx-auto">
            Every year, we allocate 10% of our annual profits to organizations that fight gender-based violence and support survivors in Kenya. Business success should create positive change.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-[9px] sm:text-[10px] font-bold text-purple-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3 block">Our Values</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight">What guides us</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            <div className="bg-purple-950 border border-purple-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold font-display mb-2 sm:mb-3">Clarity over complexity</h3>
              <p className="text-sm sm:text-base text-purple-400">Business systems should be simple to use and simple to understand. No jargon. No hidden features.</p>
            </div>
            <div className="bg-purple-950 border border-purple-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🤝</div>
              <h3 className="text-lg sm:text-xl font-bold font-display mb-2 sm:mb-3">Aligned incentives</h3>
              <p className="text-sm sm:text-base text-purple-400">We charge a success fee, not upfront payments. We only win when your business wins.</p>
            </div>
            <div className="bg-purple-950 border border-purple-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 sm:col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🔧</div>
              <h3 className="text-lg sm:text-xl font-bold font-display mb-2 sm:mb-3">Managed, not sold</h3>
              <p className="text-sm sm:text-base text-purple-400">We do not sell software and disappear. We install, manage, and support. Your systems are our responsibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-purple-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight mb-3 sm:mb-4">
            Ready to simplify operations?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-purple-300 mb-6 sm:mb-8">
            Talk to us on WhatsApp. We will show you how Veira can help your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="https://wa.me/254755792377" target="_blank" rel="noopener noreferrer" className="px-8 sm:px-10 py-3 sm:py-3.5 bg-white text-purple-900 rounded-full font-bold hover:bg-purple-100 transition-all text-xs sm:text-sm uppercase tracking-widest">
              Ask on WhatsApp
            </a>
            <Link to="/pos" className="px-8 sm:px-10 py-3 sm:py-3.5 border border-purple-600 text-white rounded-full font-bold hover:bg-purple-800 transition-all text-xs sm:text-sm uppercase tracking-widest">
              See Our POS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
