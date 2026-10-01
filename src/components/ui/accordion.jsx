"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const AccordionContext = createContext(null);

const Accordion = ({
  type = "single",
  collapsible = true,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
  children,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : internalValue;

  const toggleItem = (itemValue) => {
    let nextValue;
    if (type === "single") {
      if (activeValue === itemValue) {
        nextValue = collapsible ? undefined : itemValue;
      } else {
        nextValue = itemValue;
      }
    } else {
      const currentList = Array.isArray(activeValue) ? activeValue : [];
      if (currentList.includes(itemValue)) {
        nextValue = currentList.filter((v) => v !== itemValue);
      } else {
        nextValue = [...currentList, itemValue];
      }
    }

    if (!isControlled) {
      setInternalValue(nextValue);
    }
    if (onValueChange) {
      onValueChange(nextValue);
    }
  };

  return (
    <AccordionContext.Provider value={{ activeValue, toggleItem, type }}>
      <div className={cn("space-y-3", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = React.forwardRef(({ className, value, children, ...props }, ref) => (
  <div
    ref={ref}
    data-value={value}
    className={cn(
      "rounded-2xl border border-stone-200/90 bg-white/95 overflow-hidden transition-all duration-200 shadow-xs dark:border-amber-500/15 dark:bg-[#171412]/95",
      className
    )}
    {...props}
  >
    {React.Children.map(children, (child) =>
      React.isValidElement(child) ? React.cloneElement(child, { itemValue: value }) : child
    )}
  </div>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, itemValue, ...props }, ref) => {
    const { activeValue, toggleItem, type } = useContext(AccordionContext) || {};
    const isOpen =
      type === "single"
        ? activeValue === itemValue
        : Array.isArray(activeValue) && activeValue.includes(itemValue);

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => toggleItem && toggleItem(itemValue)}
        aria-expanded={isOpen}
        className={cn(
          "flex w-full items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 transition-all hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer select-none",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <div
          className={cn(
            "h-7 w-7 rounded-full flex items-center justify-center shrink-0 border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-850 transition-transform duration-300",
            isOpen
              ? "rotate-180 text-amber-600 dark:text-amber-400 border-amber-500/35"
              : "text-stone-400"
          )}
        >
          <IconChevronDown className="h-3.5 w-3.5" />
        </div>
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ className, children, itemValue, ...props }, ref) => {
    const { activeValue, type } = useContext(AccordionContext) || {};
    const isOpen =
      type === "single"
        ? activeValue === itemValue
        : Array.isArray(activeValue) && activeValue.includes(itemValue);

    return (
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              ref={ref}
              className={cn(
                "px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-stone-800/80",
                className
              )}
              {...props}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
