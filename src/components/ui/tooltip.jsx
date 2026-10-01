"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const TooltipProvider = ({ children }) => <>{children}</>;

const Tooltip = ({ children, delayDuration = 100 }) => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => setIsOpen(true), delayDuration);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {React.Children.map(children, (child) => {
        if (child.type === TooltipTrigger) {
          return React.cloneElement(child, { isOpen });
        }
        if (child.type === TooltipContent) {
          return React.cloneElement(child, { isOpen });
        }
        return child;
      })}
    </div>
  );
};

const TooltipTrigger = ({ children, asChild = false, className, ...props }) => (
  <div className={cn("inline-flex", className)} {...props}>
    {children}
  </div>
);

const TooltipContent = ({ children, isOpen, className, side = "top", ...props }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: side === "top" ? 4 : -4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: side === "top" ? 4 : -4 }}
          transition={{ duration: 0.15 }}
          className={cn(
            "absolute z-50 whitespace-nowrap rounded-lg border border-stone-200/90 bg-stone-900 px-3 py-1.5 text-[11px] font-medium text-stone-100 shadow-md dark:border-amber-500/20 dark:bg-stone-950 dark:text-stone-200 pointer-events-none",
            side === "top" && "bottom-full left-1/2 -translate-x-1/2 mb-2",
            side === "bottom" && "top-full left-1/2 -translate-x-1/2 mt-2",
            className
          )}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
