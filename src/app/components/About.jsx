"use client";

import Image from "next/image";
import { assets, infoList, toolsData } from "../../../assets/assets";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/common/SectionTitle";

/**
 * About Component - À Propos
 * Inspiré par shadcn/ui - Design système cohérent
 */
export default function About({ isDarkMode }) {
  return (
    <section className="w-full px-4 py-16 sm:px-8 scroll-mt-20" id="about">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <SectionTitle
          subtitle="Une brève introduction"
          title="À Propos de Moi"
          description="Découvrez mon parcours, mes compétences et ma passion pour la technologie"
        />

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid gap-12 lg:grid-cols-2"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg border-4 border-blue-500 shadow-lg ring-4 ring-blue-200 dark:border-blue-400 dark:ring-blue-900">
              <Image
                src={assets.user_image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Je suis un développeur web et mobile passionné, spécialisé dans la création d'applications performantes. Grâce à une expertise en informatique, je fournis des solutions sur mesure adaptées aux besoins spécifiques de mes clients, tout en maîtrisant la gestion des systèmes informatiques complexes.
            </p>

            {/* Info Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-transparent p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:from-blue-950/20"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-2"
                  >
                    <Image
                      src={isDarkMode ? iconDark : icon}
                      alt={title}
                      className="h-5 w-5"
                    />
                  </motion.div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-50">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h4 className="mb-4 font-bold text-gray-900 dark:text-gray-50">
                Mes Technologies Préférées
              </h4>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {toolsData.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-blue-300 bg-blue-50 shadow-sm transition-all hover:shadow-md dark:border-blue-700 dark:bg-blue-950/30"
                  >
                    <Image src={tool} alt="Tech" className="h-7 w-7" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Design Philosophy (shadcn/ui inspired):
 * - Consistent spacing and typography
 * - Accessible card components
 * - Smooth animations with spring physics
 * - Responsive grid layout
 * - Dark mode support
 * - Semantic HTML structure
 */
