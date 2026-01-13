import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const OurStory: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Story | Veira';
  }, []);

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 sm:mb-8 block">Our Story</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight mb-10 sm:mb-12 lg:mb-16">
            Why we built<br />
            <span className="text-zinc-500">Veira.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            <div className="space-y-5 sm:space-y-6 lg:space-y-8">
              <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed font-medium">
                Running a business should not mean carrying everything alone.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed font-medium">
                Most small and growing businesses struggle not because they lack ambition, but because operations are heavy. Sales systems break. Inventory gets messy. Follow-ups are forgotten. Technology becomes another responsibility instead of support.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6 lg:space-y-8">
              <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed font-medium">
                We built Veira to change that. Not by adding more tools, but by taking operational work off your plate entirely.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed font-medium">
                Veira is a productised service. We install POS systems, deploy AI agents, build websites, and manage cloud infrastructure. You get the benefits of modern business systems without hiring IT staff or learning new software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 block">Our Mission</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-5 sm:mb-6 lg:mb-8">
                Operations that run without you
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed">
                We want every Kenyan business owner to have access to enterprise-grade systems without enterprise complexity. Pay only when you sell. Get support when you need it. Focus on what you do best.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-zinc-800">
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-zinc-300">Local installation in Kenya</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-zinc-300">24/7 WhatsApp support</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-zinc-300">1.5% success fee model</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-zinc-300">Free installation and training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">Our Values</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              What guides us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-5 lg:mb-6">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">Clarity over complexity</h3>
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                We believe business systems should be simple to use and simple to understand. No jargon. No hidden features. Just tools that work.
              </p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-5 lg:mb-6">🤝</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">Aligned incentives</h3>
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                We charge a success fee, not upfront payments. This means we only win when your business wins. Our interests are aligned.
              </p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 sm:col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-5 lg:mb-6">🔧</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">Managed, not sold</h3>
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                We do not sell software and disappear. We install, manage, and support. Your systems are our responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">Our Team</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-5 sm:mb-6 lg:mb-8">
            Built in Kenya, for Kenya
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0">
            Veira is built by a team that understands Kenyan business realities. We know the challenges of power outages, internet disruptions, and tight margins. Our systems are designed for how business actually works here.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
            Ready to simplify operations?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-10 px-4 sm:px-0">
            Talk to us on WhatsApp. We will show you how Veira can help your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a
              href="https://wa.me/254700000000"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              Ask on WhatsApp
            </a>
            <Link
              to="/pos"
              className="px-8 sm:px-10 py-3 sm:py-4 border border-zinc-700 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              See Our POS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;