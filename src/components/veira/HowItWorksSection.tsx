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
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Simple. Clear. Reliable.
          </h2>
          <p className="text-lg text-muted-foreground">
            Here is how we work with you. No confusion. No surprises.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
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