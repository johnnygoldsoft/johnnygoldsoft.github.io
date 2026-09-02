"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/common/SectionTitle";
import { BentoGrid } from "@/components/common/BentoGrid";
import { ExperienceTimeline } from "@/components/common/ExperienceTimeline";

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="w-full px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20" id="about">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <SectionTitle
          badge="Profil"
          title="Parcours & Philosophie"
          description="Ingénieur logiciel & designer, alliant rigueur technique et ergonomie centrée sur l'humain."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-full bg-stone-100 dark:bg-stone-850 border border-stone-200/80 dark:border-stone-750 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "bg-white dark:bg-[#171412] text-amber-600 dark:text-amber-400 shadow-xs border border-stone-200/60 dark:border-amber-500/20"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              Vue d'Ensemble
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "timeline"
                  ? "bg-white dark:bg-[#171412] text-amber-600 dark:text-amber-400 shadow-xs border border-stone-200/60 dark:border-amber-500/20"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              Expériences & Diplômes
            </button>
          </div>
        </div>

        {/* Dynamic Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "overview" ? (
            <BentoGrid />
          ) : (
            <div className="max-w-3xl mx-auto">
              <ExperienceTimeline />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
