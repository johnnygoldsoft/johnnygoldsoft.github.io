"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { TrustBar } from "@/components/common/TrustBar";
import Work from "./components/Work";
import Services from "./components/Services";
import { ProcessSteps } from "@/components/common/ProcessSteps";
import { ProjectEstimator } from "@/components/common/ProjectEstimator";
import About from "./components/About";
import { FaqSection } from "@/components/common/FaqSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileDock from "@/components/common/MobileDock";
import { BackgroundMatrix } from "@/components/ui/BackgroundMatrix";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [prefilledContact, setPrefilledContact] = useState(null);

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

  const handleSelectEstimate = (estimateData) => {
    setPrefilledContact(estimateData);
  };

  const handleSelectService = (serviceTitle) => {
    setPrefilledContact({
      type: serviceTitle,
      message: `Bonjour Jean-Claude, je souhaite échanger sur une prestation : ${serviceTitle}. Pouvons-nous planifier un cadrage ?`,
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Refined Executive Ambient Background */}
      <BackgroundMatrix />

      {/* Top Floating Navbar (Desktop) */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Conversion Journey */}
      <main className="flex-1 pb-20 lg:pb-0">
        {/* 1. Hero with Executive Profile Card & Direct Action */}
        <Header />

        {/* 2. Key Metrics & Reassurance Bar */}
        <TrustBar />

        {/* 3. Portfolio & Case Studies */}
        <Work />

        {/* 4. Complete Services with Deliverables */}
        <Services onSelectService={handleSelectService} />

        {/* 5. 4-Step Collaboration Methodology */}
        <ProcessSteps />

        {/* 6. Signature 3-Click Project Estimator */}
        <ProjectEstimator onSelectEstimate={handleSelectEstimate} />

        {/* 7. About Me & Technical Specializations */}
        <About isDarkMode={isDarkMode} />

        {/* 8. FAQ Addressing Client Objections */}
        <FaqSection />

        {/* 9. Contact Hub (WhatsApp, 1-Click Email, Web3Forms) */}
        <Contact prefilledData={prefilledContact} />
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

      {/* Bottom Floating Navigation Dock (Mobile Touch) */}
      <MobileDock isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}
