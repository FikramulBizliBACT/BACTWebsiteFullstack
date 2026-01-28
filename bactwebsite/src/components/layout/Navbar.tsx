'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/constants';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1400px] mx-5 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:!px-[80px]">
        <div className="flex items-center justify-between h-20 md:h-25 relative">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/icons/bact logo.jpeg"
                alt="ICTSI Logo"
                width={160}
                height={50}
                className="h-8 md:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const isAvailable = item.label === 'Home' || item.label === 'Contact';
              return (
                <Link
                  key={item.label}
                  href={isAvailable ? item.href : '/coming-soon'}
                  className={`text-[16px] xl:text-[20px] font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#DB4511] hover:text-[#F15A29]'
                      : 'text-[#2F1306] hover:text-[#DB4511]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Contact Button - Right */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className="w-[150px] h-[42px] xl:w-[183px] xl:h-[49px] flex items-center justify-center bg-[#F15A29] rounded-[10px] text-[18px] xl:text-[20px] font-extrabold transition-all duration-300 hover:bg-[#DB4511] hover:shadow-lg"
            >
              <p className="text-white text-center whitespace-nowrap font-extrabold leading-[29px]">Contact</p>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#2F1306] hover:text-[#DB4511] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-white/95 flex flex-col items-center justify-center lg:hidden transition-all duration-500 ease-in-out animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-5 text-[#F15A29] hover:text-[#DB4511] w-16 h-16 flex items-center justify-center rounded-full bg-white  transition-colors duration-300"
              aria-label="Close menu"
            >
              <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col items-center w-full mt-10">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const isAvailable = item.label === 'Home' || item.label === 'Contact';
                return (
                  <Link
                    key={item.label}
                    href={isAvailable ? item.href : '/coming-soon'}
                    className={`py-4 text-[22px] font-extrabold w-full text-center tracking-wide transition-colors duration-300 ${
                      isActive
                        ? 'text-[#DB4511]'
                        : 'text-[#2F1306] hover:text-[#DB4511]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-8 w-full flex justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-[#F15A29] text-white rounded-[10px] font-extrabold text-[20px] text-center shadow-lg transition-all duration-300 hover:bg-[#DB4511]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <p className="text-white mx-5 my-2 text-center whitespace-nowrap font-extrabold leading-[29px]">Contact</p>
                </Link>
              </div>
            </nav>
          </div>
        )}
   
      </div>
    </nav>
  );
}

