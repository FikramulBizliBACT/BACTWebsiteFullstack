'use client';

import { useState } from 'react';
import Image from 'next/image';
import ShinyText from '../ui/ShinyText';

export default function ModernizationSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: 'The transition has begun',
      content: 'In line with BP Batam\'s national vision and the appointment of PT Batam Terminal Petikemas (BTP) as the sole container terminal operator, Batu Ampar Port will begin implementing enhanced operational processes and procedures effective 15 December 2025.'
    },
    {
      title: 'Aligning with international port standards',
      content: 'This marks a new phase for Batu Ampar - a structured and forward-looking step to strengthen governance, improve operational consistency, and support long-term capacity growth for Batam.'
    },
    {
      title: 'Enabling sustainable growth',
      content: 'We are committed to building a sustainable future for the port and the community, ensuring that our operations are environmentally responsible and economically viable for generations to come.'
    }
  ];
  return (
    <section className="relative w-full min-h-screen bg-white overflow-visible lg:h-[1150px] py-12 md:py-0">
      {/* Main Grid Container */}
      <div className="relative w-full h-full flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-0">

        {/* MOBILE/TABLET: Heading, Truck+Stripe, lalu Accordion Heading */}
        <div className="block lg:hidden w-full">
          {/* Heading */}
          <div className="px-6 sm:px-10 md:px-16 py-8 md:py-12 flex flex-col items-start md:items-start ml-5 sm:ml-15 mt-10 mb-4">
            <h2 className="text-[#F15A29] font-bold leading-[1.2] mb-6 md:mb-8 max-w-[400px] sm:max-w-[400px] text-[16px] sm:text-[16px] md:text-[28px] lg:text-[38px] xl:text-[42px] text-left">
              Modernizing Batu Ampar Container terminal
            </h2>
            
            <p className="text-black leading-[1.8] mb-4 md:mb-6 max-w-[350px] sm:max-w-[400px] text-justify text-[12px] sm:text-[13px] md:text-[15px] lg:max-w-[520px]">
              In line with BP Batam's national vision and the appointment of PT Batam Terminal Petikemas (BTP) as the sole container terminal operator, Batu Ampar Port will begin implementing enhanced operational processes and procedures effective 15 December 2025.
            </p>
            <p className="text-black leading-[1.8] max-w-[350px] sm:max-w-[400px] text-justify text-[12px] sm:text-[13px] md:text-[15px] lg:max-w-[520px]">
              This marks a new phase for Batu Ampar - a structured and forward-looking step to strengthen governance, improve operational consistency, and support long-term capacity growth for Batam.
            </p>
          </div>
          {/* Truck + Orange Stripe (jalan) */}
          <div className="relative flex flex-col items-center justify-center w-full mb-8">
            <div 
              className="relative w-[180px] h-[120px] rotate-[15deg] sm:w-[180px] sm:h-[150px] md:w-[180px] md:h-[180px] z-10 mt-0 md:mt-8 left-[-25%]  sm:left-[-0%] md:left-[-30%]"
              style={{ marginBottom: '-20px', }}
            >
              <Image
                src="/images/truck.svg"
                alt="Container Truck"
                fill
                className="object-contain drop-shadow-xl mt-5 sm:mt-8 md:mt-[-15px]"
              />
            </div>
            <div className="w-full flex justify-center items-center relative" style={{ height: '60px' }}>
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full" style={{ zIndex: 1 }}>
                <div
                  className="w-[140vw] h-[80px] sm:h-[80px] md:h-[100px] bg-[#F15A29] rotate-[-15deg] mx-auto flex items-center justify-center "
                  style={{ marginLeft: '-5vw', marginRight: '-20vw',marginTop: '-30vw' , background: 'linear-gradient(90deg, #F15A29 40%, #FA9679 100%)',}}
                >
                  <span className="text-white text-[12px] sm:text-[20px] md:text-[25px] font-extrabold whitespace-nowrap tracking-[0.1em] leading-none mx-auto" style={{ letterSpacing: '0.04em' }}>
                    <ShinyText
                      text="MOVING FORWARD AS ONE"
                      speed={5}
                      delay={0}
                      color="#fff"
                      shineColor="#F15A29"
                      spread={120}
                      direction="left"
                      yoyo={false}
                      pauseOnHover={false}
                      disabled={false}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP: Tetap dua kolom, tidak diubah */}
        <div className="hidden lg:flex relative z-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 py-8 md:py-16 lg:py-24 flex-col justify-start lg:ml-10 xl:ml-20 lg:mt-10">
          {/* Heading */}
          <h2 className="text-[#F15A29] text-[16px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] font-bold leading-[1.2] mb-6 md:mb-8 max-w-full">
            Modernizing Batu Ampar Container terminal
          </h2>
          <p className="text-black text-[14px] md:text-[15px] leading-[1.8] mb-4 md:mb-6 text-justify max-w-full lg:max-w-[520px]">
            In line with BP Batam's national vision and the appointment of PT Batam Terminal Petikemas (BTP) as the sole container terminal operator, Batu Ampar Port will begin implementing enhanced operational processes and procedures effective 15 December 2025.
          </p>
          <p className="text-black text-[14px] md:text-[15px] leading-[1.8] text-justify max-w-full lg:max-w-[520px]">
            This marks a new phase for Batu Ampar - a structured and forward-looking step to strengthen governance, improve operational consistency, and support long-term capacity growth for Batam.
          </p>
        </div>

        {/* Right Column - What This Means */}
        <div
          className="relative z-10 top-[-50px] lg:top-80  md:top-[-100px] px-6 sm:px-10 md:px-16 lg:px-8 xl:px-12 py-8 md:py-16 lg:py-24 flex flex-col
            items-center justify-center
            md:items-end md:justify-center
            lg:items-end lg:justify-center
            lg:mr-16 xl:mr-20"
        >
          <h2
            className="text-[#F15A29] font-bold leading-[1.3] mb-8 md:mb-8 md:mr-10  
              text-center md:text-center lg:text-center
              text-[16px] sm:text-[16px] md:text-[26px] lg:text-[34px] xl:text-[36px] max-w-[280px] sm:max-w-[420px] lg:max-w-[600px]"
          >
            What This Means for the Shipping & Logistics Community
          </h2>

          {/* Accordion Items */}
          <div
            className="space-y-0 w-full max-w-[350px]
              flex flex-col items-center
              md:items-end md:mx-5 md:max-w-[450px] 
              lg:items-end lg:mx-0
              lg:max-w-[700px]
              "
          >
            {accordionItems.map((item, index) => (
              <div key={index} className="bg-white border-none mb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full h-[72px] flex items-center rounded-xl gap-6 text-left shadow-sm   px-5 py-5"
                >
                  <span className="text-[#F15A29] text-[28px] font-bold leading-none transition-transform duration-300 ml-5  flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                  <h3 className="text-[#2F1306] text-[14px] md:text-[15px] font-semibold leading-[1.4]">
                    {item.title}
                  </h3>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-[72px]">
                    <p className="text-gray-600 text-[14px] md:text-[15px] leading-[1.8]">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          
        {/* Diagonal Orange Stripe - Positioned Absolutely - Hidden on Mobile */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-visible">
          <div
            className="absolute"
            style={{
              width: '200%',
              height: '20%',
              transform: 'rotate(-30deg)',
              left: '-20%',
              top: '85%',
              bottom: '0%',
              transformOrigin: 'left',
              background: 'linear-gradient(90deg, #F15A29 40%, #FA9679 100%)',
            }}
          >
            {/* "MOVING FORWARD AS ONE" Text */}
            <div className="absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <p className="text-white text-[40px] lg:text-[48px] xl:text-[56px] font-extrabold whitespace-nowrap tracking-[0.1em] leading-none">
                <ShinyText
                  text="MOVING FORWARD AS ONE"
                  speed={5}
                  delay={0}
                  color="#fff"
                  shineColor="#F15A29"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Truck Illustration - Bottom Left - Hidden on Mobile/Tablet */}
        <div className="hidden lg:block absolute bottom-65 left-20 w-[280px] h-[200px] lg:w-[320px] lg:h-[240px] xl:w-[380px] xl:h-[280px] z-20">
          <Image
            src="/images/truck.svg"
            alt="Container Truck"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

