import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const OurStory: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Story | Veira';
  }, []);

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-8 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-16">
            Why we built<br />
            <span className="text-zinc-500">Veira.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                Running a business should not mean carrying everything alone.
              </p>
              <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                Most small and growing businesses struggle not because they lack ambition, but because operations are heavy. Sales systems break. Inventory gets messy. Follow-ups are forgotten. Technology becomes another responsibility instead of support.
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                We built Veira to change that. Not by adding more tools, but by taking operational work off your plate entirely.
              </p>
              <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                Veira is a productised service. We install POS systems, deploy AI agents, build websites, and manage cloud infrastructure. You get the benefits of modern business systems without hiring IT staff or learning new software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-6 block">Our Mission</span>
              <h2 className="text-4xl font-bold tracking-tight mb-8">
                Operations that run without you
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                We want every Kenyan business owner to have access to enterprise-grade systems without enterprise complexity. Pay only when you sell. Get support when you need it. Focus on what you do best.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-zinc-300">Local installation in Kenya</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-zinc-300">24/7 WhatsApp support</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-zinc-300">1.5% success fee model</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-zinc-300">Free installation and training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-4 block">Our Values</span>
            <h2 className="text-4xl font-bold tracking-tight">
              What guides us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-xl font-bold mb-4">Clarity over complexity</h3>
              <p className="text-zinc-500 leading-relaxed">
                We believe business systems should be simple to use and simple to understand. No jargon. No hidden features. Just tools that work.
              </p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10">
              <div className="text-4xl mb-6">🤝</div>
              <h3 className="text-xl font-bold mb-4">Aligned incentives</h3>
              <p className="text-zinc-500 leading-relaxed">
                We charge a success fee, not upfront payments. This means we only win when your business wins. Our interests are aligned.
              </p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10">
              <div className="text-4xl mb-6">🔧</div>
              <h3 className="text-xl font-bold mb-4">Managed, not sold</h3>
              <p className="text-zinc-500 leading-relaxed">
                We do not sell software and disappear. We install, manage, and support. Your systems are our responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-4 block">Our Team</span>
          <h2 className="text-4xl font-bold tracking-tight mb-8">
            Built in Kenya, for Kenya
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
            Veira is built by a team that understands Kenyan business realities. We know the challenges of power outages, internet disruptions, and tight margins. Our systems are designed for how business actually works here.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Ready to simplify operations?
          </h2>
          <p className="text-lg text-zinc-400 mb-10">
            Talk to us on WhatsApp. We will show you how Veira can help your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/254700000000"
              className="px-10 py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-sm uppercase tracking-widest"
            >
              Ask on WhatsApp
            </a>
            <Link
              to="/pos"
              className="px-10 py-4 border border-zinc-700 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest"
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