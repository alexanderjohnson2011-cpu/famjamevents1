'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';

interface CarouselItem {
  src?: string;
  alt: string;
  label: string;
}

interface GalleryCarouselProps {
  items: CarouselItem[];
  className?: string;
}

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ items, className = '' }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + items.length) % items.length);
  const next = () => setCurrent((current + 1) % items.length);

  if (!items.length) return null;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden">
        <ImageWithFallback
          src={items[current].src}
          alt={items[current].alt}
          width={1200}
          height={675}
          fallbackLabel={items[current].label}
          fill
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? 'bg-neon-magenta w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
