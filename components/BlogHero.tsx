import { ArrowRight } from "lucide-react";
import React from "react";
import PrimaryButton from "./ui/ButtonComp";

const BlogHero = () => {
  return (
    <section className="text-black  px-[15px] md:[20px] lg:px-[56px]  pt-[150px] pb-[56px] bg-[#f6f7f9]">
      <div className="flex flex-col lg:flex-row  items-center p-3 lg:p-9 rounded-3xl  mx-auto gap-6 bg-white">
        <div className="lg:max-w-1/2 mx-auto space-y-[15px] md:px-0 lg:px- ">
          <p className="font-light text-black/70">Aug 10, 2025</p>
          <h1 className="text-4xl lg:text-[52px] font-semibold">
            Why Startups Choose Kaisel for Global Payments?
          </h1>
          <p className="text-[15px] lg:text-[20px]  text-black/80  font-medium">
            A quick step-by-step guide to help you explore our platform through
            detailed and well explained tips.
          </p>

          <p>
            Tricks to manage multi-currency transactions Transparent pricing
            helps keep burn rates low Virtual cards to separate team and
            personal spending
          </p>

          <PrimaryButton
            text="Read full Blog"
            href="/WaitList"
            variant="outline"
            Icon={<ArrowRight size={20} />}
            className="text-sm px-0"
          ></PrimaryButton>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/blog/hero blog.avif"
            alt="hero image"
            className=" drop-shadow-xl rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
