"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconCheck, IconShield, IconClock, IconCpu, IconSparkles } from "@/components/ui/Icons";

export function TrustBar() {
  const stats = [
    {
      value: "10+",
      label: "Projets Déployés",
      sub: "Web, Mobile Flutter & UI/UX",
    },
    {
      value: "100%",
      label: "Délais Respectés",
      sub: "Cadrage précis et livraisons à temps",
    },
    {
      value: "< 24h",
      label: "Temps de Réponse",
      sub: "Disponibilité & communication continue",
    },
    {
      value: "30 Jours",
      label: "Garantie Post-Livraison",
      sub: "Support & correctifs offerts inclus",
    },
  ];

  const guarantees = [
    "Code source 100% transféré & sans lock-in",
    "Architecture modulaire, documentée & scalable",
    "Suivi régulier avec démos intermédiaires",
    "Disponible pour contrats Freelance & CDI",
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 border-y border-stone-200/90 dark:border-amber-500/15 bg-white/80 dark:bg-[#141210]/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Numbers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-amber-600 dark:text-amber-400 font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees Strip */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {guarantees.map((item, gIdx) => (
            <div
              key={gIdx}
              className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300"
            >
              <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <IconCheck className="w-3.5 h-3.5" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
