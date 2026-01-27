import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  color?: 'orange' | 'white';
}

export default function SectionTitle({ 
  children, 
  className = '',
  color = 'orange' 
}: SectionTitleProps) {
  const colorStyles = {
    orange: 'text-[#FF6B35]',
    white: 'text-white',
  };

  return (
    <h2 className={`text-4xl md:text-5xl font-bold ${colorStyles[color]} ${className}`}>
      {children}
    </h2>
  );
}

