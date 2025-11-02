import React from "react";
import PrimaryButton from "./ui/ButtonComp";

const CallToAction = () => {
  return (
    <section className='className="pt-[80px] py-[80px] lg:py-[110px] px-[15px] lg:px-[56px]] pb-[130px]  overflow-hidden bg-gray-100 text-black"'>
      <div className="max-w-7xl mx-auto relative rounded-3xl h-[500px] bg-[url('/background2.jpg')] bg-cover bg-center flex justify-center items-center px-3 md:px-6">
        <div className="max-w-[800px] space-y-[20px]">
          <h2 className="text-[30px] lg:text-[52px] font-semibold text-center">
            Ready to Take Control of Your Finances?
          </h2>
          <p className=" lg:text-[20px] text-center text-white/80">
            Join thousands of businesses and professionals using Kaisel to bank
            smarter, move money faster, and plan ahead with AI-powered insights.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-3 justify-center font-medium">
            <PrimaryButton
              text="Book a Free Demo"
              href="/WaitList"
              className="bg-white"
              variant="outline"
            ></PrimaryButton>
            <PrimaryButton
              text="Open an account"
              href="/WaitList"
              className="bg-white"
              variant="outline"
            ></PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
