"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CarInsurancePage() {
  const [carNumber, setCarNumber] = useState("");
   const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <main className="bg-white text-gray-900">

   {/* HERO SECTION */}
<section className="bg-gray-100 py-10 px-4 md:px-12">
  <div className="max-w-6xl mx-auto">

  
    {/* TITLE */}
  

    {/* CARD */}
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">

      {/* LEFT CONTENT */}
      <div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6  inline-block px-3 py-1 rounded">
      Car Insurance
    </h1>

        

        {/* SUBTITLE */}
        <h2 className="text-2xl md:text-2xl font-semibold mb-4">
          Car insurance starting from{" "}
          <span className="px-2 py-1 rounded font-bold">
            ₹ 6/day*
          </span>
        </h2>

        {/* STEPS */}
        <div className="flex items-center text-sm text-gray-500 gap-2 mb-6">
          <span>Enter your car number</span>
        </div>


        {/* INPUT */}
        <div className="mb-4 space-y-2">

          {/* Name */}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Mobile */}
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter mobile number"
                  maxLength={10}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

          <input
            type="text"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

             
          
        </div>
        

        {/* BUTTON */}
        <button className="bg-blue-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition">
          Sumbmit
        </button>

        {/* TERMS */}
        <p className="text-xs text-gray-500 mt-3">
          By clicking, I agree to{" "}
          <span className="text-blue-600 underline cursor-pointer">
            terms & conditions
          </span>{" "}
          and{" "}
          <span className="text-blue-600 underline cursor-pointer">
            privacy policy
          </span>.
        </p>

        {/* EXTRA LINK */}
        <p className="text-blue-600 mt-4 cursor-pointer text-sm">
          Brand new car? →
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <Image
          src="/banner/carinsurance.png" // replace with your illustration
          alt="insurance"
          width={350}
          height={300}
        />
      </div>

    </div>
  </div>
</section>


{/* CAR INSURANCE FORM SECTION */}
<section className="bg-gray-100 py-12 px-4 md:px-12">
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <h2 className="text-2xl md:text-3xl font-semibold mb-8">
      Calculate Your Car Insurance Price Online
    </h2>

    {/* SEARCH */}
    <div className="mb-8 max-w-md">
      <label className="text-sm text-gray-600 mb-2 block">
        Select your car brand
      </label>

      <div className="relative">
        <input
          type="text"
          placeholder="Search Here..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <span className="absolute left-3 top-3 text-gray-400">🔍</span>
      </div>
    </div>

    {/* BRAND GRID */}
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-10">
      {[
        { name: "Maruti", img: "/icon/maruti.png"},
        { name: "Hyundai", img: "/icon/hunday.png" },
        { name: "Tata", img: "/icon/tatacar.png" },
        { name: "Mahindra", img: "/icon/mahin.png" },
        { name: "Honda", img: "/icon/honda.png" },
        { name: "Toyota", img: "/icon/toyta.png" },
      ].map((brand) => (
        <div
          key={brand.name}
          className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md cursor-pointer transition"
        >
          <Image src={brand.img} alt={brand.name} width={60} height={60} />
          <p className="text-sm mt-2 font-medium">{brand.name}</p>
        </div>
      ))}
    </div>

    {/* CITY SELECTION */}
    <div className="mb-8">
      <p className="text-sm text-gray-600 mb-3">
        Which city is your car registered in?
      </p>

      <div className="flex flex-wrap items-center gap-6">
        {["New Delhi", "Bangalore", "Mumbai", "Chennai"].map((city) => (
          <label key={city} className="flex items-center gap-2 text-sm">
            <input type="radio" name="city" className="accent-blue-600" />
            {city}
          </label>
        ))}

        {/* SELECT DROPDOWN */}
        <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
          <option>Select City</option>
          <option>Pune</option>
          <option>Hyderabad</option>
          <option>Kolkata</option>
        </select>
      </div>
    </div>

    {/* YEAR */}
    <div className="mb-8 max-w-xs">
      <p className="text-sm text-gray-600 mb-2">
        When did you buy your car?
      </p>

      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
        <option>Select Year</option>
        {Array.from({ length: 25 }, (_, i) => (
          <option key={i}>{2025 - i}</option>
        ))}
      </select>
    </div>

    {/* BUTTON */}
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
      Check Prices
    </button>

    {/* DISCLAIMER */}
    <p className="text-xs text-gray-500 mt-6">
      <span className="font-semibold">Disclaimer:</span> Actual Premium might vary basis your location, age and number of members
    </p>

  </div>
</section>


{/* CTA + REVIEW SECTION */}
<section className="bg-gray-100 py-14 px-4 md:px-12">
  <div className="max-w-6xl mx-auto space-y-10">

    {/* TOP CTA BANNER */}
    <div className="relative rounded-3xl overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/icon/insuranceagentcar.png" // replace with your image
        alt="expert help"
        width={1200}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>

    {/* REVIEW CARD */}
    <div className="bg-white border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* GOOGLE LOGO */}
        <div className="bg-gray-100 rounded-xl p-3">
          <Image
            src="/icon/google.png"
            alt="google"
            width={40}
            height={40}
          />
        </div>

        {/* TEXT */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-blue-600 font-semibold">4.8/5</span>
          </div>

          <p className="text-sm font-medium">
            Read what our customers have to say
          </p>

          <p className="text-xs text-gray-500">
            Rated 4.8/5 with over 10,000 reviews on Google
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <button className="text-blue-600 text-sm font-medium hover:underline">
          Read all Reviews
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
          Rate us on Google
        </button>
      </div>

    </div>

  </div>
</section>

{/* WHAT IS CAR INSURANCE */}
<section className="bg-gray-50 py-16 px-4 md:px-12">
  <div className="max-w-5xl mx-auto">

    <div>

      {/* TITLE */}
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        What is Car Insurance?
      </h2>

      {/* CONTENT */}
      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
        Once you've secured the car of your dreams, the next step is to get car insurance from a reliable provider. Think of it as a safety net for your beloved ride and the loved ones who use it. Car insurance, also called four-wheeler insurance, is a contract between an insurer and you, the policyholder, to protect you from unpredictable circumstances like accidents, theft or natural calamities. In India, car owners have the choice between three types of four-wheeler insurance, namely Standalone own-damage insurance, Third-party insurance, and Comprehensive coverage.
      </p>

      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
        According to the Motor Vehicles Act of 1988, every car owner must have at least a third-party insurance policy. This provides coverage in case you are ever involved in an accident causing physical or property damage. You could also choose to level up and opt for comprehensive insurance plans which will provide coverage in case of theft, damage via natural causes, or mechanical issues.
      </p>

      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
        Today, getting car insurance or renewing an existing 4-wheeler policy has never been easier. One can find multiple policy options online for a variety of price ranges. Choose from the policy options above, or talk to us to find the four-wheeler policy that best fits your needs.
      </p>

    </div>

  </div>
</section>


{/* KEY FEATURES SECTION */}
<section className="bg-white py-16 px-4 md:px-12">
  <div className="max-w-5xl mx-auto">

    {/* TITLE */}
    <h2 className="text-2xl md:text-3xl font-bold mb-10">
      Key Features of Car Insurance
    </h2>

    {/* FEATURES LIST */}
    <div className="space-y-5">

      {[
        {
          title: "Cashless Repairs at Partner Garages",
          desc: "Allows you to get your car repaired at network garages without paying upfront, with the insurer settling costs directly with the repair centre.",
        },
        {
          title: "Instant Policy Issuance",
          desc: "Buy your policy online within minutes without lengthy paperwork.",
        },
        {
          title: "No Paperwork",
          desc: "Complete digital process with zero documentation hassles.",
        },
        {
          title: "24x7 Claim Support",
          desc: "Get round-the-clock assistance for claims anytime, anywhere.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 border rounded-xl p-5 hover:shadow-md transition bg-white"
        >
          {/* ICON */}
          <div className="mt-1">
            <div className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm">
              ✓
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>



{/* TYPES OF CAR INSURANCE */}
<section className="bg-gray-50 py-16 px-4 md:px-12">
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <h2 className="text-2xl md:text-3xl font-bold mb-10">
      Types of Car Insurance
    </h2>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* THIRD PARTY */}
      <div className="rounded-2xl p-6 bg-blue-50 hover:shadow-md transition">
        <div className="mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-xl text-xl">
            🚗
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">
          Third-Party Insurance
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          Covers damages caused to another person, vehicle, or property.
          Mandatory by law in India.
        </p>
      </div>

      {/* COMPREHENSIVE */}
      <div className="rounded-2xl p-6 bg-orange-50 hover:shadow-md transition">
        <div className="mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-xl text-xl">
            🛡️
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">
          Comprehensive Insurance
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          Covers both third-party liabilities and damages to your own car
          due to accidents, theft, or natural disasters.
        </p>
      </div>

      {/* OWN DAMAGE */}
      <div className="rounded-2xl p-6 bg-purple-50 hover:shadow-md transition">
        <div className="mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white rounded-xl text-xl">
            🔧
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">
          Own Damage Cover
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          Covers damages to your car only. Ideal if you already have a
          third-party insurance policy.
        </p>
      </div>

    </div>
  </div>
</section>


{/* HOW TO BUY / RENEW */}
<section className="bg-gray-50 py-16 px-4 md:px-12">
  <div className="max-w-6xl mx-auto text-center">

    {/* TITLE */}
    <h2 className="text-2xl md:text-3xl font-bold mb-3">
      How to Buy/Renew <span className="text-blue-600">Car Insurance Online?</span>
    </h2>

    <p className="text-gray-500 text-sm md:text-base mb-12">
      The process of buying or renewing a car insurance online is quite simple and easy.
      Here's how you can easily do it for your four-wheeler with us.
    </p>

    {/* STEPS */}
    <div className="grid md:grid-cols-3 gap-8 items-center">

      {[
        {
          step: "1",
          title: "Fill Your Car Details",
          desc: "Provide car details such as its make, model, etc. to see car insurance price offered by insurance providers",
        },
        {
          step: "2",
          title: "Compare Car Insurance Quotes",
          desc: "Select the plan which fits your budget & requirements best, out of all the available car insurance plans.",
        },
        {
          step: "3",
          title: "Make Payment Online",
          desc: "Pay the policy premium online & get your car insurance document delivered instantly to your inbox.",
        },
      ].map((item, index) => (
        <div key={index} className="relative">

          {/* CARD */}
          <div className="bg-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition">

            {/* STEP NUMBER */}
            <div className="w-8 h-8 mx-auto mb-4 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-semibold">
              {item.step}
            </div>

            <h3 className="font-semibold text-base mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500">
              {item.desc}
            </p>
          </div>

          {/* ARROW (ONLY BETWEEN ITEMS) */}
          {index !== 2 && (
            <div className="hidden md:block absolute top-1/2 right-[-30px] transform -translate-y-1/2 text-blue-500 text-2xl">
              →
            </div>
          )}

        </div>
      ))}

    </div>
  </div>
</section>


{/* DOCUMENTS REQUIRED */}
<section className="bg-white py-16 px-4 md:px-12">
  <div className="max-w-5xl mx-auto">

    <div>

      {/* TITLE */}
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">
        Documents Required for Purchasing a Car Insurance Policy in India
      </h2>

      <p className="text-center text-gray-500 text-sm mb-8">
        The following documents are mandatory to purchase a car insurance policy:
      </p>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT LIST */}
        <div className="space-y-4">

          {[
            "Govt. authorised Identification Document (Passport/PAN Card/Aadhar Card)",
            "Driving License",
            "Registration Certificate of Vehicle",
            "Passport size photograph",
          ].map((doc, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-50 border rounded-lg px-4 py-3"
            >
              <div className="w-5 h-5 flex items-center justify-center bg-blue-600 text-white rounded-full text-xs">
                ✓
              </div>

              <p className="text-sm text-gray-600">
                {doc}
              </p>
            </div>
          ))}

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/icon/document.png" // replace with your image
            alt="documents"
            width={250}
            height={200}
          />
        </div>

      </div>

    </div>
  </div>
</section>


{/* HELP BANNER */}
<section className="bg-white py-10 px-4 md:px-12">
  <div className="max-w-6xl mx-auto">

    <div className="relative rounded-2xl overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/icon/carcontainer.png" // replace with your image
        alt="help"
        width={1200}
        height={300}
        className="w-full h-[220px] md:h-[260px] object-cover"
      />

      {/* BLUE GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/40 to-blue-700/90"></div>

      {/* CONTENT */}
      {/* <div className="absolute inset-0 flex items-center justify-end px-6 md:px-12">
        <div className="text-white max-w-md text-right">

          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Need help choosing <br /> the right policy?
          </h2>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium">
            Talk to our car insurance expert
          </button>

        </div>
      </div> */}

    </div>

  </div>
</section>

{/* BENEFITS SECTION */}
<section className="bg-gray-100 py-16 px-4 md:px-12">
  <div className="max-w-4xl mx-auto">

    {/* TITLE */}
    <h2 className="text-xl md:text-2xl font-semibold text-center mb-10">
      Benefits of Buying or Renewing <br />
      Car Insurance Online
    </h2>

    {/* LIST */}
    <div className="space-y-4">

      {[
        "Convenience and Time-Saving: Avoid those lengthy calls with insurance agents and save your time by handling everything on-the-go at your own pace.",
        "24/7 Availability: Renew policies at your convenience anytime, nights, weekends, or holidays without having to wait for business hours.",
        "Easy Comparison: Compare multiple insurers and plans side-by-side, review customer feedback, and choose the policy that suits you best.",
        "Instant Documentation: Receive digital policy documents immediately, eliminating delays in mailing and leaving you protected.",
        "Cost Savings: Online channels often offer lower premiums and exclusive discounts that you don’t get when buying through insurance agents.",
        "Secure Payments: Complete transactions easily through a payment method of your choosing.",
        "Renewal Reminders: Get automated alerts for renewals, preventing policy lapses that leave you uninsured.",
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3 bg-gray-200 rounded-lg px-4 py-3"
        >
          {/* ICON */}
          <div className="mt-1 w-5 h-5 flex items-center justify-center bg-blue-600 text-white rounded-full text-xs">
            ✓
          </div>

          {/* TEXT */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {item}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

    </main>
  );
}