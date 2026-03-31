"use client";
import Link from "next/link";
import { useState } from "react";

export default function BottomNav() {
  const [active, setActive] = useState("home");

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800 z-[2000] pb-safe">
      <div className="flex justify-around items-center h-[60px] px-2">
        {/* Status */}
        <button
          onClick={() => setActive("status")}
          className={`flex flex-col items-center justify-center w-16 gap-1 ${
            active === "status" ? "text-[#006bff]" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <span className="text-[10px] font-medium">Status</span>
        </button>

        {/* Home */}
        <button
          onClick={() => setActive("home")}
          className={`flex flex-col items-center justify-center w-16 gap-1 ${
            active === "home" ? "text-[#006bff]" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill={active === "home" ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active === "home" ? "0" : "2"} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="text-[10px] font-medium">Home</span>
        </button>

        {/* Cart */}
        <button
          onClick={() => setActive("cart")}
          className="relative flex flex-col items-center justify-center w-16 h-full"
        >
          <div className="absolute -top-[20px] left-1/2 -transform-x-1/2 flex items-center justify-center w-[50px] h-[50px] bg-[#006bff] rounded-full border-[4px] border-white dark:border-[#121212] shadow-sm transform -translate-x-1/2 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-white text-[#006bff] text-[10px] font-bold h-[18px] w-[18px] flex items-center justify-center rounded-full border border-[#006bff]">
              0
            </span>
          </div>
          <span className={`text-[10px] font-medium absolute bottom-1 ${active === "cart" ? "text-[#006bff]" : "text-gray-500 dark:text-gray-400"}`}>Cart</span>
        </button>

        {/* Orders */}
        <button
          onClick={() => setActive("orders")}
          className={`flex flex-col items-center justify-center w-16 gap-1 ${
            active === "orders" ? "text-[#006bff]" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span className="text-[10px] font-medium">Orders</span>
        </button>

        {/* Profile */}
        <button
          onClick={() => setActive("profile")}
          className={`flex flex-col items-center justify-center w-16 gap-1 ${
            active === "profile" ? "text-[#006bff]" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
}
