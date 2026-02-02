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
    <section id="who-we-serve" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Who We Serve</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
            Built for real Kenyan businesses
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            If you want clear numbers and fewer headaches, Veira fits. We work with businesses of all sizes across Kenya.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group flex items-start gap-3 sm:gap-4 bg-card border border-border rounded-lg p-4 sm:p-5 lg:p-6 hover:border-accent/30 hover:shadow-soft transition-all duration-standard"
            >
              <div className="w-10 sm:w-11 lg:w-12 h-10 sm:h-11 lg:h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-micro">
                <audience.icon className="w-5 sm:w-5 lg:w-6 h-5 sm:h-5 lg:h-6 text-accent" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-0.5 sm:mb-1">
                  {audience.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
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
