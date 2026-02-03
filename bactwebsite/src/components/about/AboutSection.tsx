
import { aboutContent } from '@/constants';
export default function AboutSection() {
  return (
    <section className="relative z-20 h-[300px] sm:h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/videos.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-[-50px] px-6 sm:px-10 md:px-16 lg:px-20 text-white flex flex-col items-center w-full">
        <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold max-w-5xl leading-tight text-center">
          {aboutContent.title}
        </h1>
        {aboutContent.description && (
          <p className="mt-2 max-w-3xl text-xs sm:text-xs md:text-base lg:text-2xl text-center text-white/90 px-4 sm:px-8 md:px-12">
            {aboutContent.description}
          </p>
        )}
      </div>
    </section>
  );
}

