"use client";

import React, { useState } from "react";
import {
  Check,
  X,
  DollarSign,
  Star,
  Crown,
  Zap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const featuresTable = [
  {
    feature: "Send and Receive (Countries)",
    free: "5",
    pro: "20+",
    enterprise: "Unlimited",
    highlight: false,
  },
  {
    feature: "Virtual cards",
    free: "2",
    pro: "5 (customizable)",
    enterprise: "Unlimited",
    highlight: true,
  },
  {
    feature: "AI budgeting tools",
    free: "Basic",
    pro: "Forecasts & Insights",
    enterprise: "Forecast + Advanced Analytics",
    highlight: true,
  },
  {
    feature: "Secure wallet access",
    free: true,
    pro: true,
    enterprise: true,
    highlight: false,
  },
  {
    feature: "Real-time spend tracking",
    free: true,
    pro: true,
    enterprise: true,
    highlight: false,
  },
  {
    feature: "Invoice creation & payment tracking",
    free: false,
    pro: true,
    enterprise: true,
    highlight: false,
  },
  {
    feature: "Export reports (PDF & CSV)",
    free: false,
    pro: true,
    enterprise: true,
    highlight: false,
  },
  {
    feature: "AI assistant + Manager",
    free: false,
    pro: false,
    enterprise: true,
    highlight: true,
  },
  {
    feature: "Advanced fraud & security controls",
    free: false,
    pro: true,
    enterprise: true,
    highlight: false,
  },
  {
    feature: "SaaS billing tools + custom integrations (CRM, ERP)",
    free: false,
    pro: false,
    enterprise: true,
    highlight: true,
  },
  {
    feature: "Priority support & onboarding",
    free: false,
    pro: true,
    enterprise: true,
    highlight: false,
  },
  {
    feature: "Advanced analytics & reporting",
    free: false,
    pro: false,
    enterprise: true,
    highlight: true,
  },
  {
    feature: "24/7 priority support",
    free: false,
    pro: false,
    enterprise: true,
    highlight: false,
  },
];

const PricingComparison = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleFeatures = expanded ? featuresTable : featuresTable.slice(0, 5);


  interface PlanHeaderProps {
    title: string;
    price: string;
    period: string;
    buttonText: string;
    icon: React.ReactNode;
    recommended?: boolean;
    popular?: boolean;
  }

  const renderValue = (val: boolean | string, isHighlight: boolean = false): React.ReactNode => {
    if (val === true)
      return <Check className="text-green-500 w-5 h-5 mx-auto" />;
    if (val === false) return <X className="text-red-400 w-5 h-5 mx-auto" />;

    return (
      <span
        className={`font-medium ${
          isHighlight ? "text-purple-600" : "text-gray-700"
        }`}
      >
        {val}
      </span>
    );
  };

  const PlanHeader = ({
    title,
    price,
    period,
    buttonText,
    icon,
    recommended = false,
    popular = false,
  }: PlanHeaderProps) => (
    <div
      className={`relative p-6 rounded-t-xl ${
        recommended
          ? "bg-gradient-to-b from-blue-600 to-blue-700"
          : popular
          ? "bg-gradient-to-b from-purple-600 to-purple-700"
          : "bg-gradient-to-b from-gray-700 to-gray-800"
      } text-white`}
    >
      {recommended && (
        <div className="absolute top-0 right-0 transform  bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
          RECOMMENDED
        </div>
      )}
      {popular && (
        <div className="absolute top-0 right-0 transform  bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}

      <div className="text-center">
        <div className="flex items-center justify-center gap-1 mb-2">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <div className="flex items-center justify-center text-3xl font-bold my-3">
          {price !== "Custom" ? (
            <>
              <DollarSign className="w-6 h-6" />
              <span>{price}</span>
              <span className="text-sm font-normal ml-1 opacity-80">
                /{period}
              </span>
            </>
          ) : (
            <span>{price}</span>
          )}
        </div>

        <button
          className={`w-full py-2.5 rounded-lg font-medium mt-2 ${
            recommended
              ? "bg-white text-blue-700 hover:bg-gray-100"
              : popular
              ? "bg-white text-purple-700 hover:bg-gray-100"
              : "bg-gray-800 text-white hover:bg-gray-700"
          } transition-colors`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Compare Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare features and find the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <PlanHeader
              title="Free Plan"
              price="0"
              period="mo"
              buttonText="Get Started"
              icon={<Star className="w-5 h-5" />}
            />

            <div className="p-6">
              <ul className="space-y-4">
                {visibleFeatures.map((row, idx) => (
                  <li
                    key={idx}
                    className={`pb-4 ${
                      idx !== visibleFeatures.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-sm ${
                          row.highlight
                            ? "font-medium text-gray-800"
                            : "text-gray-600"
                        }`}
                      >
                        {row.feature}
                      </span>
                      <div className="text-right">
                        {renderValue(row.free, row.highlight)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {!expanded && (
                <button
                  onClick={() => setExpanded(true)}
                  className="w-full mt-6 flex items-center justify-center text-purple-600 text-sm font-medium"
                >
                  View all features <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              )}

              {expanded && (
                <button
                  onClick={() => setExpanded(false)}
                  className="w-full mt-6 flex items-center justify-center text-purple-600 text-sm font-medium"
                >
                  Show less <ChevronUp className="w-4 h-4 ml-1" />
                </button>
              )}
            </div>
          </div>

          {/* Pro Plan - Recommended */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100 transform md:-translate-y-2">
            <PlanHeader
              title="Pro Plan"
              price="12"
              period="mo"
              buttonText="Upgrade Now"
              icon={<Zap className="w-5 h-5" />}
              recommended={true}
            />

            <div className="p-6">
              <ul className="space-y-4">
                {visibleFeatures.map((row, idx) => (
                  <li
                    key={idx}
                    className={`pb-4 ${
                      idx !== visibleFeatures.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-sm ${
                          row.highlight
                            ? "font-medium text-gray-800"
                            : "text-gray-600"
                        }`}
                      >
                        {row.feature}
                      </span>
                      <div className="text-right">
                        {renderValue(row.pro, row.highlight)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {!expanded && (
                <button
                  onClick={() => setExpanded(true)}
                  className="w-full mt-6 flex items-center justify-center text-purple-600 text-sm font-medium"
                >
                  View all features <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              )}

              {expanded && (
                <button
                  onClick={() => setExpanded(false)}
                  className="w-full mt-6 flex items-center justify-center text-purple-600 text-sm font-medium"
                >
                  Show less <ChevronUp className="w-4 h-4 ml-1" />
                </button>
              )}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <PlanHeader
              title="Enterprise"
              price="Custom"
              period=""
              buttonText="Contact Sales"
              icon={<Crown className="w-5 h-5" />}
              popular={true}
            />

            <div className="p-6">
              <ul className="space-y-4">
                {visibleFeatures.map((row, idx) => (
                  <li
                    key={idx}
                    className={`pb-4 ${
                      idx !== visibleFeatures.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-sm ${
                          row.highlight
                            ? "font-medium text-gray-800"
                            : "text-gray-600"
                        }`}
                      >
                        {row.feature}
                      </span>
                      <div className="text-right">
                        {renderValue(row.enterprise, row.highlight)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {!expanded && (
                <button
                  onClick={() => setExpanded(true)}
                  className="w-full mt-6 flex items-center justify-center text-purple-600 text-sm font-medium"
                >
                  View all features <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              )}

              {expanded && (
                <button
                  onClick={() => setExpanded(false)}
                  className="w-full mt-6 flex items-center justify-center text-purple-600 text-sm font-medium"
                >
                  Show less <ChevronUp className="w-4 h-4 ml-1" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
