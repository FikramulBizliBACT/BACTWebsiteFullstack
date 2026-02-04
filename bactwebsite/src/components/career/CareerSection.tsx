import React from 'react';
import { Briefcase, Users, Zap, Award, Globe, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';
import JobCard from './JobCard';

const jobs = [
  {
    icon: Award,
    title: 'Engineering ',
    department: 'Engineering',
    description: 'Oversee maintenance, equipment optimization, and infrastructure improvements.',
    requirements: [],
    gradient: true,
  },
  {
    icon: Zap,
    title: 'Finance',
    department: 'Finance',
    description: 'Lead financial planning, analysis, and reporting functions for sustainable business growth.',
    requirements: [],
    gradient: false,
  },
  {
    icon: Users,
    title: 'HRGA',
    department: 'HRGA',
    description: 'Manage human resources operations, employee relations, and general affairs administration.',
    requirements: [],
    gradient: true,
  },
  {
    icon: Award,
    title: 'HSSE',
    department: 'HSSE',
    description: 'Ensure health, safety, security, and environmental compliance across all terminal operations.',
    requirements: [],
    gradient: false,
  },
  {
    icon: Briefcase,
    title: 'Operations',
    department: 'Operation',
    description: 'Supervise day-to-day terminal operations and container handling activities.',
    requirements: [],
    gradient: true,
  },
  {
    icon: Zap,
    title: 'Technical',
    department: 'Technic',
    description: 'Maintain and optimize technical systems supporting container terminal operations.',
    requirements: [],
    gradient: false,
  },
  {
    icon: Globe,
    title: 'IT',
    department: 'IT',
    description: 'Develop and maintain IT infrastructure and systems for terminal operations.',
    requirements: [],
    gradient: true,
  },
];

export default function CareerSection() {
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
            Join Our Team
          </h2>
          <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
            Build your career at PT Batu Ampar Container Terminal. We're looking for talented professionals to help us transform the logistics industry
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 mb-12 md:mb-16">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              icon={job.icon}
              title={job.title}
              department={job.department}
              description={job.description}
              requirements={job.requirements}
              gradient={job.gradient}
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 mb-12 md:mb-16">
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 text-center hover:border-[#F15A29]/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F15A29]/20 to-orange-300/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-[#F15A29]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Competitive Benefits</h3>
            <p className="text-sm text-slate-600">Comprehensive health insurance, retirement plans, and performance bonuses</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 text-center hover:border-[#F15A29]/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F15A29]/20 to-orange-300/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-[#F15A29]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Global Opportunities</h3>
            <p className="text-sm text-slate-600">Work in an international environment with exposure to global best practices</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 text-center hover:border-[#F15A29]/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F15A29]/20 to-orange-300/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-[#F15A29]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Career Growth</h3>
            <p className="text-sm text-slate-600">Professional development programs and advancement opportunities</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10">
          <div className="bg-gradient-to-r from-[#F15A29] to-orange-600 rounded-xl  md:p-12 text-center shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl mt-5 md:text-3xl font-bold text-white mb-4">
              Don't See Your Position?
            </h3>
            <p className="text-sm md:text-base text-orange-50 mb-6 max-w-xl mx-auto">
              Send us your CV and let us know your area of interest. We're always looking for talented individuals to join our team
            </p>
            <button className="bg-white hover:bg-slate-50 text-[#F15A29] h-10 w-full font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Submit Your CV
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
