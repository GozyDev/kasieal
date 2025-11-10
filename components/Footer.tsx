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
            href="https://x.com/bankwithkaisel"
            target="_blank"
            className="bg-black p-3 rounded-lg shadow hover:scale-105 transition"
          >
            <FaXTwitter className="w-12 h-12 text-white" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="bg-purple-500 p-3 rounded-lg shadow hover:scale-105 transition"
          >
            <FaInstagram className="w-12 h-12 text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/kaisel/"
            target="_blank"
            className="bg-blue-600 p-3 rounded-lg shadow hover:scale-105 transition"
          >
            <FaLinkedin className="w-12 h-12 text-white" />
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="flex space-x-3 lg:space-x-5 text-gray-800 font-medium text-sm lg:text-lg">
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

        <p className="text-md text-gray-800">
          2025 Boldshift All right reserved.
        </p>
      </div>
    </footer>
  );
}
