import Image from "next/image";
import { assets } from "../../../assets/assets";
import React from "react";
import { motion } from "motion/react";

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative w-36 h-36 mt-10 rounded-full shadow-xl border-4 border-white dark:border-gray-800 overflow-hidden"
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
        className=" flex items-end gap-2 text-xl md:text-2xl mb-1 font-Ovo"
      >
        Salut ! Je suis Jean Claude SASSOU{" "}
        <Image
          priority={false}
          src={assets.hand_icon}
          alt=" "
          className="w-6"
        />
      </motion.h3>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl sm:text-6xl lg:text-[50px] font-Ovo"
      >
        Web and Mobile Developer, IT Specialist
      </motion.h1>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        Developpeur Web et Mobile, Spécialiste en Informatique, je suis
        passionné par la création de solutions numériques innovantes. Mon
        expertise couvre le développement d'applications web et mobiles, ainsi
        que la gestion des systèmes informatiques.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          {" "}
          Me contacter{" "}
          <Image
            src={assets.right_arrow_white}
            alt=" "
            className=" rounded-full w-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/jeanclaudesas_cv_finale.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          {" "}
          Mon CV ...{" "}
          <Image
            src={assets.download_icon}
            alt=" "
            className=" rounded-full w-4"
          />
        </motion.a>
      </div>
    </div>
  );
}
