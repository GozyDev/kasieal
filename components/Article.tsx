
import React from "react";

import { ArrowRight } from "lucide-react";

const articles = [
  {
    date: "August 10, 2025",
    badge: "Startups",
    title: "7 Ways AI Can Help Manage Your Financial Expenses",
    description:
      "Nearly 3 in 1 CFOs say their expense processes are too manual. Learn about the AI features that automate busy work and drive efficiency.",
    image: "/art/article1.avif",
  },
  {
    date: "August 11, 2025",
    badge: "Remote Work",
    title: "A Glimpse Into the Daily Lives of Freelancers Who Use Kaiser",
    description:
      "See how freelancers worldwide manage payments, get paid faster, and simplify their hustle with Kaiser.",
    image: "/art/article2.avif",
  },
  {
    date: "August 16, 2025",
    badge: "Tips & Tricks",
    title: "The Secret Fintech Hacks Millionaires Use (That You Can Too)",
    description:
      "Discover fintech strategies used by the wealthy and how you can apply them to streamline your own financial journey.",
    image: "/art/article3.avif",
  },
  {
    date: "August 18, 2025",
    badge: "Security",
    title: "Is Your Money Really Safe Online? The Truth About Banking Security",
    description:
      "Explore the realities of online banking safety and how to better manage payments and secure your finances with Kaiser.",
    image: "/art/article4.avif",
  },
  {
    date: "August 20, 2025",
    badge: "Technology",
    title: "Can AI Really Manage and Predict Your Finances Better Than You?",
    description:
      "Uncover the power of AI-driven financial tools and whether they can truly outperform human decision-making in managing money.",
    image: "/art/article5.avif",
  },
  {
    date: "August 22, 2025",
    badge: "Tips & Tricks",
    title: "Why 2025 Is the Year of Fintech and How to Ride the Wave",
    description:
      "Stay ahead of the curve with the latest fintech trends shaping 2025 and learn how to take advantage of this new era.",
    image: "/art/article6.avif",
  },
];

function Article() {
  return (
    <section className=" lg:py-[110px] lg:px-[56px] px-[15px] text-black ">
      <div className="max-w-7xl mx-auto space-y-[50px] lg:space-y-[70px]">
        <div className="max-w-[800px] mx-auto space-y-[15px]">
          <h2 className="text-4xl lg:text-[52px] font-semibold text-center">
            Articles and Insights
          </h2>
          <p className="text-[15px] lg:text-[20px] text-center text-black/80">
            Explore expert tips, industry trends, and stories to help you scale
            smarter
          </p>
        </div>
        <div className=" h-full">
          <div className="lg:space-y-[70px] space-y-[50px] h-max">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {articles.map((article, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  {/* Image */}
                  <div className="relative h-50 w-full ">
                    <img
                      src={article.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <span>{article.date}</span>
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                        {article.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-1">
                      {article.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="py-[15px] px-[25px] text-[16px] bg-purple-900 text-white rounded-full flex items-center gap-3 ">
              See All
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Article;
