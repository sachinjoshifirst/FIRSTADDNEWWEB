"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CarInsurancePage() {
  const [carNumber, setCarNumber] = useState("");

  return (
    <main className="bg-white text-gray-900">

   {/* HERO SECTION */}
<section className="bg-gray-100 py-10 px-4 md:px-12">
  <div className="max-w-6xl mx-auto">

  
    {/* TITLE */}
  

    {/* bike */}
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">

      {/* LEFT CONTENT */}
      <div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6  inline-block px-3 py-1 rounded">
      Bike Insurance
    </h1>

        

        {/* SUBTITLE */}
        <h2 className="text-2xl md:text-2xl font-semibold mb-4">
          Bike insurance in 60 seconds
        </h2>

        {/* STEPS */}
        <div className="flex items-center text-sm text-gray-500 gap-2 mb-6">
          <span>Enter your bike number</span>
        </div>

        {/* INPUT */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your bike number ex DL-12-AB-2345"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* BUTTON */}
        <button className="bg-blue-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition">
          Check Prices
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
          Brand new Bike? →
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <Image
          src="/banner/bikeinsurance.png" // replace with your illustration
          alt="insurance"
          width={350}
          height={300}
        />
      </div>

    </div>
  </div>
</section>


{/* Bike INSURANCE FORM SECTION */}
<section className="bg-gray-100 py-12 px-4 md:px-12">
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <h2 className="text-2xl md:text-3xl font-semibold mb-8">
      Calculate Your Bike Insurance Price Online
    </h2>

    {/* SEARCH */}
    <div className="mb-8 max-w-md">
      <label className="text-sm text-gray-600 mb-2 block">
        Select your Bike brand
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
        { name: "Bajaj", img: "/icon/bajaj.png"},
        { name: "Hero", img: "/icon/herobike.png" },
        { name: "Honda", img: "/icon/honda.png" },
        { name: "RoyalEnf", img: "/icon/royal.png" },
        { name: "Tvs", img: "/icon/tvs.png" },
        { name: "Yamaha", img: "/icon/yamaha.png" },
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
        Which city is your Bike registered in?
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
        When did you buy your Bike?
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
        What is Bike Insurance?
      </h2>

      {/* CONTENT */}
      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
        If you own a bike, you know its value: the thrill of adventure, fun rides with the family, and the convenience of travelling in the local area. Indian households very quickly become attached to their bikes, and to ensure these sentiments are protected, getting bike insurance is very important. Bike Insurance protects your vehicle from the potential risk of damage and ensures that your bike continues to provide memories even after a setback.
         </p>

    </div>

  </div>
</section>


{/* KEY FEATURES SECTION */}
<section className="bg-white py-16 px-4 md:px-12">
  <div className="max-w-5xl mx-auto">

    {/* TITLE */}
    <h2 className="text-2xl md:text-3xl font-bold mb-10">
      Key Features of Bike Insurance
    </h2>

    {/* FEATURES LIST */}
    <div className="space-y-5">

      {[
        {
          title: "Legal Compliance",
          desc: "The Indian Motor Act 1988 makes it mandatory to purchase third-party insurance for every motor vehicle. Hence third-party bike insurance is necessary to purchase as it fulfils a legal obligation.",
        },
        {
          title: "Third-Party Liability Coverage",
          desc: "The Third-party liability policy covers the compensation you are obliged to pay for damaging any third person's property or causing injury to a third person by your bike. It also covers the compensation to be paid if the accident caused a disability or death of the victim.",
        },
        {
          title: "Own Damage Protection",
          desc: "In a Comprehensive Plan or a standalone own damage insurance policy, the risks of your bike getting damaged are covered in the insurance plan. It covers the damages caused by accidents, natural calamities, theft, fire, vandalism, etc.",
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



{/* TYPES OF Bike INSURANCE */}
<section className="px-10 py-20 bg-gray-50 text-center">

  <h3 className="text-3xl font-bold mb-4">
    Types of Two Wheeler<span className="text-blue-600">Insurance</span>
  </h3>

  <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
    There are 3 types of bike insurance policy in India and First Advisor offers all of them.
  </p>

  <div className="grid md:grid-cols-3 gap-10 items-center">

    {/* Left Card */}
    <div className="text-center px-6">
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
        <Image src="/icon/message.png" alt="policy" width={24} height={24} />
      </div>

      <h4 className="text-xl font-semibold mb-2">
          Comprehensive Bike Insurance
      </h4>

      <p className="text-gray-600">
The Comprehensive bike insurance policy is a combination of both Standalone and Third-party car insurance. It is the most recommended policy as it protects you from the financial risks of causing damage or injury to a third person or property and covers the damages sustained by your bike as well.      </p>
    </div>

    {/* Center Highlight Card */}
    <div className="bg-blue-600 text-white rounded-3xl p-10 shadow-xl scale-105">
      <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-white/20">
        <Image src="/icon/zap.png" alt="customers" width={28} height={28} />
      </div>

      <h4 className="text-2xl font-semibold mb-3">
          Third Party Bike Insurance
      </h4>

      <p className="text-blue-100">
        This insurance policy is mandatory for all motor vehicles. The Indian law makes it compulsory for people to purchase third-party bike insurance policies for their bikes. This policy covers the legal obligation to compensate for damages or injuries caused to a third person or property due to an accident by your bike.
      </p>
    </div>

    {/* Right Card */}
    <div className="text-center px-6">
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
        <Image src="/icon/bar.png" alt="support" width={24} height={24} />
      </div>

      <h4 className="text-xl font-semibold mb-2">
        Own Damage Bike Insurance
      </h4>

      <p className="text-gray-600">
        The standalone own-damage policy covers the damages incurred by your vehicle. This policy safeguards your two-wheeler financially as it covers the cost of repair. If your bike gets damaged due to an accident, vandalism, or natural calamities such as earthquakes, floods, and riots, you can file a claim and the insurer will pay for the repair of your bike
      </p>
    </div>

  </div>

</section>


{/* HOW TO BUY / RENEW */}
<section className="bg-gray-50 py-16 px-4 md:px-12">
  <div className="max-w-6xl mx-auto text-center">

    {/* TITLE */}
    <h2 className="text-2xl md:text-3xl font-bold mb-3">
      How to Buy/Renew <span className="text-blue-600">Bike Insurance Online?</span>
    </h2>

    <p className="text-gray-500 text-sm md:text-base mb-12">
      The process of buying or renewing a Bike insurance online is quite simple and easy.
      Here's how you can easily do it for your four-wheeler with us.
    </p>

    {/* STEPS */}
    <div className="grid md:grid-cols-3 gap-8 items-center">

      {[
        {
          step: "1",
          title: "Fill Your Bike Details",
          desc: "Provide Bike details such as its make, model, etc. to see Bike insurance price offered by insurance providers",
        },
        {
          step: "2",
          title: "Compare Bike Insurance Quotes",
          desc: "Select the plan which fits your budget & requirements best, out of all the available car insurance plans.",
        },
        {
          step: "3",
          title: "Make Payment Online",
          desc: "Pay the policy premium online & get your Bike insurance document delivered instantly to your inbox.",
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
        Documents Required for Purchasing a Bike Insurance Policy in India
      </h2>

      <p className="text-center text-gray-500 text-sm mb-8">
        The following documents are mandatory to purchase a Bike insurance policy:
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
      Bike Insurance Online
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