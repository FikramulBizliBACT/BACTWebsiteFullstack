import React from 'react';
import { Package, Truck, Lock, Users, Zap, BarChart3 } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Package,
    title: 'Container Handling',
    description: 'Efficient loading, unloading, and movement of containers with state-of-the-art equipment.',
    features: [
      'Full Container Load (FCL) handling',
      'Less Container Load (LCL) consolidation',
      'Over-dimensional cargo support',
      '24/7 operations capability',
    ],
    gradient: true,
  },
  {
    icon: Truck,
    title: 'Cargo Management',
    description: 'Comprehensive cargo tracking and management system for seamless logistics operations.',
    features: [
      'Real-time cargo tracking',
      'Inventory management system',
      'Custom documentation support',
      'Hazmat handling expertise',
    ],
    gradient: false,
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description: 'Stringent security protocols and full regulatory compliance for all operations.',
    features: [
      'ISO certified processes',
      'Advanced surveillance system',
      'Security personnel on-site',
      'Compliance audits & reporting',
    ],
    gradient: true,
  },
  {
    icon: Users,
    title: 'Customer Support',
    description: 'Dedicated support team ready to assist with any operational needs and inquiries.',
    features: [
      'Multi-language support',
      'Quick response time',
      'Customized solutions',
      'Training programs available',
    ],
    gradient: false,
  },
  {
    icon: Zap,
    title: 'Modern Infrastructure',
    description: 'Latest technology and equipment ensuring optimal operational efficiency and reliability.',
    features: [
      'Automated systems integration',
      'High-speed equipment',
      'Eco-friendly operations',
      'Continuous upgrades',
    ],
    gradient: true,
  },
  {
    icon: BarChart3,
    title: 'Performance Reporting',
    description: 'Detailed analytics and performance metrics for operational transparency and optimization.',
    features: [
      'Monthly performance reports',
      'KPI tracking & analysis',
      'Cost optimization insights',
      'Growth forecasting',
    ],
    gradient: false,
  },
];

export default function OfferingSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F15A29]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F15A29]/5 rounded-full blur-3xl"></div>
      </div>

      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 via-[#F15A29] to-slate-900 bg-clip-text text-transparent mb-4">
            Our Offering
          </h2>
          <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
            Comprehensive container terminal services designed to streamline your logistics operations and maximize efficiency
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title} 
              description={service.description}
              features={service.features}
              gradient={service.gradient}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-24 relative z-10">
          <div className="bg-gradient-to-r from-[#F15A29] to-orange-600 rounded-xl p-8 md:p-12 text-center shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-sm md:text-base text-orange-50 mb-6 max-w-xl mx-auto">
              Contact our team today to discuss how our services can optimize your container terminal operations
            </p>
            <button className="bg-white hover:bg-slate-50 text-[#F15A29] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
