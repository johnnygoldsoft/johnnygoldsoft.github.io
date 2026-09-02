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
      <SpotlightCard className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-stone-200/90 dark:border-amber-500/15 bg-white/95 dark:bg-[#171412]/95 shadow-sm hover:shadow-lg hover:border-amber-500/35 transition-all duration-300">
        <div>
          {/* Vector Icon Header */}
          <div
            className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border p-2 shadow-xs transition-transform duration-300 group-hover:scale-105 ${iconColor}`}
          >
            {typeof IconComponent === "function" ? (
              <IconComponent className="h-5 w-5" />
            ) : IconComponent && typeof IconComponent === "object" ? (
              <Image
                src={IconComponent}
                alt={title}
                className="h-5 w-5 object-contain"
              />
            ) : (
              <IconSparkles className="h-5 w-5" />
            )}
          </div>

          {/* Service Title */}
          <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-1.5 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Feature Tags & Action CTA */}
        <div className="mt-5 pt-3.5 border-t border-stone-100 dark:border-stone-800/80 space-y-3.5">
          {features && features.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {features.map((feature, fIdx) => (
                <span
                  key={fIdx}
                  className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-850 text-[10px] font-semibold text-stone-700 dark:text-stone-300 border border-stone-200/50 dark:border-stone-750"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* Quick CTA button */}
          <button
            type="button"
            onClick={handleRequestQuote}
            className="w-full py-2 px-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 hover:bg-amber-500/10 dark:bg-stone-850 dark:hover:bg-amber-500/15 text-stone-700 hover:text-amber-700 dark:text-stone-300 dark:hover:text-amber-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Demander un devis</span>
            <IconArrowRight className="w-3 h-3" />
          </button>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
