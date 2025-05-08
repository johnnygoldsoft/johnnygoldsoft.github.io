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
        className="text-center text-4xl sm:text-5xl font-bold font-Ovo"
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
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-72 sm:w-96 rounded-3xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800"
        >
          <Image
            src={assets.user_image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-8 text-lg text-gray-700 leading-relaxed dark:text-gray-300">
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
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-800"
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-8 h-8 mb-3"
                />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
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
            className="mt-10 mb-6 text-lg text-gray-700 font-Ovo dark:text-gray-300"
          >
            Les technologies que j'utilise
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center w-14 h-14 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md border border-gray-300 dark:border-gray-700 transition-all"
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
