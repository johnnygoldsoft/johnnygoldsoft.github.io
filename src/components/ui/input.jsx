import React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-xl border border-stone-200/90 bg-stone-50/50 px-3.5 py-2 text-xs sm:text-sm text-stone-900 shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/25 focus-visible:border-amber-500 focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-750 dark:bg-stone-850/50 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus-visible:border-amber-400 dark:focus-visible:bg-stone-850",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
