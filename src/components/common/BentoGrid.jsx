"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Badge } from "@/components/ui/Badge";
import { TechMarquee } from "./TechMarquee";
import {
  IconMapPin,
  IconClock,
  IconSparkles,
  IconCode,
  IconSmartphone,
  IconPalette,
  IconServer,
  IconCheck,
} from "@/components/ui/Icons";
import { assets } from "../../../assets/assets";

export function BentoGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillPillars = [
    {
      category: "mobile",
      title: "Mobile (Flutter)",
      desc: "Applications Android & iOS avec architecture réactive et intégrations cloud.",
      skills: ["Flutter 3.x", "Dart", "Firebase", "State Management (Bloc/Provider)", "REST APIs"],
      icon: IconSmartphone,
      color: "text-amber-600 dark:text-amber-400",
    },
    {
      category: "web",
      title: "Frontend Moderne",
      desc: "Interfaces ultra-réactives, optimisées SEO avec SSR/SSG et micro-animations.",
      skills: ["Next.js 15", "React 19", "Tailwind CSS v4", "JavaScript ES6+", "Framer Motion"],
      icon: IconCode,
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      category: "backend",
      title: "Backend & APIs",
      desc: "Architectures serveur sécurisées, gestion de bases de données et webhooks.",
      skills: ["Laravel", "PHP 8+", "Node.js", "MySQL", "MongoDB", "Auth JWT"],
      icon: IconServer,
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      category: "design",
      title: "Design, Print & Réseaux",
      desc: "Affiches, flyers, stickers, impressions sur tous supports, UI/UX et réseaux.",
      skills: ["Affiches, Flyers & Stickers", "Impression sur tous supports", "UI/UX Figma", "Câblage & Réseaux Wi-Fi"],
      icon: IconPalette,
      color: "text-amber-500 dark:text-amber-300",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top 3-Col Bento Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large Profile & Vision Card (8 cols) */}
        <SpotlightCard className="md:col-span-7 lg:col-span-8 flex flex-col justify-between overflow-hidden p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-md">
              <Image
                src={assets.user_image}
                alt="Jean-Claude Sassou"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="default">Johnny Gold Atelier</Badge>
                <Badge variant="success" pulse={true}>Freelance &amp; CDI</Badge>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                Jean-Claude Sassou
              </h3>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                J'allie rigueur d'ingénierie et sensibilité graphique pour concevoir des applications web et mobiles qui résolvent de vrais problèmes métier. Chaque ligne de code est pensée pour la performance et la pérennité.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap gap-4 items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <div className="flex items-center gap-2">
              <IconSparkles className="w-4 h-4 text-amber-500" />
              <span>Expertises : React, Next.js 15, Flutter, Laravel</span>
            </div>
            <div className="font-semibold text-amber-600 dark:text-amber-400">
              100% Ouvert au travail international
            </div>
          </div>
        </SpotlightCard>

        {/* Location & Timezone Card (4 cols) */}
        <SpotlightCard className="md:col-span-5 lg:col-span-4 flex flex-col justify-between p-6 sm:p-7">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Disponibilité &amp; Fuseau
              </span>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <IconMapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900 dark:text-stone-100">Lomé, Togo</p>
                  <p className="text-xs text-stone-500">Afrique de l'Ouest</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
                  <IconClock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900 dark:text-stone-100">Fuseau GMT / UTC+0</p>
                  <p className="text-xs text-stone-500">Synchronisation facile monde entier</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs">
            <span className="text-stone-500">Temps de réponse :</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">&lt; 24 heures</span>
          </div>
        </SpotlightCard>
      </div>

      {/* 4 Specialized Skill Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <SpotlightCard key={idx} className="p-5 flex flex-col justify-between">
              <div>
                <div className={`mb-3 inline-flex p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 ${pillar.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h4>
                <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                {pillar.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                    <IconCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Tech Marquee Bottom Banner */}
      <SpotlightCard className="p-4">
        <TechMarquee />
      </SpotlightCard>
    </div>
  );
}
