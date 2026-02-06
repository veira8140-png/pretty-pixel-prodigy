import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 md:pt-16 overflow-hidden">
      {/* Background Image */}
      <img 
        src={heroBg}
        alt="POS System Kenya - Point of Sale Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-background/30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge - brand accent */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Best POS System in Kenya</span>
          </div>

          {/* H1 - Primary keyword at start, clear value proposition */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] sm:leading-tight mb-4 sm:mb-6 animate-fade-up px-2" style={{ animationDelay: '0.2s' }}>
            Best POS System Kenya 2026:{' '}
            <span className="text-accent">Free ETIMS Compliant</span>
          </h1>

          {/* Subheadline - Primary keyword in first sentence, clear benefit, pain point addressed */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-up px-4 sm:px-0" style={{ animationDelay: '0.3s' }}>
            Buy the best cloud POS system in Kenya with free M-Pesa integration and KRA ETIMS compliance. No monthly fees. Perfect for retail shops, restaurants, and supermarkets across Nairobi and Kenya.
          </p>

          {/* CTAs - brand styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold group"
            >
              Get Free POS
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold group border-border hover:border-accent hover:bg-accent/5"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
              See How It Works
            </Button>
          </div>

          {/* Trust Indicators with keywords */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-border animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Trusted POS solution for businesses across Kenya</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 opacity-70">
              <div className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground">Retail POS</div>
              <div className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground">Restaurant POS</div>
              <div className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground">Pharmacy POS</div>
              <div className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground">Supermarket POS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
