"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconCheck, IconShield, IconClock, IconCpu, IconSparkles } from "@/components/ui/Icons";

export function TrustBar() {
  const stats = [
    {
      value: "10+",
      label: "Projets Déployés",
      caption: "Mobile, Web & UI/UX",
    },
    {
      value: "100%",
      label: "Délais Respectés",
      caption: "Cadrage précis",
    },
    {
      value: "< 24h",
      label: "Temps de Réponse",
      caption: "Disponibilité continue",
    },
    {
      value: "30 Jours",
      label: "Garantie Incluse",
      caption: "Support post-livraison",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-y border-stone-200/90 dark:border-amber-500/15 bg-white/70 dark:bg-[#141210]/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        {/* Numbers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-amber-600 dark:text-amber-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400">
                {stat.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
