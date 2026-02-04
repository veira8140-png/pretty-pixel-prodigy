import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Veira and how can it help my business?',
    answer: 'Veira provides business systems that help Kenyan businesses manage sales, stock, customers, and daily operations. Our solutions include POS systems, AI agents, cloud hosting, and custom apps—all designed to make running your business easier.',
  },
  {
    question: 'Is the POS system ETIMS compliant?',
    answer: 'Yes, our POS system is fully ETIMS compliant and integrates directly with KRA for tax reporting. You can generate ETIMS invoices automatically with every sale.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Most businesses are up and running within 1 day. Our team handles the full setup including installation, training, and data migration so you can focus on your customers.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide ongoing 24/7 support via phone, WhatsApp, and email. Our team monitors your systems and proactively helps resolve issues before they affect your business.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Our pricing is clear and predictable with no hidden fees. Contact us for a customized quote based on your business needs. We offer flexible payment plans for Kenyan businesses.',
  },
  {
    question: 'Can I use Veira on my phone or tablet?',
    answer: 'Yes! Our systems work on Android devices, tablets, and computers. You can access your business data from anywhere with an internet connection.',
  },
  {
    question: 'What happens if my internet goes down?',
    answer: 'Our POS system works offline. Your sales are saved locally and automatically sync when your connection is restored. Your data is always safe.',
  },
  {
    question: 'Do you serve businesses outside Nairobi?',
    answer: 'Yes, we serve businesses across Kenya including Mombasa, Kisumu, Nakuru, Eldoret, and other towns. Remote setup and support are available for all locations.',
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We have answers. If you don't find what you're looking for, reach out to us directly.
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
      </div>
    </section>
  );
};
