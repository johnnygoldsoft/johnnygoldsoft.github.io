"use client";

import React from "react";

export function BackgroundMatrix() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Warm Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-75 dark:opacity-40" />

      {/* Gentle Atelier Ambient Glows (Amber & Bronze) */}
      <div className="absolute -top-[10%] left-[15%] w-[650px] h-[520px] rounded-full bg-amber-500/6 dark:bg-amber-500/10 blur-[150px]" />
      <div className="absolute top-[35%] right-[5%] w-[550px] h-[450px] rounded-full bg-orange-500/5 dark:bg-orange-600/8 blur-[160px]" />
      <div className="absolute bottom-[10%] left-[8%] w-[500px] h-[400px] rounded-full bg-amber-600/4 dark:bg-amber-600/8 blur-[140px]" />

      {/* Clean Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF8F5]/60 dark:to-[#0C0A09]/70" />
    </div>
  );
}
