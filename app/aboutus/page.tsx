"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutUs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const card = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

     <section className="py-15 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 blur-3xl opacity-30 rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE SECTION ✅ */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex justify-center"
      >
        {/* Glow */}
        <div className="absolute w-[350px] h-[350px] bg-blue-300 opacity-30 blur-3xl rounded-full"></div>

        {/* Image Card */}
        <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 p-4 rounded-3xl shadow-2xl">
          <Image
            src="/icon/aboutusnew.jpeg" // 👉 add a professional image here
            alt="About First Advisor"
            width={520}
            height={520}
            className="rounded-2xl object-cover"
          />
        </div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          About <span className="text-blue-600">First Advisor</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          First Advisor is one of India’s trusted insurance platforms, helping individuals and businesses protect what matters most. We provide simple, transparent, and affordable insurance solutions tailored to your needs.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Our mission is to empower customers with the right knowledge and tools to make confident insurance decisions.
        </p>

        {/* FEATURES */}
   <div className="grid grid-cols-2 gap-4 text-lg">
  <div className="flex items-center gap-2">
    <span className="text-green-500 font-bold">✔</span>
    <span className="text-blue-600 font-semibold">Trusted Advisors</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-green-500 font-bold">✔</span>
    <span className="text-blue-600 font-semibold">Fast Claims</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-green-500 font-bold">✔</span>
    <span className="text-blue-600 font-semibold">24/7 Support</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-green-500 font-bold">✔</span>
    <span className="text-blue-600 font-semibold">Transparent Pricing</span>
  </div>
</div>

      </motion.div>

    </div>
  </div>
</section>
     

  {/* Services */}
<section className="px-10 py-20 bg-white text-center max-w-6xl mx-auto">
  
  {/* Title */}
  <motion.h3
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl font-bold mb-6"
  >
    Our Services
  </motion.h3>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    viewport={{ once: true }}
    className="text-gray-600 mb-16 max-w-3xl mx-auto"
  >
    At First Advisor, we offer a wide range of insurance products, carefully crafted to meet the diverse needs of individuals and businesses:
  </motion.p>

  {/* Cards */}
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="grid md:grid-cols-3 gap-10"
  >
    {[
      {
        title: "Car Insurance",
        desc: "Protect your vehicle with coverage against accidents, damage, and theft."
      },
      {
        title: "Bike Insurance",
        desc: "Secure your two-wheeler with reliable and flexible insurance plans."
      },
      {
        title: "Commercial Insurance",
        desc: "Comprehensive protection for your business assets and operations."
      },
      {
        title: "Health Insurance",
        desc: "Access quality healthcare with plans designed for your family."
      },
      {
        title: "Term Insurance",
        desc: "Ensure financial security for your loved ones when it matters most."
      },
      {
        title: "Investment Plans",
        desc: "Grow your wealth with smart, goal-based investment solutions."
      },
    ].map((service, i) => (
      <motion.div
        key={i}
        variants={card}
        whileHover={{
          scale: 1.05,
          y: -10,
        }}
        className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer group"
      >
        {/* Top accent line */}
        <div className="h-1 w-12 bg-blue-600 mb-4 mx-auto group-hover:w-20 transition-all duration-300"></div>

        <h4 className="text-xl font-semibold mb-3 text-blue-600">
          {service.title}
        </h4>

        <p className="text-gray-600 text-sm leading-relaxed">
          {service.desc}
        </p>
      </motion.div>
    ))}
  </motion.div>
</section>

      {/* FAQ (optional, can be kept as Home style) */}
      {/* ...mobile... */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-600 text-white rounded-3xl px-10 py-16 grid md:grid-cols-2 gap-12"
    >
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center"
      >
        <h3 className="text-4xl font-bold mb-4">Get the First Advisor App</h3>
            <p className="text-2xl font-semibold mb-5">
            Get control of all your insurance needs anywhere, anytime.        </p>
      <div>
  <div className="flex items-center gap-3">
    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
    </svg>
    Compare different insurance policies
  </div>

  <div className="flex items-center gap-3">
    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
    </svg>
    Track your policy status on the go
  </div>

  <div className="flex items-center gap-3">
    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
    </svg>
    Download your policy with a single tap
  </div>
</div>
     

        <div className="flex gap-4">
          <motion.div whileHover={{ scale: 1.08 }}>
            <Image src="/icon/google-playnew.png" alt="Google Play" width={160} height={50} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.08 }}>
            <Image src="/icon/app-storenew.png" alt="App Store" width={160} height={50} />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image (Bottom Aligned) */}

      <div className="flex flex-col justify-end items-center">
              <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="flex justify-center"
      >
        <Image
          src="/icon/mobilenew.png"
          alt="Mobile App"
          width={380}
          height={380}
          className="object-contain"
        />
         </motion.div>
      </div>

    </motion.div>
  </div>
</section>


    </main>
  );
}