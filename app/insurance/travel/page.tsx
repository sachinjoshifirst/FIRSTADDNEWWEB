"use client";

import { useState } from "react";
import { Search, Calendar, Users } from "lucide-react";

export default function TravelInsuranceUI() {
  const [travellers, setTravellers] = useState(0);

  const popular = [
    "Schengen",
    "UAE",
    "Thailand",
    "USA",
    "United Kingdom",
    "Singapore",
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

        

          {/* POPULAR */}
          <div>
            <div className="flex flex-wrap gap-4">
              {popular.map((item) => (
                <button
                  key={item}
                  className="flex flex-col items-center text-xs text-gray-700"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                    🌍
                  </div>
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* NEW: NAME + MOBILE */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg px-3 py-2 text-sm outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="border rounded-lg px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* DATES */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Calendar size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Start date"
                className="ml-2 w-full outline-none text-sm"
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2">
              <Calendar size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="End date"
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
                onClick={() =>
                  setTravellers(Math.max(0, travellers - 1))
                }
              >
                -
              </button>
              <span>{travellers}</span>
              <button onClick={() => setTravellers(travellers + 1)}>
                +
              </button>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2">
            Get instant quote →
          </button>
        </div>
      </div>
    </main>
  );
}