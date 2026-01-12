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
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">V</span>
              </div>
              <span className="font-display font-semibold text-xl">Veira</span>
            </div>
            <p className="text-background/70 max-w-md mb-6">
              Business systems that keep your business running. We help Kenyan businesses manage sales, stock, and customers with tools that actually work.
            </p>
            <p className="text-sm text-background/50">
              You focus on your business. We handle the systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#how-it-works')}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#who-we-serve')}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Who We Serve
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#why-veira')}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Why Veira
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li>+254 700 000 000</li>
              <li>hello@veira.co.ke</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h4 className="font-display font-semibold mb-4">Find Us</h4>
          <div className="rounded-xl overflow-hidden h-48 md:h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176214447727!2d36.82115!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22ba7f4d3%3A0x4c7b7f2b3c4d5e6f!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Veira Business Location"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Veira. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};