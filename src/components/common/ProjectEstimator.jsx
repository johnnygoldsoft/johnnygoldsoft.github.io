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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="default" className="mb-3">
            Configurateur Atelier Sur-Mesure
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
            Cadrez Votre Besoin en 3 Clics
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-300">
            Sélectionnez votre type de projet et vos contraintes pour visualiser les livrables inclus et obtenir une proposition d'orfèvre sous 24h.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Project Type */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#171412]/90 border border-stone-200/90 dark:border-amber-500/15 shadow-xs">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-3">
                1. Quel type de solution souhaitez-vous développer ?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map((type) => {
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id)}
                      className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                        isSelected
                          ? "bg-amber-500/10 border-amber-500 dark:bg-amber-500/20 dark:border-amber-400 shadow-xs"
                          : "bg-stone-50/70 dark:bg-stone-900/50 border-stone-200/70 dark:border-stone-800 hover:border-amber-500/40 dark:hover:border-amber-500/30"
                      }`}
                    >
                      <span className={`text-sm font-bold ${isSelected ? "text-amber-800 dark:text-amber-300" : "text-stone-900 dark:text-stone-100"}`}>
                        {type.label}
                      </span>
                      <span className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                        {type.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Project Scope */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#171412]/90 border border-stone-200/90 dark:border-amber-500/15 shadow-xs">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-3">
                2. Quelle est la maturité de votre projet ?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scopes.map((scope) => {
                  const isSelected = projectScope === scope.id;
                  return (
                    <button
                      key={scope.id}
                      type="button"
                      onClick={() => setProjectScope(scope.id)}
                      className={`p-3 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                        isSelected
                          ? "bg-amber-500/10 border-amber-500 dark:bg-amber-500/20 dark:border-amber-400 shadow-xs"
                          : "bg-stone-50/70 dark:bg-stone-900/50 border-stone-200/70 dark:border-stone-800 hover:border-amber-500/40 dark:hover:border-amber-500/30"
                      }`}
                    >
                      <span className={`text-xs font-bold ${isSelected ? "text-amber-800 dark:text-amber-300" : "text-stone-900 dark:text-stone-100"}`}>
                        {scope.label}
                      </span>
                      <span className="text-[10px] text-stone-500 dark:text-stone-400 mt-1 line-clamp-2">
                        {scope.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#171412]/90 border border-stone-200/90 dark:border-amber-500/15 shadow-xs">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-3">
                3. Quel est votre impératif de calendrier ?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {timelines.map((t) => {
                  const isSelected = timeline === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTimeline(t.id)}
                      className={`p-3 rounded-2xl text-left transition-all cursor-pointer border ${
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
            <div className="p-7 rounded-3xl border border-stone-200/90 dark:border-amber-500/20 bg-white/95 dark:bg-[#171412]/95 shadow-xl space-y-6 sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
                    Synthèse de votre cadrage
                  </span>
                  <h3 className="text-xl font-black text-stone-900 dark:text-stone-100 mt-0.5">
                    {selectedTypeObj.label}
                  </h3>
                </div>
                <div className="p-2.5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400">
                  <IconCalculator className="w-6 h-6" />
                </div>
              </div>

              {/* Estimated Delivery Time */}
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200/70 dark:border-stone-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs text-stone-600 dark:text-stone-300">
                  <IconClock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Délai moyen estimé :</span>
                </div>
                <span className="font-mono font-bold text-sm text-stone-900 dark:text-stone-100">
                  {timeline === "urgent" ? "1 à 3 sem." : `${selectedTypeObj.defaultWeeks} sem.`}
                </span>
              </div>

              {/* Included Deliverables */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
                  Livrables &amp; Garanties Inclus :
                </h4>
                <ul className="space-y-2.5">
                  {currentDeliverables.map((deliv, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                      <div className="h-4 w-4 rounded-full bg-amber-500/15 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <IconCheck className="w-3 h-3" />
                      </div>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantees Box */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/40 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2.5">
                <IconShield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Propriété intellectuelle intégrale &amp; support 30 jours inclus.</span>
              </div>

              {/* CTA Transfer to Form */}
              <Button
                size="lg"
                variant="default"
                onClick={handleTransferToContact}
                className="w-full shadow-lg shadow-amber-600/20 font-bold flex items-center justify-center gap-2"
              >
                <span>Envoyer ce brief &amp; Obtenir un devis</span>
                <IconArrowRight className="w-4 h-4" />
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
