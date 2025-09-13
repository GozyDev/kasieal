"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginSection() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 px-4 py-8 relative">
      <button
        className="bg-black p-3.5 absolute top-5 left-5 rounded-3xl text-sm bg-gradient-to-l from-purple-800 to-blue-800 cursor-pointer"
        onClick={() => router.back()}
      >
        Go back
      </button>
      <div className="w-full max-w-xl flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Right side - Login Form */}
        <div className="w-full  p-8 md:p-10 flex flex-col justify-center">
          <div className="text-center mb-2">
            <h2 className="text-2xl font-bold text-gray-800">Welcome back</h2>
            <p className="text-gray-500 mt-2">Log back in to enjoy Kaises</p>
          </div>

          {/* Form */}
          <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-black text-md"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition text-black text-md"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>

              <a
                href="#"
                className="text-sm font-medium text-purple-600 hover:text-purple-500 transition"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition flex items-center justify-center gap-2 disabled:opacity-75"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Login <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm">
              Or continue with
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition p-3">
              <Image
                src="/Authh/google.png"
                alt="Google"
                width={20}
                height={20}
              />
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition p-3">
              <Image
                src="/Authh/facebook.png"
                alt="Facebook"
                width={20}
                height={20}
              />
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition p-3">
              <Image
                src="/Authh/apple.png"
                alt="Apple"
                width={20}
                height={20}
              />
            </button>
          </div>

          {/* Sign up link */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="signup"
                className="font-medium text-purple-600 hover:text-purple-500 transition"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
