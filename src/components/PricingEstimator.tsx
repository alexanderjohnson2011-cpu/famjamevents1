'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Camera, Music, Package } from 'lucide-react';
import {
  BASE_DURATION_HOURS,
  OffsitePackage,
  PricingInputs,
  calculateEstimate,
  defaultPricingInputs,
  offsitePackages,
} from '@/config/pricing';
import StickyEstimatePanel from './StickyEstimatePanel';
import MobileEstimateBar from './MobileEstimateBar';

export default function PricingEstimator() {
  const [inputs, setInputs] = useState<PricingInputs>(defaultPricingInputs);

  const estimate = useMemo(() => calculateEstimate(inputs), [inputs]);

  const packageIcons: Record<OffsitePackage, React.ReactNode> = {
    'dj-only': <Music size={24} />,
    'photo-booth-only': <Camera size={24} />,
    bundle: <Package size={24} />,
  };

  const bookingQuery = new URLSearchParams({
    serviceType: inputs.offsitePackage,
    hours: String(inputs.durationHours),
    basePrice: String(estimate.basePrice),
    extraHours: String(estimate.extraHours),
    totalPrice: String(estimate.totalPrice),
    pageSource: 'pricing',
  }).toString();

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
      <div className="space-y-6">
        <section className="neon-card p-6">
          <h2 className="font-display text-2xl font-black text-vice-ink mb-2">Step 1: Choose package</h2>
          <p className="text-vice-muted text-sm mb-5">All packages are offsite-only and include 3 hours.</p>
          <div className="space-y-3">
            {(Object.keys(offsitePackages) as OffsitePackage[]).map((key) => {
              const pkg = offsitePackages[key];
              const selected = inputs.offsitePackage === key;
              return (
                <button
                  key={key}
                  onClick={() => setInputs((p) => ({ ...p, offsitePackage: key }))}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selected ? 'border-vice-cyan bg-vice-cyan/5 shadow-glow-cyan' : 'border-vice-ink/10 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-vice-ink/10 flex items-center justify-center text-vice-pink">{packageIcons[key]}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-bold text-vice-ink">{pkg.label}</h3>
                        <span className="font-black text-vice-pink">${pkg.base}</span>
                      </div>
                      <p className="text-sm text-vice-muted mt-1">{pkg.description}</p>
                      {pkg.badge && <span className="inline-block mt-2 glow-plate glow-plate-gold px-2 py-0.5 rounded-full text-xs font-bold">{pkg.badge}</span>}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="neon-card p-6">
          <h2 className="font-display text-2xl font-black text-vice-ink mb-2">Step 2: Duration</h2>
          <p className="text-vice-muted text-sm mb-4">{BASE_DURATION_HOURS} hours included. Extra time is optional at $150/hr.</p>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={3}
              max={8}
              step={1}
              value={inputs.durationHours}
              onChange={(e) => setInputs((p) => ({ ...p, durationHours: Number(e.target.value) }))}
              className="w-full"
            />
            <span className="font-black text-vice-ink min-w-[72px] text-right">{inputs.durationHours} hrs</span>
          </div>
        </section>

        <Link href={`/book?${bookingQuery}`} className="glow-plate glow-plate-gold neon-hover w-full block text-center py-4 rounded-xl font-bold text-lg">
          Continue to Booking
        </Link>
      </div>

      <div className="hidden lg:block">
        <StickyEstimatePanel result={estimate} isReady />
      </div>
      <MobileEstimateBar result={estimate} isReady />
    </div>
  );
}
