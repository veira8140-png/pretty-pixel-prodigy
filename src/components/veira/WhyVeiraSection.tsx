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
    <section id="why-veira" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Why Veira</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
              Why businesses choose us
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Many businesses have dealt with unfinished software work or unclear costs. A productised service is different. You get fixed features, clear pricing, and support that continues after setup.
            </p>

            {/* Reasons List */}
            <ul className="space-y-3 sm:space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3 sm:w-4 h-3 sm:h-4 text-accent" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-primary/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 xl:p-12">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div className="bg-card border border-border rounded-lg p-4 sm:p-5 lg:p-6 text-center">
                  <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2">24/7</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">System Monitoring</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 sm:p-5 lg:p-6 text-center">
                  <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2">99%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Uptime Guaranteed</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 sm:p-5 lg:p-6 text-center">
                  <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2">1 Day</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Setup Time</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 sm:p-5 lg:p-6 text-center">
                  <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2">100+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Businesses Served</div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-5 sm:mt-6 lg:mt-8 bg-card border border-border rounded-lg p-4 sm:p-5 lg:p-6">
                <p className="text-sm sm:text-base text-muted-foreground italic mb-3 sm:mb-4">
                  "We finally know what is happening in our business. Stock numbers match. Sales are clear. Veira made it simple."
                </p>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 accent-gradient rounded-full flex items-center justify-center">
                    <span className="font-semibold text-white text-sm sm:text-base">JK</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm sm:text-base">James Kariuki</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Retail Shop Owner, Nairobi</div>
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
