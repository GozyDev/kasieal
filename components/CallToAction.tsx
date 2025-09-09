import React from "react";

const CallToAction = () => {
  return (
    <section className='className="py-[110px] pb-[130px] px-[56px] overflow-hidden bg-gray-100 text-black"'>
      <div className="max-w-7xl mx-auto relative">
        <img
          src="/background2.jpg"
          alt="background"
          className="max-h-[500px] w-full rounded-3xl"
        />
        <div className="absolute z-10 top-1/2 max-w-[800px] -translate-y-1/2 -translate-x-1/2 left-1/2   space-y-5  ">
          <h2 className="text-[52px] font-semibold text-center">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-[20px] text-center text-white/80">
            Join thousands of businesses and professionals using Kaisel to bank
            smarter, move money faster, and plan ahead with AI-powered insights.
          </p>
          <div className="flex items-center gap-3 justify-center">
            <button className="py-[15px] px-[25px] text-[16px] bg-purple-900 text-white rounded-full flex items-center gap-3">
              Book a Free Demo
            </button>
            <button className="py-[15px] px-[25px] text-[16px] bg-white text-purple-900 rounded-full flex items-center gap-3">
              Open An Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
