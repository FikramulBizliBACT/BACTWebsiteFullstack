import Image from 'next/image';
import { heroContent } from '@/constants';

export default function HeroSection() {
  return (
    <section className="relative z-20 h-[300px] sm:h-[600px] md:h-[700px] lg:h-[800px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Batu Ampar Container Terminal"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:ml-20 text-white ml-5 sm:ml-10 md:ml-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold max-w-5xl leading-tight">
          {heroContent.title}
          <br />
          {heroContent.secondaryTitle }
        </h1>
      </div>
    </section>
  );
}

