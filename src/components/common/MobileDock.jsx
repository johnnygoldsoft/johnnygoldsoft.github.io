"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconCode,
  IconBriefcase,
  IconSmartphone,
  IconMail,
  IconSun,
  IconMoon,
  IconSparkles,
  IconCalculator,
  IconWhatsapp,
} from "@/components/ui/Icons";

export default function MobileDock({ isDarkMode, setIsDarkMode }) {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["top", "work", "services", "estimator", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dockItems = [
    { id: "top", label: "Accueil", href: "#top", icon: IconSparkles },
    { id: "work", label: "Projets", href: "#work", icon: IconBriefcase },
    { id: "estimator", label: "Devis", href: "#estimator", icon: IconCalculator },
    { id: "contact", label: "Contact", href: "#contact", icon: IconMail },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 lg:hidden flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1.5 px-3 py-2 rounded-full glass-pill shadow-xl border border-stone-200/90 dark:border-amber-500/20 dark:bg-[#171412]/95 backdrop-blur-xl">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`relative flex flex-col items-center justify-center p-2 rounded-full transition-all cursor-pointer ${
                isActive
                  ? "text-amber-700 dark:text-amber-300"
                  : "text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-white"
              }`}
              aria-label={item.label}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDockIndicator"
                  className="absolute inset-0 rounded-full bg-amber-500/10 dark:bg-amber-500/20 shadow-xs border border-amber-500/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className="w-5 h-5 relative z-10" />
            </a>
          );
        })}

        {/* WhatsApp Fast Link in Dock */}
        <a
          href="https://wa.me/22893892742?text=Bonjour%20Jean-Claude%2C%20je%20d%C3%A9sire%20%C3%A9changer%20sur%20mon%20projet."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="p-2 rounded-full text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 cursor-pointer"
        >
          <IconWhatsapp className="w-5 h-5" />
        </a>

        <div className="w-[1px] h-5 bg-stone-200 dark:bg-stone-800 mx-0.5" />

        {/* Theme Toggle in Dock */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Basculer le thème"
          className="p-2 rounded-full text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
        >
          {isDarkMode ? (
            <IconSun className="w-5 h-5 text-amber-400" />
          ) : (
            <IconMoon className="w-5 h-5 text-stone-700" />
          )}
        </button>
      </nav>
    </div>
  );
}
