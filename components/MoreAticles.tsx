"use client";
import React from "react";
import { articles } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

const MoreAticles = ({ selected }: { selected: string }) => {
  const moreArticle = articles.filter((a) => a.slug !== selected);

  return (
    <div className="mt-[200px]">
      <h2 className="text-5xl font-bold mb-6">Blogs You’ll Find Useful</h2>

      <div className="space-y-[10px]">
        {moreArticle.map((article, i) => (
          <Link href={article.slug}>
            <div
              key={i}
              className="py-[40px] p-[10px]  border border-b-black/10 space-y-[10px] group cursor-pointer relative hover:bg-purple-500/5 rounded"
            >
              <p className="group-hover:text-purple-800">{article.date}</p>
              <p className="text-3xl font-semibold group-hover:text-purple-800">
                {article.title}
              </p>
              <motion.img
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ y: -90, opacity: 1 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                src={article.image}
                alt="article image"
                width={300}
                height={300}
                className="absolute right-[20px] bottom-0  hidden md:group-hover:block w-[250px] h-[300px] rounded-4xl object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreAticles;
