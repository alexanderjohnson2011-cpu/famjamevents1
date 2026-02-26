'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  width: number;
  height: number;
  fallbackLabel: string;
  className?: string;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  width,
  height,
  fallbackLabel,
  className = '',
  fill,
  objectFit = 'cover',
}) => {
  const [isError, setIsError] = useState(!src);

  if (isError || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-neon-magenta/20 to-neon-cyan/20 border-2 border-dashed border-neon-cyan rounded-lg flex items-center justify-center ${className}`}
        style={{ width: !fill ? width : undefined, height: !fill ? height : undefined }}
      >
        <div className="text-center p-4">
          <div className="text-neon-magenta text-4xl mb-2">□</div>
          <p className="text-gray-600 font-medium text-sm">{fallbackLabel}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      onError={() => setIsError(true)}
      className={className}
      style={fill ? { objectFit } : undefined}
    />
  );
};
