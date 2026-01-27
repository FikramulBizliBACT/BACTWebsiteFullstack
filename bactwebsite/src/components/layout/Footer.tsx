import React from 'react';
import Link from 'next/link';
import { footerContent } from '@/constants';

export default function Footer() {
  return (
    <footer className="relative bg-[#2B1810] z-20 text-white" style={{ marginTop: 0, marginBottom: 0 }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-8 md:py-12" style={{ marginBottom: 0 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Section - Description */}
          <div>
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              {footerContent.description}
            </p>
          </div>

          {/* Right Section - Links */}
          <div className="flex flex-col md:items-end">
            <nav className="flex flex-wrap gap-3 sm:gap-4 md:gap-6">
              {footerContent.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm md:text-base text-gray-300 hover:text-[#FF6B35] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700 text-center">
          <p className="text-xs md:text-sm text-gray-400">{footerContent.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

