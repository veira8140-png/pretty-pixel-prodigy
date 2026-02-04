import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const VeiraNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'POS', href: '/pos' },
    { label: 'Agents', href: '/agents' },
    { label: 'Apps', href: '/websites' },
    { label: 'Cloud', href: '/cloud/hosting' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Our Story', href: '/our-story' },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Purple Orb + wordmark */}
          <Link to="/" className="flex items-center gap-2">
            {/* Purple sphere/orb */}
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center orb-state-idle"
              style={{ background: 'linear-gradient(135deg, #5A3D7D 0%, #7A59A6 100%)' }}
            />
            <span className="font-display font-bold text-xl text-foreground lowercase tracking-tight">veira</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              Get Free POS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              onClick={scrollToContact}
              className="w-full mt-4 bg-accent text-accent-foreground font-semibold"
            >
              Get Free POS
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
