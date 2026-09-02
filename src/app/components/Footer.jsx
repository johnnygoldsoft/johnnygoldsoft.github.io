"use client";

import React, { useState, useEffect } from "react";
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconArrowUp,
  IconSparkles,
  IconWhatsapp,
} from "@/components/ui/Icons";

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Africa/Lome",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-stone-200/90 bg-[#FAF8F5]/90 backdrop-blur-md dark:border-stone-800 dark:bg-[#0C0A09]/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-500 text-stone-950 font-black text-xs shadow-sm shadow-amber-500/30">
                JG
              </span>
              <span className="font-extrabold text-lg text-stone-900 dark:text-stone-100">
                Johnny Gold <span className="text-amber-600 dark:text-amber-400">Soft.</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-sm leading-relaxed">
              Atelier digital d'exception fondé par Jean-Claude Sassou. Ingénierie mobile (Flutter), plateformes web de prestige (Next.js 15), architectures backend (Laravel) et identités visuelles.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-col space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-1">
              Navigation Rapide
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
              <a href="#top" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Accueil
              </a>
              <a href="#work" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Réalisations
              </a>
              <a href="#services" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Services
              </a>
              <a href="#process" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Méthode
              </a>
              <a href="#estimator" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Configurateur
              </a>
              <a href="#faq" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                FAQ
              </a>
              <a href="#about" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                À Propos
              </a>
              <a href="#contact" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Local Time & System Status */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-1 block">
              Disponibilité &amp; Fuseau
            </span>
            <div className="p-3.5 rounded-2xl bg-stone-100 dark:bg-[#171412] border border-stone-200/80 dark:border-amber-500/15 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-500">Heure Locale (Lomé)</span>
                <span className="font-mono font-bold text-stone-800 dark:text-stone-200">
                  {localTime || "12:00:00"} GMT
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 pt-1 border-t border-stone-200/60 dark:border-stone-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Disponible pour projets d'exception</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-200/80 dark:border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500 dark:text-stone-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Johnny Gold Soft (Jean-Claude Sassou). Conçu &amp; développé avec Next.js 15, Tailwind CSS &amp; Framer Motion.
          </p>

          <div className="flex items-center gap-4">
            {/* Socials & WhatsApp */}
            <div className="flex items-center gap-1.5">
              <a
                href="https://wa.me/22893892742?text=Bonjour%20Jean-Claude"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full text-stone-500 hover:text-emerald-600 dark:text-stone-400 dark:hover:text-emerald-400 transition-colors"
              >
                <IconWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/johnnygoldsoft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full text-stone-500 hover:text-amber-500 dark:text-stone-400 dark:hover:text-amber-400 transition-colors"
              >
                <IconGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jean-claude-sassou/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full text-stone-500 hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400 transition-colors"
              >
                <IconLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:johnnygoldsoft@gmail.com"
                aria-label="Email"
                className="p-2 rounded-full text-stone-500 hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400 transition-colors"
              >
                <IconMail className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 hover:border-amber-500 hover:text-amber-600 dark:border-amber-500/20 dark:bg-[#171412] dark:text-stone-200 dark:hover:border-amber-500/50 dark:hover:text-amber-400 transition-all cursor-pointer shadow-xs"
              aria-label="Retour en haut de page"
            >
              <IconArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
