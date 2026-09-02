"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../../assets/assets";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  IconArrowRight,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconSparkles,
  IconSmartphone,
  IconCode,
  IconDownload,
  IconCheck,
  IconWhatsapp,
  IconCopy,
  IconMapPin,
  IconClock,
} from "@/components/ui/Icons";

export default function Header() {
  const roles = [
    "Ingénieur d'Applications & Full-Stack",
    "Développeur Mobile Flutter & iOS/Android",
    "Architecte Solutions Next.js 15 & Laravel",
    "Designer d'Expérience & Interfaces UI/UX",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("johnnygoldsoft@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="top"
      className="relative min-h-[90vh] sm:min-h-screen w-full flex items-center justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Strategic Headline & Conversion CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Disponible • Freelance &amp; CDI</span>
            </div>
          </motion.div>

          {/* Calibrated Sculptural Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100 leading-[1.15]"
          >
            Concevoir des produits <br />
            <span className="text-gold-gradient">
              digitaux d'exception.
            </span>
          </motion.h1>

          {/* Dynamic Roles */}
          <div className="h-8 mt-2 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="text-sm sm:text-base font-bold text-stone-700 dark:text-stone-300 flex items-center gap-2"
              >
                <IconSparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{roles[currentRoleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Value Pitch (Short & Punchy) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-lg leading-relaxed"
          >
            Ingénieur logiciel &amp; designer UI/UX. J'accompagne startups et entreprises dans la conception d'applications mobiles réactives (<strong>Flutter</strong>) et de plateformes web d'envergure (<strong>Next.js 15, Laravel</strong>).
          </motion.p>

          {/* Conversion CTA Dock */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a href="#estimator">
              <Button size="md" variant="default" className="shadow-md shadow-amber-600/20 font-bold">
                <span>Estimer mon projet</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </Button>
            </a>

            <a href="#work">
              <Button size="md" variant="secondary">
                <span>Réalisations</span>
              </Button>
            </a>

            <a href="/jeanclaudesas_cv_finale.pdf" download="CV_Jean_Claude_Sassou.pdf">
              <Button size="md" variant="ghost" className="flex items-center gap-1.5">
                <IconDownload className="w-3.5 h-3.5" />
                <span>CV</span>
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Executive Hero Portrait Showcase */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full max-w-sm sm:max-w-md relative"
          >
            {/* Ambient Gold Halo */}
            <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-b from-amber-500/25 via-yellow-500/10 to-transparent blur-xl opacity-75 pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-stone-200/90 dark:border-amber-500/25 bg-white/95 dark:bg-[#171412]/95 shadow-xl">
              {/* Photo Showcase Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-900">
                <Image
                  src={assets.jean_claude_sassou}
                  alt="Jean-Claude Sassou"
                  fill
                  priority
                  className="object-cover object-top hover:scale-102 transition-transform duration-700 ease-out"
                />

                {/* Subtle Gradient vignette at bottom for seamless contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-95" />

                {/* Floating Availability Pill */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-stone-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Disponible • Projets &amp; CDI</span>
                  </span>
                </div>

                {/* Overlay Profile Info on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 text-white space-y-2.5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                      Jean-Claude Sassou
                    </h3>
                    <p className="text-xs font-semibold text-amber-400">
                      Johnny Gold • Ingénieur Logiciel &amp; UI/UX
                    </p>
                    <div className="flex items-center gap-1 mt-0.5 text-[11px] text-stone-300">
                      <IconMapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Lomé, Togo (GMT+0) • Remote International</span>
                    </div>
                  </div>

                  {/* Compact Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1">
                    {["Flutter 3", "Next.js 15", "React 19", "Laravel", "Figma"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-stone-900/80 text-[10px] font-semibold text-stone-200 border border-white/10 backdrop-blur-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Quick Action Channels */}
                  <div className="pt-1.5 flex items-center gap-1.5">
                    <a
                      href="https://wa.me/22893892742?text=Bonjour%20Jean-Claude%2C%20je%20d%C3%A9sire%20discuter%20d%27un%20projet%20avec%20vous."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                    >
                      <IconWhatsapp className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="py-1.5 px-2.5 rounded-xl border border-white/20 bg-stone-900/80 hover:bg-stone-800 text-stone-200 text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer backdrop-blur-md shrink-0"
                    >
                      {copiedEmail ? (
                        <>
                          <IconCheck className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-bold text-[11px]">Copié</span>
                        </>
                      ) : (
                        <>
                          <IconCopy className="w-3 h-3" />
                          <span className="text-[11px]">Email</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1">
                      <a
                        href="https://github.com/johnnygoldsoft"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-1.5 rounded-xl border border-white/15 bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-amber-400 transition-colors"
                      >
                        <IconGithub className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jean-claude-sassou/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-1.5 rounded-xl border border-white/15 bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-amber-400 transition-colors"
                      >
                        <IconLinkedin className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
