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
      title: "Cadrage & Devis Clair",
      timing: "Sous 24 à 48 heures",
      icon: IconSparkles,
      color: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25",
      description:
        "Nous échangeons sur vos objectifs, fonctionnalités attendues et délais. Vous recevez une proposition détaillée, transparente et chiffrée sans engagement.",
      points: ["Analyse de faisabilité technique", "Planning précis de livraison", "Devis détaillé sans surprise"],
    },
    {
      number: "02",
      title: "Design UI/UX & Prototypage",
      timing: "Étape 2",
      icon: IconPalette,
      color: "text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/25",
      description:
        "Création des wireframes et maquettes interactives sur Figma. Vous visualisez et testez l'expérience utilisateur complète avant d'écrire la moindre ligne de code.",
      points: ["Parcours utilisateur optimisé", "Design System réutilisable", "Validation interactive ensemble"],
    },
    {
      number: "03",
      title: "Développement Itératif",
      timing: "Étape 3",
      icon: IconCode,
      color: "text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/25",
      description:
        "Développement avec les technologies les plus robustes (Next.js, Flutter, Laravel). Vous suivez les avancées avec des démonstrations intermédiaires régulières.",
      points: ["Code propre & maintenable", "Tests fonctionnels continus", "Points d'étape transparents"],
    },
    {
      number: "04",
      title: "Déploiement & Support Offert",
      timing: "Livraison finale",
      icon: IconShield,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
      description:
        "Mise en ligne en production (Serveur, Stores iOS/Android). Formation à la prise en main et garantie de 30 jours de support offerts pour une sérénité totale.",
      points: ["Publication App Store / Play Store / Cloud", "100% transfert de propriété du code", "30 jours de support inclus"],
    },
  ];

  return (
    <section id="process" className="w-full px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="default" className="mb-3">
            Méthode &amp; Transparence
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
            Comment Nous Collaborons
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-300">
            Un processus structuré et sans surprise, conçu pour vous livrer un produit digital irréprochable dans les délais impartis.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white/95 dark:bg-[#171412]/95 border border-stone-200/90 dark:border-amber-500/15 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Number & Timing */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-amber-500/40 dark:text-amber-500/30 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700/60">
                      {step.timing}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className={`p-3 rounded-2xl border inline-flex mb-4 ${step.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 space-y-2">
                  {step.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-[11px] font-medium text-stone-700 dark:text-stone-300">
                      <IconCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
