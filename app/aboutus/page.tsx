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

   <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 blur-3xl opacity-20 rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 blur-3xl opacity-20 rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold leading-tight mb-6">
        We Simplify <span className="text-blue-600">Insurance</span> for You
      </h1>

      <p className="text-gray-600 text-lg mb-6">
        First Advisor is one of India’s most trusted platforms helping individuals
        and businesses compare, choose and buy the right insurance with confidence.
      </p>

      {/* Trust badges */}
      <div className="flex gap-6 mb-8">
        <div>
          <p className="text-3xl font-bold text-blue-600">10L+</p>
          <p className="text-sm text-gray-500">Customers</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">50+</p>
          <p className="text-sm text-gray-500">Insurers</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">10K+</p>
          <p className="text-sm text-gray-500">Claims</p>
        </div>
      </div>

      {/* CTA */}
      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg">
        Get Started
      </button>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute w-[350px] h-[350px] bg-blue-200 blur-3xl opacity-30 rounded-full"></div>

      <Image
        src="/icon/aboutusnew.jpeg"
        alt="About"
        width={520}
        height={520}
        className="rounded-3xl shadow-2xl"
      />
    </motion.div>


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
  className="grid md:grid-cols-3 gap-10"
>
  {[
    "Car Insurance",
    "Bike Insurance",
    "Commercial Insurance",
    "Health Insurance",
    "Term Insurance",
    "Investment Plans",
  ].map((title, i) => (
    <motion.div
      key={i}
      variants={card}
      whileHover={{ y: -10, scale: 1.05 }}
      className="p-8 bg-white rounded-2xl border hover:border-blue-300 shadow-md hover:shadow-xl transition group"
    >
      {/* Icon circle */}
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition">
        <span className="text-blue-600 group-hover:text-white text-xl">★</span>
      </div>

      <h4 className="text-xl font-semibold mb-2 text-gray-900">
        {title}
      </h4>

      <p className="text-gray-600 text-sm">
        Smart, simple and reliable insurance solutions tailored for your needs.
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