'use client';

import React from 'react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
}

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ variant = 'primary', size = 'md', children, asLink, href, className, ...props }, ref) => {
    const variantClass = variant === 'primary' ? 'neon-button-primary' : 'neon-button-secondary';
    const sizeClass = {
      sm: 'px-4 py-1.5 text-sm',
      md: 'px-6 py-2.5 text-base',
      lg: 'px-8 py-3 text-lg',
    }[size];

    const baseClass = `${variantClass} ${sizeClass} ${className || ''}`;

    if (asLink && href) {
      return (
        <a href={href} className={baseClass} {...(props as any)}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={baseClass} {...props}>
        {children}
      </button>
    );
  }
);

NeonButton.displayName = 'NeonButton';
