import React from 'react';
import CareerSection from '@/components/career/CareerSection';

export const metadata = {
  title: 'Career | BACT - Join Our Team',
  description: 'Explore career opportunities at PT Batu Ampar Container Terminal. Join our talented team in logistics and port operations.',
};

export default function CareerPage() {
  return (
    <main className="min-h-screen mt-10 mb-10">
      <CareerSection />
    </main>
  );
}
