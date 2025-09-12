import { ArrowRight } from "lucide-react";
import React from "react";

const Predict = () => {
  return (
    <section className="pt-[80px] py-[80px] lg:py-[110px] px-[15px] lg:px-[56px] text-black ">
      <div className="flex flex-col lg:flex-row items-center gap-11 lg:gap-6">
        <div className="lg:w-1/2 space-y-1">
          <div className="space-y-1">
            <div className="flex  items-center gap-2">
              <img
                src="/predict/nova.avif"
                alt=""
                className="w-[38px] h-[38px] rounded-full"
              />
              <p className="text-sm font-bold">Nova</p>
              <p className="text-sm text-gray-500">Assistant</p>
            </div>
            <p className="text-[30px] text-black/90">
              Stay Ahead With AI That Predicts and Advises Your Spending
            </p>
          </div>
          <div className="">
            <video
              src="/overview/Dashboard.webm"
              autoPlay
              loop
              muted
              playsInline
              poster="/fallback.jpg"
              className="w-full h-full mx-auto"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-1">
            <p className="text-[15px] text-black/70">
              Nova AI monitors your spending habits and tracks market shifts to
              give you advice that keeps your finances against price hikes and
              economic trends
            </p>
          </div>
          <div className="h-[350px] relative">
            <img
              src="/predict/background.avif"
              alt=""
              className="rounded-3xl h-full w-full"
            />

            <div className="absolute flex top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 justify-between w-full px-5 gap-5">
              <div className="bg-white/10 flex justify-center items-center backdrop-blur-sm p-3 rounded-3xl w-1/2">
                  <img
                    src="/predict/image 20.png"
                    alt=""
                    className=" w-[250px]"
                  />
              </div>
              <div className="bg-white/10 flex justify-center items-center backdrop-blur p-3 rounded-3xl w-1/2">
                  <img
                    src="/predict/image 21.png"
                    alt=""
                    className=" w-[250px] "
                  />
              </div>
            </div>
          </div>
          <div className="space-y-9">
            <p className="">
              Let Nova AI guide your next financial move with precision — ready
              to begin?
            </p>
            <div className="gap-3 flex flex-col-reverse lg:flex-row lg:items-center ">
              <button className="text-white bg-purple-900 py-[10px] px-[20px] rounded-full text-[16px] flex items-center justify-center gap-2 ">
                Start Using Nova AI <ArrowRight size={20} />
              </button>{" "}
              <button className="text-purple-900 border border-black bg-purple-transparent py-[10px] px-[20px] rounded-full text-[16px]">
                Get Nova Insight Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Predict;
