"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import React from "react";

const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "md",
      isLoading = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none";

    const variants = {
      default:
        "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/35 hover:brightness-110 focus-visible:ring-blue-500",
      glow:
        "relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] focus-visible:ring-cyan-400",
      secondary:
        "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 focus-visible:ring-slate-400",
      outline:
        "border border-slate-300/80 bg-transparent text-slate-800 hover:bg-slate-100/60 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/50 focus-visible:ring-slate-500",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60 focus-visible:ring-slate-500",
      glass:
        "bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/40 dark:border-white/10 text-slate-900 dark:text-white hover:bg-white/60 dark:hover:bg-slate-800/70 shadow-sm",
    };

    const sizes = {
      sm: "px-3.5 py-1.5 text-xs font-semibold",
      md: "px-5 py-2.5 text-sm font-semibold",
      lg: "px-7 py-3 text-base font-semibold",
      icon: "p-2.5 w-10 h-10 rounded-full",
    };

    const buttonClass = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    return (
      <motion.button
        ref={ref}
        className={buttonClass}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled ? 1 : 1.03 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
            <span>Chargement...</span>
          </>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
