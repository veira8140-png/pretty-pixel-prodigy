import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Veira | Business Operations Done for You';
  }, []);

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
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center text-center relative overflow-hidden pt-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-[0.03] pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 border border-zinc-900 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] border border-zinc-900 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mb-8 flex flex-col items-center">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-4">Serving Kenyan Businesses</span>
            <div className="w-12 h-[1px] bg-zinc-200"></div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 leading-[0.95] mb-8">
            Business operations,<br />
            <span className="text-zinc-300">done for you.</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            Automate your checkout, inventory, and customer retention. We handle the systems, you handle the growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/pos"
              className="px-8 py-3 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest shadow-xl active:scale-95"
            >
              Get started for free
            </Link>
            <Link
              to="/use-cases"
              className="px-8 py-3 bg-white border border-zinc-200 text-zinc-900 rounded-full font-bold hover:bg-zinc-50 transition-all text-sm uppercase tracking-widest shadow-sm active:scale-95"
            >
              Explore Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Operations Hub Links */}
      <section className="py-16 border-y border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-10">Operations Hub</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {operationsLinks.map((link, idx) => (
              <Link 
                key={idx} 
                to={link.u} 
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 border-b border-zinc-100 pb-3 transition-colors"
              >
                {link.l}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-4 block">What We Provide</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              One system. Complete control.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <Link
                key={idx}
                to={feature.link}
                className="bento-card group flex flex-col justify-between min-h-[280px] p-10"
              >
                <div>
                  <span className="text-4xl mb-6 block">{feature.icon}</span>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-zinc-500 text-base leading-relaxed">{feature.description}</p>
                </div>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-6 block">Why Veira</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Pay only when you sell.
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                No upfront costs. No monthly fees. Just a 1.5% success fee when your business makes sales. We only win when you win.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/pos"
                  className="px-8 py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-sm uppercase tracking-widest"
                >
                  Get Free POS
                </Link>
                <a
                  href="https://wa.me/254700000000"
                  className="px-8 py-4 border border-zinc-700 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-800 rounded-3xl p-8">
                <div className="text-4xl font-bold mb-2">0</div>
                <div className="text-zinc-400 text-sm">Upfront cost</div>
              </div>
              <div className="bg-zinc-800 rounded-3xl p-8">
                <div className="text-4xl font-bold mb-2">1.5%</div>
                <div className="text-zinc-400 text-sm">Success fee</div>
              </div>
              <div className="bg-zinc-800 rounded-3xl p-8">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-zinc-400 text-sm">WhatsApp support</div>
              </div>
              <div className="bg-zinc-800 rounded-3xl p-8">
                <div className="text-4xl font-bold mb-2">Free</div>
                <div className="text-zinc-400 text-sm">Installation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-6 block">Trusted By</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Kenyan businesses choose Veira
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-12">
            Restaurants, retail shops, pharmacies, and hardware stores across Kenya use Veira to handle operations quietly in the background.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/testimonials"
              className="px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest"
            >
              Read Stories
            </Link>
            <Link
              to="/use-cases"
              className="px-8 py-4 border border-zinc-200 text-zinc-900 rounded-full font-bold hover:bg-zinc-50 transition-all text-sm uppercase tracking-widest"
            >
              See Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
            Ready to simplify your operations?
          </h2>
          <p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto">
            Get your free POS system installed. We handle everything from setup to support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/254700000000"
              className="px-10 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest shadow-xl"
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