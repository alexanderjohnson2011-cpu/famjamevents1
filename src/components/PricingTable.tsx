import React from 'react';
import { NeonCard } from '@/components/NeonCard';
import { NeonButton } from '@/components/NeonButton';

interface PricingTier {
  name: string;
  price: number;
  duration: string;
  features: string[];
  bestValue?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

interface PricingTableProps {
  tiers: PricingTier[];
  className?: string;
}

export const PricingTable: React.FC<PricingTableProps> = ({ tiers, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {tiers.map((tier, idx) => (
        <div
          key={idx}
          className={`transform transition-all ${tier.bestValue ? 'md:scale-105' : ''}`}
        >
          <NeonCard variant="light" hoverable className={tier.bestValue ? 'border-neon-magenta border-4' : ''}>
            {tier.bestValue && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-neon-magenta text-white px-4 py-1 rounded-full text-sm font-bold">
                  Best Value
                </span>
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-neon-magenta">${tier.price}</span>
              <p className="text-gray-600 text-sm mt-1">{tier.duration}</p>
            </div>
            <ul className="space-y-3 mb-6">
              {tier.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-start text-sm text-gray-700">
                  <span className="text-neon-cyan mr-3 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <NeonButton
              variant={tier.bestValue ? 'primary' : 'secondary'}
              asLink
              href={tier.ctaHref || '/book'}
              className="w-full text-center"
            >
              {tier.ctaLabel || 'Book Now'}
            </NeonButton>
          </NeonCard>
        </div>
      ))}
    </div>
  );
};
