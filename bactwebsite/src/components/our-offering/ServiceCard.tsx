import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient?: boolean;
}

export default function ServiceCard({ icon: Icon, title, description, features, gradient = false }: ServiceCardProps) {
  return (
    <div className={`group rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      gradient
        ? 'bg-gradient-to-br from-white via-orange-50 to-white border border-orange-200/50 hover:border-[#F15A29]/50'
        : 'bg-white border border-slate-200 hover:border-[#F15A29]/50'
    }`}>
      {/* Icon */}
      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6 transition-all ${
        gradient
          ? 'bg-gradient-to-br from-[#F15A29]/20 to-orange-300/20'
          : 'bg-gradient-to-br from-[#F15A29]/15 to-orange-200/15'
      } group-hover:from-[#F15A29]/30 group-hover:to-orange-300/30`}>
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#F15A29]" />
      </div>

      {/* Title */}
      <h3 className={`text-base md:text-xl font-bold mb-2 md:mb-3 ${
        gradient ? 'bg-gradient-to-r from-slate-900 to-[#F15A29] bg-clip-text text-transparent' : 'text-slate-900'
      }`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs md:text-sm text-slate-600 mb-4 md:mb-5 leading-relaxed">
        {description}
      </p>

      {/* Features */}
    
    </div>
  );
}
