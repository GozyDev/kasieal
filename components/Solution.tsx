import React from "react";
import Image from "next/image";

const data = [
  {
    title: "For Business Owners",
    sub: "Whether you’re running a small shop or growing company, Kaisel helps you Pay for marketing tools and track payments with smart payment options.",
    img: "/solution/solution1.avif",
  },
  {
    title: "Made for Everyday Users",
    sub: "Make payments, pay for subscriptions, or swap crypto — whether you're a student, creator, or enthusiast, Kaisel gives you a smooth experience.",
    img: "/solution/solution2.avif",
  },
];

export const Solution = () => {
  return (
    <section className="py-[80px] lg:py-[110px] px-[15px] lg:px-[56px] text-black space-y-[50px] lg:space-y-[70px] bg-gray-100">
      <div className="max-w-[800px]  mx-auto space-y-[15px]">
        <h2 className="text-4xl lg:text-[52px] font-semibold text-center">
          Smart Solutions for Modern Workstyles
        </h2>
        <p className="text-[15px] lg:text-[20px] text-center text-black/80">
          Are you looking to freelance, trade crypto, manage your business, or
          do regular stuff? Our tools are crafted to fit the way you move, earn,
          and grow.
        </p>
      </div>
      <div className="space-y-6">
        <div className="h-max  flex flex-col lg:flex-row  gap-6 border">
          <div className=" h-[500px]  shadow-lg w-[100%] py-[18px] px-[20px] relative rounded-2xl bg-white">
            <img
              src="/solution/Pattern.svg"
              alt=""
              className="absolute right-0 opacity-30 top-0"
            />
            <div className="absolute aspect-square  right-5 top-0 w-[220px] h-auto bg-[#c5dcf6] opacity-90 blur-3xl" />
            <div className="absolute aspect-square  left-4 bottom-0 w-[220px] h-auto bg-[#c5dcf6]  blur-3xl" />
            <div className="space-y-3 relative">
              <p className="text-[30px] font-medium">Digital Payments</p>
              <p className="text-[18px] text-black/80">
                Pay for digital goods like domains, plugins, or SEO tools
              </p>
            </div>
            {
              <div className=" flex flex-col gap-2 items-center  justify-center mt-[10px]">
                <img
                  src="/solution/image 24.png"
                  alt="baner"
                  width={100}
                  height={100}
                  className="w-[300px]  rounded-xl drop-shadow-[5px_5px_5px_rgba(89,22,139,0.2)]"
                ></img>
                <img
                  src="/solution/image 25.png"
                  alt="baner"
                  width={300}
                  height={100}
                  className="  -rotate-7 rounded-3xl drop-shadow-[5px_5px_5px_rgba(89,22,139,0.2)]"
                ></img>
              </div>
            }
            <div>
              <img
                src="/solution/image 10.png"
                alt="baner"
                width={100}
                height={100}
                className="w-[340px]  absolute bottom-5 left-1/2 -translate-x-1/2"
              ></img>
            </div>
          </div>

          <div className=" h-[500px]  shadow-lg w-[100%] py-[18px] px-[20px] relative rounded-2xl bg-white overflow-hidden ">
            <img
              src="/solution/Pattern.svg"
              alt=""
              className="absolute right-0 opacity-30 top-0"
            />
            <div className="absolute aspect-square  right-7 top-0 w-[220px] h-auto bg-[#c9f4bf] opacity-70 blur-3xl" />
            <div className="space-y-3 relative ">
              <p className="text-[30px] font-medium">SaaS</p>
              <p className="text-[18px] text-black/80">
                Bill users, accept global payments, and manage subscriptions
                with ease
              </p>
            </div>
            {
              <div className="border-b-black  mt-[36px] relative">
                <img
                  src="/solution/image 14.png"
                  alt="baner"
                  width={100}
                  height={100}
                  className="mx-auto w-[80%]"
                ></img>
              </div>
            }
            <div>
              <img
                src="/solution/image 13.png"
                alt="baner"
                width={100}
                height={100}
                className="w-[390px]  absolute bottom-5 left-1/2 -translate-x-1/2 "
              ></img>
            </div>
          </div>

          <div className=" h-[500px]  shadow-lg w-[100%] py-[18px] px-[20px] relative rounded-2xl bg-white overflow-hidden">
            <div className="absolute aspect-square  right-5 top-0 w-[220px] h-auto bg-[#e1cffa] opacity-90 blur-3xl" />
            <div className="absolute aspect-square  left-4 bottom-0 w-[220px] h-auto bg-[#e1cffa] opacity-90 blur-3xl" />
            <img
              src="/solution/Pattern.svg"
              alt=""
              className="absolute right-0 opacity-30 top-0"
            />
            <div className="space-y-3 relative ">
              <p className="text-[30px] font-medium">Crypto</p>
              <p className="text-[18px] text-black/80 ">
                Swap, withdraw, and spend your crypto  with real-time conversions.
              </p>
            </div>
            {
              <div className="border-b-black  mt-[36px]">
                <img
                  src="/solution/image 15.png"
                  alt="baner"
                  width={100}
                  height={100}
                  className="mx-auto   w-[90%] relative"
                ></img>
              </div>
            }
            <div>
              <img
                src="/solution/image 16.png"
                alt="baner"
                width={100}
                height={100}
                className="w-[370px]  absolute bottom-5 left-1/2 -translate-x-1/2"
              ></img>
            </div>
          </div>
        </div>

        <div className="lg:h-[450px] flex flex-col lg:flex-row gap-6  text-white">
          {data.map((da, index) => (
            <div key={index} className="w-[100%] h-full border  relative">
              <img src={da.img} alt="" className="h-full w-full rounded-3xl" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[25px] lg:text-[30px] font-medium ">{da.title}</p>
                <p className="text-sm lg:text-[18px] tracking-wider">{da.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
