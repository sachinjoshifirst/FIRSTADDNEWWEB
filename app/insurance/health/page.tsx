"use client";

import Image from "next/image";
import { useState } from "react";

export default function HealthInsurancePage() {
  const [gender, setGender] = useState("Male");

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Rating Box */}
          <div className="flex items-center gap-4 bg-white border rounded-xl px-5 py-3 w-fit shadow-sm mb-6">
            <Image src="/icon/google.png" alt="google" width={30} height={30} />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                ⭐⭐⭐⭐⭐ <span className="text-blue-600">4.8/5</span>
              </p>
              <p className="text-xs text-gray-500">
                Rated 4.8/5 with 10,000+ reviews
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Buy <span className="text-blue-600">Health Insurance</span> <br />
            Plans and Policies <br />
            Online
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6 max-w-lg">
            A health insurance policy covers your medical expenses for illnesses
            and injuries including hospitalisation, daycare procedures,
            ambulance charges, medical care at home, medicine costs, and more.
          </p>

          {/* Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Start Now
          </button>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">

          {/* Top Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Image src="/icon/user.png" alt="user" width={24} height={24} />
            </div>
          </div>

          <h3 className="text-center text-blue-600 font-semibold mb-1">
            Get Online Discount upto 25% off*
          </h3>

          <p className="text-center text-gray-500 text-sm mb-6">
            Buy Health Plans from Rs. 10/day*
          </p>

          {/* Name */}
          <input
            type="text"
            placeholder="Your name"
            className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-blue-500"
          />

          {/* Phone */}
          <div className="flex gap-2 mb-4">
            <select className="border rounded-lg px-3 py-3">
              <option>IND</option>
            </select>

            <input
              type="text"
              placeholder="+91 Mobile Number"
              className="w-full border rounded-lg px-4 py-3 focus:outline-blue-500"
            />
          </div>

          {/* Gender */}
          <div className="flex gap-6 mb-4 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={gender === "Male"}
                onChange={() => setGender("Male")}
              />
              Male
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={gender === "Female"}
                onChange={() => setGender("Female")}
              />
              Female
            </label>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-2 mb-4 text-sm">
            <input type="checkbox" defaultChecked />
            <span>Get Details on WhatsApp</span>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 mb-4">
            By clicking, I agree to{" "}
            <span className="text-blue-600 cursor-pointer">terms & conditions</span>{" "}
            and{" "}
            <span className="text-blue-600 cursor-pointer">privacy policy</span>
          </p>

          {/* Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            View Plans
          </button>

          {/* Bottom */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already bought a policy?{" "}
            <span className="text-blue-600 cursor-pointer font-medium">
              Renew Now
            </span>
          </p>
        </div>

      </div>

      {/* ================= KEY HIGHLIGHTS ================= */}
<section className="py-16 bg-white text-center">

  <h3 className="text-3xl font-bold mb-10">
    Key Highlights
  </h3>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 px-4">

  {/* Top Row (3 cards) */}
  <div className="md:col-span-2">
    {/* Card 1 */}
    <div className="flex items-start gap-4 border rounded-xl p-5 hover:shadow-md transition">
      <div className="bg-blue-100 p-3 rounded-lg">
        <Image src="/icon/policy.png" alt="plans" width={24} height={24} />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-gray-900">
          Wide range of Plans & Companies
        </h4>
        <p className="text-sm text-gray-500">
          (134 Plans and 22 Companies)
        </p>
      </div>
    </div>
  </div>

  <div className="md:col-span-2">
    {/* Card 2 */}
    <div className="flex items-start gap-4 border rounded-xl p-5 hover:shadow-md transition">
      <div className="bg-blue-100 p-3 rounded-lg">
        <Image src="/icon/support.png" alt="support" width={24} height={24} />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-gray-900">
          Free advice to help choose best plan
        </h4>
        <p className="text-sm text-gray-500">
          (Guaranteed assistance with guidance)
        </p>
      </div>
    </div>
  </div>

  <div className="md:col-span-2">
    {/* Card 3 */}
    <div className="flex items-start gap-4 border rounded-xl p-5 hover:shadow-md transition">
      <div className="bg-blue-100 p-3 rounded-lg">
        <Image src="/icon/headphone.png" alt="claim" width={24} height={24} />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-gray-900">
          24 × 7 Claim Support
        </h4>
        <p className="text-sm text-gray-500">
          (134 Plans and 22 Companies)
        </p>
      </div>
    </div>
  </div>

  {/* Bottom Row (CENTERED 2 cards) */}
  <div className="hidden md:block md:col-span-1"></div>

  <div className="md:col-span-2">
    {/* Card 4 */}
    <div className="flex items-start gap-4 border rounded-xl p-5 hover:shadow-md transition">
      <div className="bg-blue-100 p-3 rounded-lg">
        <Image src="/icon/customer.png" alt="customer" width={24} height={24} />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-gray-900">
          1 lakh+ Families insured
        </h4>
        <p className="text-sm text-gray-500">
          (Happy customers)
        </p>
      </div>
    </div>
  </div>

  <div className="md:col-span-2">
    {/* Card 5 */}
    <div className="flex items-start gap-4 border rounded-xl p-5 hover:shadow-md transition">
      <div className="bg-blue-100 p-3 rounded-lg">
        <Image src="/icon/payment.png" alt="payment" width={24} height={24} />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-gray-900">
          Flexible payment options
        </h4>
        <p className="text-sm text-gray-500">
          (Easy EMI & payment plans)
        </p>
      </div>
    </div>
  </div>

</div>
</section>

{/* CTA + REVIEW SECTION */}
<section className="bg-gray-100 py-14 px-4 md:px-12">
  <div className="max-w-6xl mx-auto space-y-10">

    {/* TOP CTA BANNER */}
    <div className="relative rounded-3xl overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/icon/ctahealth.png" // replace with your image
        alt="expert help"
        width={1200}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

{/* WHAT IS CAR INSURANCE */}
<section className="bg-white py-16 px-4 md:px-12">
  <div className="max-w-5xl mx-auto">

    <div>

      {/* TITLE */}
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
            What is Health Insurance?
      </h2>

      {/* CONTENT */}
      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
        If you own a bike, you know its value: the thrill of adventure, fun rides with the family, and the convenience of travelling in the local area. Indian households very quickly become attached to their bikes, and to ensure these sentiments are protected, getting bike insurance is very important. Bike Insurance protects your vehicle from the potential risk of damage and ensures that your bike continues to provide memories even after a setback.
      </p>

    </div>

  </div>
</section>



{/* ================= FACTORS SECTION ================= */}
<section className="bg-white py-16 px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT SIDE */}
    <div>

      {/* Heading */}
      <h2 className="text-4xl font-bold leading-tight mb-8">
        Choosing a <br />
        <span className="text-blue-600">Health Insurance Plan</span> - Factors to Consider
      </h2>

      {/* Image */}
      <div className="rounded-2xl overflow-hidden shadow-md w-full max-w-sm">
        <Image
          src="/icon/checkdoc.png" // 👉 replace with your image
          alt="family"
          width={400}
          height={450}
          className="object-cover"
        />
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-4">

      {/* Card */}
      {[
        {
          title: "Sum Insured",
          desc: "Sum Insured is the maximum amount of total financial coverage given to you in a single policy year for hospitalisation and medical expenses.",
        },
        {
          title: "Claim Settlement Ratio",
          desc: "The ratio between the number of claims settled to the number of claims raised in a given year by your insurance provider.",
        },
        {
          title: "Network Hospitals",
          desc: "Network hospitals help you in getting cashless treatment conveniently as these hospitals have tie-ups with your insurer.",
          link: "Know more about Network Hospitals",
        },
        {
          title: "Inclusions and Exclusions",
          desc: "Inclusions are the conditions for which you can make a claim, exclusions are the conditions for which you cannot make a claim.",
        },
        {
          title: "Waiting Period",
          desc: "Waiting period refers to the period during which you cannot raise any health insurance claim.",
        },
        {
          title: "Add-on or Rider Benefits",
          desc: "Add-ons are supplements you can choose voluntarily by paying an extra premium at the time of purchase.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-5 shadow-sm border hover:shadow-md transition"
        >
          <h4 className="font-semibold text-gray-900 mb-2">
            {item.title}
          </h4>

          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>

          {item.link && (
            <p className="text-blue-600 text-sm mt-2 cursor-pointer">
              {item.link}
            </p>
          )}
        </div>
      ))}

    </div>

  </div>
</section>

{/* TYPES OF HEALTH INSURANCE */}
<section className="py-20 bg-white text-center">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-4xl font-bold mb-4">
      Types of <span className="text-blue-600">Health Insurance Policies</span>
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-14">
      There are various kinds of health insurance policies available in the market that
      you can choose depending on your requirement and budget. Below are the list of
      the plans for your reference:
    </p>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Individual Health Insurance Plan",
          desc: "Policy that covers a single person in case of hospitalisation and medical bills",
          img: "/icon/indiviual.png",
          tag: "Eligibility - Individuals",
        },
        {
          title: "Family Floater Health Insurance Plan",
          desc: "Policy that covers multiple family members under a single plan",
          img: "/icon/familyplan.png",
          tag: "Eligibility - Family (including spouse, parents and children)",
        },
        {
          title: "Senior Citizen Health Insurance Plan",
          desc: "Policy that covers individuals above the age of 65 years",
          img: "/icon/senior.png",
          tag: "Eligibility - Individuals above age of 65 years",
        },
        {
          title: "Critical Illness Insurance Plan",
          desc: "Policy covering individuals for expensive treatment of critical illnesses such as cancer",
          img: "/icon/critical.png",
          tag: "Eligibility - Individuals",
        },
        {
          title: "Group Health Insurance Plan",
          desc: "Policies that usually covers a group of people within a corporate structure",
          img: "/icon/grouppol.png",
          tag: "Eligibility - Group of people such as within a corporate ecosystem",
        },
        {
          title: "Top-up Health Insurance Plan",
          desc: "Policies that help individuals, groups, or family to upgrade their plan and provide additional coverage at a certain additional cost",
          img: "/icon/topup.png",
          tag: "Eligibility - Everyone (individuals, family)",
        },
        {
          title: "Personal Accident Cover Plan",
          desc: "Policies for individuals who are looking at ensuring a cover for accident or death due to accident",
          img: "/icon/accident.png",
          tag: "Eligibility - Individuals",
        },
        {
          title: "Maternity Health Insurance Plan",
          desc: "Policies for individuals/mothers to cover expenses during prenatal, delivery, and post-natal stage",
          img: "/icon/maternity.png",
          tag: "Eligibility - Individuals",
        },
        {
          title: "Disease Specific Insurance Plan",
          desc: "Policies for individuals who are seeking coverage from a specific disease like diabetes, hypertension, thyroid, heart, kidney, COVID-19, etc.",
          img: "/icon/disease.png",
          tag: "Eligibility - Individuals",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-[#f3f6fb] rounded-2xl p-8 shadow-sm hover:shadow-lg transition text-center flex flex-col items-center"
        >
          {/* Icon */}
          <div className="w-14 h-14 mb-4">
            <Image
              src={item.img}
              alt={item.title}
              width={56}
              height={56}
              className="mx-auto"
            />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {item.desc}
          </p>

          {/* Badge */}
          <span className="bg-blue-600 text-white text-xs px-4 py-1.5 rounded-full">
            {item.tag}
          </span>
        </div>
      ))}
    </div>

  </div>
</section>

    </main>
  );
}