import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import React from "react";

/**
 * Button Component - Inspiré par shadcn/ui
 * Variantes : default, secondary, outline, ghost, destructive
 * Tailles : sm, md, lg
 */
const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "md",
      asChild = false,
      isLoading = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    // Styles de base
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    // Variantes
    const variants = {
      default:
        "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:from-blue-700 hover:to-purple-700 focus-visible:ring-blue-500",
      secondary:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 focus-visible:ring-gray-500",
      outline:
        "border-2 border-gray-300 bg-transparent text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-900 focus-visible:ring-gray-500",
      ghost:
        "bg-transparent text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-900 focus-visible:ring-gray-500",
      destructive:
        "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
    };

    // Tailles
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const buttonClass = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const Comp = asChild ? React.Fragment : "button";

    return (
      <motion.button
        ref={ref}
        className={buttonClass}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
            Chargement...
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
