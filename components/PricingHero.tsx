import React from "react";
import Pricing from "./Pricing";

const PricingHero = () => {
  return (
    <section className="bg-gradient-to-b  from-blue-800    via-purple-800 to-white border-transparent h-full flex flex-col items-center pt-[100px] lg:pt-[150px] overflow-hidden">
      <div className="max-w-[800px]  space-y-[20px] lg:space-y-[30px]  p-3">
        <div className="">
          <img
            src="/Price/image 30.png    "
            alt=""
            className="w-[70%] md:w-[45%] drop-shadow-[5px_10px_5px_rgba(89,22,139,0.1)] mx-auto"
          />
        </div>
        <div>
          <h1 className="text-[30px] md:text-[50px] lg:text-[68px] font-bold text-center ">
            The Best Plans for You
          </h1>
          <p className="text-center text-[15px] md:text-[20px] font-medium text-white/80">
            Choose a plan that fits your growth. Whether you’re just starting
            out or scaling worldwide, our flexible pricing gives you the tools
            and coverage you need
          </p>
        </div>
      </div>
      <Pricing />
    </section>
  );
};

export default PricingHero;
