import { AccordionDemo } from "@/components/Accodion";
import FAQSearch from "@/components/FAQSearch";
import FAQSGrid from "@/components/FaqsGrid";

import React from "react";

const Faqspage = () => {
  return (
    <>
      <FAQSearch />
      <FAQSGrid />
      <AccordionDemo />
      {/* CTA */}
      <section className="py-12 px-6 max-w-7xl mx-auto text-white/90">
        <div className="bg-black/95 rounded-3xl  p-6 py-9 flex items-center">
          <div className="space-y-3 flex-1 ">
            <h3 className="text-[20px] font-semibold">Still have questions?</h3>
            <p className="text-18px">
              Can’t find an answer? Kindly reach out to Kaisel's Team by hitting
              the button
            </p>
          </div>
          <button className="py-[10px] px-[20px] bg-white text-purple-900 rounded-3xl">Get in touch</button>
        </div>
      </section>
    </>
  );
};

export default Faqspage;
