import React from "react";
import Image from "next/image";
const HomePage = () => {
  return (
    <section className="bg-gradient-to-b from-black  via-purple-400  to-white h-full flex flex-col items-center pt-[60px]">
      <div className="max-w-[800px] space-y-[30px] ">
        <div className="">
          <img
            src="/review.png"
            alt=""
            className="w-[45%] drop-shadow-[5px_10px_5px_rgba(89,22,139,0.1)] mx-auto"
          />
        </div>
        <div>
          <h1 className="text-[68px] font-bold text-center leading-[90px]">
            Spend, manage, and move Funds
          </h1>
          <p className="text-center text-[20px] font-medium text-white/80">
            Power your financial operations with next-gen tools built for
            everyday users, freelancers, and modern businesses
          </p>
        </div>
        <div className=" h-[70px] w-[63%] mx-auto relative">
          <label htmlFor="" className="">
            <button className="absolute z-10 text-[18px] bg-purple-900 right-[15px] top-1/2 -translate-y-1/2 py-[12px] px-[24px] rounded-full">
              Open An Account
            </button>
            <input
              type="text"
              placeholder="Enoch@example.com"
              className="w-full h-full border bg-white text-black rounded-full p-4 px-7"
            />
          </label>
        </div>
      </div>
      <div className="mt-[30px] w-[1080] relative">
        <img
          src="/Dashboard/image 3.png"
          alt="dashboard"
          className="w-full"
        ></img>
        <div className="absolute w-[285px]  top-10 left-[-100px] rotate-[5deg] ">
          <img
            src="/Dashboard/mon lim.png"
            alt=""
            className=" drop-shadow-[5px_10px_5px_rgba(89,22,139,0.2)] "
          />
        </div>
        <div className=" w-[285px] absolute  top-42 left-[-100px] rotate-[-5deg] ">
          <img
            src="/Dashboard/card debit.png"
            alt=""
            className="drop-shadow-[5px_10px_5px_rgba(89,22,139,0.2)]"
          />
        </div>
        <div className="absolute w-[285px]  top-72 left-[-100px] rotate-[5deg]">
          <img
            src="/Dashboard/Nova.png"
            alt=""
            className="drop-shadow-[5px_10px_5px_rgba(89,22,139,0.3)]"
          />
        </div>
        <div className="absolute w-[208px] top-[-80px] right-[-85px]">
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
