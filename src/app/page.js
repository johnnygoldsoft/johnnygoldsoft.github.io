"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileDock from "@/components/common/MobileDock";
import { BackgroundMatrix } from "@/components/ui/BackgroundMatrix";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, mounted]);

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      {/* Dynamic Cyber-Sleek Background */}
      <BackgroundMatrix />

      {/* Top Floating Navbar (Desktop) */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Sections */}
      <main className="flex-1 pb-20 md:pb-0">
        <Header isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Work isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

      {/* Bottom Floating Navigation Dock (Mobile Touch) */}
      <MobileDock isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}
