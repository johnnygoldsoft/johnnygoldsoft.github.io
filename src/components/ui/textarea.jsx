import React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[90px] w-full rounded-xl border border-stone-200/90 bg-stone-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 shadow-xs transition-colors placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/25 focus-visible:border-amber-500 focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-750 dark:bg-stone-850/50 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus-visible:border-amber-400 dark:focus-visible:bg-stone-850",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
