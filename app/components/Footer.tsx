"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white pt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <Image
            src="/icon/logonew.png"
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
          <p className="text-gray-600 text-sm mb-2">support@firstadvisor.in</p>
          <p className="text-gray-600 text-sm mb-4">+91 98765 43210</p>
          <div className="flex gap-4">
            <Image src="/icon/facebook.png" alt="fb" width={24} height={24} />
            <Image src="/icon/twitter.png" alt="tw" width={24} height={24} />
            <Image src="/icon/linkedin.png" alt="ln" width={24} height={24} />
          </div>
        </div>
      </div>

      <div className="mt-12 py-6 text-center text-gray-500 text-sm">
        © 2026 First Advisor. All rights reserved.
      </div>
    </footer>
  );
}