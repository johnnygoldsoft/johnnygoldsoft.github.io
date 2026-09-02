"use client";

import React from "react";

export function BackgroundMatrix() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft Structural Grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-70 dark:opacity-40" />

      {/* Gentle Executive Ambient Glows */}
      <div className="absolute -top-[10%] left-[15%] w-[600px] h-[500px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[140px]" />
      <div className="absolute top-[40%] right-[5%] w-[500px] h-[400px] rounded-full bg-indigo-500/5 dark:bg-indigo-600/10 blur-[150px]" />
      <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[400px] rounded-full bg-emerald-500/5 dark:bg-emerald-600/10 blur-[140px]" />

      {/* Clean Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/50 dark:to-[#0b0f19]/60" />
    </div>
  );
}
