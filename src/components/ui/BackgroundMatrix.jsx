"use client";

import React from "react";

export function BackgroundMatrix() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 dark:opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20" />

      {/* Aurora Mesh Glow Orbs */}
      <div className="absolute -top-[15%] left-[20%] w-[500px] sm:w-[800px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-purple-600/15 blur-[130px] animate-pulse-glow" />
      <div className="absolute top-[45%] -right-[10%] w-[400px] sm:w-[650px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-bl from-purple-600/10 via-pink-600/10 to-indigo-600/10 blur-[140px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
      <div className="absolute -bottom-[10%] left-[10%] w-[450px] sm:w-[700px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-teal-600/10 to-blue-600/10 blur-[130px] animate-pulse-glow" style={{ animationDelay: "5s" }} />

      {/* Subtle Top Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/80 dark:to-[#060913]/90" />
    </div>
  );
}
