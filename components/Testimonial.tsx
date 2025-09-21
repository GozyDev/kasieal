"use client";
import { motion } from "framer-motion";
import React from "react";
const data = [
  {
    id: "1",
    text: (
      <p className="text-[16px] md:text-[20px] font-medium text-gray-500 ">
        <b className="text-black/80">Nova AI</b> warned me about a fuel{" "}
        <b className="text-black/80">price hike</b>, so I stocked up early and
        avoided extra costs...worked like magic.
      </p>
    ),
    rate: "5.0",
    rateImg: "/tes/image 22.png",
    name: "Angela Okoro",
    img: "",
    revImg: "/tes/tes 2.avif",
    status: "Logistics Manager",
    rotate: "rotate-[2deg]",
  },
  {
    id: "2",
    text: "",
    rate: "",
    name: "",
    img: "/tes/tes 1.avif",
    revImg: "",
    status: "",
  },
  {
    id: "3",
    text: (
      <p className="text-[16px] md:text-[20px]  font-medium text-gray-500 ">
        I use Kaisel’s <b className="text-black/80">multi-currency accounts</b>{" "}
        and crypto <b className="text-black/80">wallet</b> daily — switching
        between assets is quick and <b className="text-black/80">secure</b>
      </p>
    ),
    rate: "4.5",
    rateImg: "/tes/image 23.png",
    name: "Marcus Lewis",
    img: "",
    revImg: "/tes/tes 3.avif",
    status: "Crypto Trader",
  },
  {
    id: "4",
    text: (
      <p className="ttext-[16px] md:text-[20px]  font-medium text-gray-500 ">
        Creating <b className="text-black/80">invoices</b> and receiving
        payments from <b className="text-black/80">international</b> clients has
        never been this easy, <b className="text-black/80">love</b> it here.
      </p>
    ),
    rate: "5.0",
    rateImg: "/tes/image 22.png",
    name: "David Brooks",
    img: "",
    revImg: "/tes/tes 4.avif",
    status: "Web Developer",
    rotate: "rotate-[-2deg]",
  },
  {
    id: "5",
    text: "",
    rate: "",
    name: "",
    img: "/tes/tes 5.avif",
    revImg: "",
    status: "",
    rotate: "rotate-[-2deg]",
  },
  {
    id: "6",
    text: (
      <p className="text-[16px] md:text-[20px]  font-medium text-gray-500 ">
        <b className="text-black/80">Kaisel’s AI</b> forecasting keeps me ahead
        of market changes and helps me make smarter{" "}
        <b className="text-black/80">spending</b> decisions every month
      </p>
    ),
    rate: "5.0",
    rateImg: "/tes/image 22.png",
    name: "Lydia Chen",
    img: "",
    revImg: "/tes/tes 6.avif",
    status: "E-commerce Owner",
  },
];
const Testimonial = () => {
  return (
    <section className="py-[80px] lg:py-[110px] px-[15px] lg:px-[56px] text-black ">
      <div className="space-y-[20px] lg:space-y-[40px]">
        <div className="max-w-[800px] mx-auto space-y-[15px] ">
          <h2 className="text-4xl lg:text-[52px] font-semibold text-center">
            What Our Users Say
          </h2>
          <p className="ttext-[15px] lg:text-[20px] text-center text-black/80">
            Real stories from people who use Kaisel everyday
          </p>
        </div>
        <div className=" max-w-6xl mx-auto lg:p-6 ">
          <div className="grid lg:grid-cols-2 gap-11 ">
            {data.map((da, idx) => (
              <motion.div
                initial={{ y: 50, scale: 0 }}
                whileInView={{ y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: idx * 0.03,
                }}
                viewport={{ once: true }}
                key={da.id}
                className="h-full  items-center justify-center"
              >
                {da.img && (
                  <img
                    src={da.img || "/poster"}
                    alt=""
                    className={`h-[330px] w-full object-cover rounded-3xl ${da.rotate}`}
                  />
                )}

                {da.text && (
                  <div
                    className={`shadow-lg rounded-3xl flex justify-center items-center  p-6 h-[330px] ${da.rotate}`}
                  >
                    <div className=" space-y-[30px] p-3">
                      {da.text}

                      <div className=" text-[20px] md:text-[24px] flex gap-2 items-center">
                        {da.rate}{" "}
                        <img
                          src={da.rateImg}
                          alt=""
                          className=" w-[110px] md:w-[180px] rounded-full object-cover"
                        />
                      </div>
                      <div className="flex gap-2">
                        <img
                          src={da.revImg}
                          alt=""
                          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full object-cover border-2 border-purple-900"
                        />
                        <div className="">
                          <p className="text-[16px] md:text-[20px] font-semibold">
                            {da.name}
                          </p>{" "}
                          <p className="text-[13px] md:text-[16px] text-black/50 test">
                            {da.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
