'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PricingResult } from '@/config/pricing';

interface StickyEstimatePanelProps {
  result: PricingResult | null;
  isReady: boolean;
}

export default function StickyEstimatePanel({ result, isReady }: StickyEstimatePanelProps) {
  return (
    <div className="neon-card p-6 sticky top-24">
      <h3 className="font-display text-lg font-bold text-vice-ink mb-1 text-center">Your Estimate</h3>
      <p className="text-vice-muted text-xs text-center mb-5">Quote-first booking, no payment collected here.</p>

      {isReady && result ? (
        <>
          <div className="glow-plate glow-plate-gold px-5 py-4 rounded-xl text-center mb-4">
            <div className="text-3xl font-black">${result.total.toLocaleString()}</div>
          </div>

          {result.savings && (
            <div className="flex items-center justify-center gap-1.5 mb-4">
              <Sparkles size={14} className="text-vice-cyan" />
              <span className="text-sm font-bold text-vice-cyan">Bundle savings: ${result.savings}</span>
            </div>
          )}

          <div className="bg-vice-ink/[0.03] rounded-xl p-4 mb-5 space-y-2">
            {result.lineItems.map((item, i) => (
              <div key={`${item.label}-${i}`} className="flex justify-between text-sm">
                <span className="text-vice-muted">{item.label}</span>
                <span className="font-semibold text-vice-ink">${item.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>

          <Link href="/book" className="glow-plate glow-plate-gold neon-hover w-full py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2">
            Continue to Booking <ArrowRight size={16} />
          </Link>
        </>
      ) : (
        <p className="text-center text-vice-muted text-sm">Select your package to preview total.</p>
      )}
    </div>
  );
}
