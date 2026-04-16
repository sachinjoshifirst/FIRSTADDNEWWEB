"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClaimLoginModal from "./components/ClaimLoginModal";
import RenewPolicyModal from "./components/RenewPolicy";


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openClaimModal, setOpenClaimModal] = useState(false);
  const [openRenew, setOpenRenew] = useState(false);

  return (
    <>
      <Navbar
         openClaimModal={setOpenClaimModal}
         openRenewModal={setOpenRenew}      
      />

      {children}

      <Footer />

      <ClaimLoginModal
        open={openClaimModal}
        setOpen={setOpenClaimModal}
      />

    <RenewPolicyModal open={openRenew} setOpen={setOpenRenew} />

      {/* Chat Widget */}
      {/* <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "380px",
          height: "520px",
          zIndex: 9999,
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://instarepli.com/webchat-widget?secretKey=IR-bot-2665-4758"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div> */}
    </>
  );
}