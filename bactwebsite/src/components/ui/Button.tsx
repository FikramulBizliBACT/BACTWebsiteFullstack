import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  href, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg';
  const variantStyles = {
    primary: 'bg-[#FF6B35] text-white hover:bg-[#E55A2B]',
    secondary: 'bg-white text-[#FF6B35] border-2 border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}

