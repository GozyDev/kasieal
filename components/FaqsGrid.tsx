import React from "react";
import { User, XCircle, Globe, Image, Shield, MapPin } from "lucide-react";

type IconName = "user" | "x-circle" | "globe" | "image" | "shield" | "map-pin";

type Faq = {
  icon: IconName;
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    icon: "user",
    question: "How do I open a Kaisel account?",
    answer:
      "You can sign up directly on our website. Just provide your email, verify your identity, and your account will be ready in minutes."
  },
  {
    icon: "x-circle",
    question: "What happens if a transfer fails?",
    answer:
      "If a transfer fails, the amount will be automatically credited back to your wallet or bank account within 2–5 business days."
  },
  {
    icon: "globe",
    question: "Can I use Kaisel in multiple countries?",
    answer:
      "Yes, Kaisel supports transfers across several countries. The availability of services may vary depending on your plan."
  },
  {
    icon: "image",
    question: "How do I upgrade my plan?",
    answer:
      "You can upgrade anytime from your account dashboard. Simply select your new plan, confirm payment, and enjoy instant access to additional features."
  },
  {
    icon: "shield",
    question: "Is my money safe with Kaisel?",
    answer:
      "Absolutely. Kaisel uses bank-level encryption, advanced fraud detection, and secure wallet technology to protect your funds and data."
  },
  {
    icon: "map-pin",
    question: "Can I use the platform abroad?",
    answer:
      "Yes, you can access your account and make transactions globally, as long as you have an internet connection."
  }
];

// Map icon string to actual Lucide component
const iconMap: Record<IconName, React.ComponentType<any>> = {
  user: User,
  "x-circle": XCircle,
  globe: Globe,
  image: Image,
  shield: Shield,
  "map-pin": MapPin
};

const FAQSGrid = () => {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto text-zinc-900">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {faqs.map((faq, idx) => {
          const Icon = iconMap[faq.icon];
          return (
            <div
              key={idx}
              className="flex flex-col items-start space-y-3 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-black">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSGrid
