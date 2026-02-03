import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 md:pt-16 overflow-hidden">
      {/* Background Pattern - using brand accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.06)_0%,transparent_50%)]" />
      
      {/* Floating Orb - decorative brand element */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent-glow)) 100%)',
          filter: 'blur(1px)',
        }}
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-[5%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full opacity-15 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent-glow)) 100%)',
          filter: 'blur(1px)',
        }}
        animate={{
          y: [0, 10, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge - brand accent */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Built for Kenyan Businesses</span>
          </div>

          {/* Headline - Playfair Display (marketing-headline class) */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] sm:leading-tight mb-4 sm:mb-6 animate-fade-up px-2" style={{ animationDelay: '0.2s' }}>
            Business systems that keep your business{' '}
            <span className="text-accent">running</span>
          </h1>

          {/* Subheadline - DM Sans body text */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-up px-4 sm:px-0" style={{ animationDelay: '0.3s' }}>
            Running a business is hard work. Your systems should make it easier. We help Kenyan businesses manage sales, stock, customers, and daily operations using tools that actually work.
          </p>

          {/* CTAs - brand styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold group"
            >
              Get Started
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

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-border animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Trusted by businesses across Kenya</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 opacity-60">
              <div className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground">Retail</div>
              <div className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground">Restaurants</div>
              <div className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground">Pharmacies</div>
              <div className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground">Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
