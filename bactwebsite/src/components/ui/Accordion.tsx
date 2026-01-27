'use client';

import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-medium text-gray-800">{title}</span>
        <span className="text-2xl text-[#FF6B35] font-bold ml-4 flex-shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-600 leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
}

