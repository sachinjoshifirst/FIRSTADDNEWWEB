"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type RenewPolicyModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function RenewPolicyModal({
  open,
  setOpen,
}: RenewPolicyModalProps) {
  const [policyNumber, setPolicyNumber] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Close on ESC + Lock Scroll
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, setOpen]);

  // ✅ Handle Submit
  const handleSubmit = () => {
    if (!policyNumber || !dob) {
      alert("Please fill all details");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log("Renew Policy:", { policyNumber, dob });
      alert("Policy fetched successfully!");
    }, 1500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          {/* Modal */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-7 relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-lg"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-2">
              Renew Your Policy
            </h2>

            <p className="text-gray-500 text-sm mb-6">
              Enter your policy details to continue renewal.
            </p>

            {/* Policy Number */}
            <div className="mb-4">
              <label className="block text-sm text-gray-500 mb-1">
                Policy Number
              </label>

              <input
                type="text"
                placeholder="Enter Policy Number"
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* DOB */}
            <div className="mb-5">
              <label className="block text-sm text-gray-500 mb-1">
                Date of Birth
              </label>

              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <p className="text-xs text-gray-400 mt-1">
                As per policy document
              </p>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold mb-5"
            >
              {loading ? "Fetching..." : "Continue"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Alternate Options */}
            <div className="grid grid-cols-2 gap-3">
              <button className="border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition text-sm font-medium">
                Phone Number
              </button>

              <button className="border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition text-sm font-medium">
                Application No.
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}