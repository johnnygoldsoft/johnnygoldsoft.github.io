import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard shadcn/ui utility for combining Tailwind CSS classes
 * @param {...any} inputs - Class values to merge
 * @returns {string} Merged class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Lightweight class-variance-authority implementation compatible with shadcn/ui
 * @param {string} base - Base classes
 * @param {object} config - Variants and defaultVariants configuration
 * @returns {function} Variant generator function
 */
export function cva(base, config = {}) {
  const { variants = {}, defaultVariants = {} } = config;
  return (props = {}) => {
    const mergedProps = { ...defaultVariants, ...props };
    const variantClasses = [];

    for (const [key, val] of Object.entries(mergedProps)) {
      if (key !== "className" && variants[key] && variants[key][val]) {
        variantClasses.push(variants[key][val]);
      }
    }

    return cn(base, variantClasses, props.className);
  };
}
