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
} from "@/components/ui/Icons";

export default function MobileDock({ isDarkMode, setIsDarkMode }) {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["top", "about", "services", "work", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section === "top" ? "__next" : section);
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
    { id: "about", label: "Profil", href: "#about", icon: IconCode },
    { id: "services", label: "Services", href: "#services", icon: IconSmartphone },
    { id: "work", label: "Projets", href: "#work", icon: IconBriefcase },
    { id: "contact", label: "Contact", href: "#contact", icon: IconMail },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 md:hidden flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1.5 px-3 py-2 rounded-full cyber-glass shadow-2xl border border-slate-200/80 dark:border-white/10 backdrop-blur-xl">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`relative flex flex-col items-center justify-center p-2 rounded-full transition-all cursor-pointer ${
                isActive
                  ? "text-blue-600 dark:text-cyan-400"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
              }`}
              aria-label={item.label}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDockIndicator"
                  className="absolute inset-0 rounded-full bg-blue-50 dark:bg-slate-800/80 shadow-xs"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className="w-5 h-5 relative z-10" />
            </a>
          );
        })}

        <div className="w-[1px] h-5 bg-slate-200 dark:bg-slate-700 mx-1" />

        {/* Theme Toggle in Dock */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Basculer le thème"
          className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          {isDarkMode ? (
            <IconSun className="w-5 h-5 text-amber-400" />
          ) : (
            <IconMoon className="w-5 h-5" />
          )}
        </button>
      </nav>
    </div>
  );
}
