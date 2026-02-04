import React from 'react';
import { VeiraNavbar } from '@/components/veira/VeiraNavbar';
import { HeroSection } from '@/components/veira/HeroSection';
import { ServicesSection } from '@/components/veira/ServicesSection';
import { HowItWorksSection } from '@/components/veira/HowItWorksSection';
import { WhoWeServeSection } from '@/components/veira/WhoWeServeSection';
import { WhyVeiraSection } from '@/components/veira/WhyVeiraSection';
import { FAQSection } from '@/components/veira/FAQSection';
import { ContactSection } from '@/components/veira/ContactSection';
import { FooterSection } from '@/components/veira/FooterSection';

const VeiraHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <VeiraNavbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhoWeServeSection />
        <WhyVeiraSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default VeiraHome;