"use client";

import { useState } from "react";
import { Calendar, Users } from "lucide-react";

export default function TravelInsuranceUI() {
  const [travellers, setTravellers] = useState(0);

  // 👉 Updated with images
  const popular = [
    { name: "Schengen", img: "/location/sch.png" },
    { name: "UAE", img: "/location/uea.png" },
    { name: "Thailand", img: "/location/thai.png" },
    { name: "USA", img: "/location/usa.png" },
    { name: "United Kingdom", img: "/location/uk.png" },
    { name: "Singapore", img: "/location/sing.png" },
  ];

  return (
    <main className="min-h-screen bg-[#f6f8fb] px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div className="space-y-8">
          <div>
            <p className="text-sm text-gray-500">
              Travel worry free starting at
            </p>
            <h1 className="text-5xl font-semibold text-green-700 mt-2">
              ₹19/day<span className="text-lg">*</span>
            </h1>
            <div className="w-10 h-1 bg-green-600 mt-2 rounded-full" />
          </div>

          <p className="text-gray-500">
            Instant quotes. Global coverage. Easy claims.
          </p>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-6">
              Why smart travellers choose insurance?
            </h3>

            <div className="space-y-5 text-gray-600">
              {[
                ["🏥", "Medical emergencies"],
                ["✈️", "Flight delays or cancellations"],
                ["🧳", "Lost baggage & passport"],
                ["🔒", "Theft or personal loss of belongings"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    {icon}
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">

          {/* POPULAR DESTINATIONS */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Popular Destinations
            </h3>

            <div className="flex flex-wrap gap-4">
              {popular.map((item) => (
                <button
                  key={item.name}
                  className="flex flex-col items-center text-xs text-gray-700 hover:scale-105 transition"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border flex items-center justify-center overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="mt-1">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* NAME + MOBILE */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* DATES */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Calendar size={16} className="text-gray-400" />
              <input
                type="date"
                className="ml-2 w-full outline-none text-sm"
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2">
              <Calendar size={16} className="text-gray-400" />
              <input
                type="date"
                className="ml-2 w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* TRAVELLERS */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <Users size={16} />
              {travellers} Traveller(s)
            </div>

            <div className="flex items-center gap-4">
              <button
                className="px-2 py-1 border rounded"
                onClick={() => setTravellers(Math.max(0, travellers - 1))}
              >
                -
              </button>
              <span>{travellers}</span>
              <button
                className="px-2 py-1 border rounded"
                onClick={() => setTravellers(travellers + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition">
            Get instant quote →
          </button>
        </div>
      </div>
    </main>
  );
}