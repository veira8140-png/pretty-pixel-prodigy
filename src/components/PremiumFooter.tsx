import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const PremiumFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: 'POS Terminal', href: '/pos' },
    { label: 'AI Agents', href: '/agents' },
    { label: 'Cloud', href: '/cloud/hosting' },
    { label: 'Websites & Apps', href: '/websites' },
  ];

  const resourceLinks = [
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'eTIMS Compliance', href: '/pos/etims' },
    { label: 'Pricing', href: '/pos/pricing' },
  ];

  const companyLinks = [
    { label: 'Our Story', href: '/our-story' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact', href: 'https://wa.me/254755792377', external: true },
  ];

  const industryLinks = [
    { label: 'Restaurants', href: '/pos/for-restaurants' },
    { label: 'Retail', href: '/pos/for-retail' },
    { label: 'Pharmacy', href: '/pos/for-pharmacy' },
    { label: 'Hardware', href: '/pos/for-hardware' },
  ];

  return (
    <footer className="bg-zinc-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
        {/* Top Section - CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 mb-16 sm:mb-20 lg:mb-24 pb-12 sm:pb-16 border-b border-zinc-800">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              Operations that run<br />
              <span className="text-zinc-500">without you.</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              POS systems, AI agents, websites & cloud infrastructure. Built for Kenyan businesses.
            </p>
          </div>
          <a
            href="https://wa.me/254755792377"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-xs sm:text-sm uppercase tracking-widest group w-fit"
          >
            Talk to us
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20">
          <div>
            <h4 className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4 sm:mb-6">
              Product
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm sm:text-base text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4 sm:mb-6">
              Resources
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm sm:text-base text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4 sm:mb-6">
              Industries
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm sm:text-base text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4 sm:mb-6">
              Company
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-sm sm:text-base text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Location */}
            <div className="mt-6 sm:mt-8">
              <p className="text-xs sm:text-sm text-zinc-500">
                Ruprani House, 3rd Floor<br />
                Moktar Daddah St, Nairobi
              </p>
              <a 
                href="tel:+254755792377" 
                className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors mt-2 inline-block"
              >
                +254 755 792 377
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 sm:pt-10 border-t border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-bold tracking-tighter">VEIRA</span>
            <span className="text-[10px] sm:text-xs text-zinc-600 uppercase tracking-widest">Kenya</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center">
            <p className="text-xs sm:text-sm text-zinc-500">
              © {currentYear} Veira. Business operations, done for you.
            </p>
            <p className="text-xs text-zinc-600">
              10% of profits support GBV survivors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
