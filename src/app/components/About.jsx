import Image from "next/image";
import { assets, infoList, toolsData } from "../../../assets/assets";
import { motion } from "framer-motion";

export default function About({ isDarkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[8%] py-16 scroll-mt-20"
    >
      {/* Header */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-4 text-lg text-gray-600 font-Ovo dark:text-gray-400"
      >
        Une brève introduction
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-green-300"
      >
        À Propos de Moi
      </motion.h2>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-12 mt-12"
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-72 sm:w-96 rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-400 dark:border-green-400 ring-4 ring-blue-200 dark:ring-green-900"
        >
          <Image
            src={assets.user_image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="flex-1"
        >
          <p className="mb-8 text-lg text-gray-800 leading-relaxed dark:text-gray-200 font-medium">
            Je suis un développeur web et mobile passionné, spécialisé dans la
            création d'applications performantes. Grâce à une expertise en
            informatique, je fournis des solutions sur mesure adaptées aux
            besoins spécifiques de mes clients, tout en maîtrisant la gestion
            des systèmes informatiques complexes.
          </p>

          {/* Info List */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center text-center bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 border-2 border-blue-200 dark:border-blue-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 dark:hover:shadow-blue-900/50 group"
                key={index}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-12 h-12 mb-4 p-2 bg-gradient-to-br from-blue-400 to-green-400 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all"
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-8 h-8"
                  />
                </motion.div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                  {title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-3 leading-relaxed">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
            className="mt-10 mb-6 text-lg font-bold text-gray-900 dark:text-white font-Ovo"
          >
            Mes Technologies Préférées
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 shadow-md hover:shadow-lg border-2 border-blue-300 dark:border-blue-700 transition-all cursor-pointer"
              >
                <Image src={tool} alt={tool} className="w-8 h-8" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
