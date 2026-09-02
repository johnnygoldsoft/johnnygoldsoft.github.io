"use client";

import { cn } from "@/lib/cn";
import React from "react";

export function Badge({
  children,
  variant = "default",
  className = "",
  pulse = false,
  ...props
}) {
  const variants = {
    default:
      "bg-amber-500/10 text-amber-700 border-amber-500/25 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30",
    gold:
      "bg-amber-500/15 text-amber-800 border-amber-400/40 dark:bg-amber-500/20 dark:text-amber-200 dark:border-amber-400/30 shadow-xs",
    success:
      "bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
    purple:
      "bg-purple-50 text-purple-700 border-purple-200/80 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/60",
    amber:
      "bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60",
    outline:
      "bg-transparent text-stone-700 border-stone-300 dark:text-stone-300 dark:border-stone-700",
    glass:
      "bg-white/60 dark:bg-stone-900/60 backdrop-blur-md text-stone-800 dark:text-stone-200 border-stone-200/80 dark:border-amber-500/15 shadow-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
}
