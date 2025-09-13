"use client";

import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#EDEBFB] py-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
        {/* Social icons */}
        <div className="flex space-x-6">
          <Link
            href="https://x.com/Gozy_Dev"
            target="_blank"
            className="bg-white p-3 rounded-lg shadow hover:scale-105 transition"
          >
            <FaXTwitter className="w-7 h-7" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="bg-white p-3 rounded-lg shadow hover:scale-105 transition"
          >
            <FaInstagram className="w-7 h-7 text-purple-500" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/henrygozy/"
            target="_blank"
            className="bg-white p-3 rounded-lg shadow hover:scale-105 transition"
          >
            <FaLinkedin className="w-7 h-7 text-blue-600" />
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="flex space-x-8 text-gray-800 font-medium">
          <Link href="/#solutions" className="hover:text-purple-600">
            Solutions
          </Link>
          <Link href="/Blog" className="hover:text-purple-600">
            Blog
          </Link>
          <Link href="/Faqs" className="hover:text-purple-600">
            FAQs
          </Link>
          <Link href="/Pricing" className="hover:text-purple-600">
            Pricing
          </Link>
          <Link href="/Calculator" className="hover:text-purple-600">
            Calculator
          </Link>
        </nav>

        {/* Logo */}
        <div className="">
          <img src="/kaisel.svg" alt="" />
        </div>
      </div>
    </footer>
  );
}
