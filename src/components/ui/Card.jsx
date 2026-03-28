import { cn } from "@/lib/cn";
import React from "react";

/**
 * Card Component - Conteneur réutilisable
 * Inspiré par shadcn/ui
 */
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950",
      className
    )}
    {...props}
  />
));

Card.displayName = "Card";

/**
 * CardHeader - En-tête de la carte
 */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";

/**
 * CardTitle - Titre de la carte
 */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-50",
      className
    )}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";

/**
 * CardDescription - Description de la carte
 */
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

/**
 * CardContent - Contenu de la carte
 */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));

CardContent.displayName = "CardContent";

/**
 * CardFooter - Pied de page de la carte
 */
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
