"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function LoginSection() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-2">Welcome back</h1>
        <p className="text-center text-gray-500 mb-8">
          Log back in to enjoy Kaises
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Enter your email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Enter your password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-full transition"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:underline"
          >
            Having trouble logging in?
          </a>
        </div>

        {/* Social Login */}
        <div className="mt-6">
          <p className="text-center text-sm text-gray-500 mb-3">Login with</p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center w-12 h-12 rounded-full border hover:bg-gray-50 transition">
              <Image src="/google.svg" alt="Google" width={20} height={20} />
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full border hover:bg-gray-50 transition">
              <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full border hover:bg-gray-50 transition">
              <Image src="/apple.svg" alt="Apple" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
