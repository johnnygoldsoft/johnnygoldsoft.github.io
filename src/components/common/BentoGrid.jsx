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
      desc: "Applications cross-platform Android & iOS réactives et connectées au cloud.",
      skills: ["Flutter 3.x", "Dart", "Firebase", "Bloc", "APIs REST"],
      icon: IconSmartphone,
      color: "text-amber-600 dark:text-amber-400",
    },
    {
      category: "web",
      title: "Frontend Moderne",
      desc: "Interfaces web performantes, optimisées SEO avec SSR/SSG.",
      skills: ["Next.js 15", "React 19", "Tailwind v4", "Framer Motion"],
      icon: IconCode,
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      category: "backend",
      title: "Backend & APIs",
      desc: "Architectures serveur sécurisées, bases de données et webhooks.",
      skills: ["Laravel 12", "PHP 8+", "Node.js", "MySQL", "MongoDB"],
      icon: IconServer,
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      category: "design",
      title: "Design & Print",
      desc: "Affiches, supports d'impression CMJN haute définition et UI/UX.",
      skills: ["Figma UI/UX", "Affiches & Roll-ups", "Stickers", "300dpi"],
      icon: IconPalette,
      color: "text-amber-500 dark:text-amber-300",
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Top 3-Col Bento Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
        {/* Large Profile & Vision Card (8 cols) */}
        <SpotlightCard className="md:col-span-7 lg:col-span-8 flex flex-col justify-between overflow-hidden p-5 sm:p-6 rounded-2xl">
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-sm">
              <Image
                src={assets.jean_claude_sassou}
                alt="Jean-Claude Sassou"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="default" className="text-[10px] font-bold px-2 py-0.5">Atelier Johnny Gold</Badge>
                <Badge variant="success" pulse={true} className="text-[10px] font-bold px-2 py-0.5">Freelance &amp; CDI</Badge>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
                Jean-Claude Sassou
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                J'allie rigueur d'ingénierie logicielle et sensibilité ergonomique pour concevoir des produits digitaux performants et durables.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-wrap gap-2 items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <div className="flex items-center gap-1.5">
              <IconSparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Spécialités : Flutter, Next.js 15, Laravel</span>
            </div>
            <div className="font-semibold text-amber-600 dark:text-amber-400 text-xs">
              Missions internationales acceptées
            </div>
          </div>
        </SpotlightCard>

        {/* Location & Timezone Card (4 cols) */}
        <SpotlightCard className="md:col-span-5 lg:col-span-4 flex flex-col justify-between p-5 sm:p-6 rounded-2xl">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                Disponibilité &amp; Fuseau
              </span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <IconMapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 dark:text-stone-100">Lomé, Togo</p>
                  <p className="text-[11px] text-stone-500">Afrique de l'Ouest</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400">
                  <IconClock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 dark:text-stone-100">Fuseau GMT / UTC+0</p>
                  <p className="text-[11px] text-stone-500">Synchro facile monde entier</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs">
            <span className="text-stone-500 text-[11px]">Temps de réponse :</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">&lt; 24h</span>
          </div>
        </SpotlightCard>
      </div>

      {/* 4 Specialized Skill Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {skillPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <SpotlightCard key={idx} className="p-4 sm:p-5 flex flex-col justify-between rounded-2xl">
              <div>
                <div className={`mb-2.5 inline-flex p-2 rounded-xl bg-stone-100 dark:bg-stone-850 ${pillar.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                  {pillar.title}
                </h4>
                <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-1">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-stone-100 dark:border-stone-800/80 flex flex-wrap gap-1">
                {pillar.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-850 text-[10px] font-semibold text-stone-600 dark:text-stone-300 border border-stone-200/50 dark:border-stone-750"
                  >
                    {skill}
                  </span>
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
