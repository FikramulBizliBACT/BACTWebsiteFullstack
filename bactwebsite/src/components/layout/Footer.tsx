import React from 'react';
import Link from 'next/link';
import { footerContent } from '@/constants';

// Ikon Sosial Media
const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/',
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-24 pb-12 ">
      
      
      <div className="max-w-7xl mt-5 xl:mt-10 md:mt-10 mx-auto px-6 pl-10 md:px-16 md:pl-28 lg:px-32 lg:pl-32">
        
        {/* GRID UTAMA: Tetap 3 kolom */}
        <div className="grid grid-cols-3 gap-4 md:gap-12 lg:gap-16 mb-12 ml-5 sm:ml-5 md:ml-10 items-start">
          
          {/* Kolom 1: Brand */}
          <div className="flex flex-col space-y-6 md:space-y-6 col-span-1.5">
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-bold tracking-tight text-white">Batu Ampar</span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-[#FF6B35] font-semibold leading-tight">
                Container Terminal
              </span>
            </div>
            
            <p className="hidden md:block text-sm leading-relaxed text-slate-400">
              {footerContent.description || "World-class container terminal services with efficiency and safety."}
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-slate-800 p-1.5 md:p-2.5 rounded-full text-slate-400 hover:bg-[#FF6B35] hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="col-span-1 pl-2 md:pl-0">
            <h3 className="text-white font-semibold text-xs md:text-lg mb-3 md:mb-6">
              Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerContent.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[10px] md:text-sm text-slate-400 hover:text-[#FF6B35] transition-colors block truncate"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Contact */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-xs md:text-lg mb-3 md:mb-6">
              Contact
            </h3>
            <ul className="space-y-2 md:space-y-4 text-[10px] md:text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <svg className="hidden md:block w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-tight">Batam, Kepri<br className="md:hidden"/> Indonesia</span>
              </li>
              
              <li className="flex items-center gap-2">
                <svg className="hidden md:block w-5 h-5 text-[#FF6B35] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@bact.com" className="truncate hover:text-white">info@bact.com</a>
              </li>
              
              <li className="flex items-center gap-2">
                <svg className="hidden md:block w-5 h-5 text-[#FF6B35] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-mono truncate">+62 123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-[10px] md:text-xs text-slate-500">
          <p>
            &copy; {currentYear} <span className="text-slate-300 font-medium">PT BACT</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}