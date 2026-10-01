import React from "react";
import { cn, cva } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-amber-500/25 bg-amber-500/10 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/15 dark:text-amber-300",
        secondary:
          "border-stone-200/80 bg-stone-100 text-stone-800 dark:border-stone-700 dark:bg-stone-800/80 dark:text-stone-200",
        destructive:
          "border-transparent bg-red-600 text-white shadow-xs hover:bg-red-700",
        outline:
          "border-stone-300 bg-transparent text-stone-700 dark:border-stone-700 dark:text-stone-300",
        gold:
          "border-amber-400/40 bg-gradient-to-r from-amber-500/15 to-yellow-500/15 text-amber-800 dark:border-amber-400/30 dark:text-amber-200 shadow-xs",
        success:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300",
        purple:
          "border-purple-200/80 bg-purple-50 text-purple-700 dark:border-purple-800/60 dark:bg-purple-950/40 dark:text-purple-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, pulse = false, children, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
