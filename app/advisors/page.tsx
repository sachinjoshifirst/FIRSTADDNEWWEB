"use client";

import Image from "next/image";

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
    ,
    {
      name: "Rahul Sharma",
      exp: "4 Years",
      rating: 4.5,
      city: "Gurgaon",
      tag: "Life",
      image: "/icon/profile.png",
    },
    ,
    {
      name: "Rahul Sharma",
      exp: "4 Years",
      rating: 4.5,
      city: "Gurgaon",
      tag: "Life",
      image: "/icon/profile.png",
    }
  ];

  return (
    <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen px-6 py-10">

      {/* HERO */}
      <section className="max-w-7xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 flex justify-between items-center shadow-xl">
          
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Find Trusted Insurance Advisors
            </h1>

            <p className="opacity-90 mb-5 max-w-xl">
              Get expert guidance at your home and choose the best insurance plan with confidence.
            </p>

            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Book Free Consultation
            </button>
          </div>

          <Image
            src="/icon/agnetadvis.png"
            alt="advisor"
            width={260}
            height={260}
            className="hidden md:block"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto flex gap-6">

        {/* FLOATING FILTER */}
        <div className="w-[260px] hidden md:block">
          <div className="bg-white/70 backdrop-blur-lg p-5 rounded-2xl shadow-lg sticky top-24">
            
            <h3 className="font-semibold mb-4">Filters</h3>

            {/* City Tags */}
            <p className="text-sm text-gray-500 mb-2">City</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Delhi", "Gurgaon", "Noida"].map((city, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-sm rounded-full cursor-pointer transition"
                >
                  {city}
                </span>
              ))}
            </div>

            {/* Category */}
            <p className="text-sm text-gray-500 mb-2">Category</p>
            <div className="flex flex-wrap gap-2">
              {["Health", "Life", "Motor"].map((cat, i) => (
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

        {/* RIGHT CONTENT */}
        <div className="flex-1">

          {/* HEADER */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              Insurance Advisors Near You
            </h2>
            <p className="text-gray-500">
              20+ verified experts available
            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-6">
            {advisors.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
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
                    <h3 className="text-lg font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.exp} • ⭐ {item.rating}
                    </p>

                    <p className="text-xs text-gray-400">
                      {item.city}
                    </p>
                  </div>
                </div>

                {/* TAG */}
                <div className="mt-4 flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                    {item.tag} Insurance
                  </span>

                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition">
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