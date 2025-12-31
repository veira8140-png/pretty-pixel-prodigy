import React from 'react';
import { Check } from 'lucide-react';

const reasons = [
  'Pricing is clear and predictable',
  'Support is ongoing, not just at setup',
  'Systems work together as one',
  'Setup is handled properly by experts',
  'You focus on customers, we handle systems',
  'Built specifically for Kenyan businesses',
];

export const WhyVeiraSection: React.FC = () => {
  return (
    <section id="why-veira" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Veira</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Why businesses choose us
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Many businesses have dealt with unfinished software work or unclear costs. A productised service is different. You get fixed features, clear pricing, and support that continues after setup.
            </p>

            {/* Reasons List */}
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-3xl p-8 lg:p-12">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="font-display text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">System Monitoring</div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="font-display text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="font-display text-4xl font-bold text-accent mb-2">1 Day</div>
                  <div className="text-sm text-muted-foreground">Setup Time</div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="font-display text-4xl font-bold text-accent mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Businesses Served</div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 bg-card border border-border rounded-2xl p-6">
                <p className="text-muted-foreground italic mb-4">
                  "We finally know what is happening in our business. Stock numbers match. Sales are clear. Veira made it simple."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">JK</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">James Kariuki</div>
                    <div className="text-sm text-muted-foreground">Retail Shop Owner, Nairobi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};