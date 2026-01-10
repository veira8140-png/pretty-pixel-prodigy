import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AgentsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Agents | Veira';
  }, []);

  const agents = [
    {
      name: "Glenn",
      role: "Sales & Checkout",
      description: "Glenn monitors every transaction, flags discrepancies, and ensures checkout accuracy. No manual reconciliation needed.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "Svan",
      role: "Inventory & Reporting",
      description: "Svan tracks stock levels, alerts you before items run out, and generates reports automatically.",
      color: "bg-green-50 border-green-200"
    },
    {
      name: "Tat",
      role: "Customer Follow-ups",
      description: "Tat manages customer retention, sends follow-ups, and handles routine communication so you don't have to.",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const capabilities = [
    {
      title: "Transaction Monitoring",
      description: "Every sale is checked for accuracy. Discrepancies are flagged before they become problems.",
      icon: "🔍"
    },
    {
      title: "Stock Alerts",
      description: "Get notified when inventory runs low. Never miss a restock opportunity.",
      icon: "📦"
    },
    {
      title: "Automated Reports",
      description: "Daily summaries sent to your WhatsApp. No need to log in or generate reports manually.",
      icon: "📊"
    },
    {
      title: "Customer Retention",
      description: "Automatic follow-ups with customers who haven't returned. Keep your regulars coming back.",
      icon: "👥"
    },
    {
      title: "Expense Tracking",
      description: "Log expenses and get spending insights. Understand where your money goes.",
      icon: "💰"
    },
    {
      title: "Compliance Checks",
      description: "eTIMS compliance monitored automatically. Stay on the right side of KRA.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-4 block">AI Agents</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
            Operations that run<br />
            <span className="text-zinc-500">without you.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Glenn, Svan, and Tat monitor your business around the clock. They handle the routine so you can focus on growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/254700000000"
              className="px-10 py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-sm uppercase tracking-widest"
            >
              Talk to Us
            </a>
            <Link
              to="/pos"
              className="px-10 py-4 border border-zinc-700 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest"
            >
              Get POS First
            </Link>
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-24 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-4 block">Meet the Team</span>
            <h2 className="text-4xl font-bold tracking-tight">
              Three agents. One goal.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.map((agent, idx) => (
              <div key={idx} className="bg-zinc-800/50 border border-zinc-700 rounded-3xl p-10">
                <div className="w-16 h-16 bg-zinc-700 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                  {agent.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold mb-2">{agent.name}</h3>
                <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">{agent.role}</p>
                <p className="text-zinc-400 leading-relaxed">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-4 block">Capabilities</span>
            <h2 className="text-4xl font-bold tracking-tight">
              What they handle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-all">
                <span className="text-3xl mb-4 block">{cap.icon}</span>
                <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
                <p className="text-zinc-500">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-4 block">How It Works</span>
            <h2 className="text-4xl font-bold tracking-tight">
              Set up once. Run forever.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-2">Get Your POS</h3>
              <p className="text-zinc-500">We install the POS system at your business. This is the foundation.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-2">Agents Activate</h3>
              <p className="text-zinc-500">Glenn, Svan, and Tat start monitoring your operations automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-2">Focus on Growth</h3>
              <p className="text-zinc-500">You receive alerts and reports. No daily management required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Ready for automated operations?
          </h2>
          <p className="text-lg text-zinc-400 mb-10">
            Talk to us on WhatsApp. We will set up your POS and activate your AI agents.
          </p>
          <a
            href="https://wa.me/254700000000"
            className="inline-block px-10 py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-sm uppercase tracking-widest"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default AgentsPage;