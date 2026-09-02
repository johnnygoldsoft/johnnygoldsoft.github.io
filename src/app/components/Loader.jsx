"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0C0A09] text-stone-100"
          >
            {/* Ambient Backlight */}
            <div className="absolute h-64 w-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

            {/* Emblem & Rotating Rings */}
            <div className="relative flex items-center justify-center">
              {/* Outer Radiant Spinning Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="h-20 w-20 rounded-full border-2 border-amber-500/15 border-t-amber-400 border-r-amber-500/60"
              />

              {/* Counter-Spinning Delicate Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 2.6, ease: "linear" }}
                className="absolute h-16 w-16 rounded-full border border-yellow-500/20 border-b-yellow-400/80"
              />

              {/* Central Monogram Square */}
              <div className="absolute flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#1C1917] to-[#141210] border border-amber-500/40 shadow-lg shadow-amber-500/20">
                <span className="font-mono font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 tracking-wider">
                  JG
                </span>
              </div>
            </div>

            {/* Brand Title */}
            <div className="mt-6 flex flex-col items-center">
              <span className="font-mono text-xs font-bold tracking-[0.28em] uppercase text-stone-200">
                Johnny Gold Soft
              </span>
              <span className="text-[10px] tracking-widest uppercase text-amber-500/80 font-medium mt-1">
                Atelier Digital &bull; Lomé
              </span>
            </div>

            {/* Sleek Progress Line */}
            <div className="mt-5 w-36 h-[2px] rounded-full bg-stone-800 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.65, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 shadow-xs shadow-amber-500/50"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
}
