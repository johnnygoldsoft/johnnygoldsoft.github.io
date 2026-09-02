"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { IconSparkles, IconCheck, IconArrowRight } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export function ServiceCard({
  icon: IconComponent,
  iconColor = "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900/50",
  title,
  description,
  features = [],
  index = 0,
  onSelectService,
}) {
  const handleRequestQuote = () => {
    if (onSelectService) {
      onSelectService(title);
    }
    const el = document.getElementById("estimator") || document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="h-full"
    >
      <SpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-xs hover:shadow-xl transition-all duration-300">
        <div>
          {/* Vector Icon Header */}
          <div
            className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border p-2.5 shadow-xs transition-transform duration-300 group-hover:scale-105 ${iconColor}`}
          >
            {typeof IconComponent === "function" ? (
              <IconComponent className="h-6 w-6" />
            ) : IconComponent && typeof IconComponent === "object" ? (
              <Image
                src={IconComponent}
                alt={title}
                className="h-6 w-6 object-contain"
              />
            ) : (
              <IconSparkles className="h-6 w-6" />
            )}
          </div>

          {/* Service Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Feature bullets & Action CTA */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
          {features && features.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Livrables inclus :
              </span>
              {features.map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300"
                >
                  <IconCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Quick CTA button */}
          <button
            type="button"
            onClick={handleRequestQuote}
            className="w-full py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-blue-50 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Demander un devis</span>
            <IconArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
