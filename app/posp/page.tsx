"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function POSPPage() {
  return (
<main className="min-h-screen bg-slate-50">
      {/* HERO */}
<section className="gradient-bg relative max-w-7xl mx-auto px-6 pt-8 pb-20 grid lg:grid-cols-2 gap-16 items-center">        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🚀 Become an Insurance Advisor
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Start earning as an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Insurance Partner
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
            Build your own insurance business with zero investment and unlimited earning potential.
          </p>

          {/* FORM */}
          <div className="bg-white/90 backdrop-blur-xl shadow-2xl border border-gray-100 rounded-2xl p-6 max-w-md">

            <input
              type="text"
              placeholder="Enter mobile number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition">
              Get Started →
            </button>

            <p className="text-xs text-gray-500 mt-4">
              By continuing, you agree to{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Terms & Conditions
              </span>
            </p>
          </div>

          {/* TRUST */}
          <div className="flex gap-6 mt-8 text-sm text-gray-500">
            <span>✔ 10K+ Advisors</span>
            <span>✔ Zero Investment</span>
            <span>✔ Fast Payouts</span>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* IMAGE GLOW */}
          <div className="absolute w-[420px] h-[420px] bg-indigo-300 opacity-30 blur-3xl rounded-full"></div>

          {/* IMAGE CARD */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 p-4 rounded-3xl shadow-2xl">
            <Image
              src="/icon/posp.jpeg"
              alt="POSP"
              width={420}
              height={420}
              className="rounded-2xl object-cover"
            />
          </div>
        </motion.div>

      </section>

      {/* BENEFITS SECTION */}
<section className="max-w-7xl mx-auto px-6 py-16">
  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Why Become a POSP Insurance Partner?
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Grow your income, work independently, and build your own insurance
      business with the support of our platform.
    </p>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Unlimited Earning Potential",
        desc: "Earn attractive commissions on every policy you sell with no earning limits.",
        icon: "💰",
      },
      {
        title: "Work From Anywhere",
        desc: "Operate your insurance business from home or anywhere in India.",
        icon: "🌍",
      },
      {
        title: "Instant Policy Issuance",
        desc: "Generate policies instantly through our digital platform.",
        icon: "⚡",
      },
      {
        title: "Multiple Insurance Companies",
        desc: "Offer plans from top insurers to your customers.",
        icon: "🏢",
      },
      {
        title: "Renewal Income",
        desc: "Earn recurring income from policy renewals every year.",
        icon: "🔁",
      },
      {
        title: "Marketing Support",
        desc: "Get promotional materials and expert guidance to grow faster.",
        icon: "📈",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -6 }}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border border-gray-100 transition"
      >
        <div className="text-3xl mb-4">{item.icon}</div>

        <h3 className="font-semibold text-lg text-gray-900 mb-2">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</section>

    </main>
  );
}