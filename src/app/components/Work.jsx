"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { workData } from "../../../assets/assets";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IconExternalLink, IconGithub, IconCheck, IconSparkles } from "@/components/ui/Icons";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    { label: "Tous", count: workData.length },
    { label: "Mobile App", count: workData.filter((i) => i.category === "Mobile App").length },
    { label: "Web Design", count: workData.filter((i) => i.category === "Web Design").length },
    { label: "UI/UX Design", count: workData.filter((i) => i.category === "UI/UX Design").length },
  ];

  const filteredProjects =
    selectedCategory === "Tous"
      ? workData
      : workData.filter((item) => item.category === selectedCategory);

  return (
    <section id="work" className="w-full px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <SectionTitle
          badge="Showcase Studio"
          title="Réalisations & Études de Cas"
          description="Applications mobiles Flutter, plateformes web Next.js et maquettes UI/UX conçues pour des performances réelles."
        />

        {/* Category Tabs with Badges */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "text-stone-950"
                    : "text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 bg-stone-100 dark:bg-stone-800/70 border border-stone-200/60 dark:border-stone-700/60"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryTabPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 shadow-md shadow-amber-500/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
                <span
                  className={`relative z-10 text-[11px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? "bg-stone-950/15 text-stone-950"
                      : "bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title + index}
                image={project.bgImage}
                title={project.title}
                description={project.description}
                category={project.category}
                tags={[project.category, "Clean Code", "Responsive"]}
                href="https://github.com/johnnygoldsoft"
                index={index}
                onOpenDetails={() => setActiveProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      {activeProject && (
        <Modal
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          title={activeProject.title}
        >
          <div className="space-y-6">
            {/* Modal Image Banner */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 dark:border-slate-800">
              {activeProject.bgImage ? (
                <Image
                  src={activeProject.bgImage}
                  alt={activeProject.title}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-600 to-purple-600 text-white">
                  <IconSparkles className="h-10 w-10 opacity-70" />
                </div>
              )}
            </div>

            {/* Badges and Meta */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Badge variant="default">{activeProject.category}</Badge>
                <Badge variant="success">Projet Livré</Badge>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Auteur : Jean-Claude Sassou
              </span>
            </div>

            {/* Description & Problem Solving */}
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Présentation & Objectifs
              </h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeProject.description}. Ce projet a été développé en mettant l'accent sur l'architecture modulaire, la rapidité d'exécution et une ergonomie sans friction pour l'utilisateur final.
              </p>
            </div>

            {/* Key Highlights Grid */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Garanties Techniques & Architecture
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Responsive Design & Mobile First</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Animations fluides 60fps</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Optimisation Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Code Documenté & Maintenable</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setActiveProject(null)}
              >
                Fermer
              </Button>
              <a
                href={activeProject.link || activeProject.href || "https://github.com/johnnygoldsoft"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="sm">
                  <span>Lien du projet</span>
                  <IconExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
