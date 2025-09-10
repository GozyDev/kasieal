"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Command,
  TrendingUp,
  BookOpen,
  BarChart3,
  DollarSign,
} from "lucide-react";

const faqsData = [
  {
    id: 1,
    icon: "exchange-icon",
    question: "How accurate is Kaizel's exchange rate converter?",
    answer:
      "Our converter updates in real time with global market rates, so you always get the most accurate and transparent figures when converting currencies.",
    active: false,
  },
  {
    id: 2,
    icon: "info-icon",
    question: "What is Kaizel?",
    answer:
      "Kaizel Learning is our on-site e-learning hub designed to help understand online banking, payment, and financial best practices through easy-to-follow guides and resources.",
    status: "popular",
    active: true,
  },
  {
    id: 3,
    icon: "dashboard-icon",
    question: "What can I do with Kaizel Dashboard?",
    answer:
      "The dashboard gives you a clear overview of your transactions, balances, and cards, helping you track spending, manage savings, and stay in control of your money — all in one place.",
    active: false,
  },
  {
    id: 4,
    icon: "pricing-icon",
    question: "How much does it cost to use Kaizel?",
    answer:
      "Kaizel is free to sign up with transparent pricing for premium features. No hidden fees — just simple, upfront rates you can trust.",
    active: false,
  },
];

// Icon mapping
const iconComponents = {
  "exchange-icon": TrendingUp,
  "info-icon": Command,
  "dashboard-icon": BarChart3,
  "pricing-icon": DollarSign,
  default: BookOpen,
};

export function AccordionDemo() {
  const [faqs, setFaqs] = useState(faqsData);

  const toggleFaq = (id: number) => {
    setFaqs(
      faqs.map((faq) => ({
        ...faq,
        active: faq.id === id ? !faq.active : false,
      }))
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="space-y-4">
        {faqs.map((faq) => {
          const IconComponent =
            iconComponents[faq.icon as keyof typeof iconComponents] ||
            iconComponents.default;

          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl overflow-hidden  ${
                faq.active
                  ? "bg-gradient-to-r from-purple-700 to-blue-700 border-transparent"
                  : "bg-white border-gray-200"
              } shadow hover:shadow-md transition-all duration-300 py-[20px] font-medium`}
            >
              {faq.status === "popular" && (
                <span
                  className={` mt-4 px-3 py-2 bg-[#412188] text-white text-[12px] rounded-lg ml-[20px] ${
                    faq.active ? " inline-block" : "hidden"
                  }`}
                >
                  Popular
                </span>
              )}
              <button
                onClick={() => toggleFaq(faq.id)}
                className={`w-full p-6 text-left flex items-center justify-between focus:outline-none  rounded-2xl ${
                  faq.active ? "text-white" : "text-gray-800"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      faq.active ? "bg-white/20" : "bg-purple-100"
                    }`}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${
                        faq.active ? "text-white" : "text-purple-900"
                      }`}
                    />
                  </div>
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: faq.active ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`ml-4 p-1 rounded-full ${
                    faq.active ? "bg-white/20" : "bg-gray-100"
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 ${
                      faq.active ? "text-white" : "text-gray-600"
                    }`}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {faq.active && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div
                        className={`text-lg ${
                          faq.active ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
