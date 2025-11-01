import React from "react";
import { articles } from "@/lib/data";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Article() {
  return (
    <section className="py-[80px] lg:py-[110px] lg:px-[56px] px-[15px] text-black ">
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
                <Link href={`/Blog/${article.slug}`} key={i}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition hover:scale-105">
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Article;
