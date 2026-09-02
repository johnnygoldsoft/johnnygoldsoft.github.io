"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

export function SectionTitle({
  badge = "",
  subtitle = "",
  title = "",
  description = "",
  align = "center",
}) {
  const isCentered = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCentered ? "items-center text-center" : "items-start text-left"
      } max-w-2xl ${isCentered ? "mx-auto" : ""} mb-10 sm:mb-12`}
    >
      {(badge || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-2.5"
        >
          <Badge variant="default" className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold px-3 py-1">
            {badge || subtitle}
          </Badge>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100"
        >
          {title}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-2.5 text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
