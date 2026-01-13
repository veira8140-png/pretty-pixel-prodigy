import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

interface CloudPageProps {
  variant?: 'hosting' | 'maintenance';
}

const CloudPage: React.FC<CloudPageProps> = ({ variant }) => {
  const { city } = useParams<{ city?: string }>();

  useEffect(() => {
    const title = variant === 'hosting' 
      ? 'Cloud Hosting Kenya' 
      : variant === 'maintenance' 
        ? 'Cloud Maintenance Kenya'
        : 'Cloud Infrastructure | Veira';
    document.title = title;
  }, [variant]);

  const features = [
    {
      title: "Automatic Backups",
      description: "Your data is backed up continuously. Never lose a transaction or customer record.",
      icon: "💾"
    },
    {
      title: "Multi-Location Sync",
      description: "Run multiple branches with one system. Data syncs in real time across all locations.",
      icon: "🔄"
    },
    {
      title: "99.9% Uptime",
      description: "Enterprise-grade infrastructure ensures your systems stay online.",
      icon: "⚡"
    },
    {
      title: "Access Anywhere",
      description: "Check your business from any device. Phone, tablet, or computer.",
      icon: "📱"
    },
    {
      title: "Secure by Default",
      description: "Bank-level encryption protects every transaction and customer detail.",
      icon: "🔐"
    },
    {
      title: "Managed Updates",
      description: "We handle all updates and maintenance. Your system always runs the latest version.",
      icon: "🛠️"
    }
  ];

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      {/* Hero */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 border border-white rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 border border-white rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">Cloud Infrastructure</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight mb-4 sm:mb-6">
            Your data.<br />
            <span className="text-zinc-500">Safe and synced.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0">
            Enterprise-grade cloud infrastructure for Kenyan businesses. We handle the tech so you can focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a
              href="https://wa.me/254700000000"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              Talk to Us
            </a>
            <Link
              to="/pos"
              className="px-8 sm:px-10 py-3 sm:py-4 border border-zinc-700 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              Get POS First
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">Features</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Infrastructure that just works
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-zinc-600 transition-all">
                <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">{feature.icon}</span>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-zinc-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Cloud Works */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 block">How It Works</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
                Cloud included with every POS
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed mb-6 sm:mb-8">
                When you get a Veira POS, cloud infrastructure comes standard. Your data syncs automatically, backups run continuously, and you can access your business from anywhere.
              </p>
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                No extra setup. No additional cost. No IT team required. We manage everything in the background.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">24/7</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Monitoring</div>
              </div>
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">99.9%</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Uptime</div>
              </div>
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">Auto</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Backups</div>
              </div>
              <div className="bg-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">Free</div>
                <div className="text-zinc-400 text-xs sm:text-sm">Included</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-8 sm:mb-10 lg:mb-12">Related Services</h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            <Link to="/pos" className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-zinc-600 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">POS Terminal</h3>
              <p className="text-sm sm:text-base text-zinc-500">The foundation for cloud integration</p>
            </Link>
            <Link to="/agents" className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-zinc-600 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">AI Agents</h3>
              <p className="text-sm sm:text-base text-zinc-500">Automation powered by cloud data</p>
            </Link>
            <Link to="/websites" className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-zinc-600 transition-all sm:col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Websites & Apps</h3>
              <p className="text-sm sm:text-base text-zinc-500">Connected to your cloud system</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
            Ready for reliable infrastructure?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-10 px-4 sm:px-0">
            Get your POS and cloud system set up. We handle everything.
          </p>
          <a
            href="https://wa.me/254700000000"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-xs sm:text-sm uppercase tracking-widest"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default CloudPage;