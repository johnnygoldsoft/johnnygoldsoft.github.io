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
        "bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-stone-950 font-bold shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/40 hover:brightness-105 focus-visible:ring-amber-500",
      glow:
        "relative bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] focus-visible:ring-amber-400",
      secondary:
        "bg-stone-100 text-stone-900 hover:bg-stone-200 dark:bg-stone-800/80 dark:text-stone-100 dark:hover:bg-stone-700/80 border border-stone-200 dark:border-stone-700/60 focus-visible:ring-amber-500/50",
      outline:
        "border border-stone-300 bg-transparent text-stone-800 hover:bg-stone-100/80 hover:border-amber-500/50 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800/60 dark:hover:border-amber-500/50 focus-visible:ring-amber-500",
      ghost:
        "bg-transparent text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800/60 focus-visible:ring-amber-500",
      glass:
        "bg-white/60 dark:bg-stone-900/60 backdrop-blur-md border border-stone-200 dark:border-amber-500/15 text-stone-900 dark:text-white hover:bg-white/80 dark:hover:bg-stone-800/70 shadow-sm",
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
