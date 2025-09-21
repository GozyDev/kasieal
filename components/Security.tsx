'use client'

import { motion } from "framer-motion";
import React from "react";
const data = [
  {
    id: "1",
    img: "/secu/cloud.avif",
    title: "Secure Cloud Storage",
    des: "Keep your documents and records safe with bank-grade security",
  },
  {
    id: "2",

    img: "/secu/2FA.avif",
    title: "2FA Authentication",
    des: "Extra verification to keep your account safe",
  },
  {
    id: "3",

    img: "/secu/report.avif",
    title: "Real-Time Alerts",
    des: "Get notified the moment unusual activity is detected",
  },
  {
    id: "4",

    img: "/secu/Key.avif",
    title: "End to End Encryption",
    des: "Your data is protected from the moment it leaves your device",
  },
];
const Security = () => {
  return (
    <section className="py-[50px] lg:px-[56px] px-[15px] text-black bg-gray-100">
      <div className="space-y-[50px] lg:space-y-[70px]">
        <div className="max-w-[800px] mx-auto space-y-[15px]">
          <h2 className="text-4xl lg:text-[52px] font-semibold text-center">
            Your Money Secured
          </h2>
          <p className="text-[15px] lg:text-[20px] text-center text-black/80">
            Your safety comes first with Kaisel. From advanced encryption to
            real-time fraud detection, every transaction is protected by
            industry-leading security measures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-6">
          {data.map((da) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.15 }}
              viewport={{ once: true }}
              key={da.id}
              className="px-8 border shadow-lg pb-[32px] rounded-3xl w-[100%] bg-white"
            >
              <img src={da.img} alt="" className="w-[202px] mx-auto" />
              <p className="text-[20px] font-bold text-center mb-3">
                {da.title}
              </p>
              <p className="text-center text-[16px] text-black/60">{da.des}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
