"use client";
import { useState, useEffect } from "react";

export default function AppInstallBar() {
  const [visible, setVisible] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [instructionData, setInstructionData] = useState({ show: false, title: "", message: "" });

  useEffect(() => {
    // Listen for the beforeinstallprompt event globally
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isChrome = /CriOS|Chrome/.test(ua) && !/Edge|Edg|OPR|Opera/.test(ua);
    const isFirefox = /FxiOS|Firefox/.test(ua);

    if (isIOS) {
      // iOS browsers
      if (isChrome) {
        setInstructionData({
          show: true,
          title: "Install on iOS Chrome",
          message: "To install, tap the <strong>Share</strong> icon (an arrow) at the top right corner of Chrome, then scroll down and select <strong>'Add to Home Screen'</strong>."
        });
      } else if (isFirefox) {
        setInstructionData({
          show: true,
          title: "Install on iOS Firefox",
          message: "To install, tap the <strong>Menu</strong> icon, select <strong>Share</strong>, and then tap <strong>'Add to Home Screen'</strong>."
        });
      } else {
        // Default to Safari
        setInstructionData({
          show: true,
          title: "Install on iPhone Safari",
          message: "To install, tap the <strong>Share</strong> button at the bottom center of your Safari menu, scroll down, and select <strong>'Add to Home Screen'</strong>."
        });
      }
      return;
    }

    if (deferredPrompt) {
      // Native Android/Chrome install prompt works
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      setDeferredPrompt(null);
      setVisible(false);
    } else {
      // Fallback for Android/Desktop browsers without deferredPrompt
      if (isFirefox) {
        setInstructionData({
          show: true,
          title: "Install on Firefox",
          message: "To install, tap the <strong>Menu</strong> (three dots) and select <strong>'Install'</strong> or <strong>'Add to Home Screen'</strong>."
        });
      } else {
         setInstructionData({
          show: true,
          title: "App Already Installed / Unsupported",
          message: "This app may already be installed on your device, or your browser requires you to install it manually from the <strong>Browser Menu -> Add to Home screen</strong>."
        });
      }
    }
  };

  const closeInstructions = () => setInstructionData({ ...instructionData, show: false });

  if (!visible) return null;

  return (
    <>
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
            <div className="flex-1 min-w-0 flex items-center h-full cursor-pointer" onClick={handleInstallClick}>
              <p className="text-sm font-bold text-black dark:text-gray-200 leading-tight">
                Install our app for a better <br /> experience
              </p>
            </div>
            <button 
              onClick={handleInstallClick}
              className="flex-shrink-0 bg-[#006bff] text-white text-[13px] font-bold px-5 py-2 rounded-full hover:bg-[#0055cc] transition-colors"
            >
              Install
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Manual Install Instructions Modal */}
      {instructionData.show && (
        <div className="fixed inset-0 bg-black/60 z-[11000] flex justify-center items-end pb-8 px-4" onClick={closeInstructions}>
          <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl w-full text-center shadow-lg relative" onClick={e => e.stopPropagation()}>
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006bff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <polyline points="16 6 12 2 8 6"></polyline>
                  <line x1="12" y1="2" x2="12" y2="15"></line>
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-black dark:text-white">{instructionData.title}</h3>
            <p 
              className="text-sm text-gray-600 dark:text-gray-300 mb-6 px-2"
              dangerouslySetInnerHTML={{ __html: instructionData.message }}
            />
            <button onClick={closeInstructions} className="w-full bg-[#006bff] text-white rounded-xl py-3.5 font-bold shadow-md hover:bg-[#0055cc] transition-colors">
              Got It
            </button>
          </div>
        </div>
      )}
    </>
  );
}
