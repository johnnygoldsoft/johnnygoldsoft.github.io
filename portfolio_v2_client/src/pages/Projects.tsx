import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/portfolio-data";
import { ExternalLink } from "lucide-react";

/**
 * Projects Section - Portfolio Gallery
 * Features:
 * - Category filtering with smooth transitions
 * - Masonry-style grid layout
 * - Hover effects with overlay animations
 * - Responsive design
 */

const categories = ["Tous", "UI/UX Design", "Web Design", "Mobile App"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold display-font mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Une sélection de mes travaux récents en design et développement
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const btnClass = isSelected
              ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
              : "bg-secondary text-foreground/70 hover:bg-secondary/80";

            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${btnClass}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative h-80 rounded-2xl overflow-hidden bg-secondary cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${project.image}')`,
                }}
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/30 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  className="flex items-center gap-2 w-fit px-4 py-2 bg-accent text-black rounded-lg font-medium"
                  whileHover={{ gap: 8 }}
                >
                  Voir plus
                  <ExternalLink size={16} />
                </motion.button>
              </motion.div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                {project.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
