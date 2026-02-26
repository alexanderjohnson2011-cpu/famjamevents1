import React from 'react';

interface AccentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const AccentSection: React.FC<AccentSectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`accent-section py-16 md:py-24 px-4 md:px-8 ${className}`}>
      {children}
    </section>
  );
};
