"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-darktheme text-gray-800 dark:text-white px-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg mb-8">
          Oops! La page que vous recherchez est introuvable...
        </p>
        <Link href="/">
          {/* Remplacez <a> par un bouton ou un autre élément. */}
          <span className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all cursor-pointer">
            Retour à l'accueil
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
