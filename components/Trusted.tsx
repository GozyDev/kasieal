"use client";
import React, { useMemo } from "react";
import Image from "next/image";

const Trusted = () => {
  const logos = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `/CarouselLogos/Logo ${i + 1}.png`,
    alt: `Logo ${i + 1}`,
  }));

  // Create enough duplicates for seamless looping
  const duplicatedLogos = useMemo(() => {
    return [...logos, ...logos, ...logos, ...logos];
  }, [logos]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12 md:mb-16">
          Trusted by <span className="text-purple-800">15,000+</span> businesses
          worldwide
        </h2>

        <div className="space-y-8  ">
          
          {/* Row 1: Right → Left */}
          <div className="relative flex overflow-hidden group py-4">
            <div className="flex animate-marquee-left whitespace-nowrap">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="inline-flex items-center mx-4 md:mx-8 transition-all duration-300 hover:scale-110 flex-shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={70}
                    className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left → Right */}
          <div className="relative flex overflow-hidden group py-4">
            <div className="flex animate-marquee-right whitespace-nowrap">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`row2-${index}`}
                  className="inline-flex items-center mx-4 md:mx-8 transition-all duration-300 hover:scale-110 flex-shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={70}
                    className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                  />
                </div>
              ))}
            </div>

            {/* Mirror element for seamless looping */}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }

        /* Pause animation on hover */
        .group:hover .animate-marquee-left,
        .group:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Trusted;
