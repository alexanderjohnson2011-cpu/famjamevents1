'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function BookPage() {
  const [scriptReady, setScriptReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    w._HB_ = w._HB_ || {};
    w._HB_.pid = '699fa037d3e5330007cabd27';
    setScriptReady(true);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-black text-vice-ink mb-4">
            Book Your Event
          </h1>
          <p className="text-xl text-vice-muted max-w-2xl mx-auto">
            Complete the form below to request your booking. We&apos;ll confirm
            availability and follow up within 24 hours.
          </p>
        </div>

        <div ref={containerRef} className="max-w-4xl mx-auto min-h-[600px]">
          <div className="hb-p-699fa037d3e5330007cabd27-1" />
          <img
            height={1}
            width={1}
            style={{ display: 'none' }}
            src="https://www.honeybook.com/p.png?pid=699fa037d3e5330007cabd27"
            alt=""
          />
        </div>

        {scriptReady && (
          <Script
            src="https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js"
            strategy="lazyOnload"
          />
        )}
      </div>
    </section>
  );
}
