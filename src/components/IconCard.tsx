import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconCardProps {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
  className?: string;
}

export const IconCard: React.FC<IconCardProps> = ({ icon, title, description, className = '' }) => {
  const IconComponent = (LucideIcons as any)[icon];

  if (!IconComponent) {
    return null;
  }

  return (
    <div className={`neon-card text-center ${className}`}>
      <div className="flex justify-center mb-4">
        <IconComponent className="w-12 h-12 text-neon-magenta" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
};
