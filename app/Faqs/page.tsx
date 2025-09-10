import { AccordionDemo } from "@/components/Accodion";
import { section } from "framer-motion/client";
import { Search } from "lucide-react";
import React from "react";

const Faqspage = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-purple-500 to-white text-black py-[80px] lg:py-[110px] lg:px-[56px] px-[15px]">
        <div className="max-w-[800px] mx-auto space-y-5">
          <h1 className="text-[68px] font-bold text-center leading-[90px]">
            Got any questions ?
          </h1>
          <p className="text-center text-[20px] font-medium text-black/80">
            We’re here to assist you with anything related to Kaisel
          </p>
          <div className=" h-[70px] w-[63%] mx-auto relative">
            <label htmlFor="" className="">
              <button className="absolute z-10 text-[18px] bg-purple-900 right-[15px] top-1/2 -translate-y-1/2 py-[12px] px-[24px] rounded-full text-white flex gap-2">
                Search <Search size={25} />
              </button>
              <input
                type="text"
                placeholder="Enoch@example.com"
                className="w-full h-full border bg-white text-black rounded-full p-4 px-7"
              />
            </label>
          </div>
        </div>
      </section>
      <AccordionDemo/>
    </>
  );
};

export default Faqspage;
