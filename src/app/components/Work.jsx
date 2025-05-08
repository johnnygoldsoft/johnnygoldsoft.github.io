import { useState } from "react";
import Image from "next/image";
import { assets, workData } from "../../../assets/assets";
import { motion } from "framer-motion";

export default function Work({ isDarkMode }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Liste des catégories uniques
  const categories = ["All", ...new Set(workData.map((item) => item.category))];

  // Filtrer les réalisations en fonction de la catégorie sélectionnée
  const filteredWorkData =
    selectedCategory === "All"
      ? workData
      : workData.filter((item) => item.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[8%] py-16 scroll-mt-20"
      id="work"
    >
      {/* Header */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-4 text-lg text-gray-600 font-Ovo dark:text-gray-400"
      >
        Mes Projets
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-bold font-Ovo"
      >
        Mes Récentes Réalisations
      </motion.h2>

      {/* Catégories */}
      <div className="flex justify-center gap-4 my-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 text-sm font-medium border rounded-full transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-gray-800 text-white dark:bg-lime-400 dark:text-black"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredWorkData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group shadow-md overflow-hidden"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Project Info */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 rounded-lg px-6 py-4 w-10/12 flex items-center justify-between group-hover:bottom-7 transition-all duration-500">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center border border-gray-400 dark:border-gray-600 rounded-full group-hover:bg-lime-300 dark:bg-white dark:group-hover:bg-lime-400 transition-colors">
                <Image src={assets.send_icon} alt="Icone" className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
