"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type ClaimLoginModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function ClaimLoginModal({
  open,
  setOpen,
}: ClaimLoginModalProps) {
  const [mobile, setMobile] = useState("");

  // Close on ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setOpen]);

  const handleGetOtp = () => {
    if (mobile.length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    console.log("Send OTP to:", mobile);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
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
            transition={{ duration: 0.25 }}
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
              Login to Raise a Claim
            </h2>

            <p className="text-gray-500 text-sm mb-6">
              Enter your mobile number to continue your claim request.
            </p>

            {/* Mobile Input */}
            <div className="flex items-center border rounded-lg overflow-hidden mb-4">
              <span className="px-3 text-gray-500 border-r">+91</span>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-3 outline-none"
              />
            </div>

            {/* OTP Button */}
            <button
              onClick={handleGetOtp}
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold mb-5"
            >
              Get OTP
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* WhatsApp Login */}
            <button className="w-full border border-green-500 text-green-600 hover:bg-green-50 transition py-3 rounded-lg font-semibold">
              Continue with WhatsApp
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}