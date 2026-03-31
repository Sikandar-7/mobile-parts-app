"use client";
import { useState } from "react";

export default function AppInstallBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="md:hidden pt-3 px-3">
      <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-gray-100 dark:bg-[#1e1e1e] dark:border-white/10 overflow-hidden">
        <div className="flex items-center gap-2.5 px-3 py-3">
          <button
            onClick={() => setVisible(false)}
            className="text-gray-400 text-sm flex-shrink-0"
            aria-label="Dismiss"
          >
            ✕
          </button>
          <div className="flex-1 min-w-0 flex items-center h-full">
            <p className="text-sm font-bold text-black dark:text-gray-200 leading-tight">
              Install our app for a better <br /> experience
            </p>
          </div>
          <button className="flex-shrink-0 bg-[#006bff] text-white text-[13px] font-bold px-5 py-2 rounded-full hover:bg-[#0055cc] transition-colors">
            Install
          </button>
        </div>
      </div>
    </div>
  );
}
