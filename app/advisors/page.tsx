"use client";

import Image from "next/image";
import { Star, MapPin, BadgeCheck } from "lucide-react";

export default function AdvisorsPage() {
  const advisors = [
    {
      name: "Deepanshu Jaglan",
      exp: "6 Years",
      rating: 4.8,
      city: "New Delhi",
      tag: "Health",
      image: "/icon/profile.png",
    },
    {
      name: "Rahul Sharma",
      exp: "4 Years",
      rating: 4.5,
      city: "Gurgaon",
      tag: "Life",
      image: "/icon/profile.png",
    },
    {
      name: "Amit Verma",
      exp: "8 Years",
      rating: 4.9,
      city: "Noida",
      tag: "Motor",
      image: "/icon/profile.png",
    },
    {
      name: "Neha Singh",
      exp: "5 Years",
      rating: 4.6,
      city: "Mumbai",
      tag: "Health",
      image: "/icon/profile.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white px-6 py-10">

      {/* HERO */}
      <section className="max-w-7xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-10 flex justify-between items-center shadow-xl overflow-hidden relative">

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Trusted Insurance Advisors Near You
            </h1>

            <p className="opacity-90 max-w-xl">
              Get verified experts across cities & states to help you choose the right insurance plan instantly.
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <BadgeCheck size={16} /> Verified Experts
              </span>

              <span className="bg-white/20 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <MapPin size={16} /> 100+ Cities
              </span>

              <span className="bg-white/20 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <Star size={16} /> Top Rated Advisors
              </span>
            </div>

            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Book Free Consultation
            </button>
          </div>

          <Image
            src="/icon/agnetadvis.png"
            alt="advisor"
            width={280}
            height={280}
            className="hidden md:block"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto flex gap-6">

        {/* FILTER */}
        <div className="w-[260px] hidden md:block">
          <div className="bg-white/70 backdrop-blur-xl p-5 rounded-2xl shadow-lg sticky top-24 border">

            <h3 className="font-semibold mb-4">Filters</h3>

            <p className="text-xs text-gray-500 mb-2">City</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Delhi", "Mumbai", "Noida", "Gurgaon"].map((city, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-sm rounded-full cursor-pointer transition"
                >
                  {city}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-500 mb-2">Category</p>
            <div className="flex flex-wrap gap-2">
              {["Health", "Life", "Motor", "Term"].map((cat, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 hover:bg-green-100 text-sm rounded-full cursor-pointer transition"
                >
                  {cat}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* ADVISOR LIST */}
        <div className="flex-1">

          <div className="mb-6">
            <h2 className="text-2xl font-bold">Top Insurance Advisors</h2>
            <p className="text-gray-500">Verified experts available in your city</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {advisors.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-md border hover:shadow-xl transition hover:-translate-y-1"
              >

                <div className="flex gap-4 items-center">

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-xl"
                  />

                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      {item.exp} •
                      <Star size={14} className="text-yellow-500" />
                      {item.rating}
                    </p>

                    <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                      <MapPin size={12} /> {item.city}
                    </p>
                  </div>
                </div>

                {/* TAGS */}
                <div className="mt-4 flex justify-between items-center">

                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                    {item.tag} Insurance
                  </span>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Visit
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </main>
  );
}