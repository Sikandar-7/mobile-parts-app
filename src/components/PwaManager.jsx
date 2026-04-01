"use client";

import { useEffect, useState } from "react";

export default function PwaManager() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Register Service Worker for PWA
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed", err);
          }
        );
      });
    }

    // Request Notification Permissions
    const requestNotificationPermission = async () => {
      if ("Notification" in window) {
        if (Notification.permission === "default") {
          try {
            const permission = await Notification.requestPermission();
            console.log("Notification permission:", permission);
          } catch (error) {
            console.error("Error asking for notification permission:", error);
          }
        }
      }
    };

    // We can delay the prompt slightly to avoid overwhelming the user immediately on first ever render
    const timer = setTimeout(() => {
      requestNotificationPermission();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return null;
}
