import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine Tailwind CSS classes intelligemment
 * Résout les conflits de classes et fusionne les styles
 * @param {...any} inputs - Classes à combiner
 * @returns {string} Classes combinées
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
