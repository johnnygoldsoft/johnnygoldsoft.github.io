"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconArrowUp,
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
    <footer className="w-full border-t border-stone-200/90 bg-[#FAF8F5]/90 backdrop-blur-md dark:border-stone-800 dark:bg-[#0C0A09]/90 pt-12 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-500 text-stone-950 font-black text-xs shadow-xs">
                JG
              </span>
              <span className="font-extrabold text-base sm:text-lg text-stone-900 dark:text-stone-100">
                Johnny Gold <span className="text-amber-600 dark:text-amber-400">Soft.</span>
              </span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 max-w-sm leading-relaxed">
              Ingénierie logicielle mobile &amp; web de précision (Flutter, Next.js, Laravel). Conçu pour la performance et l'impact réel.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-col space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-0.5">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 dark:text-stone-400">
              <a href="#top" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Accueil
              </a>
              <a href="#work" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Réalisations
              </a>
              <a href="#services" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Solutions
              </a>
              <a href="#process" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Méthode
              </a>
              <a href="#estimator" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Simulateur
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

          {/* Local Time & System Status using shadcn Card and Badge */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-0.5 block">
              Fuseau Horaire
            </span>
            <Card className="p-3 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-500 text-[11px]">Heure Locale (Lomé)</span>
                <span className="font-mono font-bold text-xs text-stone-800 dark:text-stone-200">
                  {localTime || "12:00:00"} GMT
                </span>
              </div>
              <Separator />
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 pt-1">
                <Badge variant="success" pulse={true} className="text-[9px] px-1.5 py-0">
                  En direct
                </Badge>
                <span>Disponible pour nouvelles missions</span>
              </div>
            </Card>
          </div>
        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-stone-500 dark:text-stone-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Johnny Gold Soft. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            {/* Socials & WhatsApp */}
            <div className="flex items-center gap-1.5">
              <a
                href="https://wa.me/22893892742?text=Bonjour%20Jean-Claude"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Button variant="ghost" size="icon" className="h-8 w-8 text-stone-500 hover:text-emerald-600 dark:text-stone-400 dark:hover:text-emerald-400">
                  <IconWhatsapp className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://github.com/johnnygoldsoft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="ghost" size="icon" className="h-8 w-8 text-stone-500 hover:text-amber-500 dark:text-stone-400 dark:hover:text-amber-400">
                  <IconGithub className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/jean-claude-sassou/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="ghost" size="icon" className="h-8 w-8 text-stone-500 hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400">
                  <IconLinkedin className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="mailto:johnnygoldsoft@gmail.com"
                aria-label="Email"
              >
                <Button variant="ghost" size="icon" className="h-8 w-8 text-stone-500 hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400">
                  <IconMail className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Back to top button */}
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="h-8 w-8 rounded-full border-stone-200 dark:border-amber-500/20 text-stone-700 hover:border-amber-500 hover:text-amber-600 dark:text-stone-200 dark:hover:border-amber-500/50 dark:hover:text-amber-400"
              aria-label="Retour en haut de page"
            >
              <IconArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
