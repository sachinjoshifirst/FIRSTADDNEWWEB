"use client";

import { TrendingUp, Shield, Wallet, Sparkles } from "lucide-react";

export default function InvestmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#eef3ff] via-white to-[#ffeef2]">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - FRESH DESIGN */}
        <div className="space-y-8">

          <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
            Smart Investment Platform
          </span>

          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Build wealth
            <span className="text-blue-600"> effortlessly</span>
          </h1>

          <p className="text-gray-500 text-lg">
            Start investing with smart plans designed for growth, safety, and long-term financial freedom.
          </p>

          {/* FEATURE CARDS (MODERN FLOAT STYLE) */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-sm">
              <Wallet className="text-blue-600" />
              <p className="mt-2 font-medium">Start Small</p>
              <p className="text-xs text-gray-500">Begin with low investment</p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-sm">
              <TrendingUp className="text-green-600" />
              <p className="mt-2 font-medium">High Growth</p>
              <p className="text-xs text-gray-500">Long-term returns</p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-sm">
              <Shield className="text-purple-600" />
              <p className="mt-2 font-medium">Safe Plans</p>
              <p className="text-xs text-gray-500">Balanced risk options</p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-sm">
              <Sparkles className="text-orange-500" />
              <p className="mt-2 font-medium">Smart Choice</p>
              <p className="text-xs text-gray-500">AI recommendations</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="relative">

          <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-8 space-y-5">

            <h2 className="text-2xl font-semibold text-center">
              Get Your Free Plan
            </h2>

            <p className="text-sm text-gray-500 text-center">
              Fill details and we’ll suggest best investment options
            </p>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
              Get Investment Plan →
            </button>

            <p className="text-xs text-gray-500 text-center">
              No spam. 100% secure data.
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}