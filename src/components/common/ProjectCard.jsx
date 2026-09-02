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
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/95"
    >
      <div>
        {/* Project Thumbnail Image */}
        <div
          className="relative aspect-video sm:aspect-16/10 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer"
          onClick={onOpenDetails}
        >
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <IconSparkles className="h-10 w-10 opacity-70" />
            </div>
          )}

          {/* Category Pill */}
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 backdrop-blur-md shadow-xs border border-slate-200/60 dark:border-slate-700/60">
              {category}
            </span>
          </div>

          {/* Quick Hover Overlay */}
          <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
            <span className="px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-lg">
              <span>Voir l'étude de cas</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Project Card Content */}
        <div className="p-6">
          <h3
            onClick={onOpenDetails}
            className="text-lg font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 cursor-pointer"
          >
            {title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Tech Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="rounded-lg bg-slate-100 dark:bg-slate-800/90 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/80 mt-2 pt-3.5">
        <button
          onClick={onOpenDetails}
          className="text-xs font-bold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 cursor-pointer flex items-center gap-1 transition-colors"
        >
          <span>Détails &amp; Objectifs</span>
          <IconArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={href && href !== "#" ? href : "https://github.com/johnnygoldsoft"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          <span>Aperçu</span>
          <IconExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}
