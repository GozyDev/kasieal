import { ArrowRight } from "lucide-react";
import React from "react";

const LearnHero = () => {
  return (
    <section className="text-black  px-[15px] md:[20px] lg:px-[56px] py-[110px]">
      <div className="flex flex-col lg:flex-row  items-center max-w-7xl mx-auto gap-6">
        <div className="lg:max-w-1/2 mx-auto space-y-[15px] md:px-0 lg:px- ">
          <h1 className="text-4xl lg:text-[52px] font-semibold">
            Learn How to Use Kaisel In Minutes
          </h1>
          <p className="text-[15px] lg:text-[20px]  text-black/80">
            A quick step-by-step guide to help you explore our platform through
            detailed and well explained tips.
          </p>

           <button className="py-[15px] px-[25px] text-[16px] bg-purple-900 text-white rounded-full flex items-center gap-3">
                    Get Started 
                    <ArrowRight size={20} />
                  </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/Learn/learnHero.avif"
            alt="hero image"
            className="lg:w-[90%] drop-shadow-xl rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default LearnHero;
