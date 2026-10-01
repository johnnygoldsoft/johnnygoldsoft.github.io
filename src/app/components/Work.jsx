"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { workData } from "../../../assets/assets";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProjectCard } from "@/components/common/ProjectCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconExternalLink, IconCheck, IconSparkles } from "@/components/ui/Icons";

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
          badge="Showcase"
          title="Réalisations & Projets"
          description="Applications mobiles Flutter, plateformes web Next.js et maquettes UI/UX conçues pour des performances réelles."
        />

        {/* Category Tabs using shadcn/ui Tabs */}
        <div className="flex justify-center mb-10">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-auto">
            <TabsList className="flex-wrap h-auto gap-1 p-1.5">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.label}
                  value={cat.label}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold"
                >
                  <span>{cat.label}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-bold">
                    {cat.count}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
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

      {/* Case Study Detail Dialog using shadcn/ui Dialog */}
      <Dialog open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
        {activeProject && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <Badge variant="default">{activeProject.category}</Badge>
                <Badge variant="success">Projet Livré</Badge>
              </div>
              <DialogTitle>{activeProject.title}</DialogTitle>
              <DialogDescription>
                Auteur : Jean-Claude Sassou • Johnny Gold Atelier
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5 my-2">
              {/* Image Banner */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-stone-900 border border-stone-200/80 dark:border-stone-800">
                {activeProject.bgImage ? (
                  <Image
                    src={activeProject.bgImage}
                    alt={activeProject.title}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-600 to-yellow-600 text-stone-950">
                    <IconSparkles className="h-10 w-10 opacity-70" />
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                  Présentation &amp; Objectifs
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {activeProject.description}. Ce projet a été développé en mettant l'accent sur l'architecture modulaire, la rapidité d'exécution et une ergonomie sans friction pour l'utilisateur final.
                </p>
              </div>

              {/* Technical Highlights Box */}
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-850/80 border border-stone-200/80 dark:border-stone-750 space-y-2.5">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Garanties Techniques &amp; Architecture
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-300">
                  <div className="flex items-center gap-2">
                    <IconCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Responsive Design &amp; Mobile First</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Animations fluides 60fps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Optimisation Core Web Vitals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Code Documenté &amp; Maintenable</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-2" />

            <DialogFooter className="gap-2 sm:gap-2">
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
                <Button variant="default" size="sm" className="gap-1.5">
                  <span>Lien du projet</span>
                  <IconExternalLink className="w-3.5 h-3.5" />
                </Button>
              </a>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
