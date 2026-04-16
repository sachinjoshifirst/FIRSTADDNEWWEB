"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Users, Flame, CheckCircle } from "lucide-react";

export default function BusinessInsurancePage() {
  const services = [
    {
      title: "Property Insurance",
      desc: "Coverage for your commercial property",
      icon: Building2,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Liability Insurance",
      desc: "Protect against legal risks",
      icon: ShieldCheck,
      bg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Employee Insurance",
      desc: "Secure your workforce",
      icon: Users,
      bg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Fire Insurance",
      desc: "Protection from fire damage",
      icon: Flame,
      bg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-3xl shadow-sm border">
          {/* LEFT */}
          <div className="space-y-5">
            <p className="text-blue-600 font-medium">Office Package Policy</p>

            <h1 className="text-4xl font-bold text-slate-800 leading-snug">
              Get <span className="text-blue-600">₹50 Lakh</span> cover for just
              <span className="text-blue-600"> ₹4,000/year</span>
            </h1>

            <div className="flex gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                <span>Fire damage to building</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                <span>Electronic equipment cover</span>
              </div>
            </div>

            <div className="bg-slate-100 p-4 rounded-xl mt-4">
              <p className="text-sm text-slate-600">10+ insurance partners</p>
              <div className="flex gap-4 mt-3 text-xs text-slate-500">
                <span>HDFC</span>
                <span>Bajaj</span>
                <span>TATA AIG</span>
                <span>Shriram</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-slate-50 p-6 rounded-2xl border shadow-sm space-y-4">
            <h2 className="text-xl font-semibold text-slate-800">
              Get custom plans
            </h2>

            <input
              type="text"
              placeholder="Company name"
              className="w-full border rounded-xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Mobile number"
              className="w-full border rounded-xl px-4 py-3 outline-none"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700">
              View plans →
            </button>

            <p className="text-xs text-slate-500 text-center">
              We don’t spam. 100% secure.
            </p>
          </div>
        </div>

        {/* SERVICES */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition border"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg}`}
              >
                <item.icon className={`${item.iconColor}`} />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-800">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
