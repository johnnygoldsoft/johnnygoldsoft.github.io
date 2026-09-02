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

        {/* Right Column: Studio Passport Profile Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full max-w-sm"
          >
            <SpotlightCard className="p-5 sm:p-6 rounded-3xl border border-stone-200/90 dark:border-amber-500/20 bg-white/95 dark:bg-[#171412]/95 shadow-lg space-y-4">
              {/* Profile Top Row */}
              <div className="flex items-center gap-3.5">
                <div className="relative h-16 w-16 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-sm shrink-0">
                  <Image
                    src={assets.user_image}
                    alt="Jean-Claude Sassou"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                    Jean-Claude Sassou
                  </h3>
                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                    Johnny Gold • Atelier Digital
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-[11px] text-stone-500 dark:text-stone-400">
                    <IconMapPin className="w-3 h-3 text-stone-400 shrink-0" />
                    <span>Lomé, Togo (GMT+0) • Ouvert Monde</span>
                  </div>
                </div>
              </div>

              {/* Tech Mastery Chips */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                  Stack Fondamentale
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Flutter 3", "Next.js 15", "React 19", "Laravel", "Figma"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-850 text-[11px] font-semibold text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Channels */}
              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 space-y-2">
                {/* Direct WhatsApp Button */}
                <a
                  href="https://wa.me/22893892742?text=Bonjour%20Jean-Claude%2C%20je%20d%C3%A9sire%20discuter%20d%27un%20projet%20avec%20vous."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <IconWhatsapp className="w-3.5 h-3.5" />
                  <span>Discussion directe sur WhatsApp</span>
                </a>

                {/* 1-Click Copy Email & Socials */}
                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 py-1.5 px-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-850 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <IconCheck className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copié !</span>
                      </>
                    ) : (
                      <>
                        <IconCopy className="w-3 h-3" />
                        <span>Copier Email</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1">
                    <a
                      href="https://github.com/johnnygoldsoft"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-1.5 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-amber-500 transition-colors"
                    >
                      <IconGithub className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jean-claude-sassou/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-1.5 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-amber-500 transition-colors"
                    >
                      <IconLinkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
