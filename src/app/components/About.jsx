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
          badge="À Propos de Moi"
          title="Mon Parcours & Philosophie"
          description="Découvrez qui je suis, ma vision du développement logiciel et les technologies qui façonnent mon travail au quotidien."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Vue d'Ensemble & Compétences
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "timeline"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Expériences & Formation
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
