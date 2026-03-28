import { motion } from "framer-motion";
import React from "react";

/**
 * SectionTitle Component - Titre de section réutilisable
 * Inspiré par shadcn/ui patterns
 */
export function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-lg text-gray-600 dark:text-gray-400 ${
            centered ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
