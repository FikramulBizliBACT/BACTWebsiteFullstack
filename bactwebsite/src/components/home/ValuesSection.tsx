import React from 'react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { valuesContent } from '@/constants';

export default function ValuesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A]">
      <Container>
        {/* Section Title */}
        <SectionTitle color="white" className="text-center mb-16">
          {valuesContent.heading}
        </SectionTitle>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {valuesContent.values.map((value) => (
            <div key={value.id} className="flex flex-col items-center text-center">
              {/* Circle Icon */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full mb-6 shadow-xl flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-4 border-[#FF6B35]"></div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

