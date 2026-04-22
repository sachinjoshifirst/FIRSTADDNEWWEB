"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Users, Flame, CheckCircle } from "lucide-react";

export default function BusinessInsurancePage() {
  const services = [
    {
      title: "Property Protection",
      desc: "Secure your office, shop, and physical assets",
      icon: Building2,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Legal Safety",
      desc: "Protection from lawsuits and liability risks",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Team Security",
      desc: "Cover your employees and workforce",
      icon: Users,
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "Risk Cover",
      desc: "Fire, flood, and unexpected business losses",
      icon: Flame,
      color: "from-orange-500 to-pink-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-16">

      <div className="max-w-7xl mx-auto space-y-24">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
              Business Insurance
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              Protect your business with
              <span className="text-blue-600"> confidence</span>
            </h1>

            <p className="text-slate-600 text-lg">
              Simple, smart, and flexible insurance plans designed to secure your business from risks and uncertainties.
            </p>

            <div className="space-y-3">
              {[
                "Fast claim assistance",
                "Flexible coverage options",
                "Trusted risk protection",
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="text-green-500" size={18} />
                  <span>{t}</span>
                </div>
              ))}
            </div>


          </div>

          {/* RIGHT FORM (soft glass look) */}
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl opacity-10 rounded-3xl"></div>

            <div className="relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl space-y-4">

              <h2 className="text-xl font-semibold text-slate-800">
                Request Business Quote
              </h2>

              <input className="w-full px-4 py-3 rounded-xl bg-slate-100 focus:outline-none" placeholder="Full Name" />
              <input className="w-full px-4 py-3 rounded-xl bg-slate-100 focus:outline-none" placeholder="Mobile Number" />
              <input className="w-full px-4 py-3 rounded-xl bg-slate-100 focus:outline-none" placeholder="Business Name" />

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
                Get Plans →
              </button>

              <p className="text-xs text-slate-500 text-center">
                No spam. Only relevant offers.
              </p>

            </div>
          </div>

        </div>

        {/* SERVICES (NO BOX FEEL - FLOATING STYLE) */}
        <div className="grid md:grid-cols-4 gap-8">

          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group"
            >

              <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition duration-300">

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  <item.icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

        {/* STATS SECTION (CLEAN & MODERN) */}
        <div className="text-center space-y-10">

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Trusted by growing businesses
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <p className="text-4xl font-bold text-blue-600">10K+</p>
              <p className="text-slate-500 mt-2">Businesses Protected</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-green-600">99%</p>
              <p className="text-slate-500 mt-2">Claim Success Rate</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-purple-600">24/7</p>
              <p className="text-slate-500 mt-2">Support Available</p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}