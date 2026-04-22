"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type NavbarProps = {
  openClaimModal: (value: boolean) => void;
  openRenewModal: (value: boolean) => void;
};

export default function Navbar({
  openClaimModal,
  openRenewModal,
}: NavbarProps) {
  const [openInsurance, setOpenInsurance] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileInsurance, setMobileInsurance] = useState(false);
  const [mobileSupport, setMobileSupport] = useState(false);

  const pathname = usePathname();

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  const insuranceItems = [
    { name: "Health Insurance", icon: "/icon/health.png", link: "/insurance/health" },
    { name: "Car Insurance", icon: "/icon/car.png", link: "/insurance/car" },
    { name: "Bike Insurance", icon: "/icon/bike.png", link: "/insurance/bike" },
    { name: "Home Insurance", icon: "/icon/home.png", link: "/insurance/home" },
    { name: "Term Insurance", icon: "/icon/term.png", link: "/insurance/term" },
    { name: "Investment", icon: "/icon/invest.png", link: "/insurance/investment" },
    { name: "Business Insurance", icon: "/icon/bussines.png", link: "/insurance/bussiness" },
    { name: "Travel Insurance", icon: "/icon/travel.png", link: "/insurance/travel" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="gradient-bg sticky top-0 z-50 flex justify-between items-center px-5 py-4 backdrop-blur-md">

        {/* Logo */}
        <Link href="/">
          <Image src="/icon/logo.png" alt="logo" width={110} height={50} />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm items-center">

          <Link href="/aboutus" className="hover:text-blue-600">
            About Us
          </Link>

          {/* Insurance Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenInsurance(true)}
            onMouseLeave={() => setOpenInsurance(false)}
          >
            <button className="flex items-center gap-1">
              Insurance Products <ChevronDown size={16} />
            </button>

            {openInsurance && (
              <div className="absolute top-full pt-4 w-[340px] bg-white rounded-2xl shadow-xl p-4">
                {insuranceItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    onClick={() => setOpenInsurance(false)}
                    className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <Image src={item.icon} alt="" width={24} height={24} />
                      <span>{item.name}</span>
                    </div>
                    <ChevronRight size={16} />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => openRenewModal(true)}>
            Renew Policy
          </button>

          <Link href="/advisors">Insurance Advisors</Link>

          <button onClick={() => openClaimModal(true)}>Claim</button>

          {/* Support */}
          <div
            className="relative"
            onMouseEnter={() => setOpenSupport(true)}
            onMouseLeave={() => setOpenSupport(false)}
          >
            <button className="flex items-center gap-1">
              Support <ChevronDown size={16} />
            </button>

            {openSupport && (
              <div className="absolute top-full mt-4 w-[320px] bg-white rounded-2xl shadow-xl p-4 space-y-2">

                <Link href="/renew-policy" className="flex gap-3 p-2 hover:bg-gray-100 rounded">
                  <Image src="/icon/renew.png" alt="" width={18} height={18} />
                  Renew Policy
                </Link>

                <Link href="/track-policy" className="flex gap-3 p-2 hover:bg-gray-100 rounded">
                  <Image src="/icon/track.png" alt="" width={18} height={18} />
                  Track Policy
                </Link>

                <Link href="/download-policy" className="flex gap-3 p-2 hover:bg-gray-100 rounded">
                  <Image src="/icon/downloadpol.png" alt="" width={18} height={18} />
                  Download Policy
                </Link>

                <div className="flex gap-3 p-2">
                  <Image src="/icon/calnew.png" alt="" width={18} height={18} />
                  <div>
                    <p>Call Us</p>
                    <p className="text-sm text-gray-500">18008909195</p>
                  </div>
                </div>

              </div>
            )}
          </div>
        </nav>

        {/* RIGHT BUTTONS (DESKTOP) */}
        <div className="hidden md:flex gap-3">
          <button className="px-4 py-2 border rounded-lg">Login</button>
          <Link
            href="https://erp.firstadvisorsinsurance.com/posp/join-our-network"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg"
            target="_blank"
          >
            Become POSP
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setMobileMenu(true)}>
          <Menu size={26} />
        </button>
      </header>

      {/* MOBILE DRAWER */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[9999]">

          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenu(false)}
          />

          <div
            className="absolute left-0 top-0 h-full w-[85%] max-w-[340px] bg-white p-5 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between mb-6">
              <h2 className="font-semibold">Menu</h2>
              <X onClick={() => setMobileMenu(false)} />
            </div>

            <div className="flex flex-col gap-2">

              <Link href="/aboutus" className="block py-3 px-2 hover:bg-gray-100">
                About Us
              </Link>

              {/* Insurance */}
              <div>
                <button
                  className="flex justify-between w-full py-3 px-2 hover:bg-gray-100 border-t"
                  onClick={() => setMobileInsurance(!mobileInsurance)}
                >
                  Insurance <ChevronDown />
                </button>

                {mobileInsurance && (
                  <div className="pl-4 mt-2 space-y-2">
                    {insuranceItems.map((item, i) => (
                      <Link key={i} href={item.link} className="flex gap-2 text-sm">
                        <Image src={item.icon} alt="" width={18} height={18} />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* FIXED ITEMS */}
              <div className="flex flex-col divide-y border-t">

                <button
                  onClick={() => {
                    openRenewModal(true);
                    setMobileMenu(false);
                  }}
                  className="py-3 px-2 text-left"
                >
                  Renew Policy
                </button>

                <Link
                  href="/advisors"
                  className="py-3 px-2"
                  onClick={() => setMobileMenu(false)} 
                >
                  Insurance Advisors
                </Link>

                <button
                  onClick={() => {
                    openClaimModal(true);
                    setMobileMenu(false);
                  }}
                  className="py-3 px-2 text-left" 
                >
                  Claim
                </button>

              </div>

              {/* Support */}
              <div>
                <button
                  className="flex justify-between w-full py-3 px-2 border-t"
                  onClick={() => setMobileSupport(!mobileSupport)}
                >
                  Support <ChevronDown />
                </button>

                {mobileSupport && (
                  <div className="pl-4 mt-2 space-y-2 text-sm">
                    <Link href="/renew-policy">Renew Policy</Link>
                    <Link href="/track-policy">Track Policy</Link>
                    <Link href="/download-policy">Download Policy</Link>
                    <p className="text-gray-500">Call: 18008909195</p>
                  </div>
                )}
              </div>

              <button className="w-full border py-2 rounded mt-4">
                Login
              </button>

              <Link
                href="https://erp.firstadvisorsinsurance.com/posp/join-our-network"
                className="block text-center bg-blue-600 text-white py-2 rounded"
              >
                Become POSP
              </Link>

            </div>
          </div>
        </div>
      )}
    </>
  );
}