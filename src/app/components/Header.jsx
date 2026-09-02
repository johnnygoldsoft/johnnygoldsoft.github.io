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
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Strategic Headline & Conversion CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold backdrop-blur-md shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Disponible pour Projets Freelance &amp; Contrats CDI</span>
            </div>
          </motion.div>

          {/* Monumental High-Impact Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-stone-900 dark:text-stone-50 leading-[1.08]"
          >
            Concevoir des produits <br />
            <span className="text-gold-gradient">
              digitaux d'exception.
            </span>
          </motion.h1>

          {/* Dynamic Roles */}
          <div className="h-9 sm:h-10 mt-3 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="text-base sm:text-xl font-bold text-stone-700 dark:text-stone-300 flex items-center gap-2"
              >
                <IconSparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{roles[currentRoleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Value Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-xl leading-relaxed"
          >
            Je suis <strong>Jean-Claude Sassou</strong> (<strong>Johnny Gold</strong>). Concepteur &amp; ingénieur logiciel, j'accompagne startups et entreprises dans la création d'applications mobiles performantes (<strong>Flutter</strong>) et de plateformes web scalables (<strong>Next.js 15, Laravel</strong>).
          </motion.p>

          {/* Conversion CTA Dock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#estimator">
              <Button size="lg" variant="default" className="shadow-lg shadow-amber-600/20 font-bold">
                <span>Estimer mon projet (Devis gratuit)</span>
                <IconArrowRight className="w-4 h-4" />
              </Button>
            </a>

            <a href="#work">
              <Button size="lg" variant="secondary">
                <span>Voir les réalisations</span>
              </Button>
            </a>

            <a href="/jeanclaudesas_cv_finale.pdf" download="CV_Jean_Claude_Sassou.pdf">
              <Button size="lg" variant="ghost" className="flex items-center gap-2">
                <IconDownload className="w-4 h-4" />
                <span>Mon CV</span>
              </Button>
            </a>
          </motion.div>

          {/* Trust Guarantees Quick Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-stone-500 dark:text-stone-400"
          >
            <div className="flex items-center gap-1.5">
              <IconCheck className="w-4 h-4 text-emerald-500" />
              <span>Réponse garantie &lt; 24h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <IconCheck className="w-4 h-4 text-emerald-500" />
              <span>Code 100% transféré</span>
            </div>
            <div className="flex items-center gap-1.5">
              <IconCheck className="w-4 h-4 text-emerald-500" />
              <span>Support 30j inclus</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Executive Credentials Profile Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="w-full max-w-md"
          >
            <SpotlightCard className="p-6 sm:p-7 rounded-3xl border border-stone-200/90 dark:border-amber-500/20 bg-white/95 dark:bg-[#171412]/95 shadow-xl space-y-6">
              {/* Profile Top Row */}
              <div className="flex items-center gap-4">
                <div className="relative h-18 w-18 sm:h-20 sm:w-20 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-md shrink-0">
                  <Image
                    src={assets.user_image}
                    alt="Jean-Claude Sassou"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                    Jean-Claude Sassou
                  </h3>
                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                    Johnny Gold • Ingénieur &amp; Concepteur UI/UX
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs text-stone-500 dark:text-stone-400">
                    <IconMapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>Lomé, Togo (GMT / UTC+0)</span>
                  </div>
                </div>
              </div>

              {/* Status & Work mode */}
              <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200/70 dark:border-stone-800/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 dark:text-stone-400">Statut actuel :</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Ouvert aux missions
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1.5 border-t border-stone-200/60 dark:border-stone-800/60">
                  <span className="text-stone-500 dark:text-stone-400">Mode de collaboration :</span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200">
                    Remote International &amp; Hybride
                  </span>
                </div>
              </div>

              {/* Tech Mastery Chips */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2.5">
                  Technologies Clés
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Flutter 3.x", "Next.js 15", "React 19", "Laravel", "Tailwind v4", "Figma"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800/90 text-xs font-semibold text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instant Action Channels */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-2.5">
                {/* Direct WhatsApp Button */}
                <a
                  href="https://wa.me/22893892742?text=Bonjour%20Jean-Claude%2C%20je%20d%C3%A9sire%20discuter%20d%27un%20projet%20avec%20vous."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <IconWhatsapp className="w-4 h-4" />
                  <span>Échanger directement sur WhatsApp</span>
                </a>

                {/* 1-Click Copy Email & Socials */}
                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 py-2 px-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <IconCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">Email Copié !</span>
                      </>
                    ) : (
                      <>
                        <IconCopy className="w-3.5 h-3.5" />
                        <span>Copier l'Email</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1.5">
                    <a
                      href="https://github.com/johnnygoldsoft"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-2 rounded-xl border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-amber-500 transition-colors"
                    >
                      <IconGithub className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jean-claude-sassou/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-2 rounded-xl border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-amber-500 transition-colors"
                    >
                      <IconLinkedin className="w-4 h-4" />
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
