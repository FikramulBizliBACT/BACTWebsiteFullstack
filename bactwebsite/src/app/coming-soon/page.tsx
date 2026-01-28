import React from 'react';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 animate-gradient-move bg-[linear-gradient(120deg,_#F15A29,_#FA9679,_#F15A29_100%)] bg-[length:200%_200%]">
      {/* Icon */}
      <div className="mb-8 animate-bounce">
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="44" fill="#fff" stroke="#FBB17A" strokeWidth="4" />
          <path d="M30 60 L50 40 L70 60" stroke="#FBB17A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 text-center drop-shadow-lg tracking-tight">
        Coming Soon
      </h1>
      {/* Subtitle */}
      <p className="text-lg md:text-2xl text-white/90 mb-10 text-center max-w-xl">
        This page is under construction.<br />Stay tuned for something amazing!
      </p>
      {/* CTA Button */}
      <Link href="/" className="mt-2 px-8 py-3 bg-white/90 hover:bg-white text-[#F15A29] font-bold rounded-full shadow-lg text-lg transition-all duration-300">
        <p className='hover:bg-white text-[#F15A29] font-bold text-lg mx-5 my-2 text-center whitespace-nowrap font-extrabold leading-[29px]'>Back to Home</p>
      </Link>
    </div>
  );
}

// Tambahkan ke globals.css:
// @keyframes gradient-move {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }
// .animate-gradient-move { animation: gradient-move 6s ease-in-out infinite; }
