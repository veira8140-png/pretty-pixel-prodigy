import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'POS', url: '/pos' },
    { label: 'Agents', url: '/agents' },
    { label: 'Cloud', url: '/cloud' },
    { label: 'Apps', url: '/websites' },
    { label: 'Use Cases', url: '/use-cases' },
    { label: 'Our Story', url: '/our-story' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter">VEIRA</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.url}
                  to={link.url}
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:text-zinc-900 ${
                    location.pathname === link.url ? 'text-zinc-900' : 'text-zinc-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-6 py-2.5 bg-zinc-900 text-white rounded-full text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-zinc-800 transition-all"
              >
                Talk to us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100 py-6 px-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.url}
                  to={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-widest py-2 ${
                    location.pathname === link.url ? 'text-zinc-900' : 'text-zinc-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-zinc-900 text-white rounded-full text-sm uppercase tracking-widest font-bold text-center"
              >
                Talk to us
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-white border-t border-zinc-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.3em] mb-6">Product</h4>
              <div className="flex flex-col space-y-3 text-sm font-medium">
                <Link to="/pos" className="text-zinc-600 hover:text-zinc-900 transition-colors">POS Terminal</Link>
                <Link to="/agents" className="text-zinc-600 hover:text-zinc-900 transition-colors">AI Agents</Link>
                <Link to="/cloud" className="text-zinc-600 hover:text-zinc-900 transition-colors">Cloud Nodes</Link>
                <Link to="/websites" className="text-zinc-600 hover:text-zinc-900 transition-colors">Websites & Apps</Link>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.3em] mb-6">Use Cases</h4>
              <div className="flex flex-col space-y-3 text-sm font-medium">
                <Link to="/use-cases" className="text-zinc-600 hover:text-zinc-900 transition-colors">All Use Cases</Link>
                <Link to="/pos/for/restaurants" className="text-zinc-600 hover:text-zinc-900 transition-colors">Restaurants</Link>
                <Link to="/pos/for/retail" className="text-zinc-600 hover:text-zinc-900 transition-colors">Retail Shops</Link>
                <Link to="/pos/for/pharmacy" className="text-zinc-600 hover:text-zinc-900 transition-colors">Pharmacies</Link>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.3em] mb-6">Company</h4>
              <div className="flex flex-col space-y-3 text-sm font-medium">
                <Link to="/our-story" className="text-zinc-600 hover:text-zinc-900 transition-colors">Our Story</Link>
                <Link to="/testimonials" className="text-zinc-600 hover:text-zinc-900 transition-colors">Testimonials</Link>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.3em] mb-6">Contact</h4>
              <div className="flex flex-col space-y-3 text-sm font-medium">
                <a href="https://wa.me/254700000000" className="text-zinc-600 hover:text-zinc-900 transition-colors">WhatsApp</a>
                <a href="mailto:hello@veira.co.ke" className="text-zinc-600 hover:text-zinc-900 transition-colors">hello@veira.co.ke</a>
                <span className="text-zinc-600">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tighter">VEIRA</span>
            </div>
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Veira. Business operations, done for you.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;