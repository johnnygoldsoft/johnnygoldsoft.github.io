"use client";

import { useState } from "react";
import { workData } from "../../../assets/assets";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/common/ProjectCard";
import { SectionTitle } from "@/components/common/SectionTitle";

/**
 * Work Component - Galerie de projets
 * Inspiré par shadcn/ui - Design système cohérent
 */
export default function Work({ isDarkMode }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(workData.map((item) => item.category))];

  const filteredWorkData =
    selectedCategory === "All"
      ? workData
      : workData.filter((item) => item.category === selectedCategory);

  return (
    <section className="w-full px-4 py-16 sm:px-8 scroll-mt-20" id="work">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <SectionTitle
          subtitle="Mes Projets"
          title="Mes Récentes Réalisations"
          description="Découvrez une sélection de mes projets les plus récents et les plus significatifs"
        />

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-6 py-2 font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "border-2 border-gray-300 text-gray-700 hover:border-blue-400 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredWorkData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.bgImage}
              title={project.title}
              description={project.description}
              category={project.category}
              tags={[project.category]}
              href="#"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Design Philosophy (shadcn/ui inspired):
 * - Reusable ProjectCard component
 * - Accessible button filters
 * - Smooth animations and transitions
 * - Responsive grid layout
 * - Dark mode support
 * - Semantic HTML structure
 */
