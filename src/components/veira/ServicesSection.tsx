import React from 'react';
import { CreditCard, Brain, Bot, Globe, Cloud, Shield } from 'lucide-react';

const services = [
  {
    icon: CreditCard,
    title: 'POS Systems',
    description: 'Record every sale. Accept M-Pesa, card, and cash payments. Track stock automatically. See sales from anywhere.',
    features: ['M-Pesa integration', 'Real-time stock tracking', 'Sales reports', 'Multi-device support'],
  },
  {
    icon: Brain,
    title: 'Smart Business Tools',
    description: 'Your system should help you notice things early. Get alerts when stock runs low and see unusual sales activity.',
    features: ['Low stock alerts', 'Sales pattern analysis', 'Fast/slow item reports', 'Automated summaries'],
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Digital assistants that handle repetitive work. They reply to customers, send reports, and monitor stock levels.',
    features: ['Customer replies', 'Daily reports', 'Stock monitoring', 'Task automation'],
  },
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Many customers check online before they visit or call. A website helps customers trust your business.',
    features: ['Mobile friendly', 'Easy contact', 'Product showcase', 'Google visibility'],
  },
  {
    icon: Cloud,
    title: 'Cloud Systems',
    description: 'Your data is stored safely online. Access information from anywhere. Manage remotely and grow with confidence.',
    features: ['Secure backup', 'Remote access', 'Multi-location support', 'Automatic updates'],
  },
  {
    icon: Shield,
    title: 'Ongoing Support',
    description: 'You always know who to contact when you need help. We stay with you as your business grows.',
    features: ['Direct support line', 'System updates', 'Training included', 'Regular check-ins'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
            Everything works together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            Veira provides business systems as a managed service. We help you sell, track stock, accept payments, respond to customers, and stay organized without confusion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-11 sm:w-12 lg:w-14 h-11 sm:h-12 lg:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 lg:mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 sm:space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};