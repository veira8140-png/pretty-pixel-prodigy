import React from 'react';
import { MessageSquare, Settings, HeartHandshake } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'We understand your business',
    description: 'First, we learn how your business runs today. What tools you use. What problems you face. What matters most to you.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'We set up the right systems',
    description: 'Next, we set up POS, AI tools, websites, and cloud systems that fit your needs. Everything is handled properly.',
  },
  {
    number: '03',
    icon: HeartHandshake,
    title: 'We support you day to day',
    description: 'Then, we stay with you. You always know who to contact when you need help. We grow with your business.',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">How It Works</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
            Simple. Clear. Reliable.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            Here is how we work with you. No confusion. No surprises.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 lg:top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/30 to-accent/10" />
              )}

              <div className="relative bg-card border border-border rounded-lg p-5 sm:p-6 lg:p-8 text-center hover:shadow-elevated hover:border-accent/30 transition-all duration-standard">
                {/* Number Badge */}
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-6 sm:h-8 accent-gradient text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6 mt-2 sm:mt-4">
                  <step.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
