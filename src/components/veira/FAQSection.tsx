import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How much does a POS system cost in Kenya?',
    answer: 'Our POS system pricing in Kenya starts from KES 3,500 as a refundable deposit. We offer affordable POS solutions for small businesses with no hidden fees. The cost includes installation, training, and ongoing support. Contact us for a customized quote based on your specific retail or restaurant needs.',
  },
  {
    question: 'What is the best POS system for small business in Kenya?',
    answer: 'Veira is rated as one of the best POS systems for small businesses in Kenya. Our cloud-based POS software includes inventory management, M-Pesa integration, ETIMS compliance, and works offline. Perfect for retail shops, restaurants, supermarkets, and pharmacies across Nairobi and Kenya.',
  },
  {
    question: 'Is the POS system ETIMS compliant for KRA?',
    answer: 'Yes, our POS system is fully ETIMS compliant and integrates directly with KRA for tax reporting. You can generate ETIMS invoices automatically with every sale. This ensures your business stays compliant with Kenyan tax regulations and avoids penalties.',
  },
  {
    question: 'Does the POS system have M-Pesa integration?',
    answer: 'Yes! Our POS system features seamless M-Pesa integration for Kenya. Accept mobile payments, track transactions, and reconcile your M-Pesa sales automatically. This makes it the ideal POS solution for Kenyan businesses that rely on mobile money.',
  },
  {
    question: 'Does the POS work offline in Kenya?',
    answer: 'Absolutely! Our POS system works offline, which is crucial for businesses in Kenya where internet connectivity can be unreliable. Your sales are saved locally and automatically sync when your connection is restored. Your data is always safe and secure.',
  },
  {
    question: 'What POS system features do you offer?',
    answer: 'Our cloud POS system Kenya includes: inventory management, sales tracking, customer management, staff management, daily sales reports, receipt printing, barcode scanning, M-Pesa integration, ETIMS compliance, and multi-location support. All features are included in our affordable pricing.',
  },
  {
    question: 'Can I use the mobile POS on my phone or tablet?',
    answer: 'Yes! Our mobile POS Kenya solution works on Android devices, tablets, and computers. You can manage your retail shop, restaurant, or supermarket from anywhere. The wireless POS machine is portable and perfect for businesses on the go.',
  },
  {
    question: 'Do you serve businesses outside Nairobi?',
    answer: 'Yes, we are POS system suppliers across all of Kenya including Mombasa, Kisumu, Nakuru, Eldoret, Thika, and other towns. We offer remote setup, installation, and 24/7 support for all locations. Buy POS system Kenya from us regardless of your location.',
  },
];

// Generate FAQ Schema for SEO
const generateFAQSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const FAQSection: React.FC = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema())}
        </script>
      </Helmet>
      
      <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">
              POS System Kenya FAQ
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about buying the best POS system in Kenya. From pricing to features, we've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-4 sm:px-6 data-[state=open]:border-accent/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:no-underline py-4 sm:py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Internal linking for SEO */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center mb-4">
              Learn more about our POS solutions:
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a href="/pos" className="text-sm text-accent hover:underline">POS System Kenya</a>
              <span className="text-muted-foreground">•</span>
              <a href="/pos/nairobi" className="text-sm text-accent hover:underline">POS Nairobi</a>
              <span className="text-muted-foreground">•</span>
              <a href="/pos/for-restaurants" className="text-sm text-accent hover:underline">Restaurant POS</a>
              <span className="text-muted-foreground">•</span>
              <a href="/pos/for-retail" className="text-sm text-accent hover:underline">Retail POS</a>
              <span className="text-muted-foreground">•</span>
              <a href="/etims-pos" className="text-sm text-accent hover:underline">ETIMS POS</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
