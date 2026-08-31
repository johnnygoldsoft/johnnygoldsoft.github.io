"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { IconSparkles, IconCheck } from "@/components/ui/Icons";

export function ServiceCard({
  icon: IconComponent,
  iconColor = "from-blue-500/10 via-indigo-500/10 to-purple-500/10 text-blue-600 dark:text-cyan-400 border-blue-500/20",
  title,
  description,
  features = [],
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <SpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-7">
        <div>
          {/* Vector Icon Header with Cyber Glow */}
          <div
            className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br border p-2.5 shadow-xs transition-transform duration-300 group-hover:scale-110 ${iconColor}`}
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
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Feature bullets */}
        {features && features.length > 0 && (
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
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
      </SpotlightCard>
    </motion.div>
  );
}
