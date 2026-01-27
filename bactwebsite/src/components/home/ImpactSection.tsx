import React from 'react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Accordion from '@/components/ui/Accordion';
import { modernizationContent, impactItems } from '@/constants';

export default function ImpactSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <SectionTitle className="text-center mb-12">
            {modernizationContent.heading}
          </SectionTitle>

          {/* Accordion Items */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {impactItems.map((item) => (
              <Accordion
                key={item.id}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

