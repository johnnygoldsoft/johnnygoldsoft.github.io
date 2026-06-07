import * as React from "react";
import { cn } from "@/shared/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link";
  size?: "sm" | "default" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    const variants: Record<string, string> = {
      default:     "bg-primary text-primary-foreground hover:bg-[hsl(var(--primary-hover))]",
      secondary:   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline:     "border border-border bg-transparent hover:bg-muted text-foreground",
      ghost:       "hover:bg-muted text-foreground",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      link:        "text-primary underline-offset-4 hover:underline p-0 h-auto",
    };
    const sizes: Record<string, string> = {
      sm:      "h-8 px-3 text-xs rounded",
      default: "h-9 px-4",
      lg:      "h-11 px-6 text-base",
      icon:    "h-9 w-9",
    };
    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
    );
  }
);
Button.displayName = "Button";
