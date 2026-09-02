"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconSun,
  IconMoon,
  IconMenu,
  IconX,
  IconArrowRight,
  IconWhatsapp,
} from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: "Accueil", href: "#top", id: "top" },
    { label: "Projets", href: "#work", id: "work" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Méthode", href: "#process", id: "process" },
    { label: "Simulateur", href: "#estimator", id: "estimator" },
    { label: "FAQ", href: "#faq", id: "faq" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scroll elevation
      setIsScrolled(window.scrollY > 20);

      // 2. Reading progress bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }

      // 3. Active Section Detection
      const sections = ["top", "work", "services", "process", "estimator", "faq", "contact"];
      const scrollPosition = window.scrollY + 220;

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

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-blue-600 z-50 transition-all duration-100 origin-left"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Island Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-3 sm:pt-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "glass-pill shadow-md border border-slate-200/90 dark:border-white/10 dark:bg-slate-900/90"
              : "bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/60 dark:border-white/5"
          }`}
        >
          {/* Logo Brand */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-sm shadow-xs group-hover:scale-105 transition-transform">
              JC
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white leading-tight">
                Jean-Claude<span className="text-blue-600">.</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 -mt-0.5">
                Ingénieur Logiciel
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex items-center gap-0.5 bg-slate-100/70 dark:bg-slate-800/70 p-1 rounded-full border border-slate-200/60 dark:border-slate-700/50 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-blue-600 dark:text-white font-bold"
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

          {/* Actions: Theme Toggle & Primary CTA */}
          <div className="flex items-center gap-2">
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

            {/* CTA Devis Button */}
            <a href="#estimator" className="hidden sm:inline-flex">
              <Button size="sm" variant="default" className="text-xs font-bold shadow-xs">
                <span>Demander un devis</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </Button>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-200 cursor-pointer shadow-xs"
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
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
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
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xs">
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
                <ul className="mt-6 space-y-2">
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                          activeSection === link.id
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 font-bold"
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

              {/* Drawer Footer Actions */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <a
                  href="https://wa.me/22893892742?text=Bonjour%20Jean-Claude%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <IconWhatsapp className="w-4 h-4" />
                  <span>WhatsApp direct</span>
                </a>

                <a
                  href="#estimator"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <Button variant="default" className="w-full font-bold">
                    <span>Estimer mon projet</span>
                    <IconArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
