import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "First Advisor",
  description: "Insurance platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-white">
        {/* Navbar visible on all pages */}
        <Navbar />

        {/* Page Content */}
        {children}
        <Footer />

        {/* Floating Chat Widget */}
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
         //   boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          }}
        >
          <iframe
            src="https://instarepli.com/webchat-widget?secretKey=IR-bot-2665-4758"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </div> */}
      </body>
    </html>
  );
}