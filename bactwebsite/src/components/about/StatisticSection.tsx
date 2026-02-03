'use client';
import React, { useState, useEffect } from 'react';

const stats = [
  { value: 34, label: 'Terminals' },
  { value: 20, label: 'Countries' },
  { value: 6, label: 'Continents' }
];

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
};

export default function StatisticSection() {
  return (
    <>
      {/* Scroll Indicator for Mobile */}
      <div className="w-full  bg-black flex justify-center items-center py-4 md:hidden">
        <style>{`
          @keyframes scroll-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(6px); }
          }
        `}</style>
        <div className="flex mt-10 mb-10 flex-col items-center gap-2">
          <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">Scroll</p>
          <svg
            className="w-5 h-5 text-white/60"
            style={{ animation: 'scroll-bounce 2s infinite' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <section className="w-full py-12 bg-black flex justify-center items-center overflow-hidden">
       
    <div className="flex flex-row lg:mt-10 justify-center items-center gap-8 sm:gap-16 md:gap-32 lg:gap-40">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-2xl mb-3 tracking-tight">
              <Counter target={stat.value} />
            </div>
            <div className="h-1 w-8 bg-gradient-to-r from-transparent via-white to-transparent mb-3 opacity-60"></div>
            <span className="text-xs sm:text-sm md:text-base text-white/70 tracking-widest uppercase font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
      </section>
    </>
  );
}