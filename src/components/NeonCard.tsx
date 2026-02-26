'use client';

import React from 'react';

interface NeonCardProps {
  variant?: 'light' | 'dark';
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const NeonCard: React.FC<NeonCardProps> = ({
  variant = 'light',
  children,
  className = '',
  hoverable = true,
}) => {
  const baseClass = variant === 'dark' ? 'neon-card-dark' : 'neon-card';
  const hoverClass = hoverable ? '' : 'hover:shadow-none';

  return <div className={`${baseClass} ${hoverClass} ${className}`}>{children}</div>;
};
