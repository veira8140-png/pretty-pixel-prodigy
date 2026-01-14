import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FloatingChatbot } from './AIChatbot';
import { PremiumFooter } from './PremiumFooter';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between h-14 sm:h-16 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tighter font-display">VEIRA</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.url}
                  to={link.url}
                  className={`text-[10px] lg:text-[11px] uppercase tracking-[0.15em] lg:tracking-[0.2em] font-semibold transition-all hover:text-zinc-900 ${
                    location.pathname === link.url ? 'text-zinc-900' : 'text-zinc-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/254755792377"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 lg:ml-4 px-4 lg:px-6 py-2 lg:py-2.5 bg-zinc-900 text-white rounded-full text-[10px] lg:text-[11px] uppercase tracking-[0.1em] lg:tracking-[0.15em] font-bold hover:bg-zinc-800 transition-all"
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
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100 py-4 sm:py-6 px-4 sm:px-6">
            <div className="flex flex-col space-y-3 sm:space-y-4">
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
                href="https://wa.me/254755792377"
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

      <main className="flex-1 pt-14 sm:pt-16">{children}</main>

      <PremiumFooter />

      {/* Floating AI Chatbot */}
      <FloatingChatbot />
    </div>
  );
};

export default Layout;
