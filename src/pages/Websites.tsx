import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const WebsitesPage: React.FC = () => {
  const { city } = useParams<{ city?: string }>();

  const format = (slug?: string, fallback: string = "") => {
    if (!slug) return fallback;
    return slug
      .split(/_|-/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const displayCity = format(city, "Kenya");

  useEffect(() => {
    document.title = city 
      ? `Business Websites in ${displayCity} | Veira`
      : 'Websites & Apps | Veira';
  }, [city, displayCity]);

  const features = [
    {
      title: "Connected to Your POS",
      description: "Your website pulls live data from your POS. Show real inventory, accept online orders, sync everything.",
      icon: "🔗"
    },
    {
      title: "Mobile Responsive",
      description: "Looks great on every device. Most customers browse on phones, and your site will work perfectly.",
      icon: "📱"
    },
    {
      title: "Fast Loading",
      description: "Optimized for Kenyan internet conditions. Your site loads quickly even on slower connections.",
      icon: "⚡"
    },
    {
      title: "Google Optimized",
      description: "Built with SEO best practices. Help customers find you when they search online.",
      icon: "🔍"
    },
    {
      title: "Easy Updates",
      description: "Change content, prices, and products easily. No coding required.",
      icon: "✏️"
    },
    {
      title: "Managed Hosting",
      description: "We handle hosting, security, and updates. Your site stays online and secure.",
      icon: "☁️"
    }
  ];

  const appTypes = [
    {
      title: "E-commerce Websites",
      description: "Sell products online. Accept M-Pesa and card payments directly.",
      icon: "🛒"
    },
    {
      title: "Booking Systems",
      description: "Let customers book appointments, tables, or services online.",
      icon: "📅"
    },
    {
      title: "Business Portfolios",
      description: "Showcase your work and build trust with potential customers.",
      icon: "💼"
    },
    {
      title: "Customer Apps",
      description: "Mobile apps for loyalty programs, ordering, and customer engagement.",
      icon: "📲"
    }
  ];

  return (
    <div className="bg-zinc-50">
      {/* Hero */}
      <section className="pt-32 pb-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-4 block">Digital Presence</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-tight mb-6">
            Websites & Apps<br />
            <span className="text-zinc-300">that connect.</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-10">
            Get online presence that works with your POS and AI agents. Everything connected, nothing separate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/254700000000"
              className="px-10 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest"
            >
              Discuss Your Project
            </a>
            <Link
              to="/pos"
              className="px-10 py-4 border border-zinc-200 text-zinc-900 rounded-full font-bold hover:bg-white transition-all text-sm uppercase tracking-widest"
            >
              Get POS First
            </Link>
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-4 block">What We Build</span>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
              Solutions for every business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {appTypes.map((type, idx) => (
              <div key={idx} className="bento-card p-10">
                <span className="text-4xl mb-6 block">{type.icon}</span>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">{type.title}</h3>
                <p className="text-zinc-500 text-lg">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-4 block">Features</span>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
              Built for Kenyan businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white border border-zinc-100 rounded-3xl p-8 hover:border-zinc-900 hover:shadow-xl transition-all">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{feature.title}</h3>
                <p className="text-zinc-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-6 block">Integration</span>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Connected to everything
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                Your website does not sit alone. It connects to your POS for live inventory, to AI agents for customer service, and to cloud for reliable uptime.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center">💳</div>
                  <span className="text-zinc-300">Syncs with POS terminal</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center">🤖</div>
                  <span className="text-zinc-300">Powered by AI agents</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center">☁️</div>
                  <span className="text-zinc-300">Hosted on cloud infrastructure</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/pos" className="bg-zinc-800 rounded-3xl p-8 hover:bg-zinc-700 transition-all">
                <div className="text-2xl font-bold mb-2">POS</div>
                <div className="text-zinc-400 text-sm">Foundation</div>
              </Link>
              <Link to="/agents" className="bg-zinc-800 rounded-3xl p-8 hover:bg-zinc-700 transition-all">
                <div className="text-2xl font-bold mb-2">Agents</div>
                <div className="text-zinc-400 text-sm">Automation</div>
              </Link>
              <Link to="/cloud" className="bg-zinc-800 rounded-3xl p-8 hover:bg-zinc-700 transition-all">
                <div className="text-2xl font-bold mb-2">Cloud</div>
                <div className="text-zinc-400 text-sm">Infrastructure</div>
              </Link>
              <div className="bg-white text-zinc-900 rounded-3xl p-8">
                <div className="text-2xl font-bold mb-2">Apps</div>
                <div className="text-zinc-500 text-sm">You are here</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-6">
            Ready to go online?
          </h2>
          <p className="text-lg text-zinc-500 mb-10">
            Talk to us about your website or app project. We build solutions that connect to your entire business system.
          </p>
          <a
            href="https://wa.me/254700000000"
            className="inline-block px-10 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default WebsitesPage;