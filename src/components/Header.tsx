'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { NeonButton } from './NeonButton';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-neon-cyan shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-neon-cyan">
                FAM JAM
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-neon-magenta font-semibold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-gray-700 hover:text-neon-magenta font-semibold flex items-center gap-2 transition-colors"
              >
                <Phone size={18} />
                {siteConfig.phone}
              </a>
              <NeonButton variant="primary" asLink href="/book">
                Book Now
              </NeonButton>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-neon-magenta transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b-2 border-neon-cyan">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-neon-cyan">
                  FAM JAM
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-6">
                <div className="space-y-1 px-6">
                  {siteConfig.nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 text-lg font-semibold text-gray-700 hover:text-neon-magenta transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="p-6 border-t-2 border-neon-cyan space-y-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 py-3 text-lg font-bold text-gray-700 hover:text-neon-magenta transition-colors"
                >
                  <Phone size={20} />
                  {siteConfig.phone}
                </a>
                <NeonButton
                  variant="primary"
                  asLink
                  href="/book"
                  className="w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Now
                </NeonButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
