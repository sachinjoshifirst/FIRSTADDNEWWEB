"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function AboutUs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  // ✅ FIXED: Proper typing
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // ✅ FIXED: Proper typing (no TS error now)
  const card: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut", // now valid because of Variants typing
      },
    },
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 blur-3xl opacity-20 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 blur-3xl opacity-20 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

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
                <p className="text-3xl font-bold text-blue-600">80K+</p>
                <p className="text-sm text-gray-500">Claims</p>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg">
              Get Started
            </button>
          </motion.div>

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


    {/* LEADERSHIP SECTION */}
<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <motion.h3
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-6"
    >
      Meet Our Leadership
    </motion.h3>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-gray-600 mb-16 max-w-3xl mx-auto"
    >
      Our leadership team brings deep industry expertise, innovation, and a
      customer-first mindset to deliver the best insurance solutions.
    </motion.p>

    {/* Leaders Data */}
    {(() => {
      const leaders = [
        {
          name: "Mr. Jagdish Prasad Aggarwalla",
          role: "Founder",
          img: "/icon/founder.jpeg",
          desc: "He started his insurance career in 1972 with National Insurance Company and founded First Advisor Group in 2006. His experience and strong ethics built a foundation of trust, transparency, and customer focus that still guide the company today.",
        },
        {
          name: "Mr. Vikas Tulsyan",
          role: "Co-Founder & Director",
          img: "/icon/co_vikassir.jpg",
          desc: "He is an IIM alumnus with over 20 years of experience in the insurance industry since 2000. He specializes in strategy, business development, and customer relationships, and leads with a strong customer-first approach." },
        {
          name: "Mr. Chetan Tulsyan",
          role: "Co-Founder & Director",
          img: "/icon/co_sirnew.jpeg",
          desc: "He has nearly 20 years of experience in the insurance sector since 2003, with expertise in operations, client servicing, and product innovation. His hands-on leadership and focus on customer relationships help strengthen the company’s growth and efficiency.",
        },
      ];

      return (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-10"
        >
          {leaders.map((leader, i) => (
          <motion.div
  key={i}
  variants={card}
  whileHover={{ scale: 1.03 }}
  className="relative rounded-2xl overflow-hidden shadow-lg group"
>
  {/* FULL IMAGE */}
  <div className="relative w-full h-[380px]">
    <Image
      src={leader.img}
      alt={leader.name}
      fill
      className="object-cover"
    />
  </div>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

  {/* CONTENT AT BOTTOM */}
  <div className="absolute bottom-0 p-6 text-white">
    <h4 className="text-xl font-semibold">{leader.name}</h4>
    <p className="text-blue-300 text-sm mb-2">{leader.role}</p>

    <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition duration-300">
      {leader.desc}
    </p>
  </div>
</motion.div>
          ))}
        </motion.div>
      );
    })()}
  </div>
</section>

{/* MISSION VISION GOAL */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto px-6">

    <motion.h3
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center mb-16"
    >
      Our Purpose & Direction
    </motion.h3>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="grid md:grid-cols-3 gap-8"
    >

      {/* MISSION */}
      <motion.div
        variants={card}
        whileHover={{ y: -8 }}
        className="bg-blue-700 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden"
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          🎯
        </div>

        <h4 className="text-3xl font-semibold mt-10 mb-6 text-center">Mission</h4>

        <ol className="space-y-4 text-sm leading-relaxed">
          <li>
            Our mission is to redefine the 
            insurance experience through 
            simplicity, trust, and 
            innovation, providing 
            protection that gives every 
            customer confidence, security, 
            and peace of mind.
          </li>
          <li>
            To provide trusted insurance 
            solutions that protect lives and 
            livelihoods, while empowering 
            agents and local communities 
            to create sustainable value and 
            impact.
          </li>
        </ol>
      </motion.div>

      {/* VISION */}
      <motion.div
        variants={card}
        whileHover={{ y: -8 }}
        className="bg-red-500 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden"
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center shadow-lg">
          👁️
        </div>

        <h4 className="text-3xl font-semibold mt-10 mb-6 text-center">Vision</h4>

        <ol className="space-y-4 text-sm leading-relaxed">
          <li>
            To lead the insurance industry 
            through innovation, 
            transparency, and 
            community-focused solutions, 
            making financial security 
            accessible and meaningful for 
            all.
          </li>
          <li>
            To create a world where 
              insurance not only protects but 
              also empowers agents, 
              customers, and local 
              communities to grow, innovate, 
              and succeed together.
          </li>
        </ol>
      </motion.div>

      {/* GOAL */}
      <motion.div
        variants={card}
        whileHover={{ y: -8 }}
        className="bg-blue-800 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden"
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          💎
        </div>

        <h4 className="text-3xl font-semibold mt-10 mb-6 text-center">Goal</h4>

        <ol className="space-y-4 text-sm leading-relaxed">
          <li>
            Ensure individuals and 
            businesses have access to 
            reliable, transparent, and 
            customer-centric insurance 
            solutions that safeguard their 
            future
          </li>
          <li>
             Build a digitally-enabled 
              network of insurance agents 
              who act as 
              micro-entrepreneurs, creating 
              opportunities for growth, 
              livelihood, and community 
              impact.
          </li>
        </ol>
      </motion.div>

    </motion.div>
  </div>
</section>

      {/* SERVICES */}
      <section className="px-10 py-20 bg-white text-center max-w-6xl mx-auto">

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Our Services
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          At First Advisor, we offer a wide range of insurance products.
        </motion.p>

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
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition">
                <span className="text-blue-600 group-hover:text-white text-xl">★</span>
              </div>

              <h4 className="text-xl font-semibold mb-2">{title}</h4>

              <p className="text-gray-600 text-sm">
                Smart, simple and reliable insurance solutions.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* APP SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-600 text-white rounded-3xl px-10 py-16 grid md:grid-cols-2 gap-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-bold mb-4">Get the First Advisor App</h3>

              <p className="text-2xl font-semibold mb-5">
                Manage all your insurance anytime.
              </p>

              <div className="flex gap-4">
                <Image src="/icon/google-playnew.png" alt="Google Play" width={160} height={50} />
                <Image src="/icon/app-storenew.png" alt="App Store" width={160} height={50} />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex justify-center items-end"
            >
              <Image
                src="/icon/mobilenew.png"
                alt="Mobile"
                width={380}
                height={380}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}