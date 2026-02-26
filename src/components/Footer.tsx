import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-vice-night star-speckle text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-block glow-plate glow-plate-pink neon-hover px-8 py-4 rounded-xl text-xl font-bold mb-3"
          >
            TEXT OR CALL {siteConfig.phone}
          </a>
          <p className="text-white/70 text-sm">
            Serving {siteConfig.serviceArea}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Image
              src="/fam-jam-events-logo-transparent.webp"
              alt="Fam Jam Events"
              width={600}
              height={204}
              className="h-42 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-glow-cyan text-vice-cyan">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-vice-pink transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-glow-pink text-vice-pink">Connect</h4>
            <div className="flex gap-4">
              {siteConfig.socials.map((social) => {
                const IconComponent = (LucideIcons as any)[social.icon];
                return IconComponent ? (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-plate glow-plate-purple neon-hover w-12 h-12 flex items-center justify-center rounded-xl"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Fam Jam Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
