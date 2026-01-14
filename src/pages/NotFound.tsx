import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, MessageCircle } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

const NotFound: React.FC = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const popularLinks = [
    { label: 'POS System', href: '/pos', icon: '💳' },
    { label: 'AI Agents', href: '/agents', icon: '🤖' },
    { label: 'Our Story', href: '/our-story', icon: '📖' },
    { label: 'Use Cases', href: '/use-cases', icon: '💼' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
      <SEOHead 
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Explore Veira's POS systems, AI agents, and business solutions for Kenyan businesses."
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl"
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <span className="text-[100px] sm:text-[150px] lg:text-[200px] font-bold tracking-tighter leading-none bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
            404
          </span>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            This page got lost
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-400 mb-8 sm:mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-xs sm:text-sm uppercase tracking-widest"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-zinc-700 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>

        {/* Popular Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs sm:text-sm text-zinc-500 uppercase tracking-widest mb-4 sm:mb-6">
            Or explore these pages
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl hover:border-zinc-600 hover:bg-zinc-800/50 transition-all group"
              >
                <span className="text-xl sm:text-2xl">{link.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Help CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-zinc-800"
        >
          <p className="text-xs sm:text-sm text-zinc-500 mb-3 sm:mb-4">
            Still can't find what you need?
          </p>
          <a
            href="https://wa.me/254755792377"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-300 hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with us on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
