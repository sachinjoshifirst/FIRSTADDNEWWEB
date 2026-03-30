"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {

  const [openFAQ, setOpenFAQ] = useState<number | null>(0);


  return (
<main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navbar */}
      <header className="gradient-bg flex justify-between items-center px-8 py-5">
<Image
  src="/icon/logo.png"
  alt="First Advisor Logo"
  width={100}
  height={50}
/>
      <nav className="hidden md:flex gap-6 text-sm items-center">
    <Link  href="#" className="flex items-center gap-1 hover:text-blue-600">
      About Us <ChevronDown size={16} />
    </Link >
          <a href="#" className="flex items-center gap-1 hover:text-blue-600">Insurance Products <ChevronDown size={16} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-600">Insurance Advisors <ChevronDown size={16} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-600">Raise a Claim <ChevronDown size={16} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-600">Support <ChevronDown size={16} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-blue-600">News <ChevronDown size={16} /></a>
        </nav>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg">Login</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Become a POSP
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-bg px-10 pt-16 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mt-4 mb-4 text-black">
              Your insurance journey, simplified
            </h2>

            <p className="mb-6 text-white/90">
              Save up to 20% on health insurance
            </p>

            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Talk to Expert
            </button>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="hidden md:flex justify-center"
          >
            <div className="bg-white/10 backdrop-blur-lg h-[260px] w-full rounded-xl flex items-center justify-center text-white">
              <Image
                src="/heroimg.png"
                alt="Insurance Banner"
                width={700}
                height={300}
                priority
              />
            </div>
          </motion.div>

        </div>

     {/* Insurance Cards (visible without scroll) */}
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
  {[
    { name: "Car Insurance", icon: "/icon/car.png" },
    { name: "Bike Insurance", icon: "/icon/bike.png" },
    { name: "Health Insurance", icon: "/icon/health.png" },
    { name: "Travel Insurance", icon: "/icon/travel.png" },
    { name: "Business Insurance", icon: "/icon/bussines.png" },
    { name: "Term Insurance", icon: "/icon/term.png" },
    { name: "Family Health", icon: "/icon/family.png" },
    { name: "Home Insurance", icon: "/icon/home.png" },
    { name: "Investment Plans", icon: "/icon/invest.png" },
    { name: "View All", icon: "/icon/all.png" },
  ].map((item, index) => (
    <motion.div
      key={index}
      whileHover={{
        y: -8,
        scale: 1.03
      }}
      transition={{ type: "spring", stiffness: 260 }}
      className="bg-white p-4 rounded-xl text-center shadow-sm border border-gray-100 hover:shadow-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer"
    >
      <div className="flex justify-center mb-2">
        <motion.div
          whileHover={{
            scale: 1.25,
            rotate: 8
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={38}
            height={38}
          />
        </motion.div>
      </div>

      <p className="text-sm font-medium text-gray-900 leading-tight">
        {item.name}
      </p>
    </motion.div>
  ))}
</div>

       {/* Impact Stats */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="px-10 mt-10 flex justify-center"
        >
          <div className="flex items-center gap-12 bg-white px-12 py-6 rounded-2xl border border-blue-300 shadow-sm">

            <Image src="/icon/trophy.png" alt="Impact" width={70} height={70} />

            <div>
              <h3 className="text-2xl font-semibold">
                Backed by real <span className="text-blue-600">impact</span>
              </h3>
            </div>

            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-bold text-blue-600">10 lac+</p>
                <p className="text-sm text-gray-600">Customers</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-blue-600">50+</p>
                <p className="text-sm text-gray-600">Insurers</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-blue-600">10k+</p>
                <p className="text-sm text-gray-600">Claims</p>
              </div>
            </div>

          </div>
        </motion.section>
      </section>


   {/* Benefits */}
<section className="px-10 py-20 bg-gray-50 text-center">

  <h3 className="text-4xl font-bold mb-4">
    Benefits of First Advisor <span className="text-blue-600">Insurance</span>
  </h3>

  <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
    Understand your insurance policy options. Identify the best value.
    Enjoy peace of mind.
  </p>

  <div className="grid md:grid-cols-3 gap-10 items-center">

    {/* Left Card */}
    <div className="text-center px-6">
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
        <Image src="/icon/message.png" alt="policy" width={24} height={24} />
      </div>

      <h4 className="text-xl font-semibold mb-2">
        5 Minutes Policy Issuance
      </h4>

      <p className="text-gray-600">
        Say goodbye to queues and paperwork get insured instantly in just five minutes with First Advisor.
      </p>
    </div>

    {/* Center Highlight Card */}
    <div className="bg-blue-600 text-white rounded-3xl p-10 shadow-xl scale-105">
      <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-white/20">
        <Image src="/icon/zap.png" alt="customers" width={28} height={28} />
      </div>

      <h4 className="text-2xl font-semibold mb-3">
        15 Mn+ Happy Customers
      </h4>

      <p className="text-blue-100">
        First Advisor is a trusted household, serving 15Mn+ customers with
        transparent processes, multiple insurers.
      </p>
    </div>

    {/* Right Card */}
    <div className="text-center px-6">
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
        <Image src="/icon/bar.png" alt="support" width={24} height={24} />
      </div>

      <h4 className="text-xl font-semibold mb-2">
        Dedicated Support Team
      </h4>

      <p className="text-gray-600">
        Our expert support team is available seven days a week for policy guidance
        and claim assistance.
      </p>
    </div>

  </div>

</section>

{/* Our Partners */}
<section className="px-10 py-20 bg-white text-center overflow-hidden">

  <h3 className="text-4xl font-bold mb-4">
    Our <span className="text-blue-600">Partners</span>
  </h3>

  <p className="text-gray-600 mb-12">
    We work with leading insurance companies across India
  </p>

  <div className="relative w-full overflow-hidden">
    <div className="flex gap-16 animate-scroll whitespace-nowrap items-center">

      <Image src="/partners/digit.png" alt="digit" width={120} height={60} />
      <Image src="/partners/icici.png" alt="ICICI" width={120} height={60} />
      <Image src="/partners/bajaj.png" alt="Bajaj" width={120} height={60} />
      <Image src="/partners/tata.png" alt="Tata" width={120} height={60} />
      <Image src="/partners/star.png" alt="Star" width={120} height={60} />
      <Image src="/partners/hdfc.png" alt="HDFC" width={120} height={60} />
      <Image src="/partners/sbi.png" alt="SBI" width={120} height={60} />
      <Image src="/partners/new.png" alt="New India" width={120} height={60} />

      {/* duplicate logos for smooth loop */}
      <Image src="/partners/digit.png" alt="digit" width={120} height={60} />
      <Image src="/partners/icici.png" alt="ICICI" width={120} height={60} />
      <Image src="/partners/bajaj.png" alt="Bajaj" width={120} height={60} />
      <Image src="/partners/tata.png" alt="Tata" width={120} height={60} />

    </div>
  </div>

</section>

    {/* Customer Testimonials */}
<section className="px-10 py-20 bg-gray-50 text-center">

  <h3 className="text-4xl font-bold mb-4">
    What Our <span className="text-blue-600">Customers Say</span>
  </h3>

  <p className="text-gray-600 mb-16">
    Trusted by thousands of happy customers across India
  </p>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Testimonial 1 */}
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-left">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/icon/stars.png"
          alt="Customer"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h4 className="font-semibold">Rahul Sharma</h4>
          <p className="text-sm text-gray-500">Delhi</p>
        </div>
      </div>

      <p className="text-gray-600">
        Buying insurance was very simple and fast. The support team helped me
        choose the best policy for my family.
      </p>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg scale-105">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/icon/stars.png"
          alt="Customer"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h4 className="font-semibold">Priya Verma</h4>
          <p className="text-sm text-blue-100">Mumbai</p>
        </div>
      </div>

      <p className="text-blue-100">
        Amazing experience with First Advisor. The claim process was smooth and
        the support team was very responsive.
      </p>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-left">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/icon/stars.png"
          alt="Customer"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h4 className="font-semibold">Amit Patel</h4>
          <p className="text-sm text-gray-500">Ahmedabad</p>
        </div>
      </div>

      <p className="text-gray-600">
        Great platform to compare policies. I saved a lot of time and money.
      </p>
    </div>

  </div>

</section>

      {/* Latest Blogs */}
<section className="px-10 py-20 bg-white text-center">

  <h3 className="text-4xl font-bold mb-4">
    Latest <span className="text-blue-600">Blogs</span>
  </h3>

  <p className="text-gray-600 mb-14">
    Stay updated with insurance tips, guides and industry news
  </p>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Blog 1 */}
    <div className="bg-white border rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      <Image
        src="/icon/blog.png"
        alt="Blog"
        width={500}
        height={260}
        className="w-full h-[200px] object-cover"
      />

      <div className="p-6 text-left">
        <p className="text-sm text-blue-600 mb-2">Insurance Guide</p>

        <h4 className="text-lg font-semibold mb-2">
          How to Choose the Right Health Insurance Plan
        </h4>

        <p className="text-gray-600 text-sm mb-4">
          Learn how to compare policies and pick the best plan for your family.
        </p>

        <button className="text-blue-600 font-medium">
          Read More →
        </button>
      </div>
    </div>

    {/* Blog 2 */}
    <div className="bg-white border rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      <Image
        src="/icon/blog.png"
        alt="Blog"
        width={500}
        height={260}
        className="w-full h-[200px] object-cover"
      />

      <div className="p-6 text-left">
        <p className="text-sm text-blue-600 mb-2">Car Insurance</p>

        <h4 className="text-lg font-semibold mb-2">
          5 Tips to Reduce Your Car Insurance Premium
        </h4>

        <p className="text-gray-600 text-sm mb-4">
          Discover simple ways to save money on your vehicle insurance.
        </p>

        <button className="text-blue-600 font-medium">
          Read More →
        </button>
      </div>
    </div>

    {/* Blog 3 */}
    <div className="bg-white border rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      <Image
        src="/icon/blog.png"
        alt="Blog"
        width={500}
        height={260}
        className="w-full h-[200px] object-cover"
      />

      <div className="p-6 text-left">
        <p className="text-sm text-blue-600 mb-2">Policy Tips</p>

        <h4 className="text-lg font-semibold mb-2">
          Term Insurance vs Life Insurance Explained
        </h4>

        <p className="text-gray-600 text-sm mb-4">
          Understand the difference and choose the right coverage.
        </p>

        <button className="text-blue-600 font-medium">
          Read More →
        </button>
      </div>
    </div>

  </div>

</section>

 {/* FAQ SECTION */}
<section className="py-28 bg-gradient-to-b from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

    {/* LEFT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-5xl font-bold leading-tight mb-6">
        Frequently asked <br />
        <span className="text-blue-600">questions</span>
      </h2>

      {/* User Images */}
      <div className="flex items-center -space-x-3 mb-6">
        <Image
          src="/icon/user.png"
          alt="user"
          width={86}
          height={86}
          className="rounded-full border-4 border-white shadow-md hover:scale-110 transition"
        />
      </div>

      <h4 className="font-semibold text-xl mb-2">
        Still have questions?
      </h4>

      <p className="text-gray-600 mb-6">
        Can’t find the answer you’re looking for? Please chat to our friendly team.
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-3 rounded-xl shadow-lg">
        Get in touch
      </button>
    </motion.div>

    {/* RIGHT SIDE FAQ */}
    <div className="space-y-5">
      {[
        {
          q: "Is there a free trial available?",
          a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a personalized onboarding call.",
        },
        {
          q: "Benefits of Becoming First Advisor Insurance POSP?",
          a: "You can earn commissions by selling insurance policies and help customers choose the right plans.",
        },
        {
          q: "What is your cancellation policy?",
          a: "You can cancel anytime by contacting our support team.",
        },
        {
          q: "Can other info be added to an invoice?",
          a: "Yes, additional details can be included when generating invoices.",
        },
        {
          q: "How does billing work?",
          a: "Billing is handled securely and confirmation is sent instantly.",
        },
        {
          q: "How do I change my account email?",
          a: "You can update your email from your account settings.",
        },
      ].map((faq, index) => (
        <motion.div
          key={index}
          layout
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          whileHover={{ scale: 1.02 }}
          className={`rounded-2xl border transition-all duration-300 ${
            openFAQ === index
              ? "bg-white shadow-lg border-blue-200"
              : "bg-white/80 backdrop-blur border-gray-200 hover:border-blue-300"
          }`}
        >
          <button
            className="w-full flex justify-between items-center text-left p-6"
            onClick={() =>
              setOpenFAQ(openFAQ === index ? null : index)
            }
          >
            <span className="font-semibold text-gray-900">
              {faq.q}
            </span>

            <motion.span
              animate={{ rotate: openFAQ === index ? 180 : 0 }}
              className="text-blue-600 text-2xl font-bold"
            >
              +
            </motion.span>
          </button>

          <AnimatePresence>
            {openFAQ === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="px-6 pb-6"
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>

  </div>
</section>

{/* Get Mobile App */}
<section className="py-20 bg-white">

  <div className="max-w-6xl mx-auto px-6">
    
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-600 text-white rounded-3xl px-10 py-16 grid md:grid-cols-2 gap-12 items-center"
    >

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-bold mb-4">
          Get the First Advisor App
        </h3>

        <p className="mb-8 text-blue-100">
          Compare policies, manage your insurance and raise claims easily
          from our mobile app.
        </p>

        <div className="flex gap-4">
          <motion.div whileHover={{ scale: 1.08 }}>
            <Image
              src="/icon/google-play.png"
              alt="Google Play"
              width={160}
              height={50}
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.08 }}>
            <Image
              src="/icon/app-store.png"
              alt="App Store"
              width={160}
              height={50}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="flex justify-center"
      >
        <Image
          src="/icon/mobile.png"
          alt="Mobile App"
          width={380}
          height={380}
        />
      </motion.div>

    </motion.div>

  </div>

</section>

   {/* Footer */}
<footer className="bg-white pt-16">

  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

    {/* Company Info */}
    <div>
      <Image
        src="/icon/logo.png"
        alt="First Advisor"
        width={140}
        height={60}
        className="mb-4"
      />

      <p className="text-gray-600 text-sm">
        First Advisor helps you compare and buy insurance policies easily.
        Trusted by thousands of customers across India.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li>About Us</li>
        <li>Insurance Products</li>
        <li>Insurance Advisors</li>
        <li>Raise a Claim</li>
        <li>Contact Us</li>
      </ul>
    </div>

    {/* Insurance */}
    <div>
      <h4 className="font-semibold mb-4 text-gray-900">Insurance</h4>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li>Car Insurance</li>
        <li>Health Insurance</li>
        <li>Bike Insurance</li>
        <li>Travel Insurance</li>
        <li>Term Insurance</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="font-semibold mb-4 text-gray-900">Contact</h4>

      <p className="text-gray-600 text-sm mb-2">
        support@firstadvisor.in
      </p>

      <p className="text-gray-600 text-sm mb-4">
        +91 98765 43210
      </p>

      <div className="flex gap-4">
        <Image src="/icon/facebook.png" alt="fb" width={24} height={24} />
        <Image src="/icon/twitter.png" alt="tw" width={24} height={24} />
        <Image src="/icon/linkedin.png" alt="ln" width={24} height={24} />
      </div>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="mt-12 py-6 text-center text-gray-500 text-sm">
    © 2026 First Advisor. All rights reserved.
  </div>

</footer>



    </main>
  );
}