import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Brain, Bot, Globe, Cloud, Shield } from 'lucide-react';

const services = [
  {
    icon: CreditCard,
    title: 'POS System Kenya',
    description: 'The best affordable POS system for small business in Kenya. Record every sale, accept M-Pesa payments, and track stock automatically with our cloud POS software.',
    features: ['M-Pesa integration', 'Inventory management', 'Daily sales reports', 'Works offline'],
    link: '/pos',
  },
  {
    icon: Brain,
    title: 'Smart Business Tools',
    description: 'Your POS system should help you notice problems early. Get alerts when stock runs low and see unusual sales activity across your retail shop or restaurant.',
    features: ['Low stock alerts', 'Sales pattern analysis', 'Fast/slow item reports', 'Staff performance'],
    link: '/pos',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Digital assistants that handle repetitive work. They reply to customers, send daily reports, and monitor stock levels for Kenyan businesses.',
    features: ['Customer replies', 'Daily reports', 'Stock monitoring', 'Task automation'],
    link: '/agents',
  },
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Many customers check online before they visit. A mobile-friendly website helps customers trust your business and find you on Google.',
    features: ['Mobile friendly', 'Easy contact', 'Product showcase', 'Google visibility'],
    link: '/websites',
  },
  {
    icon: Cloud,
    title: 'Cloud POS System',
    description: 'Cloud-based POS system for restaurants and retail shops in Kenya. Access your data from anywhere, manage multi-location businesses, and grow with confidence.',
    features: ['Secure backup', 'Remote access', 'Multi-location support', 'Automatic updates'],
    link: '/cloud/hosting',
  },
  {
    icon: Shield,
    title: 'ETIMS Compliance',
    description: 'Our POS system is fully ETIMS compliant and integrates directly with KRA. Generate ETIMS invoices automatically with every sale in Nairobi and across Kenya.',
    features: ['KRA integration', 'ETIMS invoices', 'Tax compliance', 'Audit ready'],
    link: '/etims-pos',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Best POS Software Kenya</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
            Complete POS solution for Kenya
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            Buy the best affordable POS system in Kenya. Cloud POS software with M-Pesa integration, inventory management, and ETIMS compliance for retail shops, restaurants, and supermarkets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={service.title}
              className="group bg-card border border-border rounded-lg p-5 sm:p-6 lg:p-8 hover:shadow-elevated hover:border-accent/30 transition-all duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon - brand accent */}
              <div className="w-11 sm:w-12 lg:w-14 h-11 sm:h-12 lg:h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:bg-accent/20 transition-colors duration-200">
                <service.icon className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-accent" />
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
