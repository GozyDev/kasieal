import { ArrowRight, Divide } from "lucide-react";
import { title } from "process";
import React from "react";

const OverView = () => {
  const overview = [
    {
      id: "1",
      title: "Send & Receive Globally",
      description:
        "Handle international transactions with ease—whether you're paying a team abroad or receiving from global clients.",
      value: [
        {
          text: "Real-time currency conversion with live  rates",

          icon: "/Icons 1/Convert.svg",
        },

        {
          text: "Instant payouts to banks, wallets, or cards",
          icon: "/Icons 1/Wallet.svg",
        },
      ],

      video: "/overview/Send & Receive.webm",
      button: "See how it works",
    },

    {
      id: "2",
      title: "Do More With Smart Cards",
      description:
        "Issue secure virtual or physical cards for teams or personal use—control where, when, and how they spend.",
      value: [
        {
          text: "Freeze, unfreeze, or delete cards instantly",

          icon: "/Icons 1/Card.svg",
        },

        {
          text: "Set custom spending limits for each card",
          icon: "/Icons 1/Stats.svg",
        },
      ],
      video: "/overview/Cards (1).webm",
      button: "Issue a card now",
    },
    {
      id: "3",

      title: "Manage your Spendings",
      description:
        "Break down your expenses and stay in control with categorized reports and deep analytics",
      value: [
        {
          text: "Easy offline tracking in CSV & PDF formats",

          icon: "/Icons 1/Bills.svg",
        },

        {
          text: "Weekly reports via email or dashboard",
          icon: "/Icons 1/Email.svg",
        },
      ],
      video: "/overview/Manage.webm",
      button: "Start managing today ",
    },
    {
      id: "4",
      title: "Send Professional Invoices With Kaisel",
      description:
        "Send branded invoices in minutes, track payments, and get paid faster — all with Kaisel.",
      value: [
        {
          text: "Add your business details and preferred currency",

          icon: "/Icons 1/Track.svg",
        },

        {
          text: "Track when clients view and pay your invoices",
          icon: "/Icons 1/Insights.svg",
        },
      ],
      video: "/overview/Invoice.webm",
      button: "Send an invoice now",
    },
  ];
  return (
    <section className="py-[80px] lg:py-[110px] lg:px-[56px] px-[15px] text-black ">
      <div className="max-w-7xl mx-auto space-y-[50px] lg:space-y-[70px]">
        <div className="max-w-[800px] mx-auto space-y-[15px]">
          <h2 className="text-4xl lg:text-[52px] font-semibold text-center">
            Bank Smarter With Kaisel
          </h2>
          <p className="text-[15px] lg:text-[20px] text-center text-black/80">
            Simplify how you send, spend, and manage money with intelligent
            tools designed to scale with you.
          </p>
        </div>
        <div className=" h-full">
          <div className="lg:space-y-[70px] space-y-[50px] h-max">
            {overview.map((view) => (
              <div
                key={view.id}
                id={view.title}
                className={`flex border  items-center h-max lg:h-[490px] gap-20 ${
                  Number(view.id) % 2 === 0
                    ? " flex-col lg:flex-row-reverse"
                    : "flex-col lg:flex-row"
                }`}
              >
                <div className="w-full lg:w-1/2 h-full bg-[#ebebfd] rounded-2xl">
                  <video
                    src={view.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/fallback.jpg"
                    className="w-[90%] h-full mx-auto"
                    aria-hidden="true"
                  />
                </div>
                <div className="lg:w-1/2 border  space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-[52px] font-semibold text-black/90">
                      {view.title}
                    </h1>
                    <p className="text-[15px] lg:text-[20px] text-black/50">
                      {view.description}
                    </p>
                  </div>
                  <div className="border  flex items-center">
                    <div className="w-1/2 border-r-purple-500 border-2 p-3">
                      <div className="space-y-2">
                        <img src={view.value[0].icon} alt="" />
                        <p className="text-[16px] lg:text-[20px]">{view.value[0].text}</p>
                      </div>
                    </div>
                    <div className="w-1/2  p-3 pl-6">
                      <div className="space-y-2">
                        <img src={view.value[1].icon} alt="" />
                        <p className="text-[16px] lg:text-[20px]">{view.value[1].text}</p>
                      </div>
                    </div>
                  </div>
                  <button className="py-[15px] px-[25px] text-[16px] bg-purple-900 text-white rounded-full flex items-center gap-3">
                    {view.button}
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverView;
