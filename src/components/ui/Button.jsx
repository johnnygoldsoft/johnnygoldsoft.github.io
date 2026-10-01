"use client";

import React from "react";
import { cn, cva } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-stone-950 font-bold shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/35 hover:brightness-105 active:scale-[0.98]",
        destructive:
          "bg-red-600 text-white shadow-xs hover:bg-red-700 active:scale-[0.98]",
        outline:
          "border border-stone-200/90 dark:border-amber-500/20 bg-transparent text-stone-900 dark:text-stone-100 hover:bg-stone-100/90 dark:hover:bg-stone-850 hover:border-amber-500/40 active:scale-[0.98]",
        secondary:
          "bg-stone-100 dark:bg-stone-850 text-stone-800 dark:text-stone-200 hover:bg-stone-200/80 dark:hover:bg-stone-800 border border-stone-200/60 dark:border-stone-750 active:scale-[0.98]",
        ghost:
          "text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-850/80 active:scale-[0.98]",
        link: "text-amber-600 dark:text-amber-400 underline-offset-4 hover:underline",
        gold:
          "bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_30px_rgba(245,158,11,0.55)] active:scale-[0.98]",
        glass:
          "bg-white/80 dark:bg-[#171412]/80 backdrop-blur-md border border-stone-200/80 dark:border-amber-500/20 text-stone-900 dark:text-white hover:bg-white dark:hover:bg-stone-850 active:scale-[0.98]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        md: "h-9 rounded-xl px-4 py-2 text-xs sm:text-sm",
        lg: "h-11 rounded-xl px-6 text-sm sm:text-base font-semibold",
        icon: "h-9 w-9 rounded-xl p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, isLoading = false, disabled = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-r-transparent" />
            <span>Chargement...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
