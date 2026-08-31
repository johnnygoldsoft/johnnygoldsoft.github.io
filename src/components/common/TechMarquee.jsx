"use client";

import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets";

export function TechMarquee() {
  const techItems = [
    { name: "Next.js 15", category: "Frontend" },
    { name: "React 19", category: "Frontend" },
    { name: "Tailwind CSS v4", category: "Styling" },
    { name: "Flutter", icon: assets.flutter, category: "Mobile" },
    { name: "Dart", category: "Language" },
    { name: "Laravel", icon: assets.laravel, category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "Firebase", icon: assets.firebase, category: "Cloud/DB" },
    { name: "MongoDB", icon: assets.mongodb, category: "Database" },
    { name: "Figma", icon: assets.figma, category: "UI/UX" },
    { name: "Git", icon: assets.git, category: "DevOps" },
    { name: "WordPress", icon: assets.wordpress, category: "CMS" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />

      <div className="animate-marquee flex items-center gap-4">
        {[...techItems, ...techItems].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs backdrop-blur-sm transition-transform hover:scale-105 dark:border-slate-700/60 dark:bg-slate-800/70 dark:text-slate-200 whitespace-nowrap"
          >
            {item.icon ? (
              <Image
                src={item.icon}
                alt={item.name}
                className="h-4 w-4 object-contain"
              />
            ) : (
              <span className="h-2 w-2 rounded-full bg-blue-500" />
            )}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
