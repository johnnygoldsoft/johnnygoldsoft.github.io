/**
 * Design Tokens Constants
 * Inspiré par shadcn/ui et Tailwind CSS
 */

// Spacing Scale (en pixels)
export const SPACING = {
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "24px",
  "3xl": "32px",
  "4xl": "48px",
};

// Typography Scale
export const TYPOGRAPHY = {
  xs: { size: "12px", lineHeight: "16px" },
  sm: { size: "14px", lineHeight: "20px" },
  base: { size: "16px", lineHeight: "24px" },
  lg: { size: "18px", lineHeight: "28px" },
  xl: { size: "20px", lineHeight: "28px" },
  "2xl": { size: "24px", lineHeight: "32px" },
  "3xl": { size: "30px", lineHeight: "36px" },
};

// Border Radius Scale
export const RADIUS = {
  none: "0px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  full: "9999px",
};

// Shadow Scale
export const SHADOWS = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
};

// Color Palette
export const COLORS = {
  primary: "#0066FF", // Bleu électrique
  secondary: "#9333EA", // Violet
  accent: "#00D9A3", // Vert menthe
  muted: "#6B7280", // Gris
  destructive: "#EF4444", // Rouge
  success: "#10B981", // Vert
  warning: "#F59E0B", // Ambre
  info: "#3B82F6", // Bleu
};

// Animation Durations
export const ANIMATION = {
  fast: "150ms",
  base: "200ms",
  slow: "300ms",
  slower: "500ms",
};

// Breakpoints (Tailwind defaults)
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Z-Index Scale
export const Z_INDEX = {
  hide: "-1",
  base: "0",
  dropdown: "1000",
  sticky: "1020",
  fixed: "1030",
  modal_backdrop: "1040",
  modal: "1050",
  popover: "1060",
  tooltip: "1070",
};
