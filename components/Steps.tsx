"use client";

import { image } from "framer-motion/client";
import { Clock, User, FileText, Shield, Send,  BarChart3, LayoutDashboard, Brain } from "lucide-react";

const steps = [
  {
    title: "Create your account",
    bg:"/Learn/bac1.avif",
    howItWorks: [
      { icon: <User className="w-5 h-5 text-purple-500" />, text: "Filling in necessary information" },
      { icon: <FileText className="w-5 h-5 text-purple-500" />, text: "Documentation and approval" },
      { icon: <Shield className="w-5 h-5 text-purple-500" />, text: "Security for user safety" },
    ],
    time: "2 mins",
  },
  {
    title: "Sending & Receiving",
    bg:"/Learn/bac2.avif",
    howItWorks: [
      { icon: <Send className="w-5 h-5 text-purple-500" />, text: "Quick and smooth transfers" },
      { icon: <img src="/Icons 1/Track.svg" className="w-5 h-5 text-purple-500" />, text: "Generate and share invoices" },
      { icon: <BarChart3 className="w-5 h-5 text-purple-500" />, text: "Tracking payments" },
    ],
    time: "3 mins",
  },
  {
    title: "Dashboards & More",
    bg:'/Learn/bac3.avif',
    howItWorks: [
      { icon: <LayoutDashboard className="w-5 h-5 text-purple-500" />, text: "Your Personalized dashboard" },
      { icon: <BarChart3 className="w-5 h-5 text-purple-500" />, text: "Smart insights at a glance" },
      { icon: <Brain className="w-5 h-5 text-purple-500" />, text: "AI-powered expense forecasting" },
    ],
    time: "3 mins",
  },
];

export default function StepsCards() {
  return (
    <div className="py-[80px] flex items-center justify-center bg-gradient-to-b from-purple-100 to-white p-6">
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl w-full">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Fake image header (replace with <img /> if you have images) */}
            <div className={`h-45  bg-cover bg-center`}   style={{ backgroundImage: `url(${step.bg})` }}/>

            {/* Card body */}
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2 text-black">{step.title}</h2>
              <p className="text-gray-500 mb-4">How it works:</p>

              <ul className="space-y-3 flex-1">
                {step.howItWorks.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-700">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Clock className="w-4 h-4" />
                  {step.time}
                </div>
                <button className="px-4 py-2 bg-purple-900 text-white rounded-full text-sm hover:bg-purple-700 transition">
                  Play Now →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
