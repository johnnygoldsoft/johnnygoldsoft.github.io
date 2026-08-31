"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconSun, IconMoon, IconMenu, IconX, IconArrowRight, IconSparkles } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: "Accueil", href: "#top", id: "top" },
    { label: "À Propos", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Projets", href: "#work", id: "work" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scroll elevation
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Reading progress bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }

      // 3. Active Section Detection
      const sections = ["top", "about", "services", "work", "contact"];
      const scrollPosition = window.scrollY + 200;

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

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 z-50 transition-all duration-100 origin-left"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Island Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-3 sm:pt-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-5xl rounded-full px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "glass shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200/80 dark:border-white/10"
              : "bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/40 dark:border-white/5"
          }`}
        >
          {/* Logo Brand */}
          <a
            href="#top"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white font-black text-sm shadow-sm group-hover:scale-105 transition-transform">
              JC
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white leading-tight">
                Jean-Claude<span className="text-blue-500">.</span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 -mt-0.5">
                Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-1 bg-slate-100/60 dark:bg-slate-800/60 p-1 rounded-full border border-slate-200/60 dark:border-slate-700/50 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-blue-600 dark:text-white"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 rounded-full bg-white dark:bg-slate-900 shadow-xs"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Actions: Theme Toggle & Quick CTA */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Basculer le thème"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 hover:bg-slate-100 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-xs"
            >
              {isDarkMode ? (
                <IconSun className="w-4 h-4 text-amber-400" />
              ) : (
                <IconMoon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* CTA Contact Button */}
            <a href="#contact" className="hidden sm:inline-flex">
              <Button size="sm" variant="default" className="text-xs">
                <span>Discuter</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </Button>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 cursor-pointer shadow-xs"
              aria-label="Ouvrir le menu"
            >
              {isMobileMenuOpen ? (
                <IconX className="w-5 h-5" />
              ) : (
                <IconMenu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-4/5 max-w-sm h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-10"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs">
                      JC
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      Jean-Claude Sassou
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  >
                    <IconX className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <ul className="mt-8 space-y-3">
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-base transition-colors ${
                          activeSection === link.id
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                            : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="text-xs opacity-50">→</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Drawer Footer CTA */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <Button variant="default" className="w-full">
                    <span>Me contacter</span>
                    <IconArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <p className="text-center text-xs text-slate-400">
                  Lomé, Togo • GMT/UTC+0
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
