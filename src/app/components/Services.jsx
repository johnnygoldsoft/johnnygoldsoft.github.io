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
        className="text-center text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-green-300"
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
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            key={index}
            className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-400 to-green-400 rounded-xl mb-4">
              <Image src={icon} alt={title} className="w-6 h-6" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {description}
            </p>

            {/* Learn More Link */}
            <a
              href={"#contact"}
              className="inline-flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
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
