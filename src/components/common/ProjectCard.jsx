import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

/**
 * ProjectCard Component - Carte de projet réutilisable
 * Inspiré par shadcn/ui patterns
 */
export function ProjectCard({
  image,
  title,
  description,
  category,
  tags = [],
  href = "#",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
              {title}
            </h3>
            {category && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {category}
              </p>
            )}
          </div>
        </div>

        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Link */}
        <motion.a
          href={href}
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Voir le projet
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
