"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bestnow-theme");
    if (saved === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add("dark");
        localStorage.setItem("bestnow-theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("bestnow-theme", "light");
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
