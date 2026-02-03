import React from 'react';
import Image from 'next/image';
import DomeGallery from '../ui/DomeGallery';
export default function CompanyAbout() {
  return (
    <section>
      <style>{`
        @media (max-width: 550px) {
          .about-gallery-container { width: 100%; height: 100px;}
        }
        @media (max-width: 599px) {
          .about-gallery-container { width: 100%; height: 100%; }
        }
        @media (min-width: 600px) {
          .about-gallery-container { width: 100vw; height: 111vh; }
        }
      `}</style>
      <div className="about-gallery-container">
        <DomeGallery
          fit={0.8}
          minRadius={900}
          maxVerticalRotationDeg={6}
          segments={34}
          dragDampening={2}
          grayscale
        />
      </div>
       
    </section>
  );
}
