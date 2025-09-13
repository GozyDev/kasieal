import React from "react";
const HomePage = () => {
  return (
    <section className="bg-gradient-to-b from-black  via-purple-400  to-white h-full flex flex-col items-center pt-[150px] overflow-hidden px-3">
      <div className="max-w-[800px] space-y-[30px]  ">
        <div className="">
          <img
            src="/review.png"
            alt=""
            className="w-[70%] lg:w-[45%] drop-shadow-[5px_10px_5px_rgba(89,22,139,0.1)] mx-auto"
          />
        </div>
        <div>
          <h1 className=" text-[40px] md:text-[50px] lg:text-[68px] font-bold text-center lg:leading-[90px]">
            Spend, manage, and move Funds
          </h1>
          <p className="text-center lg:text-[20px] font-medium text-white/80">
            Power your financial operations with next-gen tools built for
            everyday users, freelancers, and modern businesses
          </p>
        </div>
        <div className=" h-[70px] lg:w-[63%] mx-auto relative">
          <label htmlFor="" className="">
            <button className="absolute z-10 text-[12px] lg:text-[18px] bg-purple-900 right-[15px] top-1/2 -translate-y-1/2 py-[12px] px-[24px] rounded-full">
              Open An Account
            </button>
            <input
              type="text"
              placeholder="Enoch@example.com"
              className="w-full h-full border bg-white text-black rounded-full p-4 px-7 text-[12px] lg:text-[18px]"
            />
          </label>
        </div>
      </div>
      <div className="mt-[30px] max-w-[1080] relative">
        <img
          src="/Dashboard/image 3.png"
          alt="dashboard"
          className="w-full"
        ></img>
        <div className="absolute w-[100px] md:w-[170px] lg:w-[285px]  top-10 -left-[10px] lg:left-[-100px] rotate-[5deg]">
          <img
            src="/Dashboard/mon lim.png"
            alt=""
            className=" drop-shadow-[5px_10px_5px_rgba(89,22,139,0.2)] "
          />
        </div>
        <div className=" lg:w-[285px] w-[100px] md:w-[170px] md:top-28  absolute top-22  lg:top-42 -left-[10px] lg:left-[-100px] rotate-[-5deg] ">
          <img
            src="/Dashboard/card debit.png"
            alt=""
            className="drop-shadow-[5px_10px_5px_rgba(89,22,139,0.2)]"
          />
        </div>
        <div className="absolute w-[100px] md:w-[170px] md:top-48  lg:w-[285px] top-32  lg:top-72 -left-[10px] lg:left-[-100px] rotate-[5deg]">
          <img
            src="/Dashboard/Nova.png"
            alt=""
            className="drop-shadow-[5px_10px_5px_rgba(89,22,139,0.3)]"
          />
        </div>
        <div className="absolute w-[100px] md:w-[170px]   lg:w-[208px] -top-[20px] lg:top-[-80px] right-[-15px] lg:right-[-85px]">
          <img
            src="/Dashboard/invoice.png"
            alt=""
            className="w-full drop-shadow-[5px_10px_5px_rgba(89,22,139,0.2)]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
