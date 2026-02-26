'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PricingResult } from '@/config/pricing';

interface MobileEstimateBarProps {
  result: PricingResult | null;
  isReady: boolean;
}

export default function MobileEstimateBar({ result, isReady }: MobileEstimateBarProps) {
  if (!isReady || !result) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-vice-ink/10 shadow-2xl px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="glow-plate glow-plate-gold px-3 py-2 rounded-xl font-black">${result.totalPrice.toLocaleString()}</div>
          <Link href="/book" className="glow-plate glow-plate-gold neon-hover flex-1 py-2.5 rounded-xl text-center font-bold flex items-center justify-center gap-1.5">
            Continue <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <div className="h-20 lg:hidden" />
    </>
  );
}
