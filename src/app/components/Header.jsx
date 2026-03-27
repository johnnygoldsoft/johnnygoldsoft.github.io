import Image from "next/image";
import { assets } from "../../../assets/assets";
import React from "react";
import { motion } from "framer-motion"; // Changed from motion/react for consistency

export default function Header() {
  return (
    <div className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6 relative">
      {/* Gradient background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative w-40 h-40 mt-10 rounded-full shadow-2xl border-4 border-blue-500 dark:border-green-400 overflow-hidden ring-4 ring-blue-200 dark:ring-green-900"
        >
          <Image
            src={assets.profile_pic}
            alt="Profile Picture"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex items-end gap-2 text-lg md:text-xl mb-2 font-Ovo text-gray-600 dark:text-gray-300 tracking-wide"
      >
        Bienvenue ! Je suis Jean Claude SASSOU{" "}
        <motion.div
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image
            priority={false}
            src={assets.hand_icon}
            alt=" "
            className="w-6"
          />
        </motion.div>
      </motion.h3>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-green-300 leading-tight"
      >
        Web & Mobile Developer
      </motion.h1>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-Ovo"
      >
        IT Specialist & Digital Solutions Architect
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
      >
        Développeur Web et Mobile passionné, spécialisé dans la création de solutions numériques innovantes. Mon expertise couvre le développement d'applications performantes, l'architecture système et la gestion des infrastructures informatiques complexes.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 dark:from-blue-500 dark:to-purple-500"
        >
          Me contacter
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Image
              src={assets.right_arrow_white}
              alt=" "
              className="w-4"
            />
          </motion.div>
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/jeanclaudesas_cv_finale.pdf"
          download
          className="px-8 py-3 rounded-full border-2 border-gray-400 dark:border-gray-500 bg-white dark:bg-transparent text-black dark:text-white font-semibold flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
        >
          Télécharger CV
          <Image
            src={assets.download_icon}
            alt=" "
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
}

// Design Philosophy: Modern Minimalism with Premium Typography
// - Gradient text for main heading (blue → purple → green)
// - Animated hand wave emoji
// - Soft gradient background elements (parallax effect)
// - Enhanced button styling with hover animations
// - Better spacing and visual hierarchy
