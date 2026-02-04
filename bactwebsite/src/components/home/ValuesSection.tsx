import React from 'react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { valuesContent } from '@/constants';
import { Zap, Target, Rocket,ChartSpline } from 'lucide-react';

export default function ValuesSection() {
  return (
    <section
      className="py-16 md:py-24 w-full h-[500px] md:h-[600px] flex items-center"
      style={{
        background: 'linear-gradient(180deg, #F67851 0%, #F15A29 50%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-white text-center font-extrabold text-3xl md:text-4xl lg:text-5xl mb-16">
          {valuesContent.heading}
        </h2>
        {/* Values Row */}
  
          <div className="flex flex-row justify-center items-center gap-5  lg:gap-50  md:gap-10 sm:gap-5">
            {valuesContent.values.map((value) => {
              const iconProps = {
                progressive: <ChartSpline className="w-10 h-10 md:w-18 md:h-18 lg:w-32 lg:h-32 text-orange-500" />,
                operational: <Target className="w-10 h-10 md:w-18 md:h-18 lg:w-32 lg:h-32 text-orange-500" />,
                future: <Rocket className="w-10 h-10 md:w-18 md:h-18 lg:w-32 lg:h-32 text-orange-500" />,
              };

              return (
              <div
                key={value.id}
                className="flex flex-col items-center text-center w-full md:w-1/3"
              >
                {/* Circle */}
                <div className="w-20 h-20 md:w-30 md:h-30 lg:w-56 lg:h-56 bg-white rounded-full mb-10 md:mb-12 flex items-center justify-center">
                  {iconProps[value.icon as keyof typeof iconProps]}
                </div>
                {/* Title */}
                <h3 className="text-white text-sm md:text-2xl font-extrabold leading-tight  md:mt-4">
                  {value.title.split(' ').length > 1
                    ? <>
                        {value.title.split(' ').slice(0, -1).join(' ')}<br />{value.title.split(' ').slice(-1)}
                      </>
                    : value.title}
                </h3>
              </div>
              );
            })}
          </div>
      </div>
    </section>
  );
}

