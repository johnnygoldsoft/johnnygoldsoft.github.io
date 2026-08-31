"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ children, isDarkMode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
              isDarkMode ? "bg-[#090d16]" : "bg-white"
            }`}
          >
            <div className="relative flex items-center justify-center">
              {/* Outer pulsing ring */}
              <div className="h-16 w-16 rounded-full border-2 border-blue-500/20 border-t-blue-600 animate-spin" />
              <span className="absolute font-black text-sm text-blue-600 dark:text-blue-400">
                JC
              </span>
            </div>
            <p className="mt-4 text-xs font-semibold tracking-widest uppercase text-slate-400 animate-pulse">
              Chargement...
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
}
