"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../../assets/assets";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LiveTerminal } from "@/components/common/LiveTerminal";
import {
  IconArrowRight,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconSparkles,
  IconCode,
  IconSmartphone,
  IconDownload,
} from "@/components/ui/Icons";

export default function Header() {
  const roles = [
    "Ingénieur d'Applications & Full-Stack",
    "Développeur Mobile Flutter & Cross-Platform",
    "Architecte Solutions Next.js & Laravel",
    "Designer d'Expérience & Interfaces UI/UX",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="top"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Headline & Studio Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="glass" pulse={true} className="py-1.5 px-4 text-xs font-semibold">
              <span className="text-slate-800 dark:text-slate-200">
                Studio Ouvert • Disponible pour Missions & CDI
              </span>
            </Badge>
          </motion.div>

          {/* Monumental Kinetic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Créer des produits <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400">
              digitaux d'impact.
            </span>
          </motion.h1>

          {/* Rotating Specialty Role */}
          <div className="h-10 sm:h-12 mt-4 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <IconSparkles className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>{roles[currentRoleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pitch & Philosophy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
          >
            Je suis <strong>Jean-Claude Sassou</strong>. J'accompagne startups, entreprises et porteurs de projets dans la conception d'applications mobiles réactives (Flutter) et de plateformes web modernes haute performance.
          </motion.p>

          {/* Quick Action Docks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <a href="#work">
              <Button size="lg" variant="default" className="shadow-lg shadow-blue-500/20">
                <span>Découvrir mes projets</span>
                <IconArrowRight className="w-4 h-4" />
              </Button>
            </a>

            <a href="/jeanclaudesas_cv_finale.pdf" download="CV_Jean_Claude_Sassou.pdf">
              <Button size="lg" variant="secondary" className="flex items-center gap-2">
                <IconDownload className="w-4 h-4" />
                <span>Mon CV (PDF)</span>
              </Button>
            </a>

            <a href="#contact">
              <Button size="lg" variant="ghost">
                <span>Me contacter</span>
              </Button>
            </a>
          </motion.div>

          {/* Social Proof & Networks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-6"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Réponse garantie &lt; 24h</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/johnnygoldsoft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 hover:text-black dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-white transition-all shadow-xs"
              >
                <IconGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jean-claude-sassou/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-blue-400 transition-all shadow-xs"
              >
                <IconLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:johnnygoldsoft@gmail.com"
                aria-label="Email"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 hover:text-red-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-red-400 transition-all shadow-xs"
              >
                <IconMail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Live Dev Terminal */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full flex justify-center"
          >
            <LiveTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
