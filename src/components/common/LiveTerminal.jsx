"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconCopy, IconCheck, IconCode, IconSparkles } from "@/components/ui/Icons";

export function LiveTerminal() {
  const [activeTab, setActiveTab] = useState("profile");
  const [copied, setCopied] = useState(false);

  const profileContent = `/**
 * @developer Jean-Claude Sassou
 * @role Full-Stack Engineer & UI/UX Craftsman
 * @location Lomé, Togo (GMT / UTC+0)
 * @status Available for Freelance & Full-Time
 */

const developer = {
  name: "Jean-Claude Sassou",
  title: "Full-Stack & Mobile Developer",
  coreTech: ["Next.js", "React", "Flutter", "Laravel"],
  focus: ["Clean Architecture", "Fluid UX", "High Performance"],
  readyForRemote: true,
  responseTime: "< 24 hours"
};

export default developer;`;

  const stackContent = `{
  "frontend": ["Next.js 15", "React 19", "Tailwind CSS v4"],
  "mobile": ["Flutter 3.x", "Dart", "Firebase", "REST APIs"],
  "backend": ["Laravel", "Node.js", "MySQL", "MongoDB"],
  "design": ["Figma", "Design Systems", "Prototyping"],
  "tools": ["Git", "Docker", "VS Code", "Postman"]
}`;

  const statsContent = `#!/bin/bash
# Developer Metrics & System Status

$ jc-cli --status
● Status: ONLINE & READY
● Total Projects Shipped: 10+
● Experience: 3+ Years
● Client Satisfaction: 100%
● Code Quality: A+ (Strict Lint & Clean Code)
● Response Rate: 100% (< 24h)`;

  const currentText =
    activeTab === "profile"
      ? profileContent
      : activeTab === "stack"
      ? stackContent
      : statsContent;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg rounded-2xl border border-slate-200/80 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-[#0c1222]/95 overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500/90 inline-block" />
          <span className="h-3 w-3 rounded-full bg-amber-500/90 inline-block" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/90 inline-block" />
        </div>

        {/* Center Title */}
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          jc-sassou@studio:~
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
          title="Copier le code"
        >
          {copied ? (
            <IconCheck className="w-3.5 h-3.5 text-emerald-500" />
          ) : (
            <IconCopy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center border-b border-slate-200 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/40 px-2 pt-1 gap-1">
        {[
          { id: "profile", label: "Profile.ts" },
          { id: "stack", label: "Stack.json" },
          { id: "stats", label: "Stats.sh" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-t-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-white dark:bg-[#0c1222] text-blue-600 dark:text-cyan-400 border-t-2 border-blue-500 dark:border-cyan-400"
                : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 overflow-x-auto min-h-[220px] max-h-[280px]">
        <pre className="text-slate-800 dark:text-slate-200 leading-relaxed font-mono">
          <code>{currentText}</code>
        </pre>
      </div>

      {/* Terminal Status Bar */}
      <div className="px-4 py-2 bg-slate-100/70 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <span>TypeScript & Next.js 15 Ready</span>
        </div>
        <span>UTF-8</span>
      </div>
    </div>
  );
}
