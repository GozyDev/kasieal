"use client";
import React, { useMemo } from "react";
import Image from "next/image";

const Support = () => {
  const logos = Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    src: `/Flag/Flags-${i + 1}.svg`,
    alt: `Logo ${i + 1}`,
  }));

  // Create enough duplicates for seamless looping
  const duplicatedLogos = useMemo(() => {
    return [...logos, ...logos, ...logos, ...logos];
  }, [logos]);

  return (
    <section className="py-[110px] px-[56px] overflow-hidden bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto space-y-[50px]">
        <div className="max-w-[900px] mx-auto space-y-[30px]">
          <h2 className="text-3xl md:text-4xl lg:text-[68px] font-semibold text-center">
            Trusted in 20+ Countries
          </h2>
          <p className="text-center text-[20px] text-black/70">
            Kaisel bridges borders with a smooth experience. We’re trusted by
            thousands of users across more than 20 countries.
          </p>
        </div>

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
                    className="drop-shadow-xl"
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
                    className="drop-shadow-xl"
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

export default Support;
