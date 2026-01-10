import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UseCases: React.FC = () => {
  useEffect(() => {
    document.title = 'Use Cases | Veira';
  }, []);

  const useCases = [
    {
      slug: "restaurant-pos",
      title: "Restaurants & Cafés",
      description: "Table orders, kitchen displays, menu management, and payment processing all in one system.",
      icon: "🍽️",
      features: ["Table management", "Kitchen display", "Menu updates", "Bill splitting"]
    },
    {
      slug: "retail-pos",
      title: "Retail Shops",
      description: "Inventory tracking, barcode scanning, customer loyalty, and multi-branch management.",
      icon: "🏪",
      features: ["Barcode scanning", "Stock alerts", "Customer loyalty", "Multi-branch"]
    },
    {
      slug: "pharmacy-pos",
      title: "Pharmacies",
      description: "Drug inventory, expiry tracking, prescription records, and compliance reporting.",
      icon: "💊",
      features: ["Expiry tracking", "Prescription logs", "Drug inventory", "Compliance"]
    },
    {
      slug: "hardware-pos",
      title: "Hardware Stores",
      description: "Heavy inventory management, bulk sales, customer accounts, and delivery tracking.",
      icon: "🔧",
      features: ["Bulk pricing", "Customer accounts", "Delivery tracking", "Heavy inventory"]
    },
    {
      slug: "salon-pos",
      title: "Salons & Spas",
      description: "Appointment booking, service menus, staff commissions, and customer records.",
      icon: "💇",
      features: ["Appointments", "Staff tracking", "Service menus", "Customer history"]
    },
    {
      slug: "supermarket-pos",
      title: "Supermarkets",
      description: "High-volume checkout, category management, supplier integration, and loss prevention.",
      icon: "🛒",
      features: ["Fast checkout", "Category management", "Supplier links", "Loss prevention"]
    }
  ];

  const benefits = [
    {
      slug: "track-daily-sales",
      title: "Track Daily Sales",
      description: "See every transaction in real time. Know exactly what is selling and what is not.",
      icon: "📊"
    },
    {
      slug: "manage-stock",
      title: "Manage Stock",
      description: "Automatic inventory updates. Get alerts before you run out of popular items.",
      icon: "📦"
    },
    {
      slug: "stay-etims-compliant",
      title: "Stay eTIMS Compliant",
      description: "Every sale recorded correctly for KRA. No manual work needed.",
      icon: "🛡️"
    },
    {
      slug: "reduce-stock-losses",
      title: "Reduce Stock Losses",
      description: "Track inventory in real time and get alerts on missing or expiring items.",
      icon: "📉"
    }
  ];

  return (
    <div className="bg-zinc-50">
      {/* Hero */}
      <section className="pt-32 pb-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-4 block">Use Cases</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-tight mb-6">
            Built for<br />
            <span className="text-zinc-300">your industry.</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-10">
            Veira works differently for restaurants, retail, pharmacies, and service businesses. Here is how we help each one.
          </p>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-4 block">Industries</span>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
              Solutions by business type
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <Link
                key={idx}
                to={`/use-cases/${useCase.slug}`}
                className="bento-card group p-8"
              >
                <span className="text-4xl mb-6 block">{useCase.icon}</span>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{useCase.title}</h3>
                <p className="text-zinc-500 mb-6">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.features.map((feature, fidx) => (
                    <span key={fidx} className="text-xs bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-4 block">Benefits</span>
            <h2 className="text-4xl font-bold tracking-tight">
              What every business gets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-zinc-800/50 border border-zinc-700 rounded-3xl p-8">
                <span className="text-3xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-6">
            Which one is your business?
          </h2>
          <p className="text-lg text-zinc-500 mb-10">
            Talk to us on WhatsApp. We will show you exactly how Veira works for your industry.
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

export default UseCases;