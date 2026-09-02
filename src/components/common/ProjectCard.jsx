"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { IconExternalLink, IconSparkles, IconArrowRight, IconGithub } from "@/components/ui/Icons";

export function ProjectCard({
  image,
  title,
  description,
  category,
  tags = [],
  href = "#",
  onOpenDetails,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/90 bg-white/95 shadow-sm hover:shadow-lg hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 dark:border-amber-500/15 dark:bg-[#171412]/95 dark:hover:border-amber-500/40"
    >
      <div>
        {/* Project Thumbnail Image */}
        <div
          className="relative aspect-video sm:aspect-16/10 w-full overflow-hidden bg-stone-100 dark:bg-stone-850 cursor-pointer"
          onClick={onOpenDetails}
        >
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-600 to-yellow-600 text-stone-950">
              <IconSparkles className="h-8 w-8 opacity-70" />
            </div>
          )}

          {/* Category Pill */}
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/90 dark:bg-stone-900/90 text-stone-800 dark:text-stone-200 backdrop-blur-md shadow-xs border border-stone-200/60 dark:border-amber-500/20">
              {category}
            </span>
          </div>

          {/* Quick Hover Overlay */}
          <div className="absolute inset-0 bg-stone-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
            <span className="px-3.5 py-1.5 rounded-lg bg-white text-stone-900 text-xs font-bold flex items-center gap-1.5 shadow-md">
              <span>Étude de cas</span>
              <IconArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Project Card Content */}
        <div className="p-5">
          <h3
            onClick={onOpenDetails}
            className="text-base font-bold text-stone-900 dark:text-stone-100 transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400 cursor-pointer truncate"
          >
            {title}
          </h3>

          <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 line-clamp-1 leading-relaxed">
            {description}
          </p>

          {/* Tech Badges */}
          <div className="mt-3 flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="rounded-md bg-stone-100 dark:bg-stone-800/80 px-2 py-0.5 text-[10px] font-medium text-stone-600 dark:text-stone-300 border border-stone-200/40 dark:border-stone-700/40"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 pt-0 flex items-center justify-between gap-3 border-t border-stone-100 dark:border-stone-800/80 mt-1 pt-3">
        <button
          onClick={onOpenDetails}
          className="text-xs font-semibold text-stone-600 hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400 cursor-pointer flex items-center gap-1 transition-colors"
        >
          <span>Détails</span>
          <IconArrowRight className="w-3 h-3" />
        </button>

        <a
          href={href && href !== "#" ? href : "https://github.com/johnnygoldsoft"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
        >
          <span>Aperçu</span>
          <IconExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}
