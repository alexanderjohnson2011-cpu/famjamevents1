'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { NeonButton } from '@/components/NeonButton';
import { siteConfig } from '@/config/site';

export const MobileStickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t-2 border-neon-cyan shadow-2xl z-40">
      <div className="flex gap-3 p-4">
        <NeonButton variant="primary" asLink href="/book" className="flex-1">
          Book Now
        </NeonButton>
        <NeonButton
          variant="secondary"
          asLink
          href={`tel:${siteConfig.phone}`}
          className="flex-1 flex items-center justify-center gap-2"
        >
          <Phone size={18} />
          Text
        </NeonButton>
      </div>
    </div>
  );
};
