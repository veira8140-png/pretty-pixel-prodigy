import React from 'react';
import { Store, UtensilsCrossed, Pill, Wrench, Briefcase, TrendingUp } from 'lucide-react';

const audiences = [
  {
    icon: Store,
    title: 'Retail Shops',
    description: 'From dukas to supermarkets. Track stock, manage payments, and see what sells.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Cafés',
    description: 'Manage orders, track inventory, and serve customers faster.',
  },
  {
    icon: Pill,
    title: 'Pharmacies',
    description: 'Keep accurate records, track expiry dates, and manage prescriptions.',
  },
  {
    icon: Wrench,
    title: 'Hardware Stores',
    description: 'Manage thousands of items with clear stock records and easy sales.',
  },
  {
    icon: Briefcase,
    title: 'Service Businesses',
    description: 'Track appointments, manage customers, and grow your client base.',
  },
  {
    icon: TrendingUp,
    title: 'Growing SMEs',
    description: 'Scale confidently with systems that grow alongside your business.',
  },
];

export const WhoWeServeSection: React.FC = () => {
  return (
    <section id="who-we-serve" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Who We Serve</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Built for real Kenyan businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            If you want clear numbers and fewer headaches, Veira fits. We work with businesses of all sizes across Kenya.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group flex items-start gap-4 bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <audience.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};