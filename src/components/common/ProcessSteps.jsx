"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import {
  IconSparkles,
  IconPalette,
  IconCode,
  IconShield,
  IconCheck,
} from "@/components/ui/Icons";

export function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Cadrage & Devis",
      timing: "24 à 48h",
      icon: IconSparkles,
      color: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25",
      description: "Analyse de faisabilité, estimation claire et proposition chiffrée sans surprise ni engagement.",
    },
    {
      number: "02",
      title: "Design UI/UX",
      timing: "Étape 2",
      icon: IconPalette,
      color: "text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/25",
      description: "Maquettes interactives sur Figma testées et validées ensemble avant la moindre ligne de code.",
    },
    {
      number: "03",
      title: "Développement",
      timing: "Étape 3",
      icon: IconCode,
      color: "text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/25",
      description: "Architecture propre (Flutter, Next.js, Laravel) et démonstrations intermédiaires régulières.",
    },
    {
      number: "04",
      title: "Déploiement & Suivi",
      timing: "Livraison",
      icon: IconShield,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
      description: "Mise en ligne en production, transfert intégral du code source et 30 jours de garantie inclus.",
    },
  ];

  return (
    <section id="process" className="w-full px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <Badge variant="default" className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold px-3 py-1 mb-2.5">
            Méthode
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
            Processus &amp; Collaboration
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
            4 étapes directes, du premier cadrage à la mise en ligne sereine de votre solution.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-white/95 dark:bg-[#171412]/95 border border-stone-200/90 dark:border-amber-500/15 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-amber-500/35 transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Number & Timing */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-bold text-amber-500/60 dark:text-amber-500/50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-850 text-stone-600 dark:text-stone-300 border border-stone-200/60 dark:border-stone-750">
                      {step.timing}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className={`p-2.5 rounded-xl border inline-flex mb-3 ${step.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
