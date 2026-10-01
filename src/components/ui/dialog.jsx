"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const DialogContext = createContext(null);

const Dialog = ({ children, open, onOpenChange, defaultOpen = false }) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (nextOpen) => {
    if (!isControlled) setInternalOpen(nextOpen);
    if (onOpenChange) onOpenChange(nextOpen);
  };

  return (
    <DialogContext.Provider value={{ isOpen, handleOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogTrigger = ({ children, asChild = false, className, ...props }) => {
  const { handleOpenChange } = useContext(DialogContext) || {};
  return (
    <div
      onClick={() => handleOpenChange && handleOpenChange(true)}
      className={cn("inline-block cursor-pointer", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { isOpen, handleOpenChange } = useContext(DialogContext) || {};

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleOpenChange && handleOpenChange(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleOpenChange]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => handleOpenChange && handleOpenChange(false)}
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
            className={cn(
              "relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-2xl dark:border-amber-500/20 dark:bg-[#171412] dark:text-stone-100",
              className
            )}
            {...props}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => handleOpenChange && handleOpenChange(false)}
              className="absolute top-5 right-5 rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 dark:hover:bg-stone-850 dark:hover:text-stone-200 transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <IconX className="w-4 h-4" />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});
DialogContent.displayName = "DialogContent";

const DialogHeader = ({ className, ...props }) => (
  <div
    className={cn("flex flex-col space-y-1.5 text-left pb-4 border-b border-stone-100 dark:border-stone-850", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100", className)}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed", className)}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

const DialogFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4 border-t border-stone-100 dark:border-stone-850 mt-6",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogClose = ({ children, className, ...props }) => {
  const { handleOpenChange } = useContext(DialogContext) || {};
  return (
    <div
      onClick={() => handleOpenChange && handleOpenChange(false)}
      className={cn("inline-block cursor-pointer", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
};
