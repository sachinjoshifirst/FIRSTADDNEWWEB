"use client";

export default function HomeInsurancePage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-14">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Home Insurance Made Simple
          </h1>
          <p className="text-gray-600 mt-3">
            One plan to protect your home, belongings, and peace of mind.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl">🏠</div>
            <h3 className="text-lg font-semibold mt-3">Structure Protection</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Covers damage to your house from fire, storms, and accidents.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl">🧳</div>
            <h3 className="text-lg font-semibold mt-3">Contents Coverage</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Protects furniture, electronics, and personal valuables.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl">🔐</div>
            <h3 className="text-lg font-semibold mt-3">Theft Protection</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Financial safety against burglary or loss of belongings.
            </p>
          </div>

        </div>

        {/* MIDDLE BANNER */}
        <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Starting from just ₹999/year
          </h2>
          <p className="mt-2 text-sm opacity-90">
            Affordable protection for every home
          </p>
          <button className="mt-5 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
            Get Instant Quote
          </button>
        </div>

        {/* FORM SECTION (BOTTOM STYLE) */}
        <div className="mt-12 bg-white rounded-3xl shadow p-8 max-w-2xl mx-auto">

          <h3 className="text-xl font-semibold text-center mb-6">
            Check Your Home Coverage
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              placeholder="Your Email"
              className="border rounded-lg px-4 py-3"
            />

            <select className="border rounded-lg px-4 py-3">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
            </select>

          </div>

          <button className="w-full mt-6 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-black transition">
            Check Coverage →
          </button>

        </div>

      </div>
    </div>
  );
}