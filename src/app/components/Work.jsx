import { useState } from "react";
import Image from "next/image";
import { assets, workData } from "../../../assets/assets";
import { motion } from "framer-motion";

export default function Work({ isDarkMode }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(workData.map((item) => item.category))];

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
        className="text-center text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-green-300"
      >
        Mes Récentes Réalisations
      </motion.h2>

      {/* Catégories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex justify-center gap-4 my-8 flex-wrap"
      >
        {categories.map((category, idx) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`px-6 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg dark:from-blue-500 dark:to-purple-500"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 border-2 border-transparent hover:border-blue-400"
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
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredWorkData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -12 }}
            className="aspect-square rounded-2xl relative cursor-pointer group shadow-lg overflow-hidden border-2 border-blue-200 dark:border-blue-700"
          >
            {/* Project Image Background */}
            <Image
              src={project.bgImage}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="z-0 group-hover:scale-110 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
            ></motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col justify-end p-6 z-20"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-white/80 mb-4">
                {project.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-400 rounded-full cursor-pointer shadow-lg"
              >
                <Image src={assets.send_icon} alt="Voir" className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
