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
    <section className="py-[110px] px-[56px] text-black space-y-[90px] ">
      <div className="max-w-[800px]  mx-auto space-y-[15px]">
        <h2 className="text-[52px] font-semibold text-center">
          Smart Solutions for Modern Workstyles
        </h2>
        <p className="text-[20px] text-center text-black/80">
          Are you looking to freelance, trade crypto, manage your business, or
          do regular stuff? Our tools are crafted to fit the way you move, earn,
          and grow.
        </p>
      </div>
      <div className="space-y-6">
        <div className="h-[450px] flex gap-6">
          <div className=" shadow-lg w-[100%] py-[12px] px-[20px] relative rounded-2xl">
            <div className="space-y-3 ">
              <p className="text-[30px] font-medium">Digital Payments</p>
              <p className="text-[18px] text-black/80">
                Pay for digital goods like domains, plugins, or SEO tools
              </p>
            </div>
            {/* <div className="border border-black">
              <img
                src="/solution/image 12.png"
                alt="baner"
                width={100}
                height={100}
                className="w-[300px] border border-black"
              ></img>
              <img
                src="/solution/image 11.png"
                alt="baner"
                width={300}
                height={100}
                className="  border border-black"
              ></img>
            </div> */}
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

          <div className=" shadow-lg w-[100%] py-[12px] px-[20px] relative rounded-2xl">
            <div className="space-y-3 ">
              <p className="text-[30px] font-medium">SaaS</p>
              <p className="text-[18px] text-black/80">
                Bill users, accept global payments, and manage subscriptions
                with ease
              </p>
            </div>
            {
              <div className="border-b-black  mt-[30px]">
                <img
                  src="/solution/image 14.png"
                  alt="baner"
                  width={100}
                  height={100}
                  className="mx-auto   w-[80%]"
                ></img>
              </div>
            }
            <div>
              <img
                src="/solution/image 13.png"
                alt="baner"
                width={100}
                height={100}
                className="w-[340px]  absolute bottom-5 left-1/2 -translate-x-1/2"
              ></img>
            </div>
          </div>

          <div className=" shadow-lg w-[100%] py-[12px] px-[20px] relative rounded-2xl">
            <div className="space-y-3 ">
              <p className="text-[30px] font-medium">Digital Payments</p>
              <p className="text-[18px] text-black/80">
                Pay for digital goods like domains, plugins, or SEO tools
              </p>
            </div>
            {
              <div className="border-b-black  mt-[30px]">
                <img
                  src="/solution/image 15.png"
                  alt="baner"
                  width={100}
                  height={100}
                  className="mx-auto   w-[80%]"
                ></img>
              </div>
            }
            <div>
              <img
                src="/solution/image 16.png"
                alt="baner"
                width={100}
                height={100}
                className="w-[340px]  absolute bottom-5 left-1/2 -translate-x-1/2"
              ></img>
            </div>
          </div>
        </div>
        <div className="h-[400px] flex gap-6  text-white">
          {data.map((da) => (
            <div className="w-[100%] h-full relative">
              <img src={da.img} alt="" className="h-full w-full rounded-3xl" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[30px] font-medium ">{da.title}</p>
                <p className="text-[18px]">
                 {da.sub}
                </p>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </section>
  );
};
