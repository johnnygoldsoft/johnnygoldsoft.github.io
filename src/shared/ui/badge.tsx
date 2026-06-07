import * as React from "react";
import { cn } from "@/shared/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "primary" | "teal" | "success" | "warning" | "destructive";
}

export function Badge({ className, variant = "secondary", ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default:     "bg-primary text-primary-foreground",
    secondary:   "bg-secondary text-secondary-foreground border border-border",
    outline:     "border border-border bg-transparent text-foreground",
    primary:     "badge-primary",
    teal:        "badge-teal",
    success:     "badge-success",
    warning:     "badge-warning",
    destructive: "badge-destructive",
  };
  return (
    <div className={cn(
      "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium",
      variants[variant], className
    )} {...props} />
  );
}
