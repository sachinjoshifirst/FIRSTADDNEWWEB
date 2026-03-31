"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [openInsurance, setOpenInsurance] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const pathname = usePathname();

  const insuranceItems = [
    { name: "Health Insurance", icon: "/icon/health.png", link: "/insurance/health" },
    { name: "Car Insurance", icon: "/icon/car.png", link: "/insurance/car" },
    { name: "Bike Insurance", icon: "/icon/bike.png", link: "/insurance/bike" },
    { name: "Life Insurance", icon: "/icon/lifeins.png", link: "/insurance/life" },
    { name: "Term Insurance", icon: "/icon/term.png", link: "/insurance/term" },
    { name: "Investment", icon: "/icon/invest.png", link: "/insurance/investment" },
    { name: "Business Insurance", icon: "/icon/bussines.png", link: "/insurance/business" },
    { name: "Travel Insurance", icon: "/icon/travel.png", link: "/insurance/travel" },
  ];

  return (
<header className="gradient-bg sticky top-0 z-50 flex justify-between items-center px-8 py-5 backdrop-blur-md">  
      {/* Logo */}
      <Link href="/">
        <Image
          src="/icon/logo.png"
          alt="First Advisor Logo"
          width={110}
          height={50}
          className="cursor-pointer"
        />
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex gap-8 text-sm items-center relative">

        {/* About Us */}
        <Link
          href="/aboutus"
          className={`flex items-center gap-1 font-medium transition ${
            pathname === "/aboutus" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"
          }`}
        >
          About Us
        </Link>

        {/* Insurance Dropdown */}
       <div
  className="relative"
  onMouseEnter={() => setOpenInsurance(true)}
  onMouseLeave={() => setOpenInsurance(false)}
>
  <button className="flex items-center gap-1 hover:text-blue-600 font-medium">
    Insurance Products <ChevronDown size={16} />
  </button>

  {/* Dropdown */}
  <div
    className={`absolute left-0 top-full pt-4 transition-all duration-200 ${
      openInsurance ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
  >
    <div className="w-[340px] bg-white rounded-2xl shadow-2xl p-4">
      {insuranceItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 transition"
        >
          <div className="flex items-center gap-4">
            <Image
              src={item.icon}
              alt={item.name}
              width={26}
              height={26}
            />
            <span className="font-medium text-gray-800">
              {item.name}
            </span>
          </div>

          <ChevronRight size={18} className="text-gray-400" />
        </Link>
      ))}
    </div>
  </div>
</div>

        {/* Other Menu Items */}
        <Link
          href="/advisors"
          className="hover:text-blue-600 font-medium"
        >
          Insurance Advisors
        </Link>

        <Link
          href="/claims"
          className="hover:text-blue-600 font-medium"
        >
          Raise a Claim
        </Link>

  <div
  className="relative"
  onMouseEnter={() => setOpenSupport(true)}
  onMouseLeave={() => setOpenSupport(false)}
>
  <button className="flex items-center gap-1 font-medium hover:text-blue-600">
    Support <ChevronDown size={16} />
  </button>

  <div
    className={`absolute left-0 top-full pt-6 transition-all duration-200 ${
      openSupport ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
  >
    <div className="w-[320px] bg-white rounded-2xl shadow-2xl p-4 space-y-2">
      
      <Link
        href="/renew-policy"
        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 transition"
      >
        <Image src="/icon/renew.png" alt="renew" width={18} height={18} />
        <span className="font-medium text-gray-800">Renew Policy</span>
      </Link>

      <Link
        href="/track-policy"
        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 transition"
      >
        <Image src="/icon/track.png" alt="track" width={18} height={18} />
        <span className="font-medium text-gray-800">Track Policy</span>
      </Link>

      <Link
        href="/download-policy"
        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 transition"
      >
        <Image src="/icon/downloadpol.png" alt="download" width={18} height={18} />
        <span className="font-medium text-gray-800">Download Policy</span>
      </Link>

      <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 transition cursor-pointer">
        <Image src="/icon/calnew.png" alt="call" width={18} height={18} />
        <div>
          <p className="font-medium text-gray-800">Call Us</p>
          <p className="text-gray-500 text-sm">18008909195</p>
        </div>
      </div>

    </div>
  </div>
</div>

        <Link
          href="/news"
          className="hover:text-blue-600 font-medium"
        >
          News
        </Link>
      </nav>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
          Login
        </button>

      <Link
  href="/posp"
  className="px-5 py-2 bg-blue-600 text-white rounded-lg"
>
  Become POSP
</Link>
      </div>
    </header>
  );
}