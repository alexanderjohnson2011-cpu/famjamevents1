'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronUp, ChevronDown, MessageCircle, Sparkles, X } from 'lucide-react';
import { PricingResult } from '@/config/pricing';

interface MobileEstimateBarProps {
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

export default function MobileEstimateBar({ result, isReady }: MobileEstimateBarProps) {
  const [expanded, setExpanded] = useState(false);

  if (result?.requiresCustomQuote) {
    return (
      <>
        {expanded && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setExpanded(false)}
          />
        )}
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
          <div
            className={`bg-white border-t border-vice-ink/10 shadow-2xl transition-all duration-300 ${
              expanded ? 'rounded-t-3xl' : ''
            }`}
          >
            {expanded && (
              <div className="p-6 pb-2">
                <button
                  onClick={() => setExpanded(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-vice-ink/5 text-vice-muted hover:bg-vice-ink/10"
                >
                  <X size={18} />
                </button>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-vice-gold/20 flex items-center justify-center mx-auto mb-3">
                    <MessageCircle size={24} className="text-vice-gold" />
                  </div>
                  <h3 className="font-display text-lg font-black text-vice-ink mb-2">
                    Custom Quote Needed
                  </h3>
                  <p className="text-vice-muted text-sm mb-4">
                    For events over 80 guests at our venue, we provide personalized quotes.
                  </p>
                </div>
              </div>
            )}
            <div className="px-4 py-3 flex items-center gap-3">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 flex-1"
              >
                <div className="flex items-center gap-1.5">
                  <MessageCircle size={18} className="text-vice-gold" />
                  <span className="font-bold text-vice-ink">Custom Quote</span>
                </div>
                {expanded ? <ChevronDown size={18} className="text-vice-muted" /> : <ChevronUp size={18} className="text-vice-muted" />}
              </button>
              <Link
                href="/book"
                className="glow-plate glow-plate-gold neon-hover px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-1.5"
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
        <div className="h-20 lg:hidden" />
      </>
    );
  }

  if (!isReady || !result) {
    return (
      <>
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
          <div className="bg-white border-t border-vice-ink/10 shadow-2xl px-4 py-3">
            <div className="flex items-center justify-center gap-2 text-vice-muted">
              <Sparkles size={16} />
              <span className="text-sm">Select options to see estimate</span>
            </div>
          </div>
        </div>
        <div className="h-16 lg:hidden" />
      </>
    );
  }

  return (
    <>
      {expanded && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setExpanded(false)}
        />
      )}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div
          className={`bg-white border-t border-vice-ink/10 shadow-2xl transition-all duration-300 ${
            expanded ? 'rounded-t-3xl' : ''
          }`}
        >
          {expanded && (
            <div className="p-5 pb-2 max-h-[60vh] overflow-y-auto">
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-vice-ink/5 text-vice-muted hover:bg-vice-ink/10"
              >
                <X size={18} />
              </button>
              <h3 className="font-display text-lg font-bold text-vice-ink mb-4">
                Estimate Breakdown
              </h3>

              {result.savings && (
                <div className="flex items-center gap-1.5 mb-4 p-2 bg-vice-cyan/10 rounded-lg">
                  <Sparkles size={14} className="text-vice-cyan" />
                  <span className="text-sm font-bold text-vice-cyan">
                    You save ${result.savings}!
                  </span>
                </div>
              )}

              <div className="space-y-2.5 mb-4">
                {result.lineItems.map((item, i) => (
                  <div
                    key={`${item.label}-${i}`}
                    className="flex items-start justify-between"
                  >
                    <span className="text-vice-muted text-sm leading-tight flex-1 pr-3">
                      {item.label}
                    </span>
                    <span className={`font-semibold text-sm whitespace-nowrap ${item.amount < 0 ? 'text-green-600' : 'text-vice-ink'}`}>
                      {item.amount < 0 ? '-' : ''}${Math.abs(item.amount).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-vice-muted text-center">
                Final pricing confirmed after consultation
              </p>
            </div>
          )}

          <div className="px-4 py-3 flex items-center gap-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 flex-1 min-w-0"
            >
              <div className="glow-plate glow-plate-gold px-3 py-1.5 rounded-lg">
                <span className="font-black text-sm">
                  <AnimatedNumber value={result.low} /> - <AnimatedNumber value={result.high} />
                </span>
              </div>
              <span className="text-xs text-vice-muted truncate">
                {result.lineItems.length} item{result.lineItems.length !== 1 ? 's' : ''}
              </span>
              {expanded ? <ChevronDown size={18} className="text-vice-muted flex-shrink-0" /> : <ChevronUp size={18} className="text-vice-muted flex-shrink-0" />}
            </button>
            <Link
              href="/book"
              className="glow-plate glow-plate-gold neon-hover px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-1.5 flex-shrink-0"
            >
              Book <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-20 lg:hidden" />
    </>
  );
}
