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
    <footer className="w-full border-t border-slate-200/80 bg-white/70 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/70 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-xs">
                JC
              </span>
              <span className="font-extrabold text-lg text-slate-900 dark:text-white">
                Jean-Claude Sassou
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Ingénieur Logiciel Full-Stack &amp; Designer UI/UX. Conception d'applications mobiles réactives (Flutter) et de solutions web performantes (Next.js, Laravel).
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-col space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1">
              Navigation Rapide
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <a href="#top" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Accueil
              </a>
              <a href="#work" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Réalisations
              </a>
              <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Services
              </a>
              <a href="#process" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Méthode
              </a>
              <a href="#estimator" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Simulateur de Devis
              </a>
              <a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                FAQ
              </a>
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                À Propos
              </a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Local Time & System Status */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1 block">
              Disponibilité &amp; Fuseau
            </span>
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Heure Locale (Lomé)</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                  {localTime || "12:00:00"} GMT
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 pt-1 border-t border-slate-200/60 dark:border-slate-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Disponible pour nouvelles missions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Jean-Claude Sassou. Conçu &amp; développé avec Next.js 15, Tailwind CSS &amp; Framer Motion.
          </p>

          <div className="flex items-center gap-4">
            {/* Socials & WhatsApp */}
            <div className="flex items-center gap-1.5">
              <a
                href="https://wa.me/22893892742?text=Bonjour%20Jean-Claude"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
              >
                <IconWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/johnnygoldsoft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <IconGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jean-claude-sassou/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                <IconLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:johnnygoldsoft@gmail.com"
                aria-label="Email"
                className="p-2 rounded-full text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
              >
                <IconMail className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-xs"
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
