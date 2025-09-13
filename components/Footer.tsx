"use client";

import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#EDEBFB] py-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
        {/* Social icons */}
        <div className="flex space-x-6">
          <a
            href="https://x.com/Gozy_Dev"
            target="_blank"
            className="bg-white p-3 rounded-lg shadow hover:scale-105 transition"
          >
            <FaXTwitter className="w-7 h-7" />
          </a>
          <a
            href="#"
            target="_blank"
            className="bg-white p-3 rounded-lg shadow hover:scale-105 transition"
          >
            <FaInstagram className="w-7 h-7 text-purple-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/henrygozy/"
            target="_blank"
            className="bg-white p-3 rounded-lg shadow hover:scale-105 transition"
          >
            <FaLinkedin className="w-7 h-7 text-blue-600" />
          </a>
        </div>

        {/* Navigation links */}
        <nav className="flex space-x-8 text-gray-800 font-medium">
          <a href="/#solutions" className="hover:text-purple-600">
            Solutions
          </a>
          <a href="/Blog" className="hover:text-purple-600">
            Blog
          </a>
          <a href="/Faqs" className="hover:text-purple-600">
            FAQs
          </a>
          <a href="/Pricing" className="hover:text-purple-600">
            Pricing
          </a>
          <a href="/Calculator" className="hover:text-purple-600">
            Calculator
          </a>
        </nav>

        {/* Logo */}
        <div className="">
          <img src="/kaisel.svg" alt="" />
        </div>
      </div>
    </footer>
  );
}
