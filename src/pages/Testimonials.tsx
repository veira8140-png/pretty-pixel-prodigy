import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  useEffect(() => {
    document.title = 'Testimonials | Veira';
  }, []);

  const testimonials = [
    {
      id: "pos-001",
      name: "Grace M.",
      business_type: "Restaurant",
      city: "Nairobi",
      product_used: ["POS", "AI Agents"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
      quote: "Before Veira, closing the day took over an hour. Now it takes five minutes. The agents catch errors I would never notice."
    },
    {
      id: "pos-002",
      name: "James K.",
      business_type: "Retail Shop",
      city: "Mombasa",
      product_used: ["POS", "Cloud"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      quote: "I run three shops now. I can see all of them from my phone. Stock levels, sales, everything synced in real time."
    },
    {
      id: "agent-003",
      name: "Mary W.",
      business_type: "Pharmacy",
      city: "Nakuru",
      product_used: ["POS", "AI Agents"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
      quote: "eTIMS compliance was stressing me. Veira handles it automatically. Every sale recorded correctly without extra work."
    },
    {
      id: "web-004",
      name: "Peter O.",
      business_type: "Hardware Store",
      city: "Kisumu",
      product_used: ["POS", "Website"],
      image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?auto=format&fit=crop&q=80&w=400&h=400",
      quote: "Our website shows live stock from the POS. Customers check online before visiting. Less wasted trips, more satisfied customers."
    },
    {
      id: "app-005",
      name: "Susan N.",
      business_type: "Salon",
      city: "Kiambu",
      product_used: ["Booking App"],
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=400",
      quote: "Our booking app reduced missed appointments. Clients like the convenience and I do not have to manage calls all day."
    },
    {
      id: "cloud-006",
      name: "John M.",
      business_type: "Supermarket",
      city: "Eldoret",
      product_used: ["POS", "Cloud", "AI Agents"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      quote: "The AI agents send me daily summaries. I know exactly what happened without asking anyone. Operations run even when I am away."
    }
  ];

  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-tight mb-6">
            Stories of<br />
            <span className="text-zinc-300">growth.</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            See how Kenyan businesses use Veira POS, AI agents, and business systems to grow revenue, reduce losses, and simplify operations.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div 
                key={t.id} 
                className="bento-card group flex flex-col justify-between min-h-[380px] p-10 bg-white"
              >
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <img 
                      src={t.image} 
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-zinc-900">{t.name}</h3>
                      <p className="text-sm text-zinc-500">{t.business_type} • {t.city}</p>
                    </div>
                  </div>
                  <blockquote className="text-xl text-zinc-700 leading-relaxed font-medium">
                    "{t.quote}"
                  </blockquote>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-100">
                  <div className="flex flex-wrap gap-2">
                    {t.product_used.map((product, idx) => (
                      <span key={idx} className="text-xs bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Ready to write your story?
          </h2>
          <p className="text-lg text-zinc-400 mb-10">
            Join hundreds of Kenyan businesses using Veira to simplify operations.
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
              Get Free POS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;