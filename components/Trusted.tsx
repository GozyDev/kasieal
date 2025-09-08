import React from "react";
import Image from "next/image";

const Trusted = () => {
  const logos = Array.from({ length:10 }, (_, i) => ({
    id: i + 1,
    src: `/CarouselLogos/Logo ${i + 1}.png`,
    alt: `Logo ${i + 1}`,
  }));
  return (
    <section className="py-[80px] px-[56px] text-black">
      <div className="border space-y-[30px]  relative">
        <h2 className="text-[54px] text-center font-semibold">
          Trusted by 15,000+ businesses worldwide.
        </h2>
        <div className="space-y-4 relative">
          <div className="absolute w-[100px] h-full bg-gradient-to-r from-white via-white to-white/80 shadow-white z-10" />
          <div className="absolute right-0 w-[100px] h-full  bg-gradient-to-l from-white via-white to-white/80 shadow-white shadow-2xl z-10" />
          <div className="h-full border ">
            {/* <div className="items-center justify-center w-[1000px] gap-5 pl-[650px]">
              {logos.map((logo) => (
                <Image
                  key={logo.id}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={300}
                  className="rounded-lg drop-shadow-md border border-green-600 h-full w-[600px]"
                />
              ))}
            </div> */}
          </div>
          <div className="h-[100px] border border-black"></div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
