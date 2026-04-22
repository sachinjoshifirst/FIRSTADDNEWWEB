"use client";

export default function TermInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white px-6 py-12 flex items-center">

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Protect Your Family’s Future
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Get high coverage at affordable premiums and secure your loved ones financially in case of uncertainties.
          </p>

          {/* Key Benefits */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              ✅ <span>High Life Cover at Low Cost</span>
            </div>
            <div className="flex items-center gap-3">
              ⚡ <span>Quick & Easy Online Process</span>
            </div>
            <div className="flex items-center gap-3">
              🛡️ <span>Financial Security for Family</span>
            </div>
            <div className="flex items-center gap-3">
              💸 <span>Tax Benefits Available</span>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="mt-8 bg-indigo-100 p-5 rounded-xl">
            <p className="text-lg font-semibold text-indigo-700">
              ₹1 Crore Cover starting at just ₹499/month*
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full mx-auto">

          <h2 className="text-xl font-semibold mb-4">
            Get Your Free Quote
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="number"
            placeholder="Your Age"
            className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <select className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none">
            <option>Annual Income</option>
            <option>Below ₹5L</option>
            <option>₹5L - ₹10L</option>
            <option>₹10L+</option>
          </select>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            View Plans →
          </button>

          <p className="text-xs text-gray-500 mt-3">
            By continuing, you agree to our terms & privacy policy.
          </p>

        </div>

      </div>
    </div>
  );
}