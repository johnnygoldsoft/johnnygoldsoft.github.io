"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="h-full"
    >
      <Card className="group h-full flex flex-col justify-between overflow-hidden hover:shadow-lg hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300">
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
              <Badge variant="secondary" className="backdrop-blur-md bg-white/90 dark:bg-stone-900/90 text-[10px] font-bold shadow-xs">
                {category}
              </Badge>
            </div>

            {/* Hover Action Overlay */}
            <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
              <span className="px-3.5 py-1.5 rounded-lg bg-white text-stone-900 text-xs font-bold flex items-center gap-1.5 shadow-md">
                <span>Détails &amp; Démo</span>
                <IconArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Card Content & Meta */}
          <CardContent className="p-5">
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
                <Badge
                  key={tIdx}
                  variant="outline"
                  className="text-[10px] px-2 py-0.2 font-medium bg-stone-100 dark:bg-stone-850/80 text-stone-600 dark:text-stone-300 border-stone-200/50 dark:border-stone-750"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </div>

        {/* Card Action Footer */}
        <CardFooter className="p-5 pt-0 flex items-center justify-between gap-3 border-t border-stone-100 dark:border-stone-850 mt-1 pt-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onOpenDetails}
            className="h-7 px-2 text-xs font-semibold text-stone-600 hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400"
          >
            <span>Détails</span>
            <IconArrowRight className="w-3 h-3" />
          </Button>

          <a
            href={href && href !== "#" ? href : "https://github.com/johnnygoldsoft"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-2.5 text-xs font-semibold text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 border-amber-500/25"
            >
              <span>Aperçu</span>
              <IconExternalLink className="w-3 h-3" />
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
