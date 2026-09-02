"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  IconCalculator,
  IconCheck,
  IconArrowRight,
  IconSparkles,
  IconClock,
  IconShield,
} from "@/components/ui/Icons";

export function ProjectEstimator({ onSelectEstimate }) {
  const [projectType, setProjectType] = useState("mobile");
  const [projectScope, setProjectScope] = useState("new");
  const [timeline, setTimeline] = useState("standard");

  const projectTypes = [
    {
      id: "mobile",
      label: "App Mobile (Flutter)",
      desc: "iOS & Android avec une seule base de code",
      defaultWeeks: "3 à 6",
    },
    {
      id: "web",
      label: "Plateforme Web / SaaS",
      desc: "Next.js 15, React 19 & Tailwind CSS v4",
      defaultWeeks: "2 à 5",
    },
    {
      id: "uiux",
      label: "Design UI/UX (Figma)",
      desc: "Maquettes interactives & Design System",
      defaultWeeks: "1 à 3",
    },
    {
      id: "print",
      label: "Graphisme & Impression",
      desc: "Affiches, flyers, stickers, packaging & roll-up",
      defaultWeeks: "1 à 2",
    },
    {
      id: "network",
      label: "Réseaux & Systèmes",
      desc: "Câblage, switchs, Wi-Fi pro & maintenance",
      defaultWeeks: "1 à 2",
    },
  ];

  const scopes = [
    {
      id: "new",
      label: "Création complète (MVP)",
      desc: "De la conception au déploiement final",
    },
    {
      id: "redesign",
      label: "Refonte & Amélioration",
      desc: "Modernisation d'un existant ou ajout de features",
    },
    {
      id: "team",
      label: "Renfort Technique (Freelance)",
      desc: "Intégration rapide à votre équipe en remote",
    },
  ];

  const timelines = [
    { id: "urgent", label: "Urgent (< 3 semaines)", multiplier: "Prioritaire" },
    { id: "standard", label: "Standard (1 à 2 mois)", multiplier: "Équilibré" },
    { id: "flexible", label: "Flexible / Long terme", multiplier: "Rythme libre" },
  ];

  const deliverablesMap = {
    mobile: [
      "Application native iOS & Android (Flutter)",
      "Intégration Firebase / APIs backend",
      "Publication App Store & Google Play",
      "Code source documenté & 30j support",
    ],
    web: [
      "Application Next.js 15 haute performance (SSR/SSG)",
      "Design 100% responsive mobile/tablette/desktop",
      "Optimisation SEO & Core Web Vitals",
      "Déploiement cloud & code source transféré",
    ],
    uiux: [
      "Maquette Figma interactive haute fidélité",
      "Design System complet (composants, typographie)",
      "Flux utilisateurs & wireframes détaillés",
      "Assets vectoriels prêts pour l'intégration",
    ],
    print: [
      "Fichiers haute résolution prêts pour l'impression (CMJN 300dpi)",
      "Déclinaisons aux formats demandés (Affiches, Flyers, Bâches)",
      "Mockups de présentation réalistes",
      "Droits d'exploitation commerciale complets",
    ],
    network: [
      "Schéma d'architecture réseau d'entreprise",
      "Configuration sécurisée routeurs & switchs managés",
      "Documentation d'exploitation & de dépannage",
      "Tests de débit et validation de couverture",
    ],
  };

  const selectedTypeObj = projectTypes.find((p) => p.id === projectType);
  const selectedScopeObj = scopes.find((s) => s.id === projectScope);
  const currentDeliverables = deliverablesMap[projectType] || deliverablesMap.mobile;

  const handleTransferToContact = () => {
    const summary = `Bonjour Jean-Claude, je souhaite échanger sur un projet : ${selectedTypeObj.label} (${selectedScopeObj.label}) avec un délai ${timeline === "urgent" ? "urgent" : timeline === "standard" ? "standard" : "flexible"}.`;

    if (onSelectEstimate) {
      onSelectEstimate({
        type: selectedTypeObj.label,
        message: summary,
      });
    }

    // Scroll to contact section
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="w-full px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <Badge variant="default" className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold px-3 py-1 mb-2.5">
            Simulateur
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
            Cadrez Votre Projet
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
            Sélectionnez votre type de solution pour visualiser le délai estimé et les livrables associés.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Step 1: Project Type */}
            <div className="p-5 rounded-2xl bg-white/90 dark:bg-[#171412]/90 border border-stone-200/90 dark:border-amber-500/15 shadow-xs">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2.5">
                1. Type de solution
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {projectTypes.map((type) => {
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id)}
                      className={`p-3 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                        isSelected
                          ? "bg-amber-500/10 border-amber-500 dark:bg-amber-500/20 dark:border-amber-400 shadow-xs"
                          : "bg-stone-50/70 dark:bg-stone-900/50 border-stone-200/70 dark:border-stone-800 hover:border-amber-500/40 dark:hover:border-amber-500/30"
                      }`}
                    >
                      <span className={`text-xs sm:text-sm font-bold ${isSelected ? "text-amber-800 dark:text-amber-300" : "text-stone-900 dark:text-stone-100"}`}>
                        {type.label}
                      </span>
                      <span className="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5">
                        {type.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Project Scope */}
            <div className="p-5 rounded-2xl bg-white/90 dark:bg-[#171412]/90 border border-stone-200/90 dark:border-amber-500/15 shadow-xs">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2.5">
                2. Niveau d'avancement
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {scopes.map((scope) => {
                  const isSelected = projectScope === scope.id;
                  return (
                    <button
                      key={scope.id}
                      type="button"
                      onClick={() => setProjectScope(scope.id)}
                      className={`p-2.5 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                        isSelected
                          ? "bg-amber-500/10 border-amber-500 dark:bg-amber-500/20 dark:border-amber-400 shadow-xs"
                          : "bg-stone-50/70 dark:bg-stone-900/50 border-stone-200/70 dark:border-stone-800 hover:border-amber-500/40 dark:hover:border-amber-500/30"
                      }`}
                    >
                      <span className={`text-xs font-bold ${isSelected ? "text-amber-800 dark:text-amber-300" : "text-stone-900 dark:text-stone-100"}`}>
                        {scope.label}
                      </span>
                      <span className="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-1">
                        {scope.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div className="p-5 rounded-2xl bg-white/90 dark:bg-[#171412]/90 border border-stone-200/90 dark:border-amber-500/15 shadow-xs">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2.5">
                3. Calendrier souhaité
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {timelines.map((t) => {
                  const isSelected = timeline === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTimeline(t.id)}
                      className={`p-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                        isSelected
                          ? "bg-amber-500/10 border-amber-500 dark:bg-amber-500/20 dark:border-amber-400 shadow-xs"
                          : "bg-stone-50/70 dark:bg-stone-900/50 border-stone-200/70 dark:border-stone-800 hover:border-amber-500/40 dark:hover:border-amber-500/30"
                      }`}
                    >
                      <div className={`text-xs font-bold ${isSelected ? "text-amber-800 dark:text-amber-300" : "text-stone-900 dark:text-stone-100"}`}>
                        {t.label}
                      </div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5">
                        {t.multiplier}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-5 sm:p-6 rounded-2xl border border-stone-200/90 dark:border-amber-500/20 bg-white/95 dark:bg-[#171412]/95 shadow-md space-y-4 sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
                    Synthèse de cadrage
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 mt-0.5">
                    {selectedTypeObj.label}
                  </h3>
                </div>
                <div className="p-2 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400">
                  <IconCalculator className="w-5 h-5" />
                </div>
              </div>

              {/* Estimated Delivery Time */}
              <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200/70 dark:border-stone-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-300">
                  <IconClock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Délai estimé :</span>
                </div>
                <span className="font-mono font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100">
                  {timeline === "urgent" ? "1 à 3 sem." : `${selectedTypeObj.defaultWeeks} sem.`}
                </span>
              </div>

              {/* Included Deliverables */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Livrables inclus :
                </h4>
                <ul className="space-y-1.5">
                  {currentDeliverables.map((deliv, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                      <div className="h-3.5 w-3.5 rounded-full bg-amber-500/15 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <IconCheck className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug">{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Transfer to Form */}
              <Button
                size="md"
                variant="default"
                onClick={handleTransferToContact}
                className="w-full shadow-md shadow-amber-600/20 font-bold flex items-center justify-center gap-2"
              >
                <span>Envoyer ce brief &amp; Devis</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </Button>

              <p className="text-center text-[11px] text-stone-400">
                Devis gratuit, sans engagement • Réponse sous 24h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
