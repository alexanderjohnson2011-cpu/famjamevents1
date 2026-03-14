'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselSlide {
  src: string;
  alt: string;
  caption?: string;
  subcaption?: string;
}

interface HighlightCarouselProps {
  slides: CarouselSlide[];
  intervalMs?: number;
}

export function HighlightCarousel({ slides, intervalMs = 4500 }: HighlightCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, intervalMs);
    return () => clearInterval(timer);
  }, [next, paused, intervalMs]);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
      style={{ aspectRatio: '16/7' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          aria-hidden={idx !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="(max-width: 768px) 100vw, 1152px"
          />
          {/* Bottom gradient for caption legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          {(slide.caption || slide.subcaption) && (
            <div className="absolute bottom-6 left-6 right-16 z-20">
              {slide.caption && (
                <p className="text-white font-display text-2xl md:text-3xl font-black text-glow-pink drop-shadow-lg mb-1">
                  {slide.caption}
                </p>
              )}
              {slide.subcaption && (
                <p className="text-white/80 text-sm md:text-base drop-shadow">
                  {slide.subcaption}
                </p>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-vice-cyan/80 text-white p-3 rounded-full transition-all z-20 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-vice-pink/80 text-white p-3 rounded-full transition-all z-20 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 right-6 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? 'bg-vice-cyan w-6 h-2'
                : 'bg-white/50 w-2 h-2 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
