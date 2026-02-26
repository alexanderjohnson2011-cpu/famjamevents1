'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { PricingResult } from '@/config/pricing';

interface StickyEstimatePanelProps {
  result: PricingResult | null;
  isReady: boolean;
}

function AnimatedNumber({ value, prefix = '$' }: { value: number; prefix?: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current === value) return;

    const start = prevValue.current;
    const end = value;
    const duration = 400;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        prevValue.current = value;
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span>
      {prefix}{displayValue.toLocaleString()}
    </span>
  );
}

export default function StickyEstimatePanel({ result, isReady }: StickyEstimatePanelProps) {
  if (result?.requiresCustomQuote) {
    return (
      <div className="neon-card p-6 sticky top-24">
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-vice-gold/20 flex items-center justify-center mx-auto mb-4">
            <MessageCircle size={28} className="text-vice-gold" />
          </div>
          <h3 className="font-display text-xl font-black text-vice-ink mb-2">
            Custom Quote Needed
          </h3>
          <p className="text-vice-muted text-sm mb-6">
            For events over 80 guests at our venue, we provide personalized quotes.
          </p>
          <Link
            href="/book"
            className="glow-plate glow-plate-gold neon-hover w-full py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="neon-card p-6 sticky top-24">
      <div className="text-center mb-5">
        <h3 className="font-display text-lg font-bold text-vice-ink mb-1">
          Your Estimate
        </h3>
        <p className="text-vice-muted text-xs">Updates as you select options</p>
      </div>

      {isReady && result ? (
        <>
          <div className="glow-plate glow-plate-gold px-5 py-4 rounded-xl text-center mb-5">
            <div className="text-3xl font-black">
              <AnimatedNumber value={result.low} /> &ndash; <AnimatedNumber value={result.high} />
            </div>
          </div>

          {result.savings && (
            <div className="flex items-center justify-center gap-1.5 mb-5">
              <Sparkles size={14} className="text-vice-cyan" />
              <span className="text-sm font-bold text-vice-cyan">
                You save ${result.savings}!
              </span>
            </div>
          )}

          <div className="bg-vice-ink/[0.03] rounded-xl p-4 mb-5 max-h-56 overflow-y-auto">
            <h4 className="font-bold text-vice-ink text-xs mb-3 uppercase tracking-wide">
              Line Items
            </h4>
            <div className="space-y-2">
              {result.lineItems.map((item, i) => (
                <div
                  key={`${item.label}-${i}`}
                  className="flex items-start justify-between text-sm animate-in fade-in slide-in-from-bottom-1 duration-200"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  <span className="text-vice-muted text-xs leading-tight flex-1 pr-2">
                    {item.label}
                  </span>
                  <span className={`font-semibold text-xs whitespace-nowrap ${item.amount < 0 ? 'text-green-600' : 'text-vice-ink'}`}>
                    {item.amount < 0 ? '-' : ''}${Math.abs(item.amount).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/book"
            className="glow-plate glow-plate-gold neon-hover w-full py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2"
          >
            Book Now <ArrowRight size={16} />
          </Link>

          <p className="text-center text-xs text-vice-muted mt-3">
            Final pricing confirmed after consultation
          </p>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="w-12 h-12 rounded-full bg-vice-ink/5 flex items-center justify-center mx-auto mb-4">
            <Sparkles size={20} className="text-vice-muted" />
          </div>
          <p className="text-vice-muted text-sm">
            Select a service type to see your estimate
          </p>
        </div>
      )}
    </div>
  );
}
