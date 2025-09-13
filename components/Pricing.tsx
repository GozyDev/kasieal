"use client";
import { DollarSign, Rocket, UsersRound, Zap } from "lucide-react";
import React, { useState } from "react";

const pricingPlansObj = [
  {
    id: "1",
    title: "Free Plan (Starter)",
    info: "For startups and regular users",
    amount: "0",
    icon: <UsersRound className="text-purple-900" />,
    details: [
      "Send and receive in 5 countries",
      "Create up to two virtual cards",
      "Basic AI budgeting tools",
      "Secure wallet assets",
      "Real-time spending tracking",
    ],
    active: false,
  },
  {
    id: "2",
    title: "Pro Plan (Growth)",
    info: "For freelancers and small businesses",
    amount: "12",
    icon: <Rocket className="text-purple-900" />,
    extraInfo: "Everything in Free Plan",
    popular: true,
    details: [
      "Send and receive in 20+ countries",
      "Up to five virtual cards (fully customizable with spending limits)",
      "AI-powered forecasts and insights (from real-life market trends)",
      "Invoice creation and payment tracking",
      "Advanced fraud and security control",
      "Export reports to PDF and CSV",
    ],
    active: true,
  },
  {
    id: "3",
    title: "Enterprise Plan (Custom)",
    info: "For companies that need to scale and control",
    amount: "Custom",
    icon: <Zap className="text-purple-900" />,
    extraInfo: "Everything in Pro Plan",
    details: [
      "Unlimited international transfers",
      "Dedicated account manager (with your personal AI chat assistant)",
      "Authentic SaaS billing tools and custom integration (integration with CRMs and ERPs)",
      "Priority support and unbranding",
      "Advanced analytics and reports",
      "24/7 priority support",
    ],
    active: false,
  },
];

const Pricing = () => {
  const [data, setData] = useState(pricingPlansObj);
  const [activeData, setActiveData] = useState(1);

  const setActive = (id: number) => {
    setActiveData(id);
    setData(
      data.map((da) => ({
        ...da,
        active: Number(da.id) === id + 1 ? true : false,
      }))
    );
  };

  return (
    <div className="mt-[30px] max-w-[1080] h-max relative  bg-white p-6 lg:p-9 rounded-3xl">
      <div className="grid lg:grid-cols-2  text-black rounded-3xl gap-6">
        <div className="border  h-full space-y-6">
          {data.map((da, index) => (
            <div
              key={index}
              onClick={() => setActive(Number(index))}
              className={`flex items-center gap-6 p-6 rounded-3xl ${
                da.active ? " bg-purple-900 text-white" : "bg-none"
              } border border-black/30  `}
            >
              <div className="w-[52px] h-[52px] bg-purple-100 rounded-full flex items-center justify-center">
                {da.icon}
              </div>
              <div className="flex-1">
                <p className="text-[16px] font-semibold">{da.title}</p>
                <p className="text-[12px]">{da.info}</p>
              </div>
              <div className="flex items-center w-max">
                {da.amount !== "Custom" ? (
                  <p className="text-[30px] flex items-center">
                    <DollarSign /> <span>{da.amount}</span>
                  </p>
                ) : (
                  <p className="text-[30px] flex items-center">
                    {" "}
                    <DollarSign /> <DollarSign />{" "}
                  </p>
                )}

                <p className="text-sm">/Mo</p>
              </div>
            </div>
          ))}
        </div>

        <div className=" bg-purple-800 rounded-3xl p-4 space-y-5">
          <div className="flex items-center gap-6 rounded-3xl  text-white ">
            <div className="flex-1">
              <p className="text-[16px]">{data[activeData].title}</p>
              <p className="text-[12px]">{data[activeData].info}</p>
            </div>
            <div className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center">
              {data[activeData].icon}
            </div>
          </div>

          <div className="bg-white h-max rounded-3xl p-3 py-5 space-y-5 ">
            {
              <div className="flex items-center  justify-between ">
                {data[activeData].amount !== "Custom" ? (
                  <p className="text-[30px] flex items-center ">
                    <DollarSign /> <span>{data[activeData].amount}</span>
                    <span className="text-sm text-black/70 ml-2">| mon</span>
                  </p>
                ) : (
                  <p className="text-[30px] flex items-center">Custom</p>
                )}
                {data[activeData].popular && <img src="/price/image 29.png" alt="" className="w-[100px]" /> }
              </div>
            }

            {data[activeData].extraInfo && (
              <p className="text-purple-700">{data[activeData].extraInfo}</p>
            )}

            <div>
              <ul className="space-y-5">
                {data[activeData].details.map((li, index) => (
                  <li key={index} className="flex  gap-3">
                    <img src="/Price/image 28.png" alt="" className="w-5 h-5" />{" "}
                    <p className="text-[16px] text-black/70">{li}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
