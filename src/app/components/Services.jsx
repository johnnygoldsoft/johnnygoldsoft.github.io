import Image from "next/image";
import { assets, serviceData } from "../../../assets/assets";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[8%] py-16 scroll-mt-20"
      id="services"
    >
      {/* Header */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-4 text-lg text-gray-600 font-Ovo dark:text-gray-400"
      >
        Ce que je propose
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-bold font-Ovo"
      >
        Mes Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-6 mb-12 text-gray-700 dark:text-gray-300 font-Ovo"
      >
        Découvrez les solutions sur mesure que je propose pour répondre à vos
        besoins, qu'il s'agisse de développement web, mobile ou d'optimisation
        de vos systèmes informatiques.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full mb-4">
              <Image src={icon} alt={title} className="w-6 h-6" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>

            {/* Learn More Link */}
            <a
              href={"#contact"}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              En savoir plus{" "}
              <Image src={assets.right_arrow} alt="" className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
