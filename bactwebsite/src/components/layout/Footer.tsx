import React from 'react';
import Link from 'next/link';
import { footerContent } from '@/constants';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

// Ikon Sosial Media
const socialLinks = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    icon: Twitter,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: Linkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/',
    icon: Github,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-300 relative">
      {/* Top decorative line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20 mb-5 sm:mb-5 md:mb-10  ">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-3 mt-5 sm:mt-5 md:mt-10 ml-2 sm:ml-5 gap-4 sm:gap-6 md:gap-10 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="col-span-1 ml-2 sm:ml-5">
            <div className="flex flex-col space-y-2 sm:space-y-3 mb-3 sm:mb-4">
              <div>
                <h2 className="text-xs sm:text-sm md:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                  Batu Ampar
                </h2>
                <p className="text-[9px] sm:text-xs md:text-sm uppercase tracking-widest text-orange-500 font-semibold">
                  Container Terminal
                </p>
              </div>
              <p className="text-[9px] sm:text-xs md:text-sm text-slate-400 leading-relaxed">
                Modernizing port operations for a sustainable future.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-slate-800/50 p-1 sm:p-1.5 md:p-2.5 rounded-lg text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-300 group"
                  >
                    <Icon className="w-2.5 sm:w-3.5 md:w-5 h-2.5 sm:h-3.5 md:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-[10px] sm:text-xs md:text-lg mb-2 sm:mb-3 md:mb-6 flex items-center gap-2">
              <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
              <span>Navigation</span>
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 md:space-y-3">
              {footerContent.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[9px] sm:text-xs md:text-sm text-slate-400 hover:text-orange-500 transition-colors group flex items-center gap-2"
                  >
                    <span className="w-1 h-0.5 bg-orange-500/0 group-hover:bg-orange-500 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        

          {/* Column 3: Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-[10px] sm:text-xs md:text-lg mb-2 sm:mb-3 md:mb-6 flex items-center gap-2">
              <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
              <span>Get in Touch</span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-4">
              <li className="flex items-start gap-1.5 sm:gap-2 md:gap-3 text-[9px] sm:text-xs md:text-sm">
                <MapPin className="w-2.5 sm:w-3.5 md:w-5 h-2.5 sm:h-3.5 md:h-5 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-slate-400">Batam, Kepri ,Indonesia</span>
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-[9px] sm:text-xs md:text-sm">
                <Mail className="w-2.5 sm:w-3.5 md:w-5 h-2.5 sm:h-3.5 md:h-5 text-orange-500 shrink-0" />
                <a href="mailto:info@bact.com" className="text-slate-400 hover:text-orange-500 transition-colors break-all">
                  info@bact.com
                </a>
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-[9px] sm:text-xs md:text-sm">
                <Phone className="w-2.5 sm:w-3.5 md:w-5 h-2.5 sm:h-3.5 md:h-5 text-orange-500 shrink-0" />
                <a href="tel:+6212345678" className="text-slate-400 hover:text-orange-500 transition-colors font-mono">
                  +62 123 456
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8 sm:my-10 md:my-12"></div>

{/* Bottom Section */}
<div className="grid grid-cols-1 md:grid-cols-2 items-center py-6  ml-5 sm:ml-5">
  {/* Copyright */}
  <div className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm text-slate-400 space-y-1.5 mb-6 md:mb-0">
    <p>
      &copy; {currentYear} <span className="text-slate-200 font-semibold">PT Batu Ampar Container Terminal</span>
    </p>
    <p className="text-slate-500">All rights reserved. Modernizing Batam's Container Operations.</p>
  </div>

  {/* Bottom Links */}
  <div className="flex flex-wrap justify-start md:justify-end ml-0 md:ml-20 md:mr-20 lg:mr-0 gap-x-6 gap-y-2 text-[10px] sm:text-[11px] md:text-xs lg:text-sm">
    <a href="#privacy" className="text-slate-400 hover:text-orange-500 transition-colors">
      Privacy
    </a>
    <a href="#terms" className="text-slate-400 hover:text-orange-500 transition-colors">
      Terms
    </a>
    <a href="#cookies" className="text-slate-400 hover:text-orange-500 transition-colors">
      Cookies
    </a>
  </div>
</div>
      </div>
    </footer>
  );
}