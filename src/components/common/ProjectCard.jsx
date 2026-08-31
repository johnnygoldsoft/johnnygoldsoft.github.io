"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { IconExternalLink, IconSparkles, IconArrowRight } from "@/components/ui/Icons";

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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-500/40 dark:border-slate-800/80 dark:bg-[#0c1222]/90 dark:hover:border-cyan-400/40"
    >
      <div>
        {/* Project Thumbnail Image with Hover Zoom */}
        <div className="relative aspect-video sm:aspect-16/10 w-full overflow-hidden bg-slate-900 cursor-pointer" onClick={onOpenDetails}>
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-600 to-purple-600 text-white">
              <IconSparkles className="h-10 w-10 opacity-70" />
            </div>
          )}

          {/* Top Floating Category Pill */}
          <div className="absolute top-3.5 right-3.5 z-10">
            <Badge variant="glass" className="font-bold backdrop-blur-md shadow-xs text-xs">
              {category}
            </Badge>
          </div>

          {/* Quick Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white text-xs font-bold flex items-center gap-1">
              <span>Explorer l'étude de cas</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Project Card Content */}
        <div className="p-6">
          <h3
            onClick={onOpenDetails}
            className="text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-400 cursor-pointer"
          >
            {title}
          </h3>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Tech Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="rounded-lg bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/80 mt-2">
        <button
          onClick={onOpenDetails}
          className="text-xs font-bold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400 cursor-pointer flex items-center gap-1.5 transition-colors"
        >
          <span>Détails du projet</span>
          <span>→</span>
        </button>

        <a
          href={href && href !== "#" ? href : "https://github.com/johnnygoldsoft"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
        >
          <span>Aperçu Live</span>
          <IconExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}
