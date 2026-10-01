"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TrustBar() {
  const stats = [
    {
      value: "10+",
      label: "Projets Déployés",
      caption: "Mobile, Web & UI/UX",
      badge: "Production",
    },
    {
      value: "100%",
      label: "Délais Respectés",
      caption: "Cadrage précis",
      badge: "Engagement",
    },
    {
      value: "< 24h",
      label: "Temps de Réponse",
      caption: "Disponibilité continue",
      badge: "Réactivité",
    },
    {
      value: "30 Jours",
      label: "Garantie Incluse",
      caption: "Support post-livraison",
      badge: "Sérénité",
    },
  ];

  return (
    <section className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Card className="p-6 sm:p-7 border-stone-200/90 dark:border-amber-500/20 bg-white/80 dark:bg-[#141210]/80 backdrop-blur-md shadow-sm">
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
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-amber-600 dark:text-amber-400 font-mono">
                    {stat.value}
                  </span>
                  <Badge variant="default" className="text-[9px] px-1.5 py-0 font-bold hidden sm:inline-flex">
                    {stat.badge}
                  </Badge>
                </div>
                <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                  {stat.label}
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400">
                  {stat.caption}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
