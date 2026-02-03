import React from 'react';
import { Link } from 'react-router-dom';

export const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              {/* Orb logo with brand gradient */}
              <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #5A3D7D 0%, #7A59A6 100%)' }}>
                <span className="text-white font-display font-bold text-base sm:text-lg lowercase">v</span>
              </div>
              <span className="font-display font-bold text-lg sm:text-xl lowercase tracking-tight">veira</span>
            </div>
            <p className="text-background/70 max-w-md mb-4 sm:mb-6 text-sm sm:text-base">
              Business systems that keep your business running. We help Kenyan businesses manage sales, stock, and customers with tools that actually work.
            </p>
            <p className="text-xs sm:text-sm text-background/50">
              You focus on your business. We handle the systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="text-background/70 hover:text-background transition-colors duration-micro text-sm sm:text-base"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#how-it-works')}
                  className="text-background/70 hover:text-background transition-colors duration-micro text-sm sm:text-base"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#who-we-serve')}
                  className="text-background/70 hover:text-background transition-colors duration-micro text-sm sm:text-base"
                >
                  Who We Serve
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#why-veira')}
                  className="text-background/70 hover:text-background transition-colors duration-micro text-sm sm:text-base"
                >
                  Why Veira
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-background/70 text-sm sm:text-base">
              <li>+254 755 792 377</li>
              <li>hello@veirahq.com</li>
              <li>Ruprani House, 3rd Floor, Moktar Daddah St, Nairobi</li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-10 sm:mb-12">
          <h4 className="font-display font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Find Us</h4>
          <div className="rounded-lg overflow-hidden h-40 sm:h-48 md:h-64 bg-background/10">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Ruprani+House,Moktar+Daddah+Street,Nairobi,Kenya"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Veira - Ruprani House, Moktar Daddah St, Nairobi"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-background/50">
            © {currentYear} Veira. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-background/50">
            <Link to="/privacy" className="hover:text-background transition-colors duration-micro">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-background transition-colors duration-micro">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
