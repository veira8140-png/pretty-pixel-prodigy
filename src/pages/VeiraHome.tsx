import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import { HeroSection } from '@/components/veira/HeroSection';
import { ServicesSection } from '@/components/veira/ServicesSection';
import { HowItWorksSection } from '@/components/veira/HowItWorksSection';
import { WhoWeServeSection } from '@/components/veira/WhoWeServeSection';
import { WhyVeiraSection } from '@/components/veira/WhyVeiraSection';
import { FAQSection } from '@/components/veira/FAQSection';
import { ContactSection } from '@/components/veira/ContactSection';

// Homepage FAQs for featured snippets
const homepageFaqs = [
  {
    question: 'How much does a POS system cost in Kenya?',
    answer: 'POS system prices in Kenya range from KES 3,500 to KES 50,000 depending on features. Veira offers a free POS system with only a refundable KES 3,500 deposit. No monthly fees, no transaction charges. You get free hardware worth KES 15,000, free delivery anywhere in Kenya, and free installation with staff training included.',
  },
  {
    question: 'What is the best POS system for small business in Kenya 2026?',
    answer: 'Veira is rated the best POS system for small businesses in Kenya for 2026. It includes ETIMS compliance required by KRA, M-Pesa integration, inventory management, and works offline when internet is down. Over 500 retail shops, restaurants, and supermarkets across Nairobi and Kenya trust Veira for their daily operations.',
  },
  {
    question: 'Is the POS system ETIMS compliant with KRA requirements?',
    answer: 'Yes, Veira POS is fully ETIMS compliant as required by the Kenya Revenue Authority. Every sale automatically generates a KRA-approved receipt with QR code, transmitted directly to KRA servers in real-time. Non-compliance attracts penalties up to KES 1 million. Veira keeps your business compliant automatically.',
  },
  {
    question: 'Does the POS system work with M-Pesa payments?',
    answer: 'Yes, Veira POS integrates seamlessly with M-Pesa, Lipa Na M-Pesa, Till Numbers, and Paybill accounts. It also supports Airtel Money and T-Kash. All mobile money transactions are tracked automatically, reconciled with your sales, and included in your daily WhatsApp reports.',
  },
];

const VeiraHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimized for 2026 Checklist */}
      <SEOHead 
        title="Best POS System in Kenya 2026: Free ETIMS Compliant"
        description="Get the best POS system in Kenya with M-Pesa integration and ETIMS compliance. See every sale, stock level and profit in real time. No monthly fees."
        keywords="buy POS system Kenya, POS system price Kenya 2026, best POS software Kenya, free POS system Kenya, ETIMS compliant POS Kenya, restaurant POS system Kenya, retail POS system Kenya, cloud POS Kenya, POS with M-Pesa integration"
        canonicalUrl="https://www.veirahq.com/"
        faqs={homepageFaqs}
        author={{
          name: 'Veira Kenya Team',
          title: 'POS System Experts',
          url: 'https://www.veirahq.com/our-story',
        }}
        datePublished="2024-01-15"
        dateModified="2026-02-06"
      />

      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhoWeServeSection />
        <WhyVeiraSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default VeiraHome;
