import { cn } from "@/lib/cn";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

/**
 * ServiceCard Component - Carte de service réutilisable
 * Inspiré par shadcn/ui patterns
 */
export function ServiceCard({
  icon,
  title,
  description,
  href = "#contact",
  className = "",
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950",
        className
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-950/20" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-2"
        >
          <Image src={icon} alt={title} className="h-6 w-6" />
        </motion.div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-50">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Link */}
        <motion.a
          href={href}
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          En savoir plus
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
}
